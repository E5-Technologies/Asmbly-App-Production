# asmbly iOS - Google Sign-In: FULLY CONFIGURED

## All values from your GoogleService-Info.plist are now wired in.

  iOS CLIENT_ID:      729009624239-nvh1d880g7io9ol86n3l8u3sohjkohsb.apps.googleusercontent.com
  REVERSED_CLIENT_ID: com.googleusercontent.apps.729009624239-nvh1d880g7io9ol86n3l8u3sohjkohsb
  BUNDLE_ID:          com.e5technologies.asmbly

  Web CLIENT_ID (Supabase/server-side):
                      729009624239-b88oe3fba4r01i4r3aph0m5q123cpbl7.apps.googleusercontent.com

---

## Status: COMPLETE - No placeholders remaining

  File                       Status
  AppDelegate.swift          iOS CLIENT_ID wired in
  GoogleSignInBridge.swift   Web CLIENT_ID wired in (server verification)
  ViewController.swift       WKWebView host - no client ID needed
  Info.plist                 REVERSED_CLIENT_ID wired into URL scheme
  app.config.js              Both client IDs wired in
  asmbly.jsx                 iOS bridge + ID token exchange implemented

---

## Supabase Auth (already configured)

  Provider:          Google - ENABLED
  Web Client ID:     729009624239-b88oe3fba4r01i4r3aph0m5q123cpbl7.apps.googleusercontent.com
  Client Secret:     AIzaSyAXZ3PaWQoshqd1zJUKWjzqPMGfSjMxQFw
  Skip nonce checks: true  (required for iOS native SDK)
  Callback URL:      https://gtupnsnhsljgxuzrlfpz.supabase.co/auth/v1/callback

---

## Build Steps

### Option A - Expo (fastest)

  1. Place GoogleService-Info.plist in project root  (copy from uploads)
  2. Install deps:
       npx expo install @react-native-google-signin/google-signin
       npx expo install expo-camera expo-notifications
  3. Build:
       npx expo prebuild --clean
       npx expo run:ios

### Option B - Bare Xcode

  1. Create Xcode project:
       Product Name:      asmbly
       Bundle Identifier: com.e5technologies.asmbly
       Language:          Swift
  2. Copy into project:
       AppDelegate.swift
       GoogleSignInBridge.swift
       ViewController.swift
       GoogleService-Info.plist  (drag in, check Copy items if needed)
       Merge Info.plist keys
  3. Install pods:
       pod install
       open asmbly.xcworkspace
  4. Build and run on iPhone (or simulator for testing)

---

## How Sign-In Works (end to end)

  iPhone: User taps "Continue with Google"
       |
  JS detects: window.webkit.messageHandlers.googleSignIn (native bridge)
       |
  Swift: GIDSignIn.sharedInstance.signIn()
         uses iOS CLIENT_ID: 729009624239-nvh1d880g7io9ol86n3l8u3sohjkohsb.apps.googleusercontent.com
       |
  Native Google account picker sheet appears on iPhone
       |
  User selects Google account - no browser, no redirect
       |
  Swift receives ID token -> calls window.onGoogleSignInResult({ idToken })
       |
  JS: POST https://gtupnsnhsljgxuzrlfpz.supabase.co/auth/v1/token
      body: { provider: "google", id_token: "..." }
       |
  Supabase verifies ID token using Web CLIENT_ID (server-side)
       |
  Supabase returns JWT - user is signed in
       |
  App routes: builders -> dashboard, customers -> home screen

---

## Simulator Note

  On iOS Simulator, Google Sign-In falls back to a browser-based
  OAuth flow (normal behavior - simulator has no Keychain/Google app).
  Test the native sheet on a real iPhone or iPad.
