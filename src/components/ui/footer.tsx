/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import Image from "next/image";
import Link from 'next/link';


import {
  FacebookLogo,
  InstagramLogo,
  TwitterLogo,
  YoutubeLogo
} from 'phosphor-react'

import { Wave } from '@/components/ui/wave';

import Logo from "../../../public/logo.svg";
import { LogoFooter } from "../ui/logoFooter";

export function Footer() {
  return (
    <div className="lg:pt-3 flex flex-wrap flex-col justify-center w-full">
      <Wave />
      <div className="container flex flex-col sm:flex-row justify-around bg-[#1a1c20] min-w-full pb-5 ">
        <div className="flex flex-col px-2 items-start"> 
        <Image
            width={300}
            height={30}
            src={Logo}
            alt="Logo GB Dev"
            priority
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

        <div className="flex flex-col m-5 justify-center ">
          <p className="yt ">
            <Link
              href="https://www.youtube.com/"
              className=" text-white px-4 py-2 font-semibold  inline-flex items-center space-x-2 rounded"
            >
              <YoutubeLogo size={32} weight="bold" />
            </Link>

            <Link
              href="https://www.facebook.com/"
              className=" text-white  px-4 py-2 font-semibold inline-flex items-center space-x-2 rounded"
            >
              <FacebookLogo size={32} weight="bold" />
            </Link>

            <Link
              href="http://www.instagram.com/"
              className="text-white px-4 py-2 font-semibold  inline-flex items-center space-x-2 rounded"
            >
              <InstagramLogo size={32} weight="bold" />
            </Link>

            <Link
              href="https://wwww.twitter.com"
              className="text-white px-4 py-2 font-semibold  inline-flex items-center space-x-2 rounded"
            >
              <TwitterLogo size={32} weight="bold" />
            </Link>
          </p>
        </div>
      </div>
      <div className="text-center py-1 text-gray-400 bg-[#111214] w-full">
      © 2018 – 2020 <strong>GlAZING DESIGN, VIDROS TEMPERADO</strong>. Todos Direitos Reservado.
      </div>
    </div>
  )
}