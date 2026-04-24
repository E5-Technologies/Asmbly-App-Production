// GoogleSignInBridge.swift
// asmbly iOS App
//
// Bridges the native Google Sign-In SDK with the React JS layer inside WKWebView.
//
// Flow:
//   JS -> window.webkit.messageHandlers.googleSignIn.postMessage({action:"signIn"})
//   Swift -> GIDSignIn.sharedInstance.signIn() -> native Google sheet appears
//   Swift -> window.onGoogleSignInResult({ idToken, accessToken, email, name })
//   JS -> POST /auth/v1/token?grant_type=id_token to Supabase
//   JS -> user signed in with Supabase JWT

import UIKit
import WebKit
import GoogleSignIn

class GoogleSignInBridge: NSObject, WKScriptMessageHandler {

    weak var webView: WKWebView?
    weak var viewController: UIViewController?

    // Web Client ID - used by Supabase server-side to verify the ID token
    // This stays as-is (the web client ID from your Google Cloud project)
    static let webClientID = "729009624239-b88oe3fba4r01i4r3aph0m5q123cpbl7.apps.googleusercontent.com"

    init(webView: WKWebView, viewController: UIViewController) {
        self.webView = webView
        self.viewController = viewController
    }

    // Called when JS posts: window.webkit.messageHandlers.googleSignIn.postMessage(...)
    func userContentController(
        _ userContentController: WKUserContentController,
        didReceive message: WKScriptMessage
    ) {
        guard message.name == "googleSignIn",
              let body = message.body as? [String: Any],
              let action = body["action"] as? String,
              action == "signIn"
        else { return }

        DispatchQueue.main.async { [weak self] in
            self?.performGoogleSignIn()
        }
    }

    private func performGoogleSignIn() {
        guard let vc = viewController else { return }

        GIDSignIn.sharedInstance.signIn(withPresenting: vc) { [weak self] result, error in
            if let error = error {
                // NSError code 0 = user cancelled, not a real error
                let cancelled = (error as NSError).code == -5 || (error as NSError).code == 0
                self?.postResult([
                    "error": cancelled ? "cancelled" : error.localizedDescription
                ])
                return
            }

            guard let user = result?.user,
                  let idToken = user.idToken?.tokenString
            else {
                self?.postResult(["error": "Could not retrieve Google ID token"])
                return
            }

            let accessToken = user.accessToken.tokenString
            let email       = user.profile?.email ?? ""
            let name        = user.profile?.name ?? ""
            let photoUrl    = user.profile?.imageURL(withDimension: 96)?.absoluteString ?? ""

            // Pass idToken to JS - Supabase will verify it against the web client ID
            self?.postResult([
                "idToken":     idToken,
                "accessToken": accessToken,
                "email":       email,
                "name":        name,
                "photoUrl":    photoUrl,
            ])
        }
    }

    private func postResult(_ result: [String: Any]) {
        guard let webView = webView else { return }
        guard let data = try? JSONSerialization.data(withJSONObject: result),
              let json = String(data: data, encoding: .utf8) else { return }

        let js = "if(window.onGoogleSignInResult){window.onGoogleSignInResult(\(json));}"
        DispatchQueue.main.async {
            webView.evaluateJavaScript(js, completionHandler: nil)
        }
    }
}
