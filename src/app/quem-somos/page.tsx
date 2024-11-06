"use client";

import { ExternalLink } from '@/components/ui/external-link';
import { NextLink } from 'next/link';
import NextImage from './../../components/ui/NextImage';
import Img1 from '../../../public/beach-house.9b9ee168.jpg'
import Img2 from '../../../public/Bg-sobre.jpg'
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
    <section className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
    <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
    <section className="container relative px-10 md:p-0 transform duration-500 hover:shadow-2xl cursor-pointer hover:-translate-y-1">
        <NextImage className="xl:max-w-6xl" src={Img2} alt="" />
        <div className="flex flex-col content backdrop-blur-sm rounded-sm bg-gradient-to-r from-bodyColor to-[#66a900] p-2 pt-8 md:p-12 pb-12 lg:max-w-lg w-full lg:absolute top-32 right-5 shadow-2xl">
            <div className="flex justify-between font-bold text-sm">
                <p className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Sobre Nos</p>
                <p className="text-gray-900">Desde 200</p>
            </div>
            <h2 className="text-3xl font-semibold mt-4 md:mt-10 text-cyan-400">Nossa História</h2>
            <p className="my-3 text-justify font-medium text-slate-400 leading-relaxed">A Vidraçaria DF vem atuando no segmento de vidros, espelhos, box para banheiro, divisórias em vidro, gabinetes em vidro, fechamento de sacadas e áreas, teto de vidro, cortina de vidro, vitrines e vidros temperados com propriedade, acompanhando sempre as últimas tendências. Estamos preparados para atender Brasília DF.</p>
            <button className="mt-2 md:mt-5 p-3 px-5 bg-black text-white font-bold text-sm hover:bg-gradient-to-r from-bodyColor to-[#107a39]">Fale conosco</button>
        </div>
    </section>
</section>
</>
  );
}
