"use client";

import { twMerge } from "tailwind-merge";

interface Props {
  title?: string;
  subtitle?: string;
  className?: string;
}

const TitleBanner = ({ subtitle, title, className }: Props) => {
  return (
    <div
      className={twMerge(
        "bg-fill mx-auto mt-20 w-full bg-reactBd-titleBg bg-center py-10 mdl:py-20",
        className
      )}
    >
      <div className="mx-auto flex max-w-screen-2xl flex-col items-center justify-center text-center">
        <h4 className="mb-2 text-xs uppercase tracking-[4px] text-secondaryColor mdl:text-sm">
          {subtitle}
        </h4>
        <h1 className="font-titleFont text-4xl font-semibold mdl:text-6xl">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default TitleBanner;
