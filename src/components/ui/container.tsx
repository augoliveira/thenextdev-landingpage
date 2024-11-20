"use client";

import { HTMLAttributes } from "react";

import cn from "clsx";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  className?: string;
}
const Container = (props: SectionProps) => {
  return (
    <section
      {...props}
      className={cn(
        props.className,
        "mx-auto mt-8 max-w-7xl px-4 sm:px-6 lg:px-8"
      )}
    >
      {props.children}
    </section>
  );
};

export default Container;
