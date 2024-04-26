'use client';

import { Boundary } from '@/components/ui/boundary';
import { motion } from 'framer-motion';
import { AnimatedText } from '../../components/AnimatedText';
import SliderProduto from '../../components/SlideBox/Slider';
import Link from 'next/link';

export default function Page() {
  return (
    <Boundary labels={['vidro-laminado/page.tsx']} size="small">
      <div className="prose prose-sm prose-invert max-w-none">
      <AnimatedText text='Vidros Especias' />
      <section
      id="home"
      className="max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4"
    >
      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-lg font-titleFont tracking-wide text-textGreen"
      >
        Vidro temperado ou laminado:
      </motion.h3>
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-4xl lgl:text-6xl font-titleFont font-semibold flex flex-col"
      >
        como escolher a melhor opção
        <span className="text-textDark mt-2 lgl:mt-4">
        para sua obra?.
        </span>
      </motion.h1>
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="text-base md:max-w-[650px] text-textDark font-medium"
      >
        O vidro é um dos materiais mais utilizados na instalação de portas automáticas. Esse material valoriza projetos de arquitetura, oferecendo praticidade, beleza e facilidade de acesso, entre outros benefícios. Mas você sabe quais são os tipos de vidros que podem ser usados em portas automáticas? Existem duas opções possíveis: vidro temperado ou laminado.
        <Link href="https://wa.me/message/BOFPLHIABYRUL1" target="_blank">
          {" "}
          <span className="text-textGreen inline-flex relative cursor-pointer h-7 overflow-x-hidden group">
            Saiba mais
            <span className="absolute w-full h-[1px] bg-textGreen left-0 bottom-1 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500"></span>
          </span>
        </Link>
      </motion.p>
      <Link href="https://github.com/noorjsdivs" target="_blank">
        <motion.button
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="w-52 h-14 text-sm font-titleFont border border-textGreen rounded-md text-textGreen tracking-wide hover:bg-hoverColor duration-300"
        >
          Novos projetos?
        </motion.button>
      </Link>
    </section>
    <SliderProduto />
      </div>
    </Boundary>
  );
}
