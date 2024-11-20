"use client";
import { track } from "@vercel/analytics";

import { buttonVariants } from "@/components/ui/button";

import { cn } from "@/lib/utils";

function IntroSection() {
  return (
    <section id="intro" className="relative space-y-6 py-8 md:py-12 lg:py-32">
      <div className="font-sans container flex max-w-[64rem] flex-col items-center gap-4 text-center">
        <h1 className="text-center text-4xl font-extrabold tracking-tight text-slate-400 dark:text-slate-300 sm:text-5xl lg:text-6xl">
          Vidros e espelhos
          <br />
          Para todas as <span className="text-clr_ratting">necessidades</span>
        </h1>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          Conheça nossa linha completa de vidros e espelhos para a sua obra.
        </p>
        <div className="space-x-4">
          <a
            href="#investment"
            className="text-md rounded bg-primary px-4 py-2 font-bold text-white shadow-lg"
            onClick={() => {
              track("enrollment", { location: "intro" });
            }}
          >
            CONHEÇA OS PRODUTOS
          </a>
          <a
            href="#feature"
            className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            onClick={() => {
              track("features");
            }}
          >
            SOLICITAR ORÇAMENTO
          </a>
        </div>
      </div>
    </section>
  );
}

export default IntroSection;
