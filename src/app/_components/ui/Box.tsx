"use client";

import { twMerge } from "tailwind-merge";

interface BoxProps {
  children: React.ReactNode;
  className?: string;
}

const Box: React.FC<BoxProps> = ({ children, className }) => {
  return (
    <div
      className={twMerge(
        `flex w-full justify-center gap-3 rounded-md bg-neutral-900 px-4 py-4 text-stone-50 md:w-44 md:flex-col md:justify-start md:gap-5 md:py-3`,
        className
      )}
    >
      {children}
    </div>
  );
};

export default Box;
