'use client'

import { CheckIcon } from '@heroicons/react/20/solid'
import amazonImg from "../../../public/assets/images/cortina-de-vidro1.jpg";
import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline'
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'


import NextImage from "./NextImage";
import Link from 'next/link';
import { AiOutlineYoutube } from "react-icons/ai";
import { TbBrandGithub } from "react-icons/tb";
import { RxOpenInNewWindow } from "react-icons/rx";
import { AnimatedText } from '@/components/AnimatedText/index';


const includedFeatures = [
  'Porta de abrir',
  'Porta de correr',
  'Porta com mola',
]

import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'

const products = [
  { name: 'Orçamento online', description: 'Oferecemos a nossos clientes, a possibilidade de solicitar seu orçamentos do conforto da sua casa, econommizando tempo e de forma dratuita.', href: '#', icon: ChartPieIcon },
  { name: 'Rapidez na Entrega', description: 'Prezamos principalmente pela experiência de nossos clientes, entregar os serviços no prazo é prioridade na Glazing Design.', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Materiais de Qualidade', description: 'Do vidro aos materiais usados nas instalações, a qualidade é um ponto indispensavel, nosso papel é entregar o melhor resultado com durabilidade e segurança.', href: '#', icon: FingerPrintIcon },
]
const callsToAction = [
  { name: 'Video de apresentação', href: '#', icon: PlayCircleIcon },
  { name: 'Contato por telefone', href: '#', icon: PhoneIcon },
]



const Projects = () => {
  return (
    <section id="project" className="max-w-container mx-auto lgl:px-20 py-24 px-8 bg-clr_bg1">
      <div className="px-24">
        <AnimatedText text='PORQUE NOS ESCOLHER' />
      </div>
      
      {/* ============ project One Start here ================ */}
      <div className="w-full flex flex-col items-center justify-center gap-8 mt-10">
        <div className="flex flex-col xl:flex-row gap-6">
          <Link
            className="w-full xl:w-2/3 h-auto relative group"
            href="https://nextamazon.reactbd.com/"
            target="_blank"
          >
            <div>
              <NextImage
                className="w-full h-full rounded-l-xl object-contain"
                src={amazonImg}
                alt="amazonImg"
                placeholder='blur'
                blurDataURL='data:image/png;base64,[IMAGE_CODE_FROM_PNG_PIXEL]'
              />
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </Link>
          <div className="w-full xl:w-2/3 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
          <div>
              <p className="col-start-1 row-start-2 mt-4 max-w-[36rem] text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl xl:max-w-[43.5rem]">
                Nossas Vantagens
              </p>
            </div>
            <div className="top-full z-10 mt-3 max-w-xl rounded-3xl backdrop-blur-sm bg-white/30 shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-cyan-500 shadow-lg shadow-cyan-500/50 group-hover:bg-gray-600">
                        <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-400" aria-hidden="true" />
                      </div>
                      <div className="flex-auto">
                        <Link href={item.href} className="col-start-1 row-start-2 mt-4 max-w-[36rem] text-4xl font-extrabold tracking-tight text-slate-900 sm:text-2xl xl:max-w-[43.5rem]">
                          {item.name}
                          <span className="absolute inset-0" />
                        </Link>
                        <p className="col-start-1 row-start-3 tracking-7 max-w-lg text-lg text-slate-700">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-200/5 bg-gradient-to-r from-bodyColor to-[#66a900]">
                  {callsToAction.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-200 hover:bg-gray-800"
                    >
                      <item.icon className="h-5 w-5 flex-none text-cyan-500" aria-hidden="true" />
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 bg-gray-200/10 ring-green-900/10 hover:ring-gray-900/20">
          Solicite um Orçamento.{' '}
              <Link href="https://api.whatsapp.com/send?phone=5561986692775" className="font-semibold text-[#ffffff] backdrop-grayscale bg-gradient-to-r from-bodyColor to-[#66a900]/90 rounded-full px-3 py-1">
                <span className="absolute inset-0" aria-hidden="true" />
                Whatsapp <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
            
          </div>
        </div>
        {/* ============ project One End here ================== */}
      </div>
    </section>
  );
};

export default Projects;
