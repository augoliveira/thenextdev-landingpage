"use client";

import { useState, useEffect } from "react";

import { GoogleTagManager } from "@next/third-parties/google";
import Cookies from "js-cookie";

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

export default function CookieConsent() {
  const [cookieState, setCookieState] = useState("not-answered");

  useEffect(() => {
    const state = Cookies.get("cookie-consent-state");
    if (state) setCookieState(state);
  }, []);

  const handleConsent = (state) => {
    Cookies.set("cookie-consent-state", state);
    setCookieState(state);
  };

  if (cookieState === "not-answered") {
    return (
      <div className="fixed bottom-0 right-0 rounded-tl-lg bg-gray-100 p-4">
        <p>We use cookies to improve your experience. Do you accept?</p>
        <button onClick={() => handleConsent("accepted")}>Accept</button>
        <button onClick={() => handleConsent("rejected")}>Reject</button>
      </div>
    );
  }

  if (cookieState === "accepted") {
    return <GoogleTagManager gtmId={GTM_ID} />;
  }

  return (
    <button
      className="fixed bottom-4 right-4 rounded-full bg-gray-200 p-2"
      onClick={() => setCookieState("not-answered")}
    >
      🍪
    </button>
  );
}