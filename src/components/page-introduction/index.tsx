'use client';

import { HiArrowNarrowLeft } from 'react-icons/hi'

import { motion } from 'framer-motion'

import { Link } from '@/components/link'

import { AnimatedText } from './../Portifolio/AnimatedText/index';


export const PageIntroduction = () => {
  return (
    <section className="w-full h-[450px] lg:h-[630px] bg-hero-page bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center px-2">
      <AnimatedText text='BOX PARA BANHEIRO' />
      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-gray-400 text-center max-w-[640px] my-6 text-sm sm:text-base">
          Aqui você poderá ver alguns dos trabalhos que eu desenvolvi. Navegue à
          vontade e explore os projetos para ver como foram criados, as
          tecnologias utilizadas e as funcionalidades implementadas.
        </p>
        <Link href="/">
          <HiArrowNarrowLeft size={20} />
          Voltar para Home
          
        </Link>
      </motion.div>
    </section>
  )
}