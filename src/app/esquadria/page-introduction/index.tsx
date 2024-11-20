"use client";

import { HouseLine } from "@phosphor-icons/react";
import { motion } from "framer-motion";

import NextLink from "../../../components/ui/NextLink";
import { AnimatedText } from "../AnimatedText";

export const PageIntroduction = () => {
  return (
    <section className="flex h-[300px] w-full flex-col items-center justify-center bg-contato-page bg-cover bg-center bg-no-repeat px-2 lg:h-[300px]">
      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.6 }}
      >
        <div>
          <AnimatedText text="Esquadria de alumínio" />
        </div>
        <p className="my-6 max-w-[640px] text-center text-lg leading-5 text-gray-400 sm:text-base">
          Soluções em Esquadrias de Alumínio Fechamento para Condomínios em
          Alumínio e Vidro.
        </p>

        <div className="mt-6 flex w-56 rounded-lg bg-white/30 shadow-xl shadow-black/5 ring-1 ring-slate-700/10 backdrop-blur-sm">
          <div className="flex items-center space-x-4 px-6 py-2">
            <NextLink
              href="/"
              className="hover-green cursor-pointer opacity-60"
            >
              <HouseLine
                size={36}
                weight="fill"
                className="py-1 text-slate-950"
              />
            </NextLink>
          </div>
          <div className="flex flex-auto items-center border-l border-slate-200/60 text-base leading-5 text-slate-900">
            <NextLink href="/esquadria" className="hover-green cursor-pointer">
              <span className="bg-hero-page px-8 py-4 text-green-300">
                Esquadria
              </span>
            </NextLink>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
