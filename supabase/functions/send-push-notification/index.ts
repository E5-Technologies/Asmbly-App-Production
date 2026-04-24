import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const SUPABASE_URL  = 'https://gtupnsnhsljgxuzrlfpz.supabase.co'
const SERVICE_KEY   = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
const ANON_KEY      = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd0dXBuc25oc2xqZ3h1enJsZnB6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ4ODY3MTUsImV4cCI6MjA5MDQ2MjcxNX0.-INsLvt7gRiiUwIlIYNEMfPMcfULScpXu3k-_jBWnOw'
const VAPID_PUBLIC  = 'BFTJDa8Y8Awsc0NrScVYyS1BwI925xhfYNT5tk2Jw54xMky0iBf48FPd233RzLDpXOhbJp6qGH2_K7Mrps5GJX0'
const VAPID_PRIVATE = 'Mky0iBf48FPd233RzLDpXOhbJp6qGH2_K7Mrps5GJX0'
const VAPID_MAILTO  = 'mailto:asmblyapp@gmail.com'
const cors = { 'Access-Control-Allow-Origin':'*','Access-Control-Allow-Headers':'authorization, x-client-info, apikey, content-type' }
const STATUS_MESSAGES: Record<string,{title:string;body:(i:string,b:string)=>string}> = {
  assigned:  {title:'Builder Assigned',  body:(i,b)=>`${b} has been assigned to assemble your ${i}.`},
  picked_up: {title:'Item Picked Up',    body:(i,b)=>`${b} picked up your ${i} and is heading to the workshop.`},
  assembled: {title:'Assembly Complete!',body:(i,_)=>`Your ${i} has been fully assembled and is on its way back!`},
  delivered: {title:'Order Delivered!',  body:(i,_)=>`Your assembled ${i} has been delivered. Tap to view your receipt.`},
}
function b64url(buf:ArrayBuffer):string{return btoa(String.fromCharCode(...new Uint8Array(buf))).replace(/\+/g,'-').replace(/\//g,'_').replace(/=/g,'')}
function b64urlDecode(s:string):Uint8Array{const p=s.replace(/-/g,'+').replace(/_/g,'/').padEnd(s.length+(4-s.length%4)%4,'=');return Uint8Array.from(atob(p),c=>c.charCodeAt(0))}
async function buildVapidAuth(endpoint:string):Promise<string>{
  const{protocol,host}=new URL(endpoint)
  const audience=`${protocol}//${host}`,exp=Math.floor(Date.now()/1000)+43200
  const header=btoa(JSON.stringify({alg:'ES256',typ:'JWT'})).replace(/=/g,'').replace(/\+/g,'-').replace(/\//g,'_')
  const payload=btoa(JSON.stringify({aud:audience,exp,sub:VAPID_MAILTO})).replace(/=/g,'').replace(/\+/g,'-').replace(/\//g,'_')
  const input=`${header}.${payload}`,rawPriv=b64urlDecode(VAPID_PRIVATE)
  const pkcs8Header=new Uint8Array([0x30,0x41,0x02,0x01,0x00,0x30,0x13,0x06,0x07,0x2a,0x86,0x48,0xce,0x3d,0x02,0x01,0x06,0x08,0x2a,0x86,0x48,0xce,0x3d,0x03,0x01,0x07,0x04,0x27,0x30,0x25,0x02,0x01,0x01,0x04,0x20])
  const pkcs8=new Uint8Array(pkcs8Header.length+32);pkcs8.set(pkcs8Header);pkcs8.set(rawPriv,pkcs8Header.length)
  const signingKey=await crypto.subtle.importKey('pkcs8',pkcs8,{name:'ECDSA',namedCurve:'P-256'},false,['sign'])
  const signature=await crypto.subtle.sign({name:'ECDSA',hash:'SHA-256'},signingKey,new TextEncoder().encode(input))
  return `vapid t=${input}.${b64url(signature)},k=${VAPID_PUBLIC}`
}
serve(async(req)=>{
  if(req.method==='OPTIONS')return new Response('ok',{headers:cors})
  try{
    const{jobId,jobStatus,itemName,builderName,customerEmail}=await req.json()
    if(!customerEmail||!jobStatus)return new Response(JSON.stringify({error:'Missing fields'}),{status:400,headers:{...cors,'Content-Type':'application/json'}})
    const template=STATUS_MESSAGES[jobStatus]
    if(!template)return new Response(JSON.stringify({skipped:true}),{headers:{...cors,'Content-Type':'application/json'}})
    const supabase=createClient(SUPABASE_URL,SERVICE_KEY||ANON_KEY)
    const{data:tokens}=await supabase.from('push_tokens').select('endpoint,p256dh,auth').eq('customer_email',customerEmail)
    if(!tokens?.length)return new Response(JSON.stringify({skipped:true,reason:'No tokens'}),{headers:{...cors,'Content-Type':'application/json'}})
    const title=template.title,body=template.body(itemName??'your item',builderName??'Your builder')
    const notif={title,body,icon:'/icon-192.png',badge:'/badge-72.png',tag:jobId??'asmbly',renotify:true,data:{jobId,jobStatus}}
    const results=await Promise.all(tokens.map(async(token:{endpoint:string;p256dh:string;auth:string})=>{
      let success=false,errText:string|null=null
      try{
        const authHeader=await buildVapidAuth(token.endpoint)
        const res=await fetch(token.endpoint,{method:'POST',headers:{'Authorization':authHeader,'Content-Type':'application/json','TTL':'86400'},body:JSON.stringify(notif)})
        success=res.ok;if(!res.ok)errText=`HTTP ${res.status}`
        if(res.status===410||res.status===404)await supabase.from('push_tokens').delete().eq('endpoint',token.endpoint)
      }catch(e){errText=String(e)}
      await supabase.from('push_notification_log').insert({job_id:jobId??null,customer_email:customerEmail,status_sent:jobStatus,title,body,success,error:errText}).catch(()=>{})
      return{success,error:errText}
    }))
    return new Response(JSON.stringify({sent:results.length,succeeded:results.filter(r=>r.success).length}),{headers:{...cors,'Content-Type':'application/json'}})
  }catch(err){return new Response(JSON.stringify({error:String(err)}),{status:500,headers:{...cors,'Content-Type':'application/json'}})}
})
