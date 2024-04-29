/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import Image from "next/image";
import Link from 'next/link';
import { Github, LinkedIn, Twitter } from '@/components/shared/icons';

import {
  FacebookLogo,
  InstagramLogo,
  TwitterLogo,
  YoutubeLogo
} from 'phosphor-react'

import payment from "../../../public/Forma-de-pagamento.webp";

import { Wave } from '@/components/ui/wave';

import Logo from "../../../public/logo-campanha.png";

export function Footer() {
  return (
    <div className="lg:pt-3 flex flex-wrap flex-col justify-center w-full">
      <div className="container flex flex-col sm:flex-row justify-around bg-[#1a1c20] min-w-full pb-5">
        <div className="flex flex-col px-2 mt-8 items-start"> 
        <Image
            width={300}
            height={30}
            src={Logo}
            alt="Logo Glazing Design"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <p className='text-gray-400 pb-1'>Fique por dentro das novidades!!</p>
          <input
            className="py-2 p-2 text-sm bg-white rounded shadow-lg border border-gray-300  mb-3 w-full text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent "
            type="email"
            placeholder="Cadastre seu email"
          />
          <button className=" w-2/4 p-1 bg-green-500 border-0 text-white rounded-lg hover:bg-green-300">
            Subscribe
          </button>
        </div>

        <div className='flex items-center space-x-2'>
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
    </div>
  )
}