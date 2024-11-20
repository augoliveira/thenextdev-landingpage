"use client";
import Link from "next/link";

import { track } from "@vercel/analytics";

function Enrollment() {
  return (
    <Link
      href="https://pay.hotmart.com/E88055193B?off=h8d9oi5k"
      target="_blank"
      onClick={() => {
        track("enrollment", { location: "investment" });
      }}
      className="transform rounded bg-primary px-4 py-2 font-bold text-white shadow-lg transition-all duration-200 hover:scale-105 hover:bg-primary hover:shadow-xl"
    >
      Matricular
    </Link>
  );
}

export default Enrollment;
