import { useState, useEffect } from "react";
const SB = "https:
const KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd0dXBuc25oc2xqZ3h1enJsZnB6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ4ODY3MTUsImV4cCI6MjA5MDQ2MjcxNX0.-INsLvt7gRiiUwIlIYNEMfPMcfULScpXu3k-_jBWnOw";
const BL="#5E17EB",BL_LT="#F0EAFF",GR="#34C759",GR_LT="#E8F8ED",RD="#FF3B30";
const TX="#000000",TX2="#3C3C43",TX3="#8E8E93",SEP="#C6C6C8",SEP2="#E5E5EA",BG="#F2F2F7",CARD="#ffffff";
const phone={width:393,height:852,background:BG,borderRadius:55,overflow:"hidden",position:"relative",boxShadow:"0 40px 100px rgba(0,0,0,.5)",fontFamily:"system-ui,-apple-system,sans-serif"};
const island={position:"absolute",top:12,left:"50%",transform:"translateX(-50%)",width:120,height:34,background:"#000",borderRadius:20,zIndex:200};
const screenBase={position:"absolute",inset:0,display:"flex",flexDirection:"column",background:BG,overflow:"hidden",opacity:0,pointerEvents:"none",transition:"opacity .25s ease, transform .25s ease",transform:"translateX(28px)"};
const screenOn={opacity:1,pointerEvents:"all",transform:"translateX(0)"};
const scr={flex:1,overflowY:"auto",overflowX:"hidden"};
const card={background:CARD,borderRadius:13,boxShadow:"0 2px 12px rgba(0,0,0,.08)"};
const secLbl={fontSize:13,fontWeight:600,color:TX3,letterSpacing:".2px",textTransform:"uppercase",padding:"0 20px",marginBottom:6};
const btnP={display:"flex",alignItems:"center",justifyContent:"center",width:"100%",background:BL,color:"#fff",border:"none",borderRadius:13,padding:16,fontFamily:"system-ui,sans-serif",fontSize:17,fontWeight:600,cursor:"pointer"};
const btnS={...btnP,background:BG,color:BL};
const fiWrap={background:CARD,borderRadius:13,margin:"0 16px",boxShadow:"0 2px 12px rgba(0,0,0,.08)"};
const fiRow={display:"flex",alignItems:"center",padding:"0 16px",borderBottom:".5px solid "+SEP2,height:50};
const fiLbl={fontSize:15,color:TX,width:110,flexShrink:0};
const fiInp={flex:1,background:"none",border:"none",outline:"none",fontFamily:"system-ui,sans-serif",fontSize:15,color:TX,textAlign:"right"};
function SBar({white, onSettings}){
  const col=white?"#fff":TX;
  return(
    <div style={{padding:"14px 20px 0",display:"flex",justifyContent:"space-between",alignItems:"center",flexShrink:0,color:col}}>
      <span style={{fontSize:17,fontWeight:700,color:white?"#fff":BL,letterSpacing:"-.5px"}}>asmbly</span>
      <div style={{display:"flex",alignItems:"center",gap:12}}>
        <div style={{display:"flex",alignItems:"center",gap:6,fontSize:15,fontWeight:600}}>
          <span>9:41</span>
          <div style={{width:25,height:12,border:"1.5px solid "+col,borderRadius:3,padding:2}}>
            <div style={{height:"100%",width:"75%",background:col,borderRadius:1}}/>
          </div>
        </div>
        {onSettings&&(
          <div onClick={onSettings} style={{width:32,height:32,borderRadius:"50%",background:white?"rgba(255,255,255,.18)":"rgba(94,23,235,.08)",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",flexShrink:0}}>
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke={col} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="3"/>
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
            </svg>
          </div>
        )}
      </div>
    </div>
  );
}
function SettingsPanel({user,onSignOut,onClose}){
  const supportRow=(
    <div onClick={()=>window.open("mailto:asmblyapp@gmail.com","_blank")} style={{display:"flex",alignItems:"center",gap:14,padding:"16px",cursor:"pointer"}}>
      <div style={{width:40,height:40,background:GR_LT,borderRadius:11,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={GR} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
      </div>
      <div style={{flex:1}}>
        <div style={{fontSize:16,fontWeight:600,color:TX}}>App Support</div>
        <div style={{fontSize:13,color:TX3,marginTop:2}}>asmblyapp@gmail.com</div>
      </div>
      <div style={{color:TX3,fontSize:18}}>&gt;</div>
    </div>
  );
  return(
    <div style={{position:"absolute",inset:0,zIndex:600,display:"flex",flexDirection:"column"}}>
      <div onClick={onClose} style={{flex:1,background:"rgba(0,0,0,.45)"}}/>
      <div style={{background:CARD,borderRadius:"24px 24px 0 0",padding:"0 0 44px",flexShrink:0}}>
        <div style={{padding:"16px 0 0",display:"flex",justifyContent:"center"}}>
          <div style={{width:40,height:4,background:SEP2,borderRadius:2}}/>
        </div>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"16px 20px 0"}}>
          <div style={{fontSize:20,fontWeight:700,color:TX,letterSpacing:"-.4px"}}>Settings</div>
          <div onClick={onClose} style={{width:30,height:30,borderRadius:"50%",background:BG,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",fontSize:15,color:TX3,fontWeight:600}}>x</div>
        </div>
        <div style={{height:20}}/>
        <div style={{padding:"0 16px",display:"flex",flexDirection:"column",gap:12}}>
          {user?(
            <div style={{...card,padding:"18px 16px",display:"flex",alignItems:"center",gap:14}}>
              <div style={{width:52,height:52,background:BL_LT,borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",fontSize:20,color:BL,fontWeight:700,flexShrink:0}}>
                {(user.email||"U").charAt(0).toUpperCase()}
              </div>
              <div style={{flex:1}}>
                <div style={{fontSize:16,fontWeight:600,color:TX}}>Signed in</div>
                <div style={{fontSize:13,color:TX3,marginTop:2}}>{user.email}</div>
              </div>
            </div>
          ):(
            <div style={{...card,padding:"18px 16px"}}>
              <div style={{fontSize:15,color:TX3,lineHeight:1.5}}>Not signed in. Use Builder Sign In on the welcome screen to access your jobs.</div>
            </div>
          )}
          <div style={{...card,overflow:"hidden"}}>{supportRow}</div>
          {user&&(
            <button onClick={()=>{onSignOut();onClose();}} style={{...btnP,background:"#FFF0EF",color:RD}}>Sign Out</button>
          )}
        </div>
      </div>
    </div>
  );
}
function TabBar({active,go}){
  const tabs=[{lbl:"Home",sc:1},{lbl:"Orders",sc:5},{lbl:"Chat",sc:5},{lbl:"Build",sc:10}];
  return(
    <div style={{display:"flex",justifyContent:"center",padding:"10px 16px 32px",flexShrink:0}}>
      <div style={{display:"flex",alignItems:"center",justifyContent:"space-around",width:"100%",background:"rgba(255,255,255,.95)",backdropFilter:"blur(20px)",borderRadius:30,padding:8,boxShadow:"0 4px 24px rgba(0,0,0,.13)"}}>
        {tabs.map((t,i)=>(
          <div key={i} onClick={()=>go(t.sc)} style={{display:"flex",flexDirection:"column",alignItems:"center",gap:3,cursor:"pointer",padding:"6px 16px",borderRadius:22,background:active===i?"rgba(94,23,235,.1)":"transparent",minWidth:60,transition:"all .18s"}}>
            <div style={{fontSize:18,fontWeight:active===i?600:400,color:active===i?BL:TX3}}>{["H","O","C","W"][i]}</div>
            <div style={{fontSize:10,fontWeight:600,color:active===i?BL:TX3}}>{t.lbl}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
function BackBtn({go,n,white}){
  return(
    <div onClick={()=>go(n)} style={{display:"flex",alignItems:"center",gap:4,color:white?"#fff":BL,fontSize:17,cursor:"pointer",padding:"8px 0",width:"fit-content"}}>
      &lt; Back
    </div>
  );
}
function GearIcon({col}){
  return(
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke={col||BL} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3"/>
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
    </svg>
  );
}
function S0({go,cur,user,onSignIn,onSettings}){
  const [mode,setMode]=useState("welcome");
  const [step,setStep]=useState(0);
  const [email,setEmail]=useState("");
  const [pass,setPass]=useState("");
  const [pass2,setPass2]=useState("");
  const [firstName,setFirstName]=useState("");
  const [lastName,setLastName]=useState("");
  const [phone,setPhone]=useState("");
  const [city,setCity]=useState("");
  const [err,setErr]=useState("");
  const [loading,setLoading]=useState(false);
  const [pendingUser,setPendingUser]=useState(null);
  function goBack(){
    setErr("");
    if(mode==="signup")    setMode("welcome");
    else if(mode==="profile") setMode("signup");
    else if(mode==="signin")  setMode("welcome");
  }
  async function createAccount(){
    if(!email||!email.includes("@")){setErr("Please enter a valid email.");return;}
    if(pass.length<6){setErr("Password must be at least 6 characters.");return;}
    if(pass!==pass2){setErr("Passwords do not match.");return;}
    setLoading(true);setErr("");
    try{
      const r=await fetch(SB+"/auth/v1/signup",{
        method:"POST",
        headers:{"Content-Type":"application/json","apikey":KEY},
        body:JSON.stringify({email,password:pass})
      });
      const data=await r.json();
      if(data.error||data.error_code){
        setErr(data.msg||data.error_description||data.message||"Could not create account. This email may already be registered.");
        setLoading(false);return;
      }
      const r2=await fetch(SB+"/auth/v1/token?grant_type=password",{
        method:"POST",
        headers:{"Content-Type":"application/json","apikey":KEY},
        body:JSON.stringify({email,password:pass})
      });
      const d2=await r2.json();
      if(d2.access_token){
        setPendingUser({email:d2.user?.email||email,token:d2.access_token});
        setMode("profile");
      }else if(data.user){
        setErr("Account created! Please check your email to confirm, then come back to Sign In.");
      }else{
        setErr(data.msg||data.error_description||data.message||"Could not create account. This email may already be registered.");
      }
    }catch{setErr("Connection error. Please try again.");}
    setLoading(false);
  }
  async function saveProfile(){
    if(!firstName||!lastName){setErr("Please enter your first and last name.");return;}
    setLoading(true);setErr("");
    try{
      await fetch(SB+"/rest/v1/user_profiles",{
        method:"POST",
        headers:{"Content-Type":"application/json","apikey":KEY,
          "Authorization":"Bearer "+(pendingUser?.token||KEY),"Prefer":"return=minimal"},
        body:JSON.stringify({
          email:pendingUser?.email||email,
          first_name:firstName,last_name:lastName,
          phone,city,created_at:new Date().toISOString()
        })
      });
    }catch
    setLoading(false);
    setStep(0);
    setMode("tutorial");
  }
  function skipProfile(){setStep(0);setMode("tutorial");}
  function finishTutorial(){
    if(pendingUser){onSignIn(pendingUser);}
    go(1);
  }
  function skipTutorial(){
    if(pendingUser){onSignIn(pendingUser);}
    go(1);
  }
  async function signInWithGoogle(){
    setLoading(true);setErr("");
    try{
      // iOS native: window.webkit.messageHandlers is injected by the WKWebView bridge
      // The native Swift layer calls window.onGoogleSignInResult(idToken, accessToken)
      // when the user completes Google Sign-In via the iOS SDK
      const isIOS = /iPhone|iPad|iPod/.test(navigator.userAgent) ||
                    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
      const hasNativeBridge = window.webkit?.messageHandlers?.googleSignIn;

      if(isIOS && hasNativeBridge){
        // Trigger native iOS Google Sign-In SDK via WKWebView message handler
        // Swift receives this, calls GIDSignIn.sharedInstance.signIn(), then
        // posts the ID token back via window.onGoogleSignInResult
        window.webkit.messageHandlers.googleSignIn.postMessage({
          action: "signIn",
          clientId: "729009624239-b88oe3fba4r01i4r3aph0m5q123cpbl7.apps.googleusercontent.com"
        });
        // Result handled by window.onGoogleSignInResult (registered below)
        return; // loading cleared in the callback
      }

      // Fallback for web / Expo Go / simulator: use Supabase OAuth redirect
      const redirectTo = (window.location.origin || "https://asmbly.com") + window.location.pathname;
      const oauthUrl = SB + "/auth/v1/authorize?" +
        new URLSearchParams({ provider: "google", redirect_to: redirectTo }).toString();
      window.location.href = oauthUrl;

    }catch(e){
      setErr("Google sign-in failed. Please try email sign-in.");
      setLoading(false);
    }
  }

  // Called by native Swift layer after Google Sign-In succeeds on iOS
  // Swift posts: window.onGoogleSignInResult({ idToken, accessToken, email, name })
  useEffect(()=>{
    window.onGoogleSignInResult = async (result) => {
      if(result.error){
        setErr("Google sign-in cancelled or failed.");
        setLoading(false);
        return;
      }
      try{
        // Exchange the Google ID token with Supabase signInWithIdToken
        const resp = await fetch(SB+"/auth/v1/token?grant_type=id_token",{
          method:"POST",
          headers:{"Content-Type":"application/json","apikey":KEY},
          body:JSON.stringify({
            provider:"google",
            id_token: result.idToken,
            access_token: result.accessToken || undefined,
            nonce: result.nonce || undefined,
          })
        });
        const data = await resp.json();
        if(data.access_token){
          const u = {
            email: data.user?.email || result.email,
            name:  data.user?.user_metadata?.full_name || result.name,
            avatar: data.user?.user_metadata?.avatar_url || result.photoUrl,
            token: data.access_token,
            provider: "google_ios",
          };
          onSignIn(u);
          // Route: builder or customer
          const jr = await fetch(SB+"/rest/v1/builder_jobs?builder_email=eq."+
            encodeURIComponent(u.email)+"&limit=1",{
            headers:{apikey:KEY, Authorization:"Bearer "+data.access_token}
          });
          const jobs = await jr.json();
          go(Array.isArray(jobs)&&jobs.length>0 ? 10 : 1);
        }else{
          setErr(data.error_description||data.msg||"Google sign-in failed.");
        }
      }catch(e){
        setErr("Connection error during Google sign-in.");
      }
      setLoading(false);
    };
    // Cleanup
    return ()=>{ window.onGoogleSignInResult = null; };
  },[]);

  async function signIn(){
    if(!email||!pass){setErr("Please enter your email and password.");return;}
    setLoading(true);setErr("");
    try{
      const r=await fetch(SB+"/auth/v1/token?grant_type=password",{
        method:"POST",
        headers:{"Content-Type":"application/json","apikey":KEY},
        body:JSON.stringify({email,password:pass})
      });
      const data=await r.json();
      if(data.access_token){
        const u={email:data.user?.email||email,token:data.access_token};
        onSignIn(u);
        const jr=await fetch(SB+"/rest/v1/builder_jobs?builder_email=eq."+encodeURIComponent(u.email)+"&limit=1",{
          headers:{apikey:KEY,Authorization:"Bearer "+KEY}
        });
        const jobs=await jr.json();
        go(Array.isArray(jobs)&&jobs.length>0?10:1);
      }else{
        setErr(data.error_description||data.msg||"Sign in failed. Check your credentials.");
      }
    }catch{setErr("Connection error. Please try again.");}
    setLoading(false);
  }
  const slides=[
    {
      bg:"#5E17EB",
      icon:"[Cam]",
      title:"Snap a photo",
      body:"Take or upload a photo of what you need assembled. Our AI instantly detects complexity and gives you a price."
    },
    {
      bg:"#7C3AED",
      icon:"[Pro]",
      title:"Match with a Pro",
      body:"We find verified assembly professionals near you. Browse ratings, reviews, and prices then book with one tap."
    },
    {
      bg:"#0F6E56",
      icon:"[Trk]",
      title:"We pick up and deliver",
      body:"Your pro picks up the item, assembles it at their workshop, and delivers it back fully assembled."
    },
    {
      bg:"#185FA5",
      icon:"[OK]",
      title:"Sit back and relax",
      body:"Track your order in real time. When it is done you get a full receipt with photos and timestamps."
    },
  ];
  const sl=slides[step]||slides[0];
  const showBack = mode!=="welcome"&&mode!=="tutorial";
  return(
    <div style={{...screenBase,...(cur===0?screenOn:{}),background:"#fff",overflow:"hidden"}}>
      {mode!=="tutorial"&&(
        <div style={{padding:"52px 20px 0",display:"flex",justifyContent:"space-between",alignItems:"center",flexShrink:0}}>
          <div style={{fontSize:13,color:BL,cursor:"pointer",fontWeight:600,
            opacity:showBack?1:0,pointerEvents:showBack?"all":"none"}}
            onClick={goBack}>
            &lt; Back
          </div>
          {onSettings&&(
            <div onClick={onSettings} style={{width:32,height:32,borderRadius:"50%",background:"rgba(94,23,235,.08)",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer"}}>
              <GearIcon col={BL}/>
            </div>
          )}
        </div>
      )}
      {mode==="welcome"&&<>
        <div style={{flex:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"0 32px"}}>
          <div style={{fontSize:48,fontWeight:800,color:BL,letterSpacing:"-3px",marginBottom:8}}>asmbly</div>
          <div style={{fontSize:17,color:TX3,textAlign:"center"}}>Expert assembly, delivered to your door.</div>
        </div>
        <div style={{padding:"0 20px 54px",display:"flex",flexDirection:"column",gap:12}}>
          <button style={btnP} onClick={()=>{setErr("");setMode("signup");}}>Get Started</button>
          <button onClick={signInWithGoogle} disabled={loading}
            style={{...btnS,display:"flex",alignItems:"center",justifyContent:"center",gap:10,background:"#fff",border:"1.5px solid "+SEP,color:TX,opacity:loading?.6:1}}>
            <svg width="18" height="18" viewBox="0 0 48 48">
              <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
              <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
              <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
              <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
              <path fill="none" d="M0 0h48v48H0z"/>
            </svg>
            {loading ? "Connecting..." : "Continue with Google"}
          </button>
          <button style={btnS} onClick={()=>{setErr("");setEmail("");setPass("");setMode("signin");}}>Sign In with Email</button>
          <div style={{height:8}}/>
          <div style={{display:"flex",justifyContent:"center",gap:20}}>
            {[["Terms",7],["Privacy",8],["Copyright",9]].map(([l,n])=>(
              <span key={l} onClick={()=>go(n)} style={{fontSize:12,color:TX3,cursor:"pointer"}}>{l}</span>
            ))}
          </div>
        </div>
      </>}
      {mode==="signup"&&<>
        <div style={{flex:1,overflowY:"auto",padding:"20px 20px 40px"}}>
          <div style={{fontSize:26,fontWeight:700,color:TX,letterSpacing:"-.5px",marginBottom:4}}>Create account</div>
          <div style={{fontSize:15,color:TX3,marginBottom:24}}>Step 1 of 2 - Your login details</div>
          <div style={{display:"flex",gap:4,marginBottom:28}}>
            <div style={{flex:1,height:4,borderRadius:2,background:BL}}/>
            <div style={{flex:1,height:4,borderRadius:2,background:SEP2}}/>
          </div>
          <div style={fiWrap}>
            <div style={fiRow}>
              <span style={{...fiLbl,width:90}}>Email</span>
              <input style={fiInp} type="email" placeholder="you@email.com" value={email} onChange={e=>setEmail(e.target.value)}/>
            </div>
            <div style={fiRow}>
              <span style={{...fiLbl,width:90}}>Password</span>
              <input style={fiInp} type="password" placeholder="Min. 6 characters" value={pass} onChange={e=>setPass(e.target.value)}/>
            </div>
            <div style={{...fiRow,borderBottom:"none"}}>
              <span style={{...fiLbl,width:90}}>Confirm</span>
              <input style={fiInp} type="password" placeholder="Repeat password" value={pass2} onChange={e=>setPass2(e.target.value)}/>
            </div>
          </div>
          {err&&<div style={{marginTop:12,background:"#FFF0EF",borderRadius:10,padding:"12px 14px",fontSize:14,color:RD}}>{err}</div>}
          <div style={{height:24}}/>
          <button onClick={createAccount} disabled={loading} style={{...btnP,opacity:loading?.6:1}}>
            {loading?"Creating account...":"Continue"}
          </button>
          <div style={{display:"flex",alignItems:"center",gap:10,margin:"4px 0"}}>
            <div style={{flex:1,height:"0.5px",background:SEP2}}/>
            <span style={{fontSize:12,color:TX3}}>or sign up with</span>
            <div style={{flex:1,height:"0.5px",background:SEP2}}/>
          </div>
          <button onClick={{signInWithGoogle}} disabled={{loading}}
            style={{...btnS,display:"flex",alignItems:"center",justifyContent:"center",gap:10,background:"#fff",border:"1.5px solid "+SEP,color:TX,opacity:loading?.6:1}}>
            <svg width="17" height="17" viewBox="0 0 48 48">
              <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
              <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
              <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
              <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
              <path fill="none" d="M0 0h48v48H0z"/>
            </svg>
            {{loading ? "Connecting..." : "Sign Up with Google"}}
          </button>
          <div style={{height:10}}/>
          <div style={{textAlign:"center",fontSize:14,color:TX3}}>
            Already have an account?{" "}
            <span onClick={()=>{setErr("");setPass("");setPass2("");setMode("signin");}} style={{color:BL,fontWeight:600,cursor:"pointer"}}>Sign in</span>
          </div>
        </div>
      </>}
      {mode==="profile"&&<>
        <div style={{flex:1,overflowY:"auto",padding:"20px 20px 40px"}}>
          <div style={{fontSize:26,fontWeight:700,color:TX,letterSpacing:"-.5px",marginBottom:4}}>Your profile</div>
          <div style={{fontSize:15,color:TX3,marginBottom:24}}>Step 2 of 2 - Tell us about yourself</div>
          <div style={{display:"flex",gap:4,marginBottom:28}}>
            <div style={{flex:1,height:4,borderRadius:2,background:GR}}/>
            <div style={{flex:1,height:4,borderRadius:2,background:BL}}/>
          </div>
          <div style={fiWrap}>
            <div style={fiRow}>
              <span style={{...fiLbl,width:100}}>First name</span>
              <input style={fiInp} placeholder="Jane" value={firstName} onChange={e=>setFirstName(e.target.value)}/>
            </div>
            <div style={fiRow}>
              <span style={{...fiLbl,width:100}}>Last name</span>
              <input style={fiInp} placeholder="Smith" value={lastName} onChange={e=>setLastName(e.target.value)}/>
            </div>
            <div style={fiRow}>
              <span style={{...fiLbl,width:100}}>Phone</span>
              <input style={fiInp} type="tel" placeholder="(optional)" value={phone} onChange={e=>setPhone(e.target.value)}/>
            </div>
            <div style={{...fiRow,borderBottom:"none"}}>
              <span style={{...fiLbl,width:100}}>City</span>
              <input style={fiInp} placeholder="Houston, TX (optional)" value={city} onChange={e=>setCity(e.target.value)}/>
            </div>
          </div>
          {err&&<div style={{marginTop:12,background:"#FFF0EF",borderRadius:10,padding:"12px 14px",fontSize:14,color:RD}}>{err}</div>}
          <div style={{height:24}}/>
          <button onClick={saveProfile} disabled={loading} style={{...btnP,opacity:loading?0.6:1:1}}>
            {loading?"Saving...":"Continue"}
          </button>
          <div style={{height:14}}/>
          <button onClick={skipProfile} style={{...btnS,background:"transparent",color:TX3}}>Skip for now</button>
        </div>
      </>}
      {mode==="tutorial"&&(
        <div style={{flex:1,display:"flex",flexDirection:"column",background:sl.bg,overflow:"hidden",transition:"background .4s"}}>
          <div style={{padding:"52px 20px 0",display:"flex",justifyContent:"flex-end",flexShrink:0}}>
            <div onClick={skipTutorial} style={{fontSize:14,fontWeight:600,color:"rgba(255,255,255,.75)",cursor:"pointer",padding:"4px 8px"}}>
              Skip
            </div>
          </div>
          <div style={{flex:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"0 36px",gap:24}}>
            <div style={{width:100,height:100,borderRadius:28,background:"rgba(255,255,255,.18)",border:"1.5px solid rgba(255,255,255,.3)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:32,color:"#fff",fontWeight:700,letterSpacing:"-1px"}}>
              {sl.icon}
            </div>
            <div style={{textAlign:"center"}}>
              <div style={{fontSize:28,fontWeight:700,color:"#fff",letterSpacing:"-.5px",marginBottom:12}}>{sl.title}</div>
              <div style={{fontSize:16,color:"rgba(255,255,255,.82)",lineHeight:1.55}}>{sl.body}</div>
            </div>
          </div>
          <div style={{padding:"0 24px 52px",flexShrink:0}}>
            <div style={{display:"flex",justifyContent:"center",gap:8,marginBottom:28}}>
              {slides.map((_,i)=>(
                <div key={i} style={{width:i===step?24:8,height:8,borderRadius:4,background:i===step?"#fff":"rgba(255,255,255,.35)",transition:"all .3s"}}/>
              ))}
            </div>
            {step<slides.length-1?(
              <button onClick={()=>setStep(s=>s+1)} style={{...btnP,background:"#fff",color:sl.bg}}>
                Next
              </button>
            ):(
              <button onClick={finishTutorial} style={{...btnP,background:"#fff",color:sl.bg}}>
                Start using asmbly
              </button>
            )}
          </div>
        </div>
      )}
      {mode==="signin"&&<>
        <div style={{flex:1,display:"flex",flexDirection:"column",justifyContent:"center",padding:"0 20px"}}>
          <div style={{fontSize:26,fontWeight:700,color:TX,letterSpacing:"-.5px",marginBottom:6}}>Sign In</div>
          <div style={{fontSize:15,color:TX3,marginBottom:28}}>Welcome back. Sign in to your asmbly account.</div>
          <div style={fiWrap}>
            <div style={fiRow}>
              <span style={{...fiLbl,width:90}}>Email</span>
              <input style={fiInp} type="email" placeholder="you@email.com" value={email} onChange={e=>setEmail(e.target.value)}/>
            </div>
            <div style={{...fiRow,borderBottom:"none"}}>
              <span style={{...fiLbl,width:90}}>Password</span>
              <input style={fiInp} type="password" placeholder="Password" value={pass} onChange={e=>setPass(e.target.value)}/>
            </div>
          </div>
          {err&&<div style={{marginTop:12,background:"#FFF0EF",borderRadius:10,padding:"12px 14px",fontSize:14,color:RD}}>{err}</div>}
          <div style={{height:24}}/>
          <button onClick={signIn} disabled={loading} style={{...btnP,opacity:loading?.6:1}}>
            {loading?"Signing in...":"Sign In"}
          </button>
          <div style={{display:"flex",alignItems:"center",gap:10,margin:"4px 0"}}>
            <div style={{flex:1,height:"0.5px",background:SEP2}}/>
            <span style={{fontSize:12,color:TX3}}>or</span>
            <div style={{flex:1,height:"0.5px",background:SEP2}}/>
          </div>
          <button onClick={{signInWithGoogle}} disabled={{loading}}
            style={{...btnS,display:"flex",alignItems:"center",justifyContent:"center",gap:10,background:"#fff",border:"1.5px solid "+SEP,color:TX,opacity:loading?.6:1}}>
            <svg width="17" height="17" viewBox="0 0 48 48">
              <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
              <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
              <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
              <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
              <path fill="none" d="M0 0h48v48H0z"/>
            </svg>
            {{loading ? "Connecting..." : "Sign In with Google"}}
          </button>
          <div style={{height:10}}/>
          <div style={{textAlign:"center",fontSize:14,color:TX3}}>
            No account?{" "}
            <span onClick={()=>{setErr("");setPass("");setPass2("");setMode("signup");}} style={{color:BL,fontWeight:600,cursor:"pointer"}}>Create one</span>
          </div>
          <div style={{height:12}}/>
          <div onClick={()=>window.open("mailto:asmblyapp@gmail.com","_blank")} style={{textAlign:"center",fontSize:14,color:BL,cursor:"pointer"}}>
            Need help? Contact support
          </div>
        </div>
      </>}
    </div>
  );
}
function S1({go,cur,onSettings,onEstimate}){
  const [boxPhoto,setBoxPhoto]     = useState(null);  // base64
  const [boxName,setBoxName]       = useState("");
  const [productPhoto,setProductPhoto] = useState(null);
  const [productName,setProductName]   = useState("");
  const [itemHint,setItemHint]     = useState("");
  const [phase,setPhase]           = useState("photos"); // photos | analyzing | result
  const [estimate,setEstimate]     = useState(null);
  const [err,setErr]               = useState("");
  const EDGE = "https://gtupnsnhsljgxuzrlfpz.supabase.co/functions/v1/estimate-assembly-cost";
  const AKEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd0dXBuc25oc2xqZ3h1enJsZnB6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ4ODY3MTUsImV4cCI6MjA5MDQ2MjcxNX0.-INsLvt7gRiiUwIlIYNEMfPMcfULScpXu3k-_jBWnOw";

  function readFile(file, setFn, setName){
    if(!file) return;
    setName(file.name);
    const r = new FileReader();
    r.onload = ev => setFn(ev.target.result);
    r.readAsDataURL(file);
  }

  async function analyze(){
    if(!boxPhoto || !productPhoto){ setErr("Please upload both photos to continue."); return; }
    setPhase("analyzing"); setErr("");
    try{
      const resp = await fetch(EDGE, {
        method: "POST",
        headers: {"Content-Type":"application/json","apikey":AKEY},
        body: JSON.stringify({
          boxPhotoBase64:     boxPhoto,
          productPhotoBase64: productPhoto,
          itemNameHint:       itemHint || "",
          distanceMiles:      3.5,   // default; updated when builder matched in S2
          sessionId:          "session-" + Date.now(),
        })
      });
      const data = await resp.json();
      if(data.error){ setErr("Estimation failed: "+data.error); setPhase("photos"); return; }
      setEstimate(data);
      if(onEstimate) onEstimate(data);
      setPhase("result");
    }catch(e){
      setErr("Could not connect to estimation service. Please try again.");
      setPhase("photos");
    }
  }

  function reset(){
    setBoxPhoto(null); setBoxName(""); setProductPhoto(null); setProductName("");
    setItemHint(""); setPhase("photos"); setEstimate(null); setErr("");
  }

  const complexityColor = {Simple:GR, Medium:BL, Complex:"#F59E0B", Expert:RD};
  const complexityBg    = {Simple:GR_LT, Medium:BL_LT, Complex:"#FFF7ED", Expert:"#FFF0EF"};

  function PhotoSlot({label, hint, photo, name, inputId, onChange}){
    return(
      <div style={{flex:1}}>
        <div style={{fontSize:11,fontWeight:700,color:TX3,textTransform:"uppercase",letterSpacing:".3px",marginBottom:6}}>{label}</div>
        {photo ? (
          <div style={{position:"relative",borderRadius:12,overflow:"hidden",border:"2px solid "+GR}}>
            <img src={photo} style={{width:"100%",height:110,objectFit:"cover",display:"block"}}/>
            <div style={{position:"absolute",top:6,right:6,background:GR,color:"#fff",borderRadius:100,padding:"2px 8px",fontSize:10,fontWeight:700}}>Added</div>
            <button onClick={()=>{onChange(null,"");}} style={{position:"absolute",bottom:6,right:6,background:"rgba(0,0,0,.5)",color:"#fff",border:"none",borderRadius:100,padding:"3px 10px",fontSize:11,cursor:"pointer",fontFamily:"system-ui,sans-serif"}}>Redo</button>
          </div>
        ):(
          <label htmlFor={inputId} style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:6,height:110,background:CARD,borderRadius:12,border:"2px dashed "+SEP,cursor:"pointer"}}>
            <input id={inputId} type="file" accept="image/*" capture="environment" style={{display:"none"}} onChange={e=>readFile(e.target.files[0], photo=>onChange(photo, e.target.files[0]?.name||""), ()=>{})}/>
            <div style={{width:36,height:36,background:BL_LT,borderRadius:10,display:"flex",alignItems:"center",justifyContent:"center",fontSize:18,color:BL,fontWeight:700}}>+</div>
            <div style={{fontSize:11,color:TX3,textAlign:"center",padding:"0 8px",lineHeight:1.4}}>{hint}</div>
          </label>
        )}
      </div>
    );
  }

  return(
    <div style={{...screenBase,...(cur===1?screenOn:{})}}>
      <SBar onSettings={onSettings}/>
      <div style={{...scr}}>
        <div style={{padding:"16px 16px 0"}}>
          <div style={{fontSize:26,fontWeight:700,color:TX,letterSpacing:"-.5px",lineHeight:1.1,marginBottom:4}}>What do you need assembled?</div>
        </div>
        <div style={{height:16}}/>

        {/* -- PHOTOS PHASE ------------------------------------------------ */}
        {phase==="photos"&&<>
          {/* Step badges */}
          <div style={{display:"flex",alignItems:"center",gap:0,margin:"0 16px 14px"}}>
            {[["1","Box Photo","The shipping box"],["","",""],["2","Product Photo","The finished item"]].map((item,i)=>{
              if(i===1) return <div key={i} style={{flex:1,height:2,background:SEP2,margin:"0 4px"}}/>;
              return(
                <div key={i} style={{display:"flex",flexDirection:"column",alignItems:"center",gap:3}}>
                  <div style={{width:24,height:24,borderRadius:"50%",background:BL,color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",fontSize:12,fontWeight:700}}>{item[0]}</div>
                  <div style={{fontSize:11,fontWeight:600,color:TX}}>{item[1]}</div>
                  <div style={{fontSize:10,color:TX3}}>{item[2]}</div>
                </div>
              );
            })}
          </div>

          {/* Two photo slots side by side - centered */}
          <div style={{display:"flex",gap:10,margin:"0 auto",padding:"0 20px",width:"100%",justifyContent:"center"}}>
            <PhotoSlot
              label="Photo 1 - Box"
              hint="Take a photo of the shipping box or packaging"
              photo={boxPhoto}
              name={boxName}
              inputId="box-photo"
              onChange={(p,n)=>{setBoxPhoto(p);setBoxName(n||"");}}
            />
            <PhotoSlot
              label="Photo 2 - Finished Item"
              hint="Take a photo of what it looks like assembled"
              photo={productPhoto}
              name={productName}
              inputId="product-photo"
              onChange={(p,n)=>{setProductPhoto(p);setProductName(n||"");}}
            />
          </div>

          <div style={{height:14}}/>

          {/* Item name hint */}
          <div style={{margin:"0 20px"}}>
            <div style={{fontSize:11,fontWeight:700,color:TX3,textTransform:"uppercase",letterSpacing:".3px",marginBottom:6}}>Item Name (optional)</div>
            <input value={itemHint} onChange={e=>setItemHint(e.target.value)}
              placeholder="e.g. IKEA KALLAX 5x5, West Elm Bed Frame, Peloton Bike+"
              style={{width:"100%",background:CARD,border:".5px solid "+SEP,borderRadius:10,padding:"11px 13px",fontSize:14,color:TX,fontFamily:"system-ui,sans-serif",outline:"none",boxSizing:"border-box"}}/>
          </div>



          {err&&<div style={{margin:"12px 16px 0",background:"#FFF0EF",borderRadius:10,padding:"11px 13px",fontSize:13,color:RD,fontWeight:500}}>{err}</div>}

          <div style={{height:16}}/>
          <div style={{padding:"0 16px 40px"}}>
            <button onClick={analyze} disabled={!boxPhoto||!productPhoto}
              style={{...btnP,opacity:boxPhoto&&productPhoto?1:.45,background:BL}}>
              {!boxPhoto||!productPhoto ? "Add both photos to continue" : "Get AI Estimate"}
            </button>
            <div style={{textAlign:"center",fontSize:11,color:TX3,marginTop:8}}>Free estimate - no account needed</div>
          </div>
        </>}

        {/* -- ANALYZING PHASE --------------------------------------------- */}
        {phase==="analyzing"&&<>
          <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"40px 24px",gap:20,minHeight:300}}>
            <div style={{width:72,height:72,background:BL_LT,borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",position:"relative"}}>
              <div style={{fontSize:28,color:BL}}>AI</div>
              <div style={{position:"absolute",inset:-3,borderRadius:"50%",border:"3px solid "+BL,borderTopColor:"transparent",animation:"spin 1s linear infinite"}}/>
            </div>
            <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
            <div style={{fontSize:18,fontWeight:700,color:TX,letterSpacing:"-.3px",textAlign:"center"}}>Analyzing your photos...</div>
            <div style={{display:"flex",flexDirection:"column",gap:8,width:"100%",maxWidth:280}}>
              {["Identifying item from box photo","Estimating assembly complexity","Calculating labor time","Computing transport cost","Generating final estimate"].map((step,i)=>(
                <div key={i} style={{display:"flex",alignItems:"center",gap:10}}>
                  <div style={{width:18,height:18,borderRadius:"50%",background:BL_LT,display:"flex",alignItems:"center",justifyContent:"center",fontSize:9,color:BL,fontWeight:700,flexShrink:0}}>-</div>
                  <div style={{fontSize:13,color:TX3}}>{step}</div>
                </div>
              ))}
            </div>
          </div>
        </>}

        {/* -- RESULT PHASE ------------------------------------------------ */}
        {phase==="result"&&estimate&&<>
          {/* Item identified */}
          <div style={{margin:"0 16px 14px",background:CARD,borderRadius:13,overflow:"hidden",boxShadow:"0 2px 12px rgba(0,0,0,.08)"}}>
            <div style={{padding:"12px 14px",borderBottom:".5px solid "+SEP2,display:"flex",alignItems:"center",gap:10}}>
              <div style={{width:36,height:36,background:complexityBg[estimate.complexity]||BL_LT,borderRadius:10,display:"flex",alignItems:"center",justifyContent:"center",fontSize:14,fontWeight:700,color:complexityColor[estimate.complexity]||BL,flexShrink:0}}>AI</div>
              <div style={{flex:1}}>
                <div style={{fontSize:15,fontWeight:700,color:TX}}>{estimate.item_name}</div>
                <div style={{display:"flex",gap:6,marginTop:4,flexWrap:"wrap"}}>
                  <span style={{fontSize:11,fontWeight:600,background:complexityBg[estimate.complexity],color:complexityColor[estimate.complexity],borderRadius:100,padding:"2px 8px"}}>{estimate.complexity}</span>
                  <span style={{fontSize:11,color:TX3,background:BG,borderRadius:100,padding:"2px 8px"}}>{estimate.ai_estimated_minutes} min estimated</span>
                  <span style={{fontSize:11,color:TX3,background:BG,borderRadius:100,padding:"2px 8px"}}>{estimate.ai_confidence} confidence</span>
                </div>
              </div>
            </div>
            {estimate.ai_notes&&<div style={{padding:"10px 14px",fontSize:12,color:TX3,lineHeight:1.5,background:BG}}>{estimate.ai_notes}</div>}
          </div>

          {/* Photos thumbnails */}
          <div style={{display:"flex",gap:8,margin:"0 16px 14px"}}>
            {boxPhoto&&<img src={boxPhoto} style={{flex:1,height:70,objectFit:"cover",borderRadius:10,border:"1.5px solid "+SEP2}}/>}
            {productPhoto&&<img src={productPhoto} style={{flex:1,height:70,objectFit:"cover",borderRadius:10,border:"1.5px solid "+SEP2}}/>}
          </div>

          {/* Cost breakdown */}
          <div style={{margin:"0 16px 14px",...card,overflow:"hidden"}}>
            <div style={{padding:"10px 14px",background:BL_LT,fontSize:11,fontWeight:700,color:BL,textTransform:"uppercase",letterSpacing:".4px"}}>Cost Breakdown</div>
            {[
              ["Labor", `${estimate.ai_estimated_minutes} min @ $${estimate.hourly_rate_usd}/hr`, `$${estimate.labor_cost_usd.toFixed(2)}`],
              ["Transport", `${estimate.distance_miles} mi round trip @ $${estimate.gas_price_per_gallon}/gal`, `$${estimate.fuel_cost_usd.toFixed(2)}`],
              ["Subtotal", "", `$${estimate.subtotal_usd.toFixed(2)}`],
              ["asmbly service fee (5%)", "", `$${estimate.asmbly_fee_usd.toFixed(2)}`],
            ].map(([label,sub,val],i)=>(
              <div key={i} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"10px 14px",borderBottom:".5px solid "+SEP2}}>
                <div>
                  <div style={{fontSize:14,color:TX}}>{label}</div>
                  {sub&&<div style={{fontSize:11,color:TX3,marginTop:1}}>{sub}</div>}
                </div>
                <div style={{fontSize:14,fontWeight:500,color:TX}}>{val}</div>
              </div>
            ))}
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"13px 14px",background:BL_LT}}>
              <div>
                <div style={{fontSize:16,fontWeight:700,color:BL}}>Total to Customer</div>
                <div style={{fontSize:11,color:BL,marginTop:1,opacity:.8}}>Builder earns ${ estimate.builder_payout_usd.toFixed(2)} (95%)</div>
              </div>
              <div style={{fontSize:22,fontWeight:800,color:BL}}>${estimate.total_usd.toFixed(2)}</div>
            </div>
          </div>

          {/* Payout split visual */}
          <div style={{margin:"0 16px 14px",...card,padding:"12px 14px"}}>
            <div style={{fontSize:11,fontWeight:700,color:TX3,textTransform:"uppercase",letterSpacing:".3px",marginBottom:8}}>Revenue Split</div>
            <div style={{display:"flex",height:10,borderRadius:100,overflow:"hidden",gap:2,marginBottom:8}}>
              <div style={{flex:95,background:GR,borderRadius:"100px 0 0 100px"}}/>
              <div style={{flex:5,background:BL,borderRadius:"0 100px 100px 0"}}/>
            </div>
            <div style={{display:"flex",justifyContent:"space-between"}}>
              <div style={{display:"flex",alignItems:"center",gap:6}}>
                <div style={{width:10,height:10,borderRadius:2,background:GR,flexShrink:0}}/>
                <span style={{fontSize:12,color:TX}}>Builder: ${estimate.builder_payout_usd.toFixed(2)} (95%)</span>
              </div>
              <div style={{display:"flex",alignItems:"center",gap:6}}>
                <div style={{width:10,height:10,borderRadius:2,background:BL,flexShrink:0}}/>
                <span style={{fontSize:12,color:TX}}>asmbly: ${estimate.asmbly_fee_usd.toFixed(2)} (5%)</span>
              </div>
            </div>
          </div>

          <div style={{height:8}}/>
          <div style={{padding:"0 16px"}}>
            <button onClick={()=>go(2)} style={{...btnP,background:BL}}>Find Builders Near Me</button>
            <div style={{height:10}}/>
            <button onClick={reset} style={{...btnS,background:"transparent",color:TX3}}>Re-estimate with new photos</button>
          </div>
          <div style={{height:40}}/>
        </>}
      </div>
      <TabBar active={0} go={go}/>
    </div>
  );
}

function S2({go,cur,estimate}){
  const [sel,setSel]=useState(0);

  // Use real estimated price from AI if available, otherwise fallback prices
  const basePrice = estimate?.total_usd || null;
  const pros=[
    {name:"Marcus T.",distMi:2.1,avail:"Available today",  stars:"4.9",jobs:312,badge:"Top Pro",   priceMod:1.00},
    {name:"Priya S.", distMi:3.8,avail:"Available tomorrow",stars:"4.8",jobs:188,badge:null,        priceMod:0.95},
    {name:"Derek W.", distMi:4.5,avail:"Available in 2 hrs",stars:"4.7",jobs:94, badge:"Best Price",priceMod:0.88},
  ];

  // Recalculate transport per builder distance if we have a base estimate
  function builderPrice(pro){
    if(!basePrice) return ["$49","$44","$38"][pros.indexOf(pro)];
    const GAS=3.45,MPG=20;
    const fuelAdj = ((pro.distMi*2)/MPG*GAS);
    const labor   = estimate.labor_cost_usd || (basePrice*0.85);
    const subtotal= labor + fuelAdj;
    const total   = subtotal * 1.05;
    return "$"+(total*pro.priceMod).toFixed(0);
  }

  return(
    <div style={{...screenBase,...(cur===2?screenOn:{})}}>
      <div style={{background:"linear-gradient(160deg,#5E17EB,#8B5CF6)",padding:"80px 24px 28px",textAlign:"center"}}>
        <div style={{width:60,height:60,background:"rgba(255,255,255,.2)",borderRadius:"50%",margin:"0 auto 16px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:22,border:"1px solid rgba(255,255,255,.3)",color:"#fff",fontWeight:700}}>[W]</div>
        <div style={{fontSize:28,fontWeight:700,color:"#fff",letterSpacing:"-.5px"}}>3 Assemblers Found</div>
        <div style={{fontSize:15,color:"rgba(255,255,255,.75)",marginTop:6}}>Verified pros near Houston, TX</div>
        {estimate&&<div style={{marginTop:10,background:"rgba(255,255,255,.15)",borderRadius:100,display:"inline-block",padding:"4px 14px",fontSize:13,color:"#fff",fontWeight:500}}>
          {estimate.item_name} - {estimate.complexity} complexity
        </div>}
      </div>
      <div style={{...scr,background:BG}}>
        <div style={{height:16}}/>
        <div style={secLbl}>AVAILABLE ASSEMBLERS</div>
        {pros.map((p,i)=>{
          const price = builderPrice(p);
          return(
            <div key={i} onClick={()=>setSel(i)} style={{...card,margin:"0 16px 10px",padding:16,cursor:"pointer",border:`2px solid ${sel===i?BL:"transparent"}`,background:sel===i?"#FAFDFF":CARD,position:"relative"}}>
              <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:12}}>
                <div style={{width:52,height:52,borderRadius:14,background:BL_LT,display:"flex",alignItems:"center",justifyContent:"center",fontSize:20,flexShrink:0,color:BL,fontWeight:700}}>{p.name.charAt(0)}</div>
                <div style={{flex:1}}>
                  <div style={{fontSize:17,fontWeight:600,color:TX}}>{p.name}</div>
                  <div style={{fontSize:13,color:TX3,marginTop:2}}>{p.distMi} mi - {p.avail}</div>
                </div>
                <div style={{textAlign:"right"}}>
                  <div style={{fontSize:22,fontWeight:700,color:i===2?GR:TX}}>{price}</div>
                  {estimate&&<div style={{fontSize:10,color:TX3}}>incl. transport</div>}
                </div>
              </div>
              <div style={{display:"flex",gap:6,flexWrap:"wrap"}}>
                <span style={{display:"inline-flex",background:sel===i?BL_LT:BG,borderRadius:100,padding:"4px 10px",fontSize:12,fontWeight:500,color:sel===i?BL:TX2}}>* {p.stars}</span>
                <span style={{display:"inline-flex",background:BG,borderRadius:100,padding:"4px 10px",fontSize:12,fontWeight:500,color:TX2}}>{p.jobs} jobs</span>
                {estimate&&<span style={{display:"inline-flex",background:BG,borderRadius:100,padding:"4px 10px",fontSize:12,fontWeight:500,color:TX2}}>{p.distMi} mi away</span>}
              </div>
              {p.badge&&<div style={{position:"absolute",bottom:16,right:16,background:i===2?GR_LT:BL_LT,color:i===2?GR:BL,fontSize:11,fontWeight:600,borderRadius:100,padding:"3px 10px"}}>{p.badge}</div>}
            </div>
          );
        })}
        {estimate&&<>
          <div style={{height:8}}/>
          <div style={{margin:"0 16px",background:BL_LT,borderRadius:12,padding:"11px 14px",display:"flex",gap:10}}>
            <div style={{fontSize:12,color:BL,fontWeight:700,flexShrink:0}}>i</div>
            <div style={{fontSize:12,color:TX2,lineHeight:1.5}}>Price includes {estimate.ai_estimated_minutes}min labor + round-trip transport. asmbly 5% service fee included. Builder earns 95%.</div>
          </div>
        </>}
        <div style={{height:16}}/>
        <div style={{padding:"0 16px 40px"}}><button style={btnP} onClick={()=>go(3)}>Book {pros[sel].name}</button></div>
      </div>
      <TabBar active={1} go={go}/>
    </div>
  );
}

function S3({go,cur,estimate,user,onJobCreated}){
  const [pickup,setPickup]=useState("10-12 PM");
  const [dropoff,setDropoff]=useState("Same day +4h");
  const [addr,setAddr]=useState("1428 Elmwood Dr, Houston, TX 77004");
  const [selPro,setSelPro]=useState({name:"Marcus T.",email:"marcus@asmbly.com",phone:"(713) 555-0147"});
  const [saving,setSaving]=useState(false);
  const [err,setErr]=useState("");
  const pickupSlots=["8-10 AM","10-12 PM","12-2 PM","2-4 PM"];
  const dropoffSlots=["Same day +4h","Next day AM","Next day PM"];

  async function confirmSchedule(){
    setSaving(true);setErr("");
    try{
      // Build job record from estimate + schedule selections
      const jobPayload={
        builder_email:selPro.email,
        builder_name:selPro.name,
        builder_phone:selPro.phone,
        customer_email:user?.email||"guest@asmbly.com",
        customer_name:user?.email?.split("@")[0]||"Customer",
        customer_address:addr,
        customer_phone:user?.phone||"",
        item_name:estimate?.item_name||"Furniture item",
        complexity:estimate?.complexity||"Medium",
        price:estimate?.total_usd||49,
        status:"assigned",
        scheduled_pickup:pickup,
        scheduled_dropoff:dropoff,
      };
      const resp=await fetch(SB+"/rest/v1/builder_jobs",{
        method:"POST",
        headers:{"Content-Type":"application/json",apikey:KEY,
          Authorization:"Bearer "+(user?.token||KEY),
          Prefer:"return=representation"},
        body:JSON.stringify(jobPayload)
      });
      if(!resp.ok){const e=await resp.text();throw new Error(e);}
      const [job]=await resp.json();
      if(onJobCreated) onJobCreated(job);
      go(4);
    }catch(e){
      setErr("Could not confirm booking. Please try again.");
      console.error(e);
    }
    setSaving(false);
  }

  return(
    <div style={{...screenBase,...(cur===3?screenOn:{}),background:"#fff"}}>
      <div style={{padding:"54px 18px 10px",borderBottom:".5px solid "+SEP,flexShrink:0,display:"flex",alignItems:"center",gap:10}}>
        <span style={{fontSize:15,color:BL,cursor:"pointer"}} onClick={()=>go(2)}>&larr;</span>
        <div style={{fontSize:18,fontWeight:700,color:TX}}>Schedule Pickup</div>
      </div>
      <div style={scr}>
        <div style={{padding:"16px 18px 0",fontSize:13,color:TX3,marginBottom:12}}>
          Choose when {selPro.name} collects your {estimate?.item_name||"item"} and delivers it back.
        </div>

        {/* Estimate summary bar */}
        {estimate&&<div style={{margin:"0 18px 14px",background:BL_LT,borderRadius:12,padding:"11px 14px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
          <div>
            <div style={{fontSize:13,fontWeight:600,color:BL}}>{estimate.item_name}</div>
            <div style={{fontSize:11,color:BL,opacity:.8}}>{estimate.complexity} &bull; {estimate.ai_estimated_minutes} min est.</div>
          </div>
          <div style={{fontSize:20,fontWeight:800,color:BL}}>${estimate.total_usd?.toFixed(2)}</div>
        </div>}

        <div style={{fontSize:11,fontWeight:700,color:TX3,textTransform:"uppercase",letterSpacing:".3px",padding:"0 18px",marginBottom:8}}>Pickup Window</div>
        <div style={{display:"flex",flexWrap:"wrap",gap:8,padding:"0 18px",marginBottom:16}}>
          {pickupSlots.map(s=>(
            <div key={s} onClick={()=>setPickup(s)}
              style={{background:pickup===s?BL:"#fff",color:pickup===s?"#fff":TX,borderRadius:100,padding:"9px 16px",fontSize:14,cursor:"pointer",boxShadow:"0 1px 6px rgba(0,0,0,.08)",border:"1.5px solid "+(pickup===s?BL:"transparent")}}>
              {s}
            </div>
          ))}
        </div>

        <div style={{fontSize:11,fontWeight:700,color:TX3,textTransform:"uppercase",letterSpacing:".3px",padding:"0 18px",marginBottom:8}}>Drop-off Window</div>
        <div style={{display:"flex",flexWrap:"wrap",gap:8,padding:"0 18px",marginBottom:16}}>
          {dropoffSlots.map(s=>(
            <div key={s} onClick={()=>setDropoff(s)}
              style={{background:dropoff===s?BL:"#fff",color:dropoff===s?"#fff":TX,borderRadius:100,padding:"9px 16px",fontSize:14,cursor:"pointer",boxShadow:"0 1px 6px rgba(0,0,0,.08)",border:"1.5px solid "+(dropoff===s?BL:"transparent")}}>
              {s}
            </div>
          ))}
        </div>

        <div style={{fontSize:11,fontWeight:700,color:TX3,textTransform:"uppercase",letterSpacing:".3px",padding:"0 18px",marginBottom:8}}>Pickup Address</div>
        <div style={{...card,margin:"0 18px",padding:"14px 16px",marginBottom:16}}>
          <input value={addr} onChange={e=>setAddr(e.target.value)}
            style={{width:"100%",background:"transparent",border:"none",fontSize:14,color:TX,fontFamily:"system-ui,sans-serif",outline:"none"}}
            placeholder="Enter your address"/>
        </div>

        <div style={{fontSize:11,fontWeight:700,color:TX3,textTransform:"uppercase",letterSpacing:".3px",padding:"0 18px",marginBottom:8}}>Your Builder</div>
        <div style={{...card,margin:"0 18px 20px",padding:"13px 16px",display:"flex",alignItems:"center",gap:12}}>
          <div style={{width:40,height:40,background:BL_LT,borderRadius:11,display:"flex",alignItems:"center",justifyContent:"center",fontSize:16,color:BL,fontWeight:800,flexShrink:0}}>M</div>
          <div style={{flex:1}}>
            <div style={{fontSize:14,fontWeight:700,color:TX}}>{selPro.name}</div>
            <div style={{fontSize:12,color:TX3,marginTop:2}}>{selPro.phone}</div>
          </div>
          <span style={{fontSize:12,fontWeight:600,color:GR}}>Selected</span>
        </div>

        {err&&<div style={{margin:"0 18px 12px",background:"#FFF0EF",borderRadius:10,padding:"11px 14px",fontSize:13,color:RD,fontWeight:500}}>{err}</div>}

        <div style={{padding:"0 18px 40px"}}>
          <button disabled={saving||!addr.trim()} onClick={confirmSchedule}
            style={{...btnP,opacity:saving||!addr.trim()?0.5:1}}>
            {saving?"Booking...":"Confirm &amp; Book"}
          </button>
        </div>
      </div>
    </div>
  );
}

function S4({go,cur,user}){
  const AMOUNT_CENTS=5445;
  const AMOUNT_DISPLAY="$54.45";
  // PRODUCTION: Replace with pk_live_ key via VITE_STRIPE_PK env var
const STRIPE_PK=window.__STRIPE_PK||"pk_test_51TJ2V9Fah5yZT4AdmhmvtIZK5IA8S1R49i7nACxGX24TpH6Zn1xebGFWXGX5fOa7lyckaimnnFdc23Fgw3QdEWBZ00aSLAOmvv";
  const EDGE_URL="https://gtupnsnhsljgxuzrlfpz.supabase.co/functions/v1/create-payment-intent";
  const ANON_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd0dXBuc25oc2xqZ3h1enJsZnB6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ4ODY3MTUsImV4cCI6MjA5MDQ2MjcxNX0.-INsLvt7gRiiUwIlIYNEMfPMcfULScpXu3k-_jBWnOw";
  const [payMethod,setPayMethod]=useState("card");
  const [cardNum,setCardNum]=useState(""); const [expiry,setExpiry]=useState("");
  const [cvc,setCvc]=useState(""); const [cardName,setCardName]=useState("");
  const [zip,setZip]=useState(""); const [promoCode,setPromoCode]=useState("WELCOME10");
  const [status,setStatus]=useState("idle");
  const [errMsg,setErrMsg]=useState(""); const [intentId,setIntentId]=useState(null);
  const [applePayAvail,setApplePayAvail]=useState(false);
  const [stripeReady,setStripeReady]=useState(false);
  useEffect(()=>{
    if(window.Stripe){setStripeReady(true);return;}
    const s=document.createElement("script");
    s.src="https://js.stripe.com/v3/";
    s.onload=()=>setStripeReady(true);
    document.head.appendChild(s);
    if(window.ApplePaySession&&ApplePaySession.canMakePayments())setApplePayAvail(true);
  },[]);
  function fmtCard(v){return v.replace(/\D/g,"").slice(0,16).replace(/(.{4})/g,"$1 ").trim();}
  function fmtExpiry(v){const d=v.replace(/\D/g,"").slice(0,4);return d.length>=3?d.slice(0,2)+"/"+d.slice(2):d;}
  function luhn(n){let s=0,odd=false;for(let i=n.length-1;i>=0;i--){let d=parseInt(n[i]);if(odd){d*=2;if(d>9)d-=9;}s+=d;odd=!odd;}return s%10===0;}
  function cardBrand(n){if(/^4/.test(n))return"Visa";if(/^5[1-5]|^2[2-7]/.test(n))return"Mastercard";if(/^3[47]/.test(n))return"Amex";return"Card";}
  async function createIntent(){
    const r=await fetch(EDGE_URL,{method:"POST",headers:{"Content-Type":"application/json","apikey":ANON_KEY},body:JSON.stringify({amountCents:AMOUNT_CENTS,currency:"usd",customerEmail:user?.email||"",description:"asmbly assembly service"})});
    return r.json();
  }
  async function savePaymentRecord(fields){
    await fetch("https://gtupnsnhsljgxuzrlfpz.supabase.co/rest/v1/payment_records",{method:"POST",headers:{"Content-Type":"application/json","apikey":ANON_KEY,"Authorization":"Bearer "+(user?.token||ANON_KEY),"Prefer":"return=minimal"},body:JSON.stringify({stripe_payment_intent_id:fields.intentId,stripe_payment_method_type:fields.method,amount_cents:AMOUNT_CENTS,currency:"usd",status:"succeeded",customer_email:user?.email||"",card_last4:fields.last4||null,card_brand:fields.brand||null})}).catch(()=>{});
  }
  async function payWithCard(){
    if(!cardName.trim()){setErrMsg("Please enter the name on your card.");return;}
    const raw=cardNum.replace(/\s/g,"");
    if(raw.length<15||!luhn(raw)){setErrMsg("Please enter a valid card number.");return;}
    if(expiry.length<5){setErrMsg("Please enter a valid expiry date.");return;}
    if(cvc.length<3){setErrMsg("Please enter your CVC.");return;}
    if(!stripeReady){setErrMsg("Payment loading, please wait a moment.");return;}
    setStatus("loading");setErrMsg("");
    try{
      const {clientSecret,paymentIntentId,error:iErr}=await createIntent();
      if(iErr||!clientSecret){setErrMsg(iErr||"Could not start payment.");setStatus("error");return;}
      const stripe=window.Stripe(STRIPE_PK);
      const [mm,yy]=expiry.split("/");
      const {error:sErr}=await stripe.confirmCardPayment(clientSecret,{payment_method:{card:{number:raw,exp_month:parseInt(mm),exp_year:parseInt("20"+yy),cvc},billing_details:{name:cardName,address:{postal_code:zip}}}});
      if(sErr){setErrMsg(sErr.message||"Payment declined.");setStatus("error");return;}
      await savePaymentRecord({intentId:paymentIntentId,method:"card",last4:raw.slice(-4),brand:cardBrand(raw)});
      setIntentId(paymentIntentId);setStatus("success");
      setTimeout(()=>go(5),2600);
    }catch(e){setErrMsg("Payment failed. Please try again.");setStatus("error");}
  }
  async function payWithApple(){
    if(!applePayAvail){setErrMsg("Apple Pay is not available on this device.");return;}
    setStatus("loading");setErrMsg("");
    try{
      const {clientSecret,paymentIntentId,error:iErr}=await createIntent();
      if(iErr||!clientSecret){setErrMsg(iErr||"Could not start payment.");setStatus("error");return;}
      const stripe=window.Stripe(STRIPE_PK);
      const pr=stripe.paymentRequest({country:"US",currency:"usd",total:{label:"asmbly assembly service",amount:AMOUNT_CENTS},requestPayerName:true,requestPayerEmail:true});
      const canMake=await pr.canMakePayment();
      if(!canMake){setErrMsg("Apple Pay not available. Please use card payment.");setStatus("idle");return;}
      pr.on("paymentmethod",async(e)=>{
        const {error:sErr}=await stripe.confirmCardPayment(clientSecret,{payment_method:e.paymentMethod.id},{handleActions:false});
        if(sErr){e.complete("fail");setErrMsg(sErr.message||"Apple Pay failed.");setStatus("error");return;}
        e.complete("success");
        await savePaymentRecord({intentId:paymentIntentId,method:"apple_pay",last4:null,brand:"Apple Pay"});
        setIntentId(paymentIntentId);setStatus("success");
        setTimeout(()=>go(5),2600);
      });
      pr.show();
    }catch(e){
      if(String(e).includes("AbortError")){setStatus("idle");}
      else{setErrMsg("Apple Pay failed. Please use card payment.");setStatus("error");}
    }
  }
  const isLoading=status==="loading";
  const iStyle={width:"100%",background:CARD,border:".5px solid "+SEP,borderRadius:10,padding:"10px 12px",fontSize:14,color:TX,fontFamily:"system-ui,sans-serif",outline:"none",boxSizing:"border-box"};
  return(
    <div style={{...screenBase,...(cur===4?screenOn:{})}}>
      <div style={{padding:"14px 20px 0",display:"flex",justifyContent:"space-between",alignItems:"center",flexShrink:0,background:CARD}}>
        <BackBtn go={go} n={3}/>
        <span style={{fontSize:17,fontWeight:600}}>Payment</span>
        <div style={{width:60}}/>
      </div>
      <div style={scr}>
        <div style={{height:16}}/>
        <div style={secLbl}>ORDER SUMMARY</div>
        <div style={{...card,margin:"0 16px"}}>
          {[["Assembly (Medium)","$49.00",false],["Pickup and delivery","$8.00",false],["Platform fee","$3.50",false],["Promo (WELCOME10)","-$6.05",true]].map(([l,v,g])=>(
            <div key={l} style={{display:"flex",justifyContent:"space-between",padding:"12px 16px",borderBottom:".5px solid "+SEP2}}>
              <span style={{fontSize:15,color:TX3}}>{l}</span>
              <span style={{fontSize:15,fontWeight:500,color:g?GR:TX}}>{v}</span>
            </div>
          ))}
          <div style={{display:"flex",justifyContent:"space-between",padding:"13px 16px"}}>
            <span style={{fontSize:17,fontWeight:600}}>Total</span>
            <span style={{fontSize:22,fontWeight:700}}>{AMOUNT_DISPLAY}</span>
          </div>
        </div>
        <div style={{height:20}}/>
        <div style={secLbl}>PAYMENT METHOD</div>
        <div style={{display:"flex",gap:8,margin:"0 16px 16px"}}>
          {[["card","Credit / Debit Card"],["apple","Apple Pay"]].map(([k,lbl])=>(
            <button key={k} onClick={()=>{setPayMethod(k);setErrMsg("");}}
              style={{flex:1,padding:"10px 6px",borderRadius:10,border:"2px solid "+(payMethod===k?BL:SEP2),background:payMethod===k?BL_LT:CARD,color:payMethod===k?BL:TX3,fontFamily:"system-ui,sans-serif",fontSize:13,fontWeight:600,cursor:"pointer"}}>
              {lbl}
            </button>
          ))}
        </div>
        {payMethod==="card"&&(
          <div style={{margin:"0 16px"}}>
            <div style={fiWrap}>
              <div style={fiRow}><span style={{...fiLbl,width:90,fontSize:14}}>Name</span><input style={fiInp} placeholder="Name on card" value={cardName} onChange={e=>setCardName(e.target.value)}/></div>
              <div style={fiRow}><span style={{...fiLbl,width:90,fontSize:14}}>Card</span><input style={fiInp} placeholder="1234 5678 9012 3456" inputMode="numeric" value={cardNum} onChange={e=>setCardNum(fmtCard(e.target.value))}/></div>
              <div style={{...fiRow,borderBottom:"none"}}>
                <span style={{...fiLbl,width:50,fontSize:14,flexShrink:0}}>Expiry</span>
                <input style={{...fiInp,flex:"none",width:58}} placeholder="MM/YY" inputMode="numeric" value={expiry} onChange={e=>setExpiry(fmtExpiry(e.target.value))}/>
                <span style={{...fiLbl,width:44,fontSize:14,textAlign:"center",flexShrink:0}}>CVC</span>
                <input style={{...fiInp,flex:"none",width:50}} placeholder="123" inputMode="numeric" value={cvc} maxLength={4} onChange={e=>setCvc(e.target.value.replace(/\D/g,"").slice(0,4))}/>
                <span style={{...fiLbl,width:40,fontSize:14,flexShrink:0}}>ZIP</span>
                <input style={{...fiInp,flex:"none",width:58}} placeholder="77001" inputMode="numeric" value={zip} maxLength={5} onChange={e=>setZip(e.target.value.replace(/\D/g,"").slice(0,5))}/>
              </div>
            </div>
            <div style={{display:"flex",alignItems:"center",gap:8,padding:"8px 4px 0"}}>
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke={GR} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              <span style={{fontSize:12,color:TX3}}>Secured by Stripe. Card details sent directly to Stripe, never stored by asmbly.</span>
            </div>
          </div>
        )}
        {payMethod==="apple"&&(
          <div style={{margin:"0 16px"}}>
            <div style={{...card,padding:"20px 16px",textAlign:"center"}}>
              <div style={{width:56,height:56,background:"#000",borderRadius:14,margin:"0 auto 14px",display:"flex",alignItems:"center",justifyContent:"center"}}>
                <svg viewBox="0 0 24 24" width="30" height="30" fill="#fff"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
              </div>
              <div style={{fontSize:17,fontWeight:600,color:TX,marginBottom:6}}>Apple Pay</div>
              <div style={{fontSize:14,color:TX3,lineHeight:1.5}}>
                {applePayAvail?"Tap the button below to confirm with Face ID or Touch ID.":"Apple Pay is available on iPhone, iPad and Mac with Safari. Please use card payment on this device."}
              </div>
            </div>
          </div>
        )}
        <div style={{height:16}}/>
        <div style={{display:"flex",gap:10,margin:"0 16px"}}>
          <input style={{...iStyle,flex:1}} placeholder="Promo code" value={promoCode} onChange={e=>setPromoCode(e.target.value)}/>
          <button style={{background:BL_LT,color:BL,border:"none",borderRadius:10,padding:"10px 16px",fontFamily:"system-ui,sans-serif",fontSize:14,fontWeight:600,cursor:"pointer"}}>Apply</button>
        </div>
        {errMsg&&<div style={{margin:"12px 16px 0",background:"#FFF0EF",borderRadius:10,padding:"12px 14px",fontSize:14,color:RD,fontWeight:500}}>{errMsg}</div>}
        <div style={{height:24}}/>
        <div style={{padding:"0 16px 8px"}}>
          {payMethod==="card"&&(
            <button onClick={payWithCard} disabled={isLoading} style={{...btnP,opacity:isLoading?.6:1,background:isLoading?TX3:BL}}>
              {isLoading?"Processing...":"Pay "+AMOUNT_DISPLAY}
            </button>
          )}
          {payMethod==="apple"&&(
            <button onClick={payWithApple} disabled={isLoading||!applePayAvail} style={{...btnP,background:"#000",color:"#fff",opacity:(isLoading||!applePayAvail)?.5:1}}>
              {isLoading?"Processing...":"Pay with Apple Pay"}
            </button>
          )}
        </div>
        <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:6,padding:"10px 0 40px"}}>
          <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke={TX3} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
          <span style={{fontSize:12,color:TX3}}>Payments processed securely by Stripe</span>
        </div>
      </div>
      {status==="success"&&(
        <div style={{position:"absolute",inset:0,background:CARD,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:16,zIndex:300}}>
          <div style={{width:80,height:80,background:GR_LT,borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",fontSize:32,color:GR,fontWeight:700}}>v</div>
          <div style={{fontSize:24,fontWeight:700,letterSpacing:"-.4px"}}>Payment Confirmed!</div>
          <div style={{fontSize:15,color:TX3,textAlign:"center",padding:"0 40px",lineHeight:1.4}}>Marcus picks up tomorrow 10-12 PM.</div>
          {intentId&&<div style={{background:BG,borderRadius:10,padding:"8px 16px",fontSize:12,color:TX3}}>Stripe ref: {intentId}</div>}
        </div>
      )}
    </div>
  );
}
function S5({go,cur,onSettings,job,user}){
  const [liveJob,setLiveJob]=useState(job||null);
  const [loading,setLoading]=useState(!job);
  const [commLogs,setCommLogs]=useState([]);

  // Load live job data from DB
  useEffect(()=>{
    if(!job?.id&&!user?.email) return;
    const email=user?.email;
    async function loadJob(){
      try{
        const query=job?.id
          ?SB+"/rest/v1/builder_jobs?id=eq."+job.id+"&limit=1"
          :SB+"/rest/v1/builder_jobs?customer_email=eq."+encodeURIComponent(email)+"&order=created_at.desc&limit=1";
        const r=await fetch(query,{headers:{apikey:KEY,Authorization:"Bearer "+(user?.token||KEY)}});
        const data=await r.json();
        if(Array.isArray(data)&&data.length>0) setLiveJob(data[0]);
      }catch(e){}
      setLoading(false);
    }
    loadJob();

    // Supabase Realtime - live status updates
    let channel;
    async function subscribeRealtime(){
      const {createClient}=await import("https://esm.sh/@supabase/supabase-js@2").catch(()=>({createClient:null}));
      if(!createClient) return;
      const sb=createClient(SB,KEY,{global:{headers:{Authorization:"Bearer "+(user?.token||KEY)}}});
      const filter=job?.id?"id=eq."+job.id:"customer_email=eq."+(user?.email||"");
      channel=sb.channel("tracking-"+filter)
        .on("postgres_changes",{event:"UPDATE",schema:"public",table:"builder_jobs",filter},
          (payload)=>{ setLiveJob(payload.new); })
        .subscribe();
    }
    subscribeRealtime();
    return ()=>{ if(channel) channel.unsubscribe(); };
  },[job?.id,user?.email]);

  // Status to step mapping
  const STATUS_STEPS=["assigned","picked_up","assembled","delivered"];
  const STEP_LABELS=[
    {lbl:"Builder Assigned",sub:"Your builder is confirmed"},
    {lbl:"Item Picked Up",sub:"Builder has your item"},
    {lbl:"Assembly Complete",sub:"Being brought back to you"},
    {lbl:"Delivered",sub:"Fully assembled at your door"},
  ];
  const curStep=STATUS_STEPS.indexOf(liveJob?.status||"assigned");

  async function callBuilder(){
    if(liveJob?.builder_phone){
      window.location.href="tel:"+liveJob.builder_phone.replace(/\D/g,"");
      // Log call
      try{
        await fetch(SB+"/rest/v1/communication_logs",{
          method:"POST",
          headers:{"Content-Type":"application/json",apikey:KEY,Authorization:"Bearer "+(user?.token||KEY)},
          body:JSON.stringify({job_id:liveJob.id,type:"call",direction:"outbound",
            initiated_by:"customer",from_number:user?.phone||"",to_number:liveJob.builder_phone,
            to_name:liveJob.builder_name,job_status_at_time:liveJob.status})
        });
      }catch(e){}
    }
  }

  async function msgBuilder(){
    if(liveJob?.builder_phone){
      window.location.href="sms:"+liveJob.builder_phone.replace(/\D/g,"");
      try{
        await fetch(SB+"/rest/v1/communication_logs",{
          method:"POST",
          headers:{"Content-Type":"application/json",apikey:KEY,Authorization:"Bearer "+(user?.token||KEY)},
          body:JSON.stringify({job_id:liveJob.id,type:"message",direction:"outbound",
            initiated_by:"customer",to_number:liveJob.builder_phone,
            to_name:liveJob.builder_name,job_status_at_time:liveJob.status})
        });
      }catch(e){}
    }
  }

  const itemName=liveJob?.item_name||job?.item_name||"Your item";
  const builderName=liveJob?.builder_name||job?.builder_name||"Your builder";
  const builderPhone=liveJob?.builder_phone||"";
  const address=liveJob?.customer_address||job?.customer_address||"Your address";
  const price=liveJob?.price||job?.price||0;

  return(
    <div style={{...screenBase,...(cur===5?screenOn:{})}}>
      <SBar onSettings={onSettings}/>
      <div style={{...scr}}>
        <div style={{padding:"12px 20px 16px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
          <div style={{fontSize:22,fontWeight:700,color:TX,letterSpacing:"-.4px"}}>Live Tracking</div>
          {liveJob?.status==="delivered"
            ?<span style={{background:GR_LT,color:GR,borderRadius:100,padding:"4px 12px",fontSize:12,fontWeight:700}}>Delivered!</span>
            :<span style={{background:GR_LT,color:GR,borderRadius:100,padding:"4px 12px",fontSize:12,fontWeight:700}}>
              {loading?"Loading...":"In Progress"}
            </span>
          }
        </div>

        {loading?<div style={{textAlign:"center",padding:40,color:TX3}}>Loading your order...</div>:<>

          {/* Item + order info */}
          <div style={{...card,margin:"0 16px 12px",padding:"12px 14px"}}>
            <div style={{fontSize:15,fontWeight:700,color:TX}}>{itemName}</div>
            <div style={{fontSize:12,color:TX3,marginTop:3}}>{address}</div>
            {price>0&&<div style={{fontSize:14,fontWeight:700,color:BL,marginTop:4}}>${Number(price).toFixed(2)}</div>}
          </div>

          {/* Builder info card */}
          <div style={{background:"linear-gradient(135deg,#5E17EB,#7C3AED)",borderRadius:14,margin:"0 16px 12px",padding:"14px 16px",display:"flex",alignItems:"center",gap:12}}>
            <div style={{width:42,height:42,borderRadius:12,background:"rgba(255,255,255,.2)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:16,color:"#fff",fontWeight:800,flexShrink:0}}>
              {builderName.charAt(0)}
            </div>
            <div style={{flex:1}}>
              <div style={{fontSize:15,fontWeight:700,color:"#fff"}}>{builderName}</div>
              {builderPhone&&<div style={{fontSize:12,color:"rgba(255,255,255,.75)",marginTop:2}}>{builderPhone}</div>}
            </div>
            <div style={{fontSize:12,color:"rgba(255,255,255,.75)"}}>
              {liveJob?.status==="picked_up"?"Assembling..."
               :liveJob?.status==="assembled"?"On the way!"
               :liveJob?.status==="delivered"?"Job done!"
               :"Assigned"}
            </div>
          </div>

          {/* Progress steps */}
          <div style={{...card,margin:"0 16px 12px",overflow:"hidden"}}>
            {STEP_LABELS.map((step,i)=>{
              const isDone=i<=curStep;
              const isAct=i===curStep+1||(curStep<0&&i===0);
              return(
                <div key={i} style={{display:"flex",alignItems:"flex-start",gap:12,padding:"12px 14px",
                  borderBottom:i<STEP_LABELS.length-1?".5px solid "+SEP:"none",
                  background:isAct?BL_LT:"transparent"}}>
                  <div style={{width:28,height:28,borderRadius:8,
                    background:isDone?GR_LT:isAct?BL_LT:SEP2,
                    display:"flex",alignItems:"center",justifyContent:"center",
                    fontSize:12,color:isDone?GR:isAct?BL:TX3,fontWeight:800,flexShrink:0,marginTop:1}}>
                    {isDone?"v":isAct?">":i+1}
                  </div>
                  <div style={{flex:1}}>
                    <div style={{fontSize:14,fontWeight:isDone||isAct?600:400,
                      color:isDone?GR:isAct?BL:TX3}}>{step.lbl}</div>
                    <div style={{fontSize:11,color:isDone?GR:isAct?BL:TX3,opacity:.8,marginTop:2}}>{step.sub}</div>
                  </div>
                  {isDone&&liveJob?.[["","picked_up_at","assembled_at","delivered_at"][i]]&&(
                    <div style={{fontSize:10,color:GR,marginTop:4}}>
                      {new Date(liveJob[["","picked_up_at","assembled_at","delivered_at"][i]]).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Builder notes if any */}
          {liveJob?.builder_notes&&(
            <div style={{...card,margin:"0 16px 12px",padding:"12px 14px"}}>
              <div style={{fontSize:11,fontWeight:700,color:TX3,textTransform:"uppercase",letterSpacing:".3px",marginBottom:5}}>Builder Note</div>
              <div style={{fontSize:13,color:TX,lineHeight:1.5}}>{liveJob.builder_notes}</div>
            </div>
          )}

          {/* Contact buttons */}
          {builderPhone&&liveJob?.status!=="delivered"&&(
            <div style={{display:"flex",gap:10,margin:"0 16px 20px"}}>
              <button onClick={callBuilder}
                style={{flex:1,background:"#fff",borderRadius:13,padding:13,display:"flex",alignItems:"center",justifyContent:"center",fontSize:14,fontWeight:600,color:BL,border:"none",cursor:"pointer",fontFamily:"system-ui,sans-serif",gap:7,boxShadow:"0 1px 6px rgba(0,0,0,.08)"}}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#5E17EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13 19.79 19.79 0 0 1 1.61 4.38 2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.29 6.29l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                Call {builderName.split(" ")[0]}
              </button>
              <button onClick={msgBuilder}
                style={{flex:1,background:"#fff",borderRadius:13,padding:13,display:"flex",alignItems:"center",justifyContent:"center",fontSize:14,fontWeight:600,color:BL,border:"none",cursor:"pointer",fontFamily:"system-ui,sans-serif",gap:7,boxShadow:"0 1px 6px rgba(0,0,0,.08)"}}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#5E17EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                Message
              </button>
            </div>
          )}

          {/* Delivery receipt */}
          {liveJob?.status==="delivered"&&(
            <div style={{...card,margin:"0 16px 20px",overflow:"hidden"}}>
              <div style={{padding:"10px 14px",background:GR_LT,fontSize:11,fontWeight:700,color:GR,textTransform:"uppercase",letterSpacing:".4px"}}>Order Complete</div>
              <div style={{padding:"12px 14px",fontSize:13,color:TX,lineHeight:1.6}}>
                Your {itemName} has been fully assembled and delivered. Thank you for using asmbly!
              </div>
              <div style={{padding:"0 14px 14px"}}>
                <button onClick={()=>go(1)} style={{...btnP}}>Book Another Assembly</button>
              </div>
            </div>
          )}
        </>}
      </div>
      <TabBar active={1} go={go}/>
    </div>
  );
}

function S6({go,cur}){
  const [step,setStep]=useState(1);
  const [f,setF]=useState({first:"",last:"",email:"",phone:"",city:"",zip:"",company:"",trade:"",licNum:""});
  const [exp,setExp]=useState(""); const [avail,setAvail]=useState(""); const [vehicle,setVehicle]=useState("");
  const [skills,setSkills]=useState([]); const [bio,setBio]=useState("");
  const [docs,setDocs]=useState({gl:null,wc:null,auto:null,lic:null,w9:null});
  const [docNames,setDocNames]=useState({gl:"",wc:"",auto:"",lic:"",w9:""});
  const [insurer,setInsurer]=useState(""); const [polNum,setPolNum]=useState("");
  const [polLimit,setPolLimit]=useState(""); const [insExp,setInsExp]=useState("");
  const [addlInsured,setAddlInsured]=useState(false);
  const [q1,setQ1]=useState(""); const [q2,setQ2]=useState(""); const [q3,setQ3]=useState("");
  const [certIc,setCertIc]=useState(false); const [certIns,setCertIns]=useState(false);
  const [certT,setCertT]=useState(false); const [sig,setSig]=useState("");
  const [sigDate]=useState(new Date().toISOString().split("T")[0]);
  const [saving,setSaving]=useState(false); const [done,setDone]=useState(false); const [err,setErr]=useState("");
  const allSkills=["Flat-pack (IKEA)","Office furniture","Beds & bedroom","Outdoor / patio","Gym equipment","Shelving & storage","Desks & workstations","Kids furniture"];
  const DOCS=[
    {k:"gl",  label:"General Liability COI",    req:true,  hint:"Certificate of Insurance - GL policy. asmbly LLC must be listed as Additional Insured."},
    {k:"wc",  label:"Workers Comp / Exemption", req:true,  hint:"Workers Comp COI or signed self-employed exemption form."},
    {k:"auto",label:"Commercial Auto Insurance",req:true,  hint:"Auto policy covering business vehicle use for pickups and deliveries."},
    {k:"lic", label:"Trade License",            req:false, hint:"Contractor or trade license if applicable in your state."},
    {k:"w9",  label:"W-9 Tax Form",             req:true,  hint:"Required for IRS tax reporting. Download blank form at IRS.gov."},
  ];
  const STEPS=["Info","Skills","Docs","Insurance","Screening","Agreement","Review","Submit"];
  const STEP_DESC=["Application Intake","Skills & Quality","Document Upload","Insurance Verification","Skills Screening","Agreement","Review & Confirm","Submitting"];
  const expired = insExp ? new Date(insExp)<new Date() : null;
  const expiringSoon = insExp ? (() => { const d=(new Date(insExp)-new Date())/86400000; return d>=0&&d<=30; })() : false;

  // Activation gate: all 6 conditions must be true to activate
  const activationGates = [
    {label:"All required documents uploaded",  ok: !!(docs.gl&&docs.wc&&docs.auto&&docs.w9)},
    {label:"Agreement signed",                 ok: !!(certIc&&certIns&&certT&&sig.length>2)},
    {label:"Insurance policy on file",         ok: !!insurer},
    {label:"Insurance is not expired",         ok: expired===false},
    {label:"Additional Insured confirmed",     ok: addlInsured},
    {label:"W-9 on file",                      ok: !!docs.w9},
  ];
  const allGatesPass = activationGates.every(g=>g.ok);

  function canGo(){
    if(step===1) return f.first&&f.last&&f.email.includes("@")&&f.phone&&f.city&&f.trade;
    if(step===2) return exp&&avail&&vehicle&&skills.length>0;
    if(step===3) return docs.gl&&docs.wc&&docs.auto&&docs.w9;
    if(step===4) return insurer&&expired===false&&addlInsured;
    if(step===5) return q1&&q2&&q3;
    if(step===6) return certIc&&certIns&&certT&&sig.length>2;
    return true;
  }

  function uploadDoc(k,e){
    const file=e.target.files[0]; if(!file)return;
    setDocNames(p=>({...p,[k]:file.name}));
    const r=new FileReader(); r.onload=ev=>setDocs(p=>({...p,[k]:ev.target.result})); r.readAsDataURL(file);
  }

  async function submit(){
    setSaving(true); setErr("");
    try{
      const payload={
        first_name:f.first,last_name:f.last,email:f.email,phone:f.phone,
        location:f.city+(f.zip?", "+f.zip:""),city:f.city,zip:f.zip||null,
        company_name:f.company||null,trade_type:f.trade,license_number:f.licNum||null,
        experience_years:exp,availability:avail,vehicle_type:vehicle,
        skills:skills.join(", "),bio:bio||null,has_tools:"Yes",
        has_general_liability:!!docs.gl,has_professional_liability:!!docs.wc,has_commercial_auto:!!docs.auto,
        insurance_provider:insurer,insurance_policy_number:polNum||null,
        insurance_expiry:insExp||null,addl_insured_confirmed:addlInsured,
        certifies_independent_contractor:certIc,certifies_insurance_current:certIns,certifies_terms_accepted:certT,
        signature_full_name:sig,signed_at:new Date().toISOString(),w9_on_file:!!docs.w9,
        onboarding_step:8,onboarding_status:"pending_review",
        docs_submitted_at:new Date().toISOString(),
        agreement_signed_at:new Date().toISOString(),
        status:"pending",submitted_at:new Date().toISOString(),
      };
      const r=await fetch(SB+"/rest/v1/builder_applications",{
        method:"POST",headers:{"Content-Type":"application/json",apikey:KEY,Authorization:"Bearer "+KEY,Prefer:"return=minimal"},
        body:JSON.stringify(payload)
      });
      if(r.ok||r.status===201){setDone(true);setStep(8);}
      else throw new Error(await r.text());
    }catch(e){setErr("Submission failed. Please try again or email builders@asmbly.com.");}
    setSaving(false);
  }

  const iStyle={width:"100%",background:CARD,border:".5px solid "+SEP,borderRadius:10,padding:"10px 12px",fontSize:14,color:TX,fontFamily:"system-ui,sans-serif",outline:"none",boxSizing:"border-box"};
  const lbl=(t,req)=>(<div style={{fontSize:11,fontWeight:600,color:TX3,textTransform:"uppercase",letterSpacing:".2px",marginBottom:5}}>{t}{req&&<span style={{color:RD}}> *</span>}</div>);
  const chk=(val,set,title,sub)=>(
    <div onClick={()=>set(p=>!p)} style={{display:"flex",gap:10,alignItems:"flex-start",cursor:"pointer",marginBottom:12}}>
      <div style={{width:20,height:20,borderRadius:5,border:"2px solid "+(val?BL:SEP),background:val?BL:"transparent",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontSize:11,flexShrink:0,marginTop:1}}>{val?"v":""}</div>
      <div><div style={{fontSize:13,color:TX,fontWeight:500}}>{title}</div>{sub&&<div style={{fontSize:12,color:TX3,marginTop:2}}>{sub}</div>}</div>
    </div>
  );
  const box=(bg,bc,children)=>(<div style={{background:bg,borderRadius:12,padding:"12px 14px",borderLeft:"3px solid "+bc,marginBottom:16}}>{children}</div>);
  const row2=(a,b)=>(<div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginBottom:12}}>{a}{b}</div>);
  const fld=(label,child,req=false,mb=12)=>(<div style={{marginBottom:mb}}>{lbl(label,req)}{child}</div>);
  const inp=(val,set,ph,type="text")=>(<input type={type} value={val} onChange={e=>set(e.target.value)} placeholder={ph} style={iStyle}/>);
  const sel=(val,set,opts)=>(
    <select value={val} onChange={e=>set(e.target.value)} style={{...iStyle,WebkitAppearance:"none",color:val?TX:TX3}}>
      <option value="">Select...</option>
      {opts.map(([v,l])=><option key={v} value={v}>{l}</option>)}
    </select>
  );
  const ta=(val,set,ph,rows=3)=>(
    <textarea value={val} onChange={e=>set(e.target.value)} placeholder={ph} rows={rows}
      style={{...iStyle,resize:"none",lineHeight:1.5}}/>
  );
  const rvRow=(label,val)=>val?(<div style={{display:"flex",justifyContent:"space-between",padding:"9px 14px",borderBottom:".5px solid "+SEP2}}><span style={{fontSize:13,color:TX3,width:120,flexShrink:0}}>{label}</span><span style={{fontSize:13,color:TX,fontWeight:500,textAlign:"right"}}>{val}</span></div>):null;

  return(
    <div style={{...screenBase,...(cur===6?screenOn:{})}}>
      {/* Dark purple header with step tracker */}
      <div style={{background:"linear-gradient(135deg,#1a0a2e,#2d1060)",padding:"52px 16px 16px",flexShrink:0}}>
        <button onClick={()=>step>1?setStep(s=>s-1):go(0)} style={{background:"none",border:"none",color:"rgba(255,255,255,.7)",fontSize:14,cursor:"pointer",fontFamily:"system-ui,sans-serif",padding:0,marginBottom:10}}>&lt; {step>1?"Back":"Home"}</button>
        <div style={{fontSize:17,fontWeight:700,color:"#fff"}}>Builder Application</div>
        <div style={{fontSize:12,color:"rgba(255,255,255,.55)",marginBottom:12}}>
          Step {Math.min(step,8)} of 8 - {STEP_DESC[Math.min(step,8)-1]}
        </div>
        <div style={{display:"flex",alignItems:"center",gap:3}}>
          {STEPS.map((s,i)=>[
            <div key={i} style={{width:20,height:20,borderRadius:"50%",background:step>i+1?GR:step===i+1?BL:SEP2,display:"flex",alignItems:"center",justifyContent:"center",fontSize:9,fontWeight:700,color:step>=i+1?"#fff":TX3,flexShrink:0}}>{step>i+1?"v":i+1}</div>,
            i<7&&<div key={i+"l"} style={{flex:1,height:2,background:step>i+1?GR:SEP2,borderRadius:1}}/>
          ])}
        </div>
      </div>

      <div style={{flex:1,overflowY:"auto",padding:"18px 16px 110px"}}>

        {/* -- STEP 1: APPLICATION INTAKE ------------------------------------ */}
        {step===1&&<>
          <div style={{fontSize:15,fontWeight:700,color:TX,marginBottom:2}}>Application Intake</div>
          <div style={{fontSize:13,color:TX3,marginBottom:14,lineHeight:1.5}}>We verify licenses and run a background check before approval. Provide accurate information - inconsistencies delay your application.</div>
          {box(BL_LT,BL,<>
            <div style={{fontSize:12,fontWeight:700,color:BL,marginBottom:3}}>What we collect</div>
            <div style={{fontSize:12,color:TX2,lineHeight:1.6}}>Name and business name  -  Trade and license numbers  -  Service area  -  Years of experience  -  Contact details</div>
          </>)}
          {row2(fld("First Name",inp(f.first,v=>setF(p=>({...p,first:v})),"Jane"),true,0),fld("Last Name",inp(f.last,v=>setF(p=>({...p,last:v})),"Smith"),true,0))}
          {fld("Email",inp(f.email,v=>setF(p=>({...p,email:v})),"you@email.com","email"),true)}
          {fld("Phone",inp(f.phone,v=>setF(p=>({...p,phone:v})),"","tel"),true)}
          {row2(fld("City",inp(f.city,v=>setF(p=>({...p,city:v})),"Houston"),true,0),fld("ZIP",inp(f.zip,v=>setF(p=>({...p,zip:v})),"77001"),false,0))}
          {fld("Company Name (optional)",inp(f.company,v=>setF(p=>({...p,company:v})),"Smith Contracting LLC"))}
          {fld("Trade / Profession",sel(f.trade,v=>setF(p=>({...p,trade:v})),[["general_contractor","General Contractor"],["repairman","Repairman"],["handyman","Handyman"],["furniture_specialist","Furniture Assembly Specialist"],["carpenter","Carpenter"],["other","Other Skilled Trade"]]),true)}
          {row2(
            fld("Trade License Number",inp(f.licNum,v=>setF(p=>({...p,licNum:v})),"If applicable"),false,0),
            fld("State",sel("TX",()=>{},[ ["TX","Texas"],["OK","Oklahoma"],["LA","Louisiana"]]),false,0)
          )}
        </>}

        {/* -- STEP 2: SKILLS & QUALITY SCREENING --------------------------- */}
        {step===2&&<>
          <div style={{fontSize:15,fontWeight:700,color:TX,marginBottom:2}}>Skills & Quality Screening</div>
          <div style={{fontSize:13,color:TX3,marginBottom:14,lineHeight:1.5}}>Honest, detailed answers are always best. We match your skills to the right jobs.</div>
          {fld("Years of Experience",sel(exp,setExp,[["under_1","Under 1 year"],["1_3","1-3 years"],["3_5","3-5 years"],["5_10","5-10 years"],["10_plus","10+ years"]]),true)}
          {fld("Vehicle Type",sel(vehicle,setVehicle,[["truck","Pickup Truck"],["van","Cargo Van"],["suv","SUV"],["car","Car (smaller items)"]]),true)}
          {fld("Availability",sel(avail,setAvail,[["weekdays","Weekdays only"],["weekends","Weekends only"],["both","Weekdays and weekends"],["flexible","Fully flexible"]]),true)}
          <div style={{marginBottom:14}}>
            {lbl("Assembly Skills (select all that apply)",true)}
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8}}>
              {allSkills.map(sk=>(
                <div key={sk} onClick={()=>setSkills(p=>p.includes(sk)?p.filter(x=>x!==sk):[...p,sk])}
                  style={{background:skills.includes(sk)?BL_LT:CARD,borderRadius:10,padding:"10px 12px",fontSize:13,cursor:"pointer",border:"1.5px solid "+(skills.includes(sk)?BL:"transparent"),color:skills.includes(sk)?BL:TX,transition:"all .15s"}}>
                  {sk}
                </div>
              ))}
            </div>
          </div>
          {fld("Describe how you would assemble a large IKEA wardrobe system.",ta(q1,setQ1,"Walk us through your step-by-step process..."),true)}
          {fld("A customer's item arrives with a damaged part. What do you do?",ta(q2,setQ2,"Describe how you handle this situation..."),true)}
          {fld("What tools do you carry on every job?",ta(q3,setQ3,"List your standard toolkit..."),true)}
          {fld("About You",ta(bio,setBio,"Briefly describe your background and why you want to join asmbly..."))}
        </>}

        {/* -- STEP 3: DOCUMENT UPLOAD --------------------------------------- */}
        {step===3&&<>
          <div style={{fontSize:15,fontWeight:700,color:TX,marginBottom:2}}>Document Upload</div>
          {box("#FFF9E8","#FF9500",<>
            <div style={{fontSize:12,fontWeight:700,color:"#7A5800",marginBottom:4}}>Critical Gate - Documents Required Before Review</div>
            <div style={{fontSize:12,color:"#7A5800",lineHeight:1.6}}>Your application is not reviewed until ALL required documents are uploaded. We verify each document within 1-2 business days. Do not trust PDFs blindly - we confirm active dates, coverage limits, and Additional Insured status directly with your carrier.</div>
          </>)}
          {DOCS.map(doc=>{
            const up=!!docs[doc.k];
            return(
              <div key={doc.k} style={{background:CARD,borderRadius:12,border:"1.5px solid "+(up?GR:doc.req?SEP:SEP2),marginBottom:10,padding:"13px 14px"}}>
                <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:4}}>
                  <div style={{display:"flex",alignItems:"center",gap:8}}>
                    <span style={{fontSize:13,fontWeight:600,color:TX}}>{doc.label}</span>
                    {doc.req&&<span style={{fontSize:10,background:RD,color:"#fff",borderRadius:100,padding:"1px 6px",fontWeight:600}}>Required</span>}
                  </div>
                  {up&&<span style={{fontSize:12,color:GR,fontWeight:600}}>Uploaded</span>}
                </div>
                <div style={{fontSize:12,color:TX3,marginBottom:8}}>{doc.hint}</div>
                {up?(
                  <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",background:GR_LT,borderRadius:8,padding:"7px 12px"}}>
                    <span style={{fontSize:12,color:GR}}>{docNames[doc.k]}</span>
                    <button onClick={()=>{setDocs(p=>({...p,[doc.k]:null}));setDocNames(p=>({...p,[doc.k]:""}));}} style={{background:"none",border:"none",color:TX3,cursor:"pointer",fontSize:12,fontFamily:"system-ui,sans-serif"}}>Remove</button>
                  </div>
                ):(
                  <label style={{display:"flex",alignItems:"center",gap:8,background:BL_LT,borderRadius:8,padding:"8px 12px",cursor:"pointer"}}>
                    <input type="file" accept=".pdf,image/*" style={{display:"none"}} onChange={e=>uploadDoc(doc.k,e)}/>
                    <span style={{fontSize:13,fontWeight:600,color:BL}}>+ Upload {doc.label}</span>
                  </label>
                )}
              </div>
            );
          })}
        </>}

        {/* -- STEP 4: INSURANCE VERIFICATION -------------------------------- */}
        {step===4&&<>
          <div style={{fontSize:15,fontWeight:700,color:TX,marginBottom:2}}>Insurance Verification</div>
          {box(BL_LT,BL,<>
            <div style={{fontSize:12,fontWeight:700,color:BL,marginBottom:4}}>What we verify (we do NOT trust PDFs blindly)</div>
            <div style={{fontSize:12,color:TX2,lineHeight:1.7}}>
              Policy active dates are current and not expired{"\n"}
              Coverage limits meet minimums ($1,000,000 GL){"\n"}
              asmbly LLC is listed as Additional Insured{"\n"}
              We may call your insurance agent directly to confirm
            </div>
          </>)}
          {fld("Insurance Carrier / Provider",inp(insurer,setInsurer,"e.g. State Farm, Hiscox, Travelers, Nationwide"),true)}
          {row2(fld("Policy Number",inp(polNum,setPolNum,"Policy #"),false,0),fld("Coverage Limit",inp(polLimit,setPolLimit,"e.g. $1,000,000"),false,0))}
          {fld("Policy Expiration Date",
            <input type="date" value={insExp} onChange={e=>setInsExp(e.target.value)} style={{...iStyle,borderColor:expired===true?RD:expired===false?GR:SEP}}/>,
          true)}
          {expired===true&&<div style={{background:"#FFF0EF",borderRadius:8,padding:"10px 12px",fontSize:13,color:RD,marginBottom:12,fontWeight:600}}>Policy appears expired. You must have active coverage before your application can be approved. Update your insurance and return.</div>}
          {expired===false&&expiringSoon&&<div style={{background:"#FFF9E8",borderRadius:8,padding:"10px 12px",fontSize:13,color:"#92400E",marginBottom:12,fontWeight:500}}>Your policy expires within 30 days. Renew before expiry to avoid auto-suspension once active.</div>}
          {expired===false&&!expiringSoon&&<div style={{background:GR_LT,borderRadius:8,padding:"10px 12px",fontSize:13,color:GR,marginBottom:12,fontWeight:500}}>Policy is current.</div>}
          {box("#FFF9E8","#FF9500",<>
            <div style={{fontSize:13,fontWeight:700,color:"#7A5800",marginBottom:8}}>Additional Insured Requirement</div>
            <div style={{fontSize:12,color:"#7A5800",lineHeight:1.5,marginBottom:10}}>asmbly LLC must be listed as Additional Insured on your General Liability policy. Contact your insurer to add us before your first job. This is verified before account activation.</div>
            {chk(addlInsured,()=>setAddlInsured(p=>!p),"I confirm asmbly LLC is or will be listed as Additional Insured on my GL policy before my first job.","You will be asked for a certificate evidencing this coverage prior to activation.")}
          </>)}
          <div style={{...card,padding:"12px 14px"}}>
            <div style={{fontSize:12,fontWeight:600,color:TX,marginBottom:8}}>Insurance types on file from Step 3</div>
            {[["gl","General Liability COI"],["wc","Workers Comp / Exemption"],["auto","Commercial Auto Insurance"],["w9","W-9 Tax Form"]].map(([k,l])=>(
              <div key={k} style={{display:"flex",alignItems:"center",gap:8,marginBottom:6}}>
                <div style={{width:16,height:16,borderRadius:"50%",background:docs[k]?GR_LT:SEP2,display:"flex",alignItems:"center",justifyContent:"center",fontSize:9,color:docs[k]?GR:TX3,fontWeight:700}}>{docs[k]?"v":"!"}</div>
                <span style={{fontSize:12,color:docs[k]?GR:TX3}}>{l} - {docs[k]?"Uploaded":"Missing - go back to Step 3"}</span>
              </div>
            ))}
          </div>
        </>}

        {/* -- STEP 5: SKILLS SCREENING -------------------------------------- */}
        {step===5&&<>
          <div style={{fontSize:15,fontWeight:700,color:TX,marginBottom:2}}>Skills Screening</div>
          <div style={{fontSize:13,color:TX3,marginBottom:14,lineHeight:1.5}}>We review every answer. Detailed, honest responses get approved faster.</div>
          {fld("Describe how you would assemble a large IKEA PAX wardrobe system.",ta(q1,setQ1,"Walk us through your step-by-step process from unboxing to final quality check..."),true)}
          {fld("A customer's item arrives with a damaged or missing part. What do you do?",ta(q2,setQ2,"Describe exactly how you handle this situation with the customer..."),true)}
          {fld("What tools do you carry on every job?",ta(q3,setQ3,"List your standard toolkit - hand tools, power tools, equipment..."),true)}
        </>}

        {/* -- STEP 6: AGREEMENT --------------------------------------------- */}
        {step===6&&<>
          <div style={{fontSize:15,fontWeight:700,color:TX,marginBottom:12}}>Independent Contractor Agreement</div>
          <div style={{background:CARD,borderRadius:12,border:".5px solid "+SEP2,padding:"14px",marginBottom:16,maxHeight:200,overflowY:"auto"}}>
            <div style={{fontSize:12,color:TX2,lineHeight:1.8}}>
              <span style={{fontWeight:700,color:TX}}>1. Independent Contractor Status.</span>{" "}Builder is engaged as an independent contractor of asmbly LLC, not an employee. Builder is solely responsible for all taxes, benefits, equipment, insurance premiums, and business expenses.
              {"\n\n"}<span style={{fontWeight:700,color:TX}}>2. Insurance Obligations.</span>{" "}Builder shall continuously maintain: (a) General Liability Insurance with minimum $1,000,000 per occurrence; (b) Professional Liability / Errors and Omissions Insurance; and (c) Commercial Auto Insurance covering business vehicle use. asmbly LLC shall be named Additional Insured on all GL policies. Builder's account will be automatically suspended if any required insurance expires or lapses.
              {"\n\n"}<span style={{fontWeight:700,color:TX}}>3. Platform Rules and Standards.</span>{" "}Builder agrees to complete all accepted jobs, maintain a minimum 4.0-star customer rating, follow all photo documentation requirements at pickup and delivery, and communicate professionally with customers at all times.
              {"\n\n"}<span style={{fontWeight:700,color:TX}}>4. Automatic Suspension Rules.</span>{" "}Account may be automatically suspended for: expired or lapsed insurance (system checks daily); sustained customer rating below 3.5; substantiated customer complaints; failure to complete accepted jobs; or evidence of fraudulent activity.
              {"\n\n"}<span style={{fontWeight:700,color:TX}}>5. Ongoing Compliance Monitoring.</span>{" "}Builder consents to asmbly monitoring insurance expiration dates and sending automated renewal reminders 30 days before expiry. Failure to renew will result in automatic account suspension on the expiry date.
              {"\n\n"}<span style={{fontWeight:700,color:TX}}>6. Governing Law.</span>{" "}This agreement is governed by the laws of the State of Texas. All disputes shall be resolved by binding arbitration in Houston, Texas.
            </div>
          </div>
          {chk(certIc,()=>setCertIc(p=>!p),"I confirm I am an independent contractor, not an employee of asmbly LLC.","I am solely responsible for my own taxes, expenses, equipment, and operations.")}
          {chk(certIns,()=>setCertIns(p=>!p),"I certify I hold or will obtain all required insurance before my first job, and I accept auto-suspension if my insurance expires.","General Liability, Professional Liability (E&O), and Commercial Auto Insurance are all required.")}
          {chk(certT,()=>setCertT(p=>!p),"I have read and agree to the full asmbly Builder Agreement and Terms of Service.")}
          <div style={{height:8}}/>
          {fld("Digital Signature - Full Legal Name",inp(sig,setSig,"Type your full legal name to sign electronically"),true)}
          {certIc&&certIns&&certT&&sig.length>2&&(
            <div style={{background:GR_LT,borderRadius:8,padding:"10px 12px",fontSize:12,color:GR,fontWeight:500,marginTop:8,lineHeight:1.5}}>
              Signed electronically by {sig} on {new Date(sigDate).toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"})}. This electronic signature is legally binding under the E-SIGN Act.
            </div>
          )}
        </>}

        {/* -- STEP 7: REVIEW & ACTIVATION GATE ------------------------------ */}
        {step===7&&<>
          <div style={{fontSize:15,fontWeight:700,color:TX,marginBottom:16}}>Review Your Application</div>

          {/* Activation gate */}
          <div style={{...card,marginBottom:16,overflow:"hidden"}}>
            <div style={{padding:"10px 14px",background:allGatesPass?GR_LT:BL_LT,borderBottom:".5px solid "+SEP2}}>
              <div style={{fontSize:12,fontWeight:700,color:allGatesPass?GR:BL,textTransform:"uppercase",letterSpacing:".4px"}}>
                {allGatesPass?"Activation Requirements Met":"Activation Checklist"}
              </div>
              <div style={{fontSize:11,color:allGatesPass?GR:TX3,marginTop:2}}>{allGatesPass?"Your account will be activated after our team verifies your documents.":"Complete all requirements before submitting."}</div>
            </div>
            {activationGates.map((g,i)=>(
              <div key={i} style={{display:"flex",alignItems:"center",gap:10,padding:"10px 14px",borderBottom:i<activationGates.length-1?".5px solid "+SEP2:"none"}}>
                <div style={{width:20,height:20,borderRadius:"50%",background:g.ok?GR_LT:SEP2,display:"flex",alignItems:"center",justifyContent:"center",fontSize:9,color:g.ok?GR:TX3,fontWeight:700,flexShrink:0}}>{g.ok?"v":"!"}</div>
                <span style={{fontSize:13,color:g.ok?GR:TX,fontWeight:g.ok?500:400}}>{g.label}</span>
              </div>
            ))}
          </div>

          {/* Application summary */}
          {[["Personal Information",[["Name",f.first+" "+f.last],["Email",f.email],["Phone",f.phone],["Location",f.city+(f.zip?", "+f.zip:"")],["Trade",f.trade.replace(/_/g," ")],f.company&&["Company",f.company]]],
            ["Experience",[["Experience",exp.replace(/_/g," ")],["Vehicle",vehicle.replace(/_/g," ")],["Availability",avail.replace(/_/g," ")],["Skills",skills.join(", ")]]],
            ["Documents",[["GL COI",docs.gl?"Uploaded":"MISSING"],["Workers Comp",docs.wc?"Uploaded":"MISSING"],["Auto Insurance",docs.auto?"Uploaded":"MISSING"],["W-9",docs.w9?"Uploaded":"MISSING"]]],
            ["Insurance",[["Carrier",insurer],["Policy Expiry",insExp?new Date(insExp).toLocaleDateString():""],["Add. Insured",addlInsured?"Confirmed":"Not confirmed"]]],
            ["Signature",[["Signed by",sig],["Date",sigDate?new Date(sigDate).toLocaleDateString():""]]]
          ].map(([title,rows])=>(
            <div key={title} style={{...card,marginBottom:12,overflow:"hidden"}}>
              <div style={{padding:"10px 14px",background:BL_LT,fontSize:11,fontWeight:700,color:BL,textTransform:"uppercase",letterSpacing:".4px"}}>{title}</div>
              {(rows.filter(Boolean)).map(r=>r&&rvRow(r[0],r[1]))}
            </div>
          ))}

          {/* Ongoing compliance monitoring notice */}
          {box(BL_LT,BL,<>
            <div style={{fontSize:12,fontWeight:700,color:BL,marginBottom:8}}>Ongoing Compliance Monitoring</div>
            <div style={{fontSize:12,color:TX2,lineHeight:1.8}}>
              Once active, asmbly automatically monitors your compliance daily:{"\n"}
              Auto-reminder sent 30 days before your insurance expires{"\n"}
              Account auto-suspended on insurance expiry date if not renewed{"\n"}
              Reactivation requires uploading a new COI and team verification{"\n"}
              Customer rating monitored - suspension if it falls below 3.5
            </div>
          </>)}

          {box("#FFF9E8","#FF9500",<>
            <div style={{fontSize:12,fontWeight:700,color:"#7A5800",marginBottom:6}}>What happens after you submit</div>
            <div style={{fontSize:12,color:"#7A5800",lineHeight:1.8}}>
              1. Team reviews your documents (1-2 business days){"\n"}
              2. We verify insurance is active and meets requirements{"\n"}
              3. We may call your insurance agent directly to confirm{"\n"}
              4. Agreement countersigned by asmbly{"\n"}
              5. Account activated - jobs start appearing on your dashboard
            </div>
          </>)}
        </>}

        {/* -- STEP 8: SUBMITTED ---------------------------------------------- */}
        {step===8&&done&&<>
          <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:16,paddingTop:12,textAlign:"center"}}>
            <div style={{width:72,height:72,background:GR_LT,borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",fontSize:28,color:GR,fontWeight:700}}>v</div>
            <div style={{fontSize:22,fontWeight:700,color:TX,letterSpacing:"-.4px"}}>Application Submitted!</div>
            <div style={{fontSize:14,color:TX3,lineHeight:1.6}}>Thank you, {f.first}. Our team will review your application and follow up at {f.email} within 1-2 business days.</div>
            <div style={{width:"100%",...card}}>
              {[["Status","Under review - pending document verification"],["Email",f.email],["Documents",`${Object.values(docs).filter(Boolean).length} of 5 uploaded`],["Insurance",insurer||"On file"],["Signed by",sig]].map(([l,v],i,a)=>(
                <div key={l} style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",padding:"10px 14px",borderBottom:i<a.length-1?".5px solid "+SEP2:"none"}}>
                  <span style={{fontSize:13,color:TX3,flexShrink:0,width:90}}>{l}</span>
                  <span style={{fontSize:13,color:TX,fontWeight:500,textAlign:"right",flex:1}}>{v}</span>
                </div>
              ))}
            </div>
            {/* Onboarding checklist */}
            <div style={{width:"100%",background:BL_LT,borderRadius:12,padding:"14px",textAlign:"left"}}>
              <div style={{fontSize:12,fontWeight:700,color:BL,marginBottom:10,textTransform:"uppercase",letterSpacing:".3px"}}>Your Onboarding Checklist</div>
              {[
                ["Application submitted",true],
                ["Documents uploaded",Object.values(docs).filter(Boolean).length>=4],
                ["Agreement signed electronically",!!(certIc&&certIns&&certT&&sig)],
                ["Document verification by asmbly (1-2 days)",false],
                ["Insurance confirmed by asmbly team",false],
                ["Account activated - jobs start arriving",false],
                ["Ongoing: Insurance monitored daily for expiry",false],
              ].map(([label,isDone],i)=>(
                <div key={i} style={{display:"flex",alignItems:"center",gap:8,marginBottom:8}}>
                  <div style={{width:18,height:18,borderRadius:"50%",background:isDone?GR:"rgba(94,23,235,.15)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:9,color:isDone?GR:BL,fontWeight:700,flexShrink:0}}>{isDone?"v":""}</div>
                  <span style={{fontSize:12,color:isDone?GR:TX3,fontWeight:isDone?500:400}}>{label}</span>
                </div>
              ))}
            </div>
            <div style={{fontSize:12,color:TX3}}>Questions? builders@asmbly.com</div>
          </div>
        </>}

        {err&&<div style={{background:"#FFF0EF",borderRadius:10,padding:"11px 13px",fontSize:13,color:RD,fontWeight:500,marginTop:12}}>{err}</div>}
      </div>

      {/* Continue / Submit button */}
      {step<8&&(
        <div style={{position:"absolute",bottom:0,left:0,right:0,padding:"10px 16px 32px",background:CARD,borderTop:".5px solid "+SEP2}}>
          {!canGo()&&<div style={{fontSize:12,color:TX3,textAlign:"center",marginBottom:6}}>
            {step===3?"Upload all required documents to continue":
             step===4&&!addlInsured?"Confirm Additional Insured to continue":
             step===4&&expired===true?"Policy expired - cannot continue with expired insurance":
             "Complete all required fields to continue"}
          </div>}
          <button disabled={!canGo()||saving} onClick={step===7?submit:()=>setStep(s=>s+1)}
            style={{...btnP,opacity:canGo()&&!saving?1:.45,background:step===7?GR:BL}}>
            {saving?"Submitting...":step===7?"Submit Application":"Continue"}
          </button>
        </div>
      )}
    </div>
  );
}

function Legal({id,cur,go,title,content}){
  return(
    <div style={{...screenBase,...(cur===id?screenOn:{}),background:"#fff"}}>
      <div style={{background:"linear-gradient(160deg,#5E17EB,#7C3AED)",padding:"60px 20px 20px"}}>
        <BackBtn go={go} n={-1} white/>
        <div style={{fontSize:24,fontWeight:700,color:"#fff",marginTop:8}}>{title}</div>
        <div style={{fontSize:12,color:"rgba(255,255,255,.7)",marginTop:4}}>Effective March 30, 2026 - asmbly LLC</div>
      </div>
      <div style={scr}><div style={{padding:20}}>
        {content.map(([t,b])=><div key={t} style={{marginBottom:20}}><div style={{fontSize:15,fontWeight:600,marginBottom:8}}>{t}</div><div style={{fontSize:14,color:TX2,lineHeight:1.65}}>{b}</div></div>)}
        <div style={{height:24}}/>
      </div></div>
    </div>
  );
}
function PhotoCapture({label,hint,value,onChange}){
  function handleFile(e){
    const file=e.target.files[0];
    if(!file)return;
    const reader=new FileReader();
    reader.onload=ev=>onChange(ev.target.result);
    reader.readAsDataURL(file);
  }
  return(
    <div style={{margin:"0 16px"}}>
      <div style={{fontSize:13,fontWeight:600,color:TX3,textTransform:"uppercase",letterSpacing:".2px",marginBottom:8}}>{label}</div>
      {value?(
        <div style={{position:"relative",borderRadius:13,overflow:"hidden",border:"2px solid "+GR}}>
          <img src={value} alt="captured" style={{width:"100%",display:"block",maxHeight:220,objectFit:"cover"}}/>
          <div style={{position:"absolute",top:10,right:10,background:GR,color:"#fff",borderRadius:100,padding:"4px 12px",fontSize:12,fontWeight:600}}>Photo saved</div>
          <button onClick={()=>onChange(null)} style={{position:"absolute",bottom:10,right:10,background:"rgba(0,0,0,.55)",color:"#fff",border:"none",borderRadius:100,padding:"5px 12px",fontSize:12,cursor:"pointer",fontFamily:"system-ui,sans-serif"}}>Retake</button>
        </div>
      ):(
        <label style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:10,height:180,background:CARD,borderRadius:13,border:"2.5px dashed "+SEP,cursor:"pointer",boxShadow:"0 2px 12px rgba(0,0,0,.06)"}}>
          <input type="file" accept="image/*" capture="environment" style={{display:"none"}} onChange={handleFile}/>
          <div style={{width:56,height:56,background:BL_LT,borderRadius:16,display:"flex",alignItems:"center",justifyContent:"center",fontSize:22,color:BL,fontWeight:700}}>[+]</div>
          <div style={{textAlign:"center"}}>
            <div style={{fontSize:15,fontWeight:600,color:TX}}>Take Photo</div>
            <div style={{fontSize:13,color:TX3,marginTop:3}}>{hint}</div>
          </div>
        </label>
      )}
    </div>
  );
}
const FLOW_STEPS=[
  {title:"Step 1 of 3: Pickup",sub:"Head to the customer address and pick up the item."},
  {title:"Step 2 of 3: Assembly",sub:"Assemble the item carefully and completely."},
  {title:"Step 3 of 3: Delivery",sub:"Return to the customer address and deliver the finished item."},
  {title:"Job Complete",sub:"Receipt saved and both parties notified."},
];
async function logComm({jobId, type, direction, initiatedBy, fromNumber, toNumber, toName, jobStatus, token}){
  try{
    await fetch(SB+"/rest/v1/communication_logs",{
      method:"POST",
      headers:{"Content-Type":"application/json","apikey":KEY,"Authorization":"Bearer "+(token||KEY),"Prefer":"return=minimal"},
      body:JSON.stringify({
        job_id:jobId||null,
        type,direction,
        initiated_by:initiatedBy||"unknown",
        from_number:fromNumber||null,
        to_number:toNumber||null,
        to_name:toName||null,
        initiated_at:new Date().toISOString(),
        job_status_at_time:jobStatus||null
      })
    });
  }catch(e)
}
function JobFlowOverlay({job,onClose,onJobUpdated,userToken}){
  const [step,setStep]=useState(()=>{
    if(job.status==="assigned")return 0;
    if(job.status==="picked_up")return 1;
    if(job.status==="assembled")return 2;
    return 3;
  });
  const [pickupPhoto,setPickupPhoto]=useState(job.pickup_photo_url||null);
  const [deliveryPhoto,setDeliveryPhoto]=useState(job.delivery_photo_url||null);
  const [pickupNote,setPickupNote]=useState(job.builder_notes_pickup||"");
  const [deliveryNote,setDeliveryNote]=useState(job.builder_notes_delivery||"");
  const [saving,setSaving]=useState(false);
  const [error,setError]=useState("");
  const [commLogs,setCommLogs]=useState([]);
  async function patch(fields){
    const r=await fetch(SB+"/rest/v1/builder_jobs?id=eq."+job.id,{method:"PATCH",headers:{"Content-Type":"application/json",apikey:KEY,Authorization:"Bearer "+(userToken||KEY),Prefer:"return=minimal"},body:JSON.stringify(fields)});
    if(!r.ok)throw new Error("Save failed");
  }
  function buildHtml(pu,del,logs){
    const logRows=(logs||[]).map(l=>
      "<tr><td style='color:#555;padding:4px 0'>"+(l.type==="call"?"Call":"SMS")+"</td>"+
      "<td style='color:#555;padding:4px 0'>"+l.direction.replace("_"," to ").replace("_"," ")+"</td>"+
      "<td style='color:#555;padding:4px 0'>"+l.toName+"</td>"+
      "<td style='color:#555;padding:4px 0'>"+new Date(l.initiated_at).toLocaleString("en-US",{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})+"</td></tr>"
    ).join("");
    const commSection=logs&&logs.length>0
      ? "<h2>Communication Log ("+logs.length+" event"+(logs.length!==1?"s":"")+")</h2>"+
        "<table style='width:100%;font-size:14px;border-collapse:collapse'>"+
        "<tr><th style='text-align:left;color:#888;padding:4px 0'>Type</th><th style='text-align:left;color:#888;padding:4px 0'>Direction</th><th style='text-align:left;color:#888;padding:4px 0'>With</th><th style='text-align:left;color:#888;padding:4px 0'>Time</th></tr>"+
        logRows+"</table>"
      : "<p style='color:#aaa;font-size:14px'>No calls or messages during this job.</p>";
    return["<html><body style='font-family:system-ui,sans-serif;max-width:600px;margin:0 auto;padding:32px'>",
      "<h1 style='color:#5E17EB'>asmbly - Job Receipt</h1>",
      "<p style='color:#888'>Completed "+new Date().toLocaleString()+"</p><hr>",
      "<table style='width:100%;font-size:15px'>",
      "<tr><td style='color:#555;width:160px'>Item</td><td><b>"+job.item_name+"</b></td></tr>",
      "<tr><td style='color:#555'>Customer</td><td>"+job.customer_name+"</td></tr>",
      "<tr><td style='color:#555'>Address</td><td>"+job.customer_address+"</td></tr>",
      "<tr><td style='color:#555'>Builder</td><td>"+job.builder_name+"</td></tr>",
      "<tr><td style='color:#555'>Price</td><td><b>$"+parseFloat(job.price).toFixed(2)+"</b></td></tr>",
      "</table><hr>",
      "<h2>Pickup Photo</h2>",pu?"<img src='"+pu+"' style='width:100%;border-radius:10px'>":"<p>No photo</p>",
      pickupNote?"<p><b>Note:</b> "+pickupNote+"</p>":"",
      "<h2>Delivery Photo</h2>",del?"<img src='"+del+"' style='width:100%;border-radius:10px'>":"<p>No photo</p>",
      deliveryNote?"<p><b>Note:</b> "+deliveryNote+"</p>":"",
      "<hr>",commSection,
      "<hr><p style='color:#aaa;text-align:center'>asmbly.com</p></body></html>",
    ].join("");
  }
  async function advance(){
    setError("");setSaving(true);
    try{
      if(step===0){
        if(!pickupPhoto){setError("Please take a photo to confirm pickup.");setSaving(false);return;}
        await patch({status:"picked_up",picked_up_at:new Date().toISOString(),pickup_photo_url:pickupPhoto,builder_notes_pickup:pickupNote});
        setStep(1);
      }else if(step===1){
        await patch({status:"assembled",assembled_at:new Date().toISOString()});
        setStep(2);
      }else if(step===2){
        if(!deliveryPhoto){setError("Please take a photo to confirm delivery.");setSaving(false);return;}
        const deliveredAt=new Date().toISOString();
        await patch({status:"delivered",delivered_at:deliveredAt,delivery_photo_url:deliveryPhoto,builder_notes_delivery:deliveryNote});
        const html=buildHtml(pickupPhoto,deliveryPhoto,commLogs);
        await fetch(SB+"/rest/v1/job_receipts",{method:"POST",headers:{"Content-Type":"application/json",apikey:KEY,Authorization:"Bearer "+(userToken||KEY),Prefer:"return=minimal"},body:JSON.stringify({job_id:job.id,builder_email:job.builder_email,builder_name:job.builder_name,customer_name:job.customer_name,customer_email:job.customer_email||"",customer_address:job.customer_address,item_name:job.item_name,complexity:job.complexity,price:job.price,scheduled_pickup:job.scheduled_pickup,scheduled_dropoff:job.scheduled_dropoff,picked_up_at:job.picked_up_at,assembled_at:new Date().toISOString(),delivered_at:deliveredAt,pickup_photo_url:pickupPhoto,delivery_photo_url:deliveryPhoto,builder_notes_pickup:pickupNote,builder_notes_delivery:deliveryNote,receipt_html:html,emailed_builder:false,emailed_customer:false,call_count:commLogs.filter(l=>l.type==="call").length,message_count:commLogs.filter(l=>l.type==="message").length,comm_log:commLogs})});
        setStep(3);
        if(onJobUpdated)onJobUpdated();
      }
    }catch(e){setError("Save failed - please try again.");}
    setSaving(false);
  }
  return(
    <div style={{position:"absolute",inset:0,background:BG,display:"flex",flexDirection:"column",zIndex:500,overflow:"hidden"}}>
      <div style={{background:CARD,padding:"52px 20px 16px",flexShrink:0,borderBottom:".5px solid "+SEP2}}>
        <button onClick={onClose} style={{background:"none",border:"none",cursor:"pointer",fontSize:17,color:BL,fontFamily:"system-ui,sans-serif",padding:0,marginBottom:12}}>&lt; Jobs</button>
        <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:12}}>
          <div style={{width:40,height:40,background:step===3?GR_LT:BL_LT,borderRadius:11,display:"flex",alignItems:"center",justifyContent:"center",fontSize:16,color:step===3?GR:BL,fontWeight:700,flexShrink:0}}>{step===3?"v":step+1}</div>
          <div>
            <div style={{fontSize:17,fontWeight:700,color:TX}}>{FLOW_STEPS[step].title}</div>
            <div style={{fontSize:13,color:TX3,marginTop:2}}>{FLOW_STEPS[step].sub}</div>
          </div>
        </div>
        <div style={{display:"flex",alignItems:"center",gap:6}}>
          {[0,1,2].map(i=><div key={i} style={{flex:1,height:4,borderRadius:2,background:i<step?GR:i===step?BL:SEP2,transition:"background .3s"}}/>)}
        </div>
      </div>
      <div style={{flex:1,overflowY:"auto",padding:"20px 0"}}>
        <div style={{...card,margin:"0 16px 12px"}}>
          <div style={{padding:"14px 16px",borderBottom:".5px solid "+SEP2}}>
            <div style={{fontSize:17,fontWeight:700,color:TX}}>{job.item_name}</div>
            <div style={{fontSize:13,color:TX3,marginTop:3}}>{job.customer_name} - {job.customer_address}</div>
          </div>
          <div style={{display:"flex"}}>
            {[["Complexity",job.complexity],["Price","$"+parseFloat(job.price).toFixed(0)],["Pickup",job.scheduled_pickup||"-"]].map(([l,v],i)=>(
              <div key={l} style={{flex:1,padding:"10px 16px",borderRight:i<2?".5px solid "+SEP2:"none"}}>
                <div style={{fontSize:11,color:TX3,textTransform:"uppercase",letterSpacing:".2px",marginBottom:3}}>{l}</div>
                <div style={{fontSize:14,fontWeight:600,color:TX}}>{v}</div>
              </div>
            ))}
          </div>
        </div>
        {job.customer_phone&&step<3&&(
          <div style={{display:"flex",gap:8,margin:"0 16px 20px"}}>
            <a href={"tel:"+job.customer_phone.replace(/[^0-9+]/g,"")}
              onClick={()=>{
                const entry={type:"call",direction:"builder_to_customer",initiated_by:job.builder_email,from_number:job.builder_phone||"",to_number:job.customer_phone,to_name:job.customer_name,initiated_at:new Date().toISOString(),job_status_at_time:job.status};
                setCommLogs(prev=>[...prev,entry]);
                logComm({jobId:job.id,...entry,token:userToken});
              }}
              style={{flex:1,background:BL_LT,borderRadius:10,padding:"11px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:14,fontWeight:600,color:BL,cursor:"pointer",textDecoration:"none",gap:6}}>
              Call Customer
            </a>
            <a href={"sms:"+job.customer_phone.replace(/[^0-9+]/g,"")}
              onClick={()=>{
                const entry={type:"message",direction:"builder_to_customer",initiated_by:job.builder_email,from_number:job.builder_phone||"",to_number:job.customer_phone,to_name:job.customer_name,initiated_at:new Date().toISOString(),job_status_at_time:job.status};
                setCommLogs(prev=>[...prev,entry]);
                logComm({jobId:job.id,...entry,token:userToken});
              }}
              style={{flex:1,background:"#E8F8ED",borderRadius:10,padding:"11px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:14,fontWeight:600,color:GR,cursor:"pointer",textDecoration:"none",gap:6}}>
              Message Customer
            </a>
          </div>
        )}
        {commLogs.length>0&&step<3&&(
          <div style={{margin:"0 16px 20px",...card,padding:"12px 14px"}}>
            <div style={{fontSize:12,fontWeight:600,color:TX3,textTransform:"uppercase",letterSpacing:".2px",marginBottom:8}}>Communication Log ({commLogs.length})</div>
            {commLogs.map((l,i)=>(
              <div key={i} style={{display:"flex",alignItems:"center",gap:10,padding:"6px 0",borderBottom:i<commLogs.length-1?".5px solid "+SEP2:"none"}}>
                <div style={{width:28,height:28,borderRadius:8,background:l.type==="call"?BL_LT:"#E8F8ED",display:"flex",alignItems:"center",justifyContent:"center",fontSize:12,fontWeight:700,color:l.type==="call"?BL:GR,flexShrink:0}}>{l.type==="call"?"Ph":"Msg"}</div>
                <div style={{flex:1}}>
                  <div style={{fontSize:13,fontWeight:500,color:TX}}>{l.type==="call"?"Called":"Messaged"} {l.toName}</div>
                  <div style={{fontSize:11,color:TX3}}>{new Date(l.initiated_at).toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit"})}</div>
                </div>
              </div>
            ))}
          </div>
        )}
        {step===0&&<>
          <div style={{margin:"0 16px 20px",background:"#FFF9E8",borderRadius:12,padding:"13px 16px",borderLeft:"3px solid #FF9500"}}>
            <div style={{fontSize:14,fontWeight:600,color:"#7A5800",marginBottom:4}}>Pickup Instructions</div>
            <div style={{fontSize:13,color:"#7A5800",lineHeight:1.6}}>
              1. Go to {job.customer_address}<br/>
              2. Locate the package at the customer door<br/>
              3. Snap a photo of the package to confirm pickup<br/>
              4. Tap Confirm Pickup to proceed
            </div>
          </div>
          <PhotoCapture label="Pickup Photo (required)" hint="Photo of package at customer door" value={pickupPhoto} onChange={setPickupPhoto}/>
          <div style={{height:16}}/>
          <div style={{margin:"0 16px"}}>
            <div style={{fontSize:13,fontWeight:600,color:TX3,textTransform:"uppercase",letterSpacing:".2px",marginBottom:8}}>Pickup Notes (optional)</div>
            <textarea value={pickupNote} onChange={e=>setPickupNote(e.target.value)} placeholder="Any notes about the pickup..." style={{width:"100%",background:CARD,border:".5px solid "+SEP,borderRadius:12,padding:"12px 14px",fontSize:14,color:TX,fontFamily:"system-ui,sans-serif",lineHeight:1.5,resize:"none",height:80,outline:"none",boxSizing:"border-box"}}/>
          </div>
        </>}
        {step===1&&<>
          <div style={{margin:"0 16px 20px",background:BL_LT,borderRadius:12,padding:"13px 16px",borderLeft:"3px solid "+BL}}>
            <div style={{fontSize:14,fontWeight:600,color:BL,marginBottom:4}}>Assembly Instructions</div>
            <div style={{fontSize:13,color:TX2,lineHeight:1.6}}>
              1. Find a clean, spacious work area<br/>
              2. Lay out all parts and hardware before starting<br/>
              3. Follow the manufacturer instructions carefully<br/>
              4. Double-check all connections and fasteners<br/>
              5. Tap Assembly Complete when finished
            </div>
          </div>
          <div style={{...card,margin:"0 16px"}}>
            {[["Item",job.item_name],["Complexity",job.complexity],["Dropoff by",job.scheduled_dropoff||"-"]].map(([l,v])=>(
              <div key={l} style={{display:"flex",justifyContent:"space-between",padding:"12px 16px",borderBottom:".5px solid "+SEP2}}>
                <span style={{fontSize:14,color:TX3}}>{l}</span><span style={{fontSize:14,fontWeight:500,color:TX}}>{v}</span>
              </div>
            ))}
          </div>
          {pickupPhoto&&<>
            <div style={{height:16}}/>
            <div style={{margin:"0 16px"}}>
              <div style={{fontSize:13,fontWeight:600,color:TX3,textTransform:"uppercase",letterSpacing:".2px",marginBottom:8}}>Pickup Confirmed</div>
              <img src={pickupPhoto} alt="pickup" style={{width:"100%",borderRadius:12,display:"block",maxHeight:160,objectFit:"cover",border:"1.5px solid "+GR}}/>
            </div>
          </>}
        </>}
        {step===2&&<>
          <div style={{margin:"0 16px 20px",background:GR_LT,borderRadius:12,padding:"13px 16px",borderLeft:"3px solid "+GR}}>
            <div style={{fontSize:14,fontWeight:600,color:GR,marginBottom:4}}>Delivery Instructions</div>
            <div style={{fontSize:13,color:TX2,lineHeight:1.6}}>
              1. Carefully transport the assembled item<br/>
              2. Deliver to {job.customer_address}<br/>
              3. Snap a photo of the completed assembly<br/>
              4. Tap Confirm Delivery to complete the job
            </div>
          </div>
          <PhotoCapture label="Delivery Photo (required)" hint="Photo of completed assembly at drop-off" value={deliveryPhoto} onChange={setDeliveryPhoto}/>
          <div style={{height:16}}/>
          <div style={{margin:"0 16px"}}>
            <div style={{fontSize:13,fontWeight:600,color:TX3,textTransform:"uppercase",letterSpacing:".2px",marginBottom:8}}>Delivery Notes (optional)</div>
            <textarea value={deliveryNote} onChange={e=>setDeliveryNote(e.target.value)} placeholder="Any notes about the delivery..." style={{width:"100%",background:CARD,border:".5px solid "+SEP,borderRadius:12,padding:"12px 14px",fontSize:14,color:TX,fontFamily:"system-ui,sans-serif",lineHeight:1.5,resize:"none",height:80,outline:"none",boxSizing:"border-box"}}/>
          </div>
        </>}
        {step===3&&(
          <div style={{display:"flex",flexDirection:"column",alignItems:"center",padding:"32px 24px",gap:16}}>
            <div style={{width:80,height:80,background:GR_LT,borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",fontSize:32,color:GR,fontWeight:700}}>v</div>
            <div style={{fontSize:24,fontWeight:700,color:TX,letterSpacing:"-.5px",textAlign:"center"}}>Job Complete!</div>
            <div style={{fontSize:15,color:TX3,textAlign:"center",lineHeight:1.5}}>Receipt saved with both confirmation photos and logged for admin review.</div>
            <div style={{width:"100%",...card}}>
              {[["Item",job.item_name],["Customer",job.customer_name],["Address",job.customer_address],["Price","$"+parseFloat(job.price).toFixed(2)],["Completed",new Date().toLocaleString("en-US",{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})]].map(([l,v],i,a)=>(
                <div key={l} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"12px 16px",borderBottom:i<a.length-1?".5px solid "+SEP2:"none"}}>
                  <span style={{fontSize:14,color:TX3}}>{l}</span>
                  <span style={{fontSize:14,fontWeight:500,color:TX,textAlign:"right",maxWidth:"60%"}}>{v}</span>
                </div>
              ))}
            </div>
            {(pickupPhoto||deliveryPhoto)&&(
              <div style={{display:"flex",gap:12,width:"100%"}}>
                {pickupPhoto&&<img src={pickupPhoto} alt="pickup" style={{flex:1,borderRadius:10,objectFit:"cover",height:100,border:"1.5px solid "+GR}}/>}
                {deliveryPhoto&&<img src={deliveryPhoto} alt="delivery" style={{flex:1,borderRadius:10,objectFit:"cover",height:100,border:"1.5px solid "+GR}}/>}
              </div>
            )}
            <div style={{fontSize:12,color:TX3,textAlign:"center"}}>Receipt saved to admin database</div>
          </div>
        )}
        {error&&<div style={{margin:"12px 16px 0",background:"#FFF0EF",borderRadius:10,padding:"12px 14px",fontSize:14,color:RD,fontWeight:500}}>{error}</div>}
        <div style={{height:32}}/>
      </div>
      {step<3&&(
        <div style={{padding:"12px 16px 36px",flexShrink:0,background:CARD,borderTop:".5px solid "+SEP2}}>
          <button onClick={advance} disabled={saving} style={{...btnP,opacity:saving?0.6:1:1,background:step===2?GR:BL}}>
            {saving?"Saving...":step===0?"Confirm Pickup":step===1?"Assembly Complete":"Confirm Delivery"}
          </button>
        </div>
      )}
      {step===3&&(
        <div style={{padding:"12px 16px 36px",flexShrink:0,background:CARD,borderTop:".5px solid "+SEP2}}>
          <button onClick={onClose} style={{...btnP,background:GR}}>Back to My Jobs</button>
        </div>
      )}
    </div>
  );
}
function S10({go,cur,onSettings,user}){
  const [email,setEmail]=useState(user?.email||"marcus@asmbly.com");
  useEffect(()=>{if(user?.email)setEmail(user.email);},[user?.email]);
  const [jobs,setJobs]=useState([]);
  const [loading,setLoading]=useState(false);
  const [hello,setHello]=useState("Your active assignments");
  const [toast,setToast]=useState("");
  const [toastVis,setToastVis]=useState(false);
  const [activeJob,setActiveJob]=useState(null);
  const ST={assigned:"Assigned",picked_up:"Picked Up",assembled:"Assembled",delivered:"Delivered"};
  const STEP_LBL={assigned:"Job assigned",picked_up:"Item picked up",assembled:"Assembly complete",delivered:"Item delivered"};
  useEffect(()=>{if(cur===10&&email)load();},[cur]);
  useEffect(()=>{if(cur===10&&email)load();},[cur]);
  function showToast(m){setToast(m);setToastVis(true);setTimeout(()=>setToastVis(false),2500);}
  async function load(){
    if(!email){showToast("Please enter your email");return;}
    setLoading(true);
    try{
      const r=await fetch(SB+"/rest/v1/builder_jobs?builder_email=eq."+encodeURIComponent(email)+"&order=created_at.asc",{headers:{apikey:KEY,Authorization:"Bearer "+KEY}});
      const data=await r.json();
      const sorted=[...data].sort((a,b)=>(a.status==="delivered"?1:0)-(b.status==="delivered"?1:0));
      setJobs(sorted);
      if(sorted.length>0){
        const act=sorted.filter(j=>j.status!=="delivered").length;
        setHello("Hi "+sorted[0].builder_name.split(" ")[0]+" - "+act+(act===1?" job":" jobs")+" in progress");
      }
    }catch{showToast("Could not load jobs.");}
    setLoading(false);
  }
  const active=jobs.filter(j=>j.status!=="delivered").length;
  const done=jobs.filter(j=>j.status==="delivered").length;
  return(
    <div style={{...screenBase,...(cur===10?screenOn:{})}}>
      <div style={scr}>
        <div style={{background:"linear-gradient(160deg,#1a0a2e,#2d1060)",padding:"80px 20px 24px"}}>
          <div style={{display:"flex",alignItems:"flex-start",justifyContent:"space-between"}}>
            <div>
              <div style={{fontSize:28,fontWeight:700,color:"#fff",letterSpacing:"-.5px"}}>My Jobs</div>
              <div style={{fontSize:14,color:"rgba(255,255,255,.6)",marginTop:4}}>{hello}</div>
            </div>
            <div style={{display:"flex",gap:8,alignItems:"center"}}>
              {onSettings&&(
                <div onClick={onSettings} style={{width:34,height:34,borderRadius:"50%",background:"rgba(255,255,255,.12)",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer"}}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="3"/>
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
                  </svg>
                </div>
              )}
              <button onClick={()=>go(6)} style={{background:"rgba(255,255,255,.12)",border:"1px solid rgba(255,255,255,.2)",color:"#fff",borderRadius:100,padding:"7px 14px",fontSize:13,fontWeight:500,cursor:"pointer",fontFamily:"system-ui,sans-serif"}}>+ Apply</button>
            </div>
          </div>
          <div style={{display:"flex",gap:10,marginTop:20}}>
            {[["Total",jobs.length],["In progress",active],["Completed",done]].map(([l,v])=>(
              <div key={l} style={{background:"rgba(255,255,255,.08)",borderRadius:13,padding:"12px 16px",flex:1,border:"1px solid rgba(255,255,255,.1)"}}>
                <div style={{fontSize:24,fontWeight:700,color:"#fff"}}>{v}</div>
                <div style={{fontSize:12,color:"rgba(255,255,255,.55)",marginTop:2}}>{l}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{height:16}}/>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 20px",marginBottom:6}}>
          <div style={{fontSize:13,fontWeight:600,color:TX3,letterSpacing:".2px",textTransform:"uppercase"}}>Assigned Jobs</div>
          <button onClick={load} style={{background:BL,color:"#fff",border:"none",borderRadius:100,padding:"5px 14px",fontFamily:"system-ui,sans-serif",fontSize:13,fontWeight:600,cursor:"pointer"}}>Refresh</button>
        </div>
        {loading&&<div style={{textAlign:"center",padding:40,color:TX3,fontSize:15}}>Loading...</div>}
        {!loading&&jobs.length===0&&(
          <div style={{textAlign:"center",padding:"40px 24px"}}>
            <div style={{fontSize:17,fontWeight:600,marginBottom:8}}>No jobs yet</div>
            <div style={{fontSize:15,color:TX3}}>Enter your email and tap Load</div>
          </div>
        )}
        {jobs.map(job=>{
          const st=job.status||"assigned";
          const ci=["assigned","picked_up","assembled","delivered"].indexOf(st);
          return(
            <div key={job.id} style={{...card,margin:"0 16px 12px",overflow:"hidden",border:`2px solid ${st!=="delivered"?BL:"transparent"}`}}>
              <div style={{padding:"14px 16px",borderBottom:".5px solid "+SEP2,position:"relative"}}>
                <div style={{fontSize:17,fontWeight:600}}>{job.item_name}</div>
                <div style={{fontSize:13,color:TX3,marginTop:3}}>{job.customer_name} - {job.customer_address}</div>
                <div style={{position:"absolute",top:14,right:16,fontSize:20,fontWeight:700}}>${parseFloat(job.price).toFixed(0)}</div>
                <div style={{display:"flex",gap:6,flexWrap:"wrap",marginTop:10,alignItems:"center"}}>
                  <span style={{display:"inline-flex",background:st!=="delivered"?BL_LT:BG,borderRadius:100,padding:"4px 10px",fontSize:12,fontWeight:500,color:st!=="delivered"?BL:TX2}}>{ST[st]}</span>
                  <span style={{display:"inline-flex",background:BG,borderRadius:100,padding:"4px 10px",fontSize:12,fontWeight:500,color:TX2}}>{job.complexity}</span>
                  <span style={{display:"inline-flex",background:BG,borderRadius:100,padding:"4px 10px",fontSize:12,fontWeight:500,color:TX2}}>{job.scheduled_pickup}</span>
                  {st!=="delivered"&&(
                    <button onClick={()=>setActiveJob(job)} style={{marginLeft:"auto",background:BL,color:"#fff",border:"none",borderRadius:100,padding:"5px 14px",fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"system-ui,sans-serif"}}>
                      {st==="assigned"?"Start Job":"Continue Job"}
                    </button>
                  )}
                </div>
              </div>
              {["assigned","picked_up","assembled","delivered"].map((k,i)=>{
                const isDone=i<ci,isAct=i===ci;
                const ts=[job.created_at,job.picked_up_at,job.assembled_at,job.delivered_at][i];
                const tsStr=ts?new Date(ts).toLocaleString("en-US",{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}):"";
                return(
                  <div key={k} style={{display:"flex",alignItems:"center",gap:12,padding:"12px 16px",borderBottom:i<3?".5px solid "+SEP2:"none"}}>
                    <div style={{width:32,height:32,borderRadius:9,background:isDone?GR_LT:isAct?BL_LT:BG,display:"flex",alignItems:"center",justifyContent:"center",fontSize:13,flexShrink:0,color:isDone?GR:isAct?BL:TX3,fontWeight:600}}>{isDone?"v":isAct?">":"."}</div>
                    <div style={{fontSize:15,fontWeight:500,flex:1,color:isDone?GR:isAct?BL:TX3}}>{STEP_LBL[k]}</div>
                    {tsStr&&<div style={{fontSize:11,color:TX3}}>{tsStr}</div>}
                  </div>
                );
              })}
              {st!=="delivered"&&(
                <div style={{padding:"12px 16px"}}>
                  <button onClick={()=>setActiveJob(job)} style={{...btnP,padding:"12px 16px",fontSize:15,borderRadius:10}}>
                    {st==="assigned"?"Start Job Workflow":"Continue Job Workflow"}
                  </button>
                </div>
              )}
            </div>
          );
        })}
        <div style={{height:24}}/>
      </div>
      <div style={{position:"absolute",bottom:95,left:20,right:20,background:"rgba(30,30,30,.92)",color:"#fff",borderRadius:14,padding:"14px 18px",fontSize:15,fontWeight:500,textAlign:"center",zIndex:400,opacity:toastVis?1:0,transform:toastVis?"translateY(0)":"translateY(6px)",transition:"all .3s",pointerEvents:"none"}}>{toast}</div>
      <TabBar active={3} go={go}/>
      {activeJob&&<JobFlowOverlay job={activeJob} onClose={()=>{setActiveJob(null);load();}} onJobUpdated={load} userToken={user?.token}/>}
    </div>
  );
}
const VAPID_PUBLIC_KEY = "BFTJDa8Y8Awsc0NrScVYyS1BwI925xhfYNT5tk2Jw54xMky0iBf48FPd233RzLDpXOhbJp6qGH2_K7Mrps5GJX0";
async function savePushToken(email, token, subscription) {
  try {
    await fetch(SB + "/rest/v1/push_tokens", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "apikey": KEY,
        "Authorization": "Bearer " + (token || KEY),
        "Prefer": "resolution=merge-duplicates,return=minimal",
      },
      body: JSON.stringify({
        customer_email: email,
        endpoint: subscription.endpoint,
        p256dh: btoa(String.fromCharCode(...new Uint8Array(subscription.getKey("p256dh")))),
        auth: btoa(String.fromCharCode(...new Uint8Array(subscription.getKey("auth")))),
        user_agent: navigator.userAgent,
        updated_at: new Date().toISOString(),
      }),
    });
  } catch (e) { /* non-fatal */ }
}
async function registerPush(user) {
  if (!user?.email || !("serviceWorker" in navigator) || !("PushManager" in window)) return;
  try {
    const reg = await navigator.serviceWorker.register("/sw.js").catch(() => null);
    if (!reg) return;
    const existing = await reg.pushManager.getSubscription();
    const sub = existing || await reg.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: VAPID_PUBLIC_KEY,
    });
    await savePushToken(user.email, user.token, sub);
  } catch (e) { /* user denied or not supported */ }
}
// Production ErrorBoundary - catches all React errors gracefully
class ErrorBoundary extends React.Component{
  constructor(props){super(props);this.state={hasError:false,error:null};}
  static getDerivedStateFromError(error){return{hasError:true,error};}
  componentDidCatch(error,info){console.error("asmbly crash:",error,info);}
  render(){
    if(this.state.hasError){
      return(
        <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100vh",background:"#F2F2F7",padding:32,textAlign:"center"}}>
          <div style={{fontSize:40,marginBottom:16}}>[!]</div>
          <div style={{fontSize:20,fontWeight:700,color:"#000",marginBottom:8}}>Something went wrong</div>
          <div style={{fontSize:14,color:"#8E8E93",marginBottom:24,lineHeight:1.5}}>
            The app encountered an unexpected error. Please reload to continue.
          </div>
          <button onClick={()=>{this.setState({hasError:false,error:null});window.location.reload();}}
            style={{background:"#5E17EB",color:"#fff",border:"none",borderRadius:14,padding:"14px 28px",fontSize:16,fontWeight:700,cursor:"pointer",fontFamily:"system-ui,sans-serif"}}>
            Reload App
          </button>
          {this.state.error&&<div style={{marginTop:16,fontSize:11,color:"#C6C6C8",maxWidth:280,wordBreak:"break-all"}}>
            {this.state.error.message}
          </div>}
        </div>
      );
    }
    return this.props.children;
  }
}

export default function App(){
  const [cur,setCur]=useState(0);
  const [prev,setPrev]=useState(0);
  const [user,setUser]=useState(null);
  const [estimate,setEstimate]=useState(null);
  const [activeJob,setActiveJob]=useState(null); // job record created at booking
  const [showSettings,setShowSettings]=useState(false);
  const [orderStatus,setOrderStatus]=useState(null);
  const [statusToast,setStatusToast]=useState(null);
  function go(n){if(n===-1){setCur(prev);return;}setPrev(cur);setCur(n);}
  function openSettings(){setShowSettings(true);}
  function closeSettings(){setShowSettings(false);}
  // Handle Google OAuth callback - parse tokens from URL hash after redirect
  useEffect(()=>{
    const hash = window.location.hash;
    if(!hash.includes("access_token")) return;
    const params = new URLSearchParams(hash.replace(/^#/,""));
    const accessToken = params.get("access_token");
    const tokenType   = params.get("token_type");
    if(!accessToken||tokenType!=="bearer") return;
    fetch(SB+"/auth/v1/user",{headers:{apikey:KEY,Authorization:"Bearer "+accessToken}})
      .then(r=>r.json())
      .then(data=>{
        if(!data.email) return;
        const u={email:data.email,token:accessToken,googleUser:true};
        setUser(u);
        window.history.replaceState(null,"",window.location.pathname+window.location.search);
        fetch(SB+"/rest/v1/builder_jobs?builder_email=eq."+encodeURIComponent(data.email)+"&limit=1",{
          headers:{apikey:KEY,Authorization:"Bearer "+accessToken}
        })
        .then(r=>r.json())
        .then(jobs=>setCur(Array.isArray(jobs)&&jobs.length>0?10:1))
        .catch(()=>setCur(1));
      })
      .catch(()=>{});
  },[]);

  useEffect(()=>{
    if(user){
      requestPushPermission(user);
    }
  },[user?.email]);
  async function requestPushPermission(u){
    if(!u?.email||!("Notification" in window)) return;
    try{
      const perm = Notification.permission === "default"
        ? await Notification.requestPermission()
        : Notification.permission;
      if(perm === "granted") await registerPush(u);
    }catch(e){}
  }
  useEffect(()=>{
    if(!user?.email) return;
    let channel;
    async function subscribe(){
      const {createClient} = await import("https:
      if(!createClient) return;
      const sb = createClient(SB, KEY, {
        realtime:{params:{eventsPerSecond:5}},
        global:{headers:{Authorization:"Bearer "+(user.token||KEY)}}
      });
      channel = sb.channel("job-status-"+user.email)
        .on("postgres_changes",{
          event:"UPDATE",
          schema:"public",
          table:"builder_jobs",
          filter:"customer_email=eq."+user.email,
        },(payload)=>{
          const job = payload.new;
          const labels = {
            picked_up:"Builder picked up your item",
            assembled:"Assembly complete!",
            delivered:"Your order has been delivered!",
          };
          const msg = labels[job.status];
          if(msg){
            setStatusToast({title:msg, body:job.item_name, jobId:job.id});
            setTimeout(()=>setStatusToast(null), 6000);
          }
        })
        .subscribe();
    }
    subscribe();
    return ()=>{ if(channel) channel.unsubscribe(); };
  },[user?.email]);
  const terms=[
    ["1. Platform Role","asmbly LLC operates a marketplace connecting customers with independent assembly professionals. We do not employ Builders or guarantee quality of any service."],
    ["2. Limitation of Liability","TO THE MAXIMUM EXTENT PERMITTED BY LAW, ASMBLY SHALL NOT BE LIABLE FOR INJURY, DEATH, OR PROPERTY DAMAGE ARISING FROM ASSEMBLY SERVICES."],
    ["3. Builder Responsibilities","Builders warrant they possess the required skills, experience, and tools to perform assembly services safely and professionally. Builders are solely liable for any damage, injury, or loss arising from their services."],
    ["4. Builder Insurance Requirement","Each Builder is solely responsible for maintaining adequate insurance coverage at all times while performing services through the asmbly platform. This includes: (a) General Liability Insurance covering bodily injury and property damage arising from assembly activities; and (b) Professional Liability Insurance (Errors and Omissions) covering claims arising from mistakes, negligence, or failure to perform professional services. asmbly LLC does not provide, arrange, or verify any insurance coverage for Builders. Failure to maintain required insurance does not limit a Builder's liability to customers or to asmbly LLC."],
    ["5. Dispute Resolution","Disputes resolved by binding arbitration in Houston, Texas. You waive your right to a jury trial."],
    ["6. Contact","legal@asmbly.com - asmbly LLC, Houston, TX"],
  ];
  const privacy=[
    ["1. Information We Collect","Account data, item photos, payment info, Builder application data, and usage data."],
    ["2. How We Use It","To match Users with Builders, process payments, and conduct background verification."],
    ["3. Sharing","Data shared only with assigned Builders and payment processors. We do not sell your data."],
    ["4. Contact","privacy@asmbly.com - asmbly LLC, Houston, TX"],
  ];
  const copyright=[
    ["1. Platform Content","All asmbly content including the name, logo, app design, and AI assessments is property of asmbly LLC."],
    ["2. Prohibited Uses","Scraping data, reverse-engineering the app, using asmbly branding without permission."],
    ["3. Contact","legal@asmbly.com - asmbly LLC, Houston, TX"],
  ];
  return(
    <ErrorBoundary>
    <div style={{minHeight:"100vh",background:"#1C1C1E",display:"flex",alignItems:"center",justifyContent:"center"}}>
      <style>{`*{box-sizing:border-box;-webkit-tap-highlight-color:transparent}::-webkit-scrollbar{display:none}`}</style>
      <div style={phone}>
        <div style={island}/>
        <S0 go={go} cur={cur} user={user} onSignIn={u=>setUser(u)} onSettings={openSettings}/>
        <S1 go={go} cur={cur} onSettings={openSettings} onEstimate={e=>setEstimate(e)}/>
        <S2 go={go} cur={cur} estimate={estimate}/>
        <S3 go={go} cur={cur} estimate={estimate} user={user} onJobCreated={j=>setActiveJob(j)}/>
        <S4 go={go} cur={cur} user={user} job={activeJob}/>
        <S5 go={go} cur={cur} onSettings={openSettings} job={activeJob} user={user}/>
        <S6 go={go} cur={cur}/>
        <Legal id={7} cur={cur} go={go} title="Terms of Service" content={terms}/>
        <Legal id={8} cur={cur} go={go} title="Privacy Policy" content={privacy}/>
        <Legal id={9} cur={cur} go={go} title="Copyright Policy" content={copyright}/>
        <S10 go={go} cur={cur} onSettings={openSettings} user={user}/>
        {showSettings&&<SettingsPanel user={user} onSignOut={()=>setUser(null)} onClose={closeSettings}/>}
        {statusToast&&(
          <div style={{position:"absolute",top:64,left:12,right:12,
            background:"linear-gradient(135deg,#5E17EB,#7C3AED)",
            borderRadius:16,padding:"14px 16px",zIndex:700,
            boxShadow:"0 8px 32px rgba(94,23,235,.35)",
            animation:"slideDown .3s ease"}}>
            <style>{`@keyframes slideDown{from{opacity:0;transform:translateY(-12px)}to{opacity:1;transform:translateY(0)}}`}</style>
            <div style={{fontSize:13,fontWeight:700,color:"#fff",marginBottom:3}}>{statusToast.title}</div>
            <div style={{fontSize:12,color:"rgba(255,255,255,.8)"}}>{statusToast.body}</div>
          </div>
        )}
      </div>
    </div>
  </ErrorBoundary>
  );
}