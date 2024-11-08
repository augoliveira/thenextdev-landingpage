import { twMerge } from "tailwind-merge";
interface Props {
  children: React.ReactNode;
  className?: string;
}

const Container1 = ({ children, className }: Props) => {
  return (
    <div
      className={twMerge(
        "max-w-screen-2xl mx-auto px-4 lgl:px-0 py-5 mdl:py-10",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Container;
