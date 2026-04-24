// AppDelegate.swift
// asmbly iOS App
// Google Sign-In SDK initialization

import UIKit
import GoogleSignIn

@main
class AppDelegate: UIResponder, UIApplicationDelegate {

    func application(
        _ application: UIApplication,
        didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?
    ) -> Bool {

        // IMPORTANT: Use your iOS Client ID here (NOT the web client ID).
        // Steps to get your iOS Client ID:
        //   1. Go to console.cloud.google.com
        //   2. APIs & Services -> Credentials -> + Create Credentials -> OAuth client ID
        //   3. Application type: iOS
        //   4. Bundle ID: com.e5technologies.asmbly
        //   5. Download GoogleService-Info.plist -> copy CLIENT_ID value here
        //
        // The web client ID (729009624239-b88oe3fba4r01i4r3aph0m5q123cpbl7.apps.googleusercontent.com)
        // is used by Supabase on the server side to verify tokens.
        // Your iOS app needs its OWN client ID registered for bundle ID com.e5technologies.asmbly.

        let iOSClientID = "729009624239-nvh1d880g7io9ol86n3l8u3sohjkohsb.apps.googleusercontent.com"

        // If GoogleService-Info.plist is added to your Xcode project,
        // GIDSignIn can read the client ID automatically:
        //   GIDSignIn.sharedInstance.configuration = GIDConfiguration(clientID: ...)
        // Otherwise set it manually:
        GIDSignIn.sharedInstance.configuration = GIDConfiguration(clientID: iOSClientID)

        return true
    }

    // Required: handle the redirect URL after Google sign-in
    func application(
        _ app: UIApplication,
        open url: URL,
        options: [UIApplication.OpenURLOptionsKey: Any] = [:]
    ) -> Bool {
        return GIDSignIn.sharedInstance.handle(url)
    }
}
