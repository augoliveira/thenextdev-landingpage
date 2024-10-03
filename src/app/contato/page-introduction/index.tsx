'use client';

import { Breadcrumbs } from "@material-tailwind/react";

import { motion } from 'framer-motion'
import NextLink from "../../../components/ui/NextLink"

import { Link } from '@/components/link'

import { AnimatedText } from '../AnimatedText';

import { HouseLine } from "@phosphor-icons/react";


export const PageIntroduction = () => {
  return (
    
    <section className="w-full h-[500px] lg:h-[500px] bg-bg-contato bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center px-2">
      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.6 }}
      >
        <div>
          <AnimatedText text='Contato' />
        </div>
        <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="text-2xl md:max-w-[650px] text-textDark font-medium"
      >
        Entre em contato para um orçamento gratuito.
      </motion.p>
        
        <div className="flex w-56 mt-6 rounded-lg backdrop-blur-sm bg-white/30 shadow-xl shadow-black/5 ring-1 ring-slate-700/10">
          <div className="flex items-center space-x-4 px-6 py-2">
            <NextLink href="/" className="opacity-60 cursor-pointer hover-green">
              <HouseLine size={36} weight="fill" className="text-slate-950 py-1" />
            </NextLink>
          </div>
          <div className="flex flex-auto items-center border-l border-slate-200/60 text-base leading-5 text-slate-900">
          <NextLink href="/esquadria" className="cursor-pointer hover-green">
            <span className="text-green-300 bg-hero-page rounded-r py-4 px-10">
              Contato
            </span>
            
          </NextLink>
            
          </div>
        </div>
      </motion.div>
    </section>
  )
}