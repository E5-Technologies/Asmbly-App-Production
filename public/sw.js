// asmbly Service Worker — handles background push notifications
// Deploy this file at the root of your domain: https://yourdomain.com/sw.js

const CACHE_NAME = "asmbly-v1";

// Status labels matching the Edge Function
const STATUS_LABELS = {
  assigned:  "Builder Assigned",
  picked_up: "Item Picked Up",
  assembled: "Assembly Complete",
  delivered: "Order Delivered!",
};

// ── Push event — fires when a notification arrives while app is backgrounded ──
self.addEventListener("push", (event) => {
  let data = {};
  try {
    data = event.data ? event.data.json() : {};
  } catch (e) {
    data = { title: "asmbly Update", body: event.data ? event.data.text() : "" };
  }

  const title   = data.title || "asmbly";
  const options = {
    body:    data.body    || "Your order status has been updated.",
    icon:    "/icon-192.png",
    badge:   "/badge-72.png",
    tag:     data.data?.jobId || "asmbly-notif",
    renotify: true,
    requireInteraction: false,
    vibrate: [200, 100, 200],
    data:    data.data || {},
    actions: [
      { action: "view",    title: "View Order" },
      { action: "dismiss", title: "Dismiss"    },
    ],
  };

  event.waitUntil(self.registration.showNotification(title, options));
});

// ── Notification click — open the app or bring it to focus ───────────────────
self.addEventListener("notificationclick", (event) => {
  event.notification.close();

  if (event.action === "dismiss") return;

  const jobId = event.notification.data?.jobId;
  const url   = jobId ? `/?jobId=${jobId}` : "/";

  event.waitUntil(
    clients.matchAll({ type: "window", includeUncontrolled: true }).then((windowClients) => {
      // If app is already open, focus it
      for (const client of windowClients) {
        if ("focus" in client) return client.focus();
      }
      // Otherwise open a new window
      if (clients.openWindow) return clients.openWindow(url);
    })
  );
});

// ── Install & activate — take control immediately ─────────────────────────────
self.addEventListener("install",  () => self.skipWaiting());
self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});
