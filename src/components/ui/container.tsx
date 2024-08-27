'use client'

import cn from "clsx";
import { HTMLAttributes } from "react";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  className?: string;
}
const Container = (props: SectionProps) => {
  return (
    <section
      {...props}
      className={cn(
        props.className,
        "px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl mt-8"
      )}
    >
      {props.children}
    </section>
  );
};

export default Container;