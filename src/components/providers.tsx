"use client";

import { ReactNode } from "react";

import { ContextProvider } from "@/utils/context";

import { Cursor } from "./cursor";
import SmoothScroll from "./smooth-scroll";

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <SmoothScroll>
        <ContextProvider>
          <Cursor />
          {children}
        </ContextProvider>
      </SmoothScroll>
    </>
  );
};
