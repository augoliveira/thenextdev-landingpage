'use client';

import { twMerge } from 'tailwind-merge';

interface BoxProps {
  children: React.ReactNode;
  className?: string;
}

const Box: React.FC<BoxProps> = ({ children, className }) => {
  return (
    <div
      className={twMerge(
        `
        flex
        gap-3 
        py-4 px-4 
        justify-center
        text-stone-50 
        rounded-md 
        md:flex-col 
        md:w-44 
        md:py-3 
        md:justify-start 
        md:gap-5
        w-full 
        bg-neutral-900
        `,
        className
      )}
    >
      {children}
    </div>
  );
};

export default Box;