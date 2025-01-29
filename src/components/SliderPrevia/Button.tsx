import { ComponentPropsWithoutRef } from "react";

export default function Button({
  ...props
}: ComponentPropsWithoutRef<"button">) {
  return (
    <button
      {...props}
      className="group/button rounded-sm bg-amber-500 px-4 py-2 text-white hover:bg-amber-600 active:bg-amber-700 disabled:pointer-events-none disabled:bg-amber-200"
    ></button>
  );
}
