"use client";
import { FC, ReactNode, useRef, type JSX } from "react";

interface Props {
  children: ReactNode;
  tooltip?: string;
}

const ToolTip: FC<Props> = ({ children, tooltip }): JSX.Element => {
  const tooltipRef = useRef<HTMLSpanElement>(null);
  const container = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={container}
      onMouseEnter={({ clientX }) => {
        if (!tooltipRef.current || !container.current) return;
        const { left } = container.current.getBoundingClientRect();

        tooltipRef.current.style.left = clientX - left + "px";
      }}
      className="group relative inline-block"
    >
      {children}
      {tooltip ? (
        <span
          ref={tooltipRef}
          className="invisible absolute top-full mt-2 whitespace-nowrap rounded bg-blue-500 p-1 text-white opacity-0 transition group-hover:visible group-hover:opacity-100"
        >
          {tooltip}
        </span>
      ) : null}
    </div>
  );
};

export default ToolTip;
