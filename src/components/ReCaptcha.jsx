import React, { forwardRef, useEffect, useImperativeHandle, useRef } from "react";

// Public site key (safe to ship in frontend code). Override with VITE_RECAPTCHA_SITE_KEY.
export const RECAPTCHA_SITE_KEY =
  import.meta.env.VITE_RECAPTCHA_SITE_KEY || "6LeyOA4uAAAAAPimUMTFD3yFf8nHfC6EERSgG6gA";

const SCRIPT_ID = "google-recaptcha-v2";
const ONLOAD_CB = "__number9RecaptchaOnLoad";

let loadPromise = null;

function loadRecaptcha() {
  if (typeof window === "undefined") return Promise.reject(new Error("no window"));
  if (window.grecaptcha && window.grecaptcha.render) return Promise.resolve(window.grecaptcha);
  if (loadPromise) return loadPromise;

  loadPromise = new Promise((resolve, reject) => {
    window[ONLOAD_CB] = () => resolve(window.grecaptcha);
    if (!document.getElementById(SCRIPT_ID)) {
      const script = document.createElement("script");
      script.id = SCRIPT_ID;
      script.src = `https://www.google.com/recaptcha/api.js?onload=${ONLOAD_CB}&render=explicit`;
      script.async = true;
      script.defer = true;
      script.onerror = () => {
        loadPromise = null;
        reject(new Error("Failed to load reCAPTCHA"));
      };
      document.head.appendChild(script);
    }
  });

  return loadPromise;
}

/**
 * Google reCAPTCHA v2 ("I'm not a robot" checkbox).
 * onChange(token) fires with the token, or with "" when it expires / errors.
 * ref.reset() clears the widget (call after a submit attempt).
 */
const ReCaptcha = forwardRef(function ReCaptcha({ onChange, className = "" }, ref) {
  const containerRef = useRef(null);
  const widgetIdRef = useRef(null);
  const onChangeRef = useRef(onChange);
  onChangeRef.current = onChange;

  useImperativeHandle(ref, () => ({
    reset() {
      if (widgetIdRef.current !== null && window.grecaptcha) {
        window.grecaptcha.reset(widgetIdRef.current);
      }
      onChangeRef.current?.("");
    },
  }));

  useEffect(() => {
    let cancelled = false;

    loadRecaptcha()
      .then((grecaptcha) => {
        if (cancelled || !containerRef.current || widgetIdRef.current !== null) return;
        widgetIdRef.current = grecaptcha.render(containerRef.current, {
          sitekey: RECAPTCHA_SITE_KEY,
          callback: (token) => onChangeRef.current?.(token),
          "expired-callback": () => onChangeRef.current?.(""),
          "error-callback": () => onChangeRef.current?.(""),
        });
      })
      .catch(() => onChangeRef.current?.(""));

    return () => {
      cancelled = true;
    };
  }, []);

return (
  <div className={`recaptcha-wrapper ${className}`}>
    <div ref={containerRef} className="recaptcha-widget" />
  </div>
);
});

export default ReCaptcha;
