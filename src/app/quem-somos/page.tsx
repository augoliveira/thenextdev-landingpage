"use client";

import { ExternalLink } from '@/components/ui/external-link';
import { NextLink } from 'next/link';
import NextImage from './../../components/ui/NextImage';
import Img1 from '../../../public/beach-house.9b9ee168.jpg'
import Img2 from '../../../public/beach-house-interior-1.f151eb56.jpg'
import Img3 from '../../../public/beach-house-interior-2.3672af98.jpg'
import HeroImg from '../../../public/beach-house-interior-2.3672af98.jpg'
import { useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/utils/cn";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import { AnimatedText } from './AnimatedText/index';
import { PageIntroduction } from './page-introduction';


export default function Page() {
  return (  
    <>
    <PageIntroduction />
  <div className="py-6 px-4 sm:p-6 md:py-10 md:px-8 bg-muted">
  <div className="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-7xl lg:gap-x-20 lg:grid-cols-2">
  <div className="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
      <h1 className="mt-1 text-lg font-semibold text-white sm:text-slate-900 md:text-2xl dark:sm:text-white">Beach House in Collingwood</h1>
      <p className="text-sm leading-4 font-medium text-white sm:text-slate-500 dark:sm:text-slate-400">Entire house</p>
    </div>
    <div class="grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0">
      <Image 
      src={Img1} 
      alt="" 
      className="w-full h-60 object-cover rounded-lg sm:h-52 sm:col-span-2 lg:col-span-full" 
      loading="lazy" 
      />
      <Image 
      src={Img2} 
      alt="" 
      width={1152}
      height={500}
      className="hidden w-full h-52 object-cover rounded-lg sm:block sm:col-span-2 md:col-span-1 lg:row-start-2 lg:col-span-2 lg:h-32" 
      loading="lazy"
      sizes="(max-width: 768px) 250px, 400px"
      
      />
      <Image 
      src={Img3} 
      alt="" 
      className="hidden w-full h-52 object-cover rounded-lg md:block lg:row-start-2 lg:col-span-2 lg:h-32" 
      loading="lazy"
      />
    </div>
    <dl className="mt-4 text-xs font-medium flex items-center row-start-2 sm:mt-1 sm:row-start-3 md:mt-2.5 lg:row-start-2">
      <dt className="sr-only">Reviews</dt>
      <dd className="text-indigo-600 flex items-center dark:text-indigo-400">
        <svg width="24" height="24" fill="none" aria-hidden="true" className="mr-1 stroke-current dark:stroke-indigo-500">
          <path d="m12 5 2 5h5l-4 4 2.103 5L12 16l-5.103 3L9 14l-4-4h5l2-5Z"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <span>4.89 <span className="text-slate-400 font-normal">(128)</span></span>
      </dd>
      <dt className="sr-only">Location</dt>
      <dd className="flex items-center">
        <svg width="2" height="2" aria-hidden="true" fill="currentColor" className="mx-3 text-slate-300">
          <circle cx="1" cy="1" r="1" />
        </svg>
        <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="mr-1 text-slate-400 dark:text-slate-500" aria-hidden="true">
          <path d="M18 11.034C18 14.897 12 19 12 19s-6-4.103-6-7.966C6 7.655 8.819 5 12 5s6 2.655 6 6.034Z" />
          <path d="M14 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
        </svg>
        Brasília, DF
      </dd>
    </dl>
    <div className="mt-4 col-start-1 row-start-3 self-center sm:mt-0 sm:col-start-2 sm:row-start-2 sm:row-span-2 lg:mt-6 lg:col-start-1 lg:row-start-3 lg:row-end-4">
      <button type="button" className="inline-block text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200">Sobre a Glazing</button>
    </div>
    <p className="mt-4 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-slate-400">
    Uma empresa especializada na concepção e instalação de projetos inteligentes e modernos. Hoje em dia são virtualmente impossíveis não olhar ao redor e perceber a importância que o vidro tem em nossas vidas. Nossa missão é ajudar você quando o assunto é este material tão presente e arrojado. Adicione beleza e praticidade aos seus projetos de engenharia ou decoração! Glazing Design está aqui para você! É uma empresa que atua no mercado de vidros desde o ano 2000, atendendo todo DF e  entorno. Com experiência e tradição, a Start Vidros vem se destacando em seu segmento de vidro a sua alta qualidade e competência.
    </p>
  </div>
  </div>
</>
  );
}
