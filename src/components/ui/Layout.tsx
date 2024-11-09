"use client";

import GlobalStyle from "@/styles/GlobalStyle";

import StyledComponentsRegistry from "../../app/registry";
import { Footer } from "./footer";
import Header from "./Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="font-bodyFont relative overflow-hidden text-white">
      <Header />
      <StyledComponentsRegistry>
        <>{children}</>
      </StyledComponentsRegistry>
      <GlobalStyle />
      <div className="bg-vc-border-gradient rounded-lg p-px shadow-lg shadow-black/20">
        <div className="rounded-lg bg-black/30 backdrop-blur-xl">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
