'use client'
import React, { useState } from 'react'
import Link from 'next/link';
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import NextImage from './../ui/NextImage';

interface IProps {
  imageUrl: string;
  title: string;
  description: string;
}

function ServiceCard({ imageUrl, title, description }: IProps) {
  const [hovered, setHovered] = useState<boolean>(false)
    const [hovered1, setHovered1] = useState<boolean>(false)
  return (
    
    <div className="rounded-lg h-[436px] flex flex-col bg-gradient-to-r from-bodyColor to-[#66a900] overflow-hidden group transition-all border-2 border-gray-800 hover:border-emerald-500 opacity-70 hover:opacity-100">
      <div className="w-full h-56 overflow-hidden">
        <NextImage
        src={imageUrl} 
        alt="service image"
        width={1080}
        height={672}
        unoptimized
        className="w-full h-full object-cover group-hover:scale-110 duration-500 transition-all"
        />
      </div>
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="px-4 text-4xl lgl:text-6xl mt-6 font-titleFont font-semibold flex flex-col"
      >
        {title}
      </motion.h1>
      <p className="px-4 text-lightBlue text-[16px] font-normal my-[24px] md:max-w-[420px]">
        {description}
      </p>

      <div className="text-lime-950 bg-lime-800 py-2 px-2 text-[16px] font-bold flex gap-4">
      <Link onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} href="">
      <div className='flex items-center p-3 px-5'>
                            <div className='md:pr-5 pr-3 md:mr-2 md:pl-2'>
                                <div className='font-medium text-slate-200 hover:text-lime-200 hover:text-[20px] text-[20px] max-md:text-[14px] leading-5'>Orçamento</div>
                            </div>
                            <div className='ml-auto'>
                                <svg xmlns="http://www.w3.org/2000/svg" className={`  text-slate-200 transition ease-in duration-150 ${hovered ? "translate-x-0 ": "-translate-x-1"}`} width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill="currentColor" d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"></path><path className={` text-slate-200 transition ease-in duration-150 ${hovered ? " opacity-100" : "opacity-0 "}`} stroke="currentColor" d="M1.75 8H11" strokeWidth="1.5" strokeLinecap="round"></path></svg>
                            </div>
                        </div>
        </Link>
      </div>
    </div>
    
  );
}

export default ServiceCard;