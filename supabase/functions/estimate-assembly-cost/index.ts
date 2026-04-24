import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'

// Secret set via: supabase secrets set STRIPE_SECRET_KEY=sk_live_...
const STRIPE_SECRET = Deno.env.get('STRIPE_SECRET_KEY') ?? ''

const cors = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: cors })

  try {
    const { amountCents, currency = 'usd', jobId, customerEmail, description } = await req.json()

    if (!amountCents || amountCents < 50) {
      return new Response(JSON.stringify({ error: 'Invalid amount (min 50 cents)' }), {
        status: 400, headers: { ...cors, 'Content-Type': 'application/json' }
      })
    }

    if (!STRIPE_SECRET) {
      return new Response(JSON.stringify({ error: 'Stripe not configured. Set STRIPE_SECRET_KEY secret.' }), {
        status: 500, headers: { ...cors, 'Content-Type': 'application/json' }
      })
    }

    const body = new URLSearchParams({
      amount: String(Math.round(amountCents)),
      currency,
      'payment_method_types[]': 'card',
      description: description || 'asmbly assembly service',
      ...(customerEmail ? { receipt_email: customerEmail } : {}),
      ...(jobId ? { 'metadata[job_id]': jobId } : {}),
    })

    const stripeRes = await fetch('https://api.stripe.com/v1/payment_intents', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${STRIPE_SECRET}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body,
    })

    const intent = await stripeRes.json()

    if (intent.error) {
      return new Response(JSON.stringify({ error: intent.error.message }), {
        status: 400, headers: { ...cors, 'Content-Type': 'application/json' }
      })
    }

    return new Response(
      JSON.stringify({ clientSecret: intent.client_secret, paymentIntentId: intent.id }),
      { headers: { ...cors, 'Content-Type': 'application/json' } }
    )
  } catch (err) {
    return new Response(JSON.stringify({ error: String(err) }), {
      status: 500, headers: { ...cors, 'Content-Type': 'application/json' }
    })
  }
})
