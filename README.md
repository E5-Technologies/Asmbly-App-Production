# asmbly — Production App

> Expert furniture assembly — picked up, assembled, delivered.

---

## Quick Start

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # Production build -> dist/
```

---

## Pre-Launch Checklist

- [ ] Set `VITE_STRIPE_PK=pk_live_...` in deployment env
- [ ] Set `ANTHROPIC_API_KEY` in Supabase Edge Function Secrets
- [ ] Set `SUPABASE_SERVICE_ROLE_KEY` in Supabase Edge Function Secrets
- [ ] Enable Leaked Password Protection in Supabase Auth dashboard
- [ ] Register Apple Pay merchant domain in Stripe dashboard
- [ ] Deploy `sw.js` at root of production domain (for push notifications)
- [ ] Add Google Cloud Console iOS OAuth callback URLs
- [ ] Test push notifications on real iPhone

---

## Architecture

| Layer | Tech | Status |
|---|---|---|
| Frontend | React 18 + Vite | Production |
| Auth | Supabase Auth + Google OAuth (iOS native) | Production |
| Database | Supabase Postgres + RLS | Production |
| Realtime | Supabase Realtime (job status) | Production |
| Payments | Stripe (test mode — swap key for live) | Test |
| AI Pricing | Claude claude-sonnet-4-20250514 via Anthropic API | Production |
| Push Notifications | Web Push VAPID | Production |
| iOS Native | WKWebView + Google Sign-In SDK | Production |

---

## Supabase Project

URL: https://gtupnsnhsljgxuzrlfpz.supabase.co
Dashboard: https://supabase.com/dashboard/project/gtupnsnhsljgxuzrlfpz

### Edge Functions (all ACTIVE)
- `create-payment-intent` v2 — Stripe
- `send-push-notification` v3 — VAPID Web Push
- `estimate-assembly-cost` v1 — Claude AI

### Required Secrets
```bash
supabase secrets set ANTHROPIC_API_KEY=sk-ant-...
supabase secrets set SUPABASE_SERVICE_ROLE_KEY=...
```

---

## iOS Build

```bash
cd ios && pod install && open asmbly.xcworkspace
```

See `ios/GOOGLE_SIGNIN_SETUP.md` for complete setup.

Bundle ID: `com.e5technologies.asmbly`
iOS Client ID: `729009624239-nvh1d880g7io9ol86n3l8u3sohjkohsb.apps.googleusercontent.com`

---

## Deploy

```bash
# Vercel (recommended)
npx vercel --prod

# Netlify
npm run build && npx netlify deploy --prod --dir=dist
```

Set env vars in deployment platform dashboard.

---

## GitHub
https://github.com/E5-Technologies/Asmbly
