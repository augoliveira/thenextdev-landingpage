/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import React, { useState } from 'react'
import Image from "next/image";
import Link from 'next/link';
import { Github, LinkedIn, Twitter } from '@/components/shared/icons';
import { TextHoverEffect } from "@/components/ui/text-hover-effect"

import {
  PhoneList,
  MapPinArea,
  At
} from '@phosphor-icons/react'

import payment from "../../../public/Forma-de-pagamento.webp";


import Logo from "../../../public/logo-campanha.png";

export function Footer() {
  const [isImageLoading, setImageLoading] = React.useState(true)
  return (
    <div className="lg:pt-3 flex flex-wrap flex-col justify-center w-full bg-[#1a1c20]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lgl:px-2 grid grid-cols-1 md:grid-cols-3 lgl:grid-cols-3 gap-8 py-10 sm:flex-row justify-around pb-5">
        <div className="-mt-20 w-full max-w-96 flex-auto overflow-hidden rounded-sm bg-gradient-to-r from-emerald-950/90 to-[#2c4606] text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
          <div className="flex flex-col px-4 py-4 mt-4 items-center"> 
          <Image
                  priority
                  src={Logo}
                  alt="reactBdLogo"
                  onLoad={() => setImageLoading(false)}
                  className={`${isImageLoading ? 'blur' : 'remove-blur'}`}
                />
            <div className="space-y-6">
            <p className='text-gray-400 text-sm max-w-[300px]'>Criatividade e compromisso: nossa receita para o sucesso.</p>
            <div className="max-2xl:text-left">
              <h1 className="text-3xl font-bold text-teal-100">Solicite um orçamento</h1>
              <Link href='#' className="flex items-center gap-2 mt-2 text-gray-400 hover:text-lime-300 cursor-pointer transition-all">
                <PhoneList size={32} className="text-gray-400 hover:text-lime-300 cursor-pointer transition-all" />
              (61) 9 8669-2775
              </Link>
              <p className="flex items-center gap-2 mt-2 text-gray-400 ">
              <MapPinArea size={32} className="text-gray-400"/> <span className="font-semibold text-white">ENDEREÇO:</span> ADE Aguas claras DF
              </p>
              <p className="flex items-center gap-2 mt-2 text-gray-400 ">
              <At size={32} className="text-gray-400"/> <span className="font-semibold text-white">E-MAIL:</span> contato@glazingdesign.com.br
              </p>
            </div>
          </div>
        </div>
        </div>
        

        <div className='flex items-center justify-center'>
              <Link
                href='https://twitter.com/dubdotsh'
                target='_blank'
                rel='noreferrer'
                className='rounded-md p-2 transition-colors hover:bg-gray-100 active:bg-gray-200'
              >
                <span className='sr-only'>Twitter</span>
                <Twitter className='h-5 w-5 text-[#035D26]' />
              </Link>
              <div className='h-8 border-l border-gray-200' />
              <Link
                href='https://github.com/steven-tey/dub'
                target='_blank'
                rel='noreferrer'
                className='rounded-md p-2 transition-colors hover:bg-gray-100 active:bg-gray-200'
              >
                <span className='sr-only'>Github</span>
                <Github className='h-5 w-5 text-[#035D26]' />
              </Link>
              <div className='h-8 border-l border-gray-200' />
              <Link
                href='https://www.linkedin.com/company/dubhq/'
                target='_blank'
                rel='noreferrer'
                className='rounded-md p-2 transition-colors hover:bg-gray-100 active:bg-gray-200'
              >
                <span className='sr-only'>LinkedIn</span>
                <LinkedIn className='h-5 w-5' fill='#035D26' />
              </Link>
            </div>
        <div className="flex flex-col m-5 justify-center">
          <p className="text-lg mb-2">Pague-nos com seus serviços confiáveis.</p>
          <Image
            src={payment}
            alt="payment banner image"
            className="w-full h-10 object-cover"
          />
        </div>
      </div>
      <div className="text-center py-1 text-gray-400 bg-[#09245b] w-full">
      © 2018 – 2020 <strong>GlAZING DESIGN, VIDROS TEMPERADO</strong>. Todos Direitos Reservado.
      </div>
      <div className="h-[20rem] lg:h-[20rem] hidden md:flex items-center justify-center">
                <TextHoverEffect text="GLAZING" />
            </div>
    </div>
  )
}