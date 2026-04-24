// ViewController.swift
// asmbly iOS App
//
// Main view controller that hosts the React app in a WKWebView
// and wires up the Google Sign-In bridge

import UIKit
import WebKit
import GoogleSignIn

class ViewController: UIViewController, WKNavigationDelegate {

    var webView: WKWebView!
    var googleSignInBridge: GoogleSignInBridge!

    // MARK: - View Lifecycle

    override func viewDidLoad() {
        super.viewDidLoad()
        setupWebView()
        loadApp()
    }

    // MARK: - WebView Setup

    private func setupWebView() {
        let contentController = WKUserContentController()

        // Register the Google Sign-In message handler
        // JS calls: window.webkit.messageHandlers.googleSignIn.postMessage(...)
        let bridge = GoogleSignInBridge(webView: nil, viewController: self)
        contentController.add(bridge, name: "googleSignIn")

        let config = WKWebViewConfiguration()
        config.userContentController = contentController

        // Allow inline media playback (for camera access in the app)
        config.allowsInlineMediaPlayback = true
        config.mediaTypesRequiringUserActionForPlayback = []

        webView = WKWebView(frame: view.bounds, configuration: config)
        webView.autoresizingMask = [.flexibleWidth, .flexibleHeight]
        webView.navigationDelegate = self
        webView.scrollView.contentInsetAdjustmentBehavior = .never

        // Wire the bridge to the actual webView now that it exists
        googleSignInBridge = GoogleSignInBridge(webView: webView, viewController: self)
        contentController.removeScriptMessageHandler(forName: "googleSignIn")
        contentController.add(googleSignInBridge, name: "googleSignIn")

        view.addSubview(webView)
        view.backgroundColor = .black
    }

    // MARK: - Load App

    private func loadApp() {
        // In production: load your deployed URL
        // let url = URL(string: "https://asmbly.com")!

        // In development: load from local bundle or local dev server
        // Option A — local HTML bundle (for offline / App Store distribution)
        if let bundleURL = Bundle.main.url(forResource: "index", withExtension: "html", subdirectory: "www") {
            webView.loadFileURL(bundleURL, allowingReadAccessTo: bundleURL.deletingLastPathComponent())
            return
        }

        // Option B — live URL (for TestFlight / production)
        let url = URL(string: "https://asmbly.com")!
        webView.load(URLRequest(url: url))
    }

    // MARK: - WKNavigationDelegate

    func webView(_ webView: WKWebView, didFinish navigation: WKNavigation!) {
        // Inject a helper so JS can detect it's running inside native iOS
        let detectScript = """
            window.__asmblyNative = true;
            window.__asmblyPlatform = 'ios';
        """
        webView.evaluateJavaScript(detectScript, completionHandler: nil)
    }

    func webView(
        _ webView: WKWebView,
        decidePolicyFor navigationAction: WKNavigationAction,
        decisionHandler: @escaping (WKNavigationActionPolicy) -> Void
    ) {
        // Handle deep links / URL scheme callbacks
        if let url = navigationAction.request.url,
           url.scheme == "com.e5technologies.asmbly" {
            GIDSignIn.sharedInstance.handle(url)
            decisionHandler(.cancel)
            return
        }
        decisionHandler(.allow)
    }
}
