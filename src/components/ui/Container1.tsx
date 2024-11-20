import type { Container } from "lucide-react";
import { twMerge } from "tailwind-merge";
interface Props {
  children: React.ReactNode;
  className?: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Container1 = ({ children, className }: Props) => {
  return (
    <div
      className={twMerge(
        "mx-auto max-w-screen-2xl px-4 py-5 mdl:py-10 lgl:px-0",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
