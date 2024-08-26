"use client";

import Header from "./Header";
import { Footer } from "./footer"

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" text-white font-bodyFont relative overflow-hidden">
      <Header />
      {children}
      <div className="rounded-lg bg-vc-border-gradient p-px shadow-lg shadow-black/20">
        <div className="rounded-lg bg-black/30 backdrop-blur-xl">
          <Footer />
        </div>
      </div> 
    </div>
  );
};

export default Layout;
