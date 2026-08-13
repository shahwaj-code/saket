import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Lazy-load analytics (GTM + gtag) after the window 'load' event to avoid blocking LCP
if (typeof window !== "undefined") {
  const loadAnalytics = () => {
    try {
      // Inject GTM
      (function (w: any, d: Document, s: string, l: string, i: string) {
        w[l] = w[l] || [];
        w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
        const f = d.getElementsByTagName(s)[0];
        const j = d.createElement(s) as HTMLScriptElement;
        const dl = l !== "dataLayer" ? "&l=" + l : "";
        j.async = true;
        j.src = `https://www.googletagmanager.com/gtm.js?id=${i}${dl}`;
        f.parentNode!.insertBefore(j, f);
      })(window, document, "script", "dataLayer", "GTM-K7CX2FLS");

      // Inject gtag
      const gtagScript = document.createElement("script");
      gtagScript.async = true;
      gtagScript.src = "https://www.googletagmanager.com/gtag/js?id=G-KESNCRQ416";
      document.head.appendChild(gtagScript);

      const inline = document.createElement("script");
      inline.innerHTML = `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-KESNCRQ416');`;
      document.head.appendChild(inline);
    } catch (e) {
      // ignore analytics failures
      // console.warn('Analytics load failed', e);
    }
  };

  if (document.readyState === "complete") {
    loadAnalytics();
  } else {
    window.addEventListener("load", loadAnalytics, { once: true });
  }
}