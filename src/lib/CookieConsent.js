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
      <div className="fixed bottom-0 right-0 z-50 rounded-tl-lg bg-gray-100 p-4">
        <h1 className="text-center text-sm font-bold tracking-tight text-slate-600 dark:text-slate-300 sm:text-2xl lg:text-2xl">
          Sua privacidade é importante para nós
        </h1>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          Usamos cookies para melhorar sua experiência. Você aceita?
        </p>
        <div className="space-x-4">
          <button
            className="rounded bg-green-500 px-8 py-2 text-white sm:space-x-4"
            onClick={() => handleConsent("accepted")}
          >
            Accept
          </button>
          <button
            className="mx-8 rounded bg-gray-800 px-8 py-2 text-slate-400"
            onClick={() => handleConsent("rejected")}
          >
            Reject
          </button>
        </div>
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
