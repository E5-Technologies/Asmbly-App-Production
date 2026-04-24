// app.config.js
// asmbly - Expo configuration for iOS Google Sign-In
//
// BEFORE BUILDING:
// 1. Create an iOS OAuth client at console.cloud.google.com
//    Application type: iOS, Bundle ID: com.e5technologies.asmbly
// 2. Download GoogleService-Info.plist and place it in your project root
// 3. Replace iosUrlScheme below with REVERSED_CLIENT_ID from that plist
// 4. Run: npx expo prebuild --clean && npx expo run:ios

export default {
  name: "asmbly",
  slug: "asmbly",
  version: "1.0.0",
  orientation: "portrait",
  scheme: "com.e5technologies.asmbly",

  ios: {
    bundleIdentifier: "com.e5technologies.asmbly",
    supportsTablet: false,
    buildNumber: "1",
    googleServicesFile: "./GoogleService-Info.plist",

    infoPlist: {
      NSCameraUsageDescription:
        "asmbly needs camera access to photograph furniture items for assembly estimation.",
      NSPhotoLibraryUsageDescription:
        "asmbly needs photo library access to upload furniture item images.",
      NSPhotoLibraryAddUsageDescription:
        "asmbly may save assembly confirmation photos.",
      NSLocationWhenInUseUsageDescription:
        "asmbly uses your location to find nearby assembly professionals.",
      NSFaceIDUsageDescription:
        "asmbly uses Face ID to authenticate Apple Pay payments.",
    },
  },

  android: {
    package: "com.e5technologies.asmbly",
    adaptiveIcon: {
      foregroundImage: "./assets/adaptive-icon.png",
      backgroundColor: "#5E17EB",
    },
  },

  plugins: [
    [
      "@react-native-google-signin/google-signin",
      {
        // REPLACE with REVERSED_CLIENT_ID from GoogleService-Info.plist
        // Format: com.googleusercontent.apps.YOUR_IOS_CLIENT_NUMBER
        iosUrlScheme: "com.googleusercontent.apps.729009624239-nvh1d880g7io9ol86n3l8u3sohjkohsb",
      },
    ],
    ["expo-camera", { cameraPermission: "asmbly needs camera access to photograph furniture items." }],
    ["expo-notifications", { icon: "./assets/notification-icon.png", color: "#5E17EB" }],
  ],

  extra: {
    // Web client ID (used by Supabase server-side to verify Google ID tokens)
    googleWebClientId: "729009624239-b88oe3fba4r01i4r3aph0m5q123cpbl7.apps.googleusercontent.com",
    // iOS client ID - replace after creating in Google Cloud Console
    googleIOSClientId: "729009624239-nvh1d880g7io9ol86n3l8u3sohjkohsb.apps.googleusercontent.com",
    supabaseUrl:       "https://gtupnsnhsljgxuzrlfpz.supabase.co",
    supabaseAnonKey:   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd0dXBuc25oc2xqZ3h1enJsZnB6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ4ODY3MTUsImV4cCI6MjA5MDQ2MjcxNX0.-INsLvt7gRiiUwIlIYNEMfPMcfULScpXu3k-_jBWnOw",
  },
};
