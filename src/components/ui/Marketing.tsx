'use client'

import { motion } from 'framer-motion'
import NextImage from '@/components/ui/NextImage'
import Img from '../../../public/Orçmento.png'
import { Button } from '@/components/button'
import { HiArrowNarrowRight } from 'react-icons/hi'

type HeroSectionProps = {
  homeInfo: HomePageInfo
}

import {
  ArrowPathIcon, 
  CloudArrowUpIcon, 
  FingerPrintIcon, 
  LockClosedIcon
} from "@heroicons/react/24/outline";
import type { HomePageInfo } from '@/types/page-info'
import { TiArrowForward } from 'react-icons/ti'

const features = [
  {
    name: 'Push to deploy',
    description:
      'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'SSL certificates',
    description:
      'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.',
    icon: LockClosedIcon,
  },
  {
    name: 'Simple queues',
    description:
      'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Advanced security',
    description:
      'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
    icon: FingerPrintIcon,
  },
]

export default function Marketing({homeInfo}: HeroSectionProps) {
  const handleContact = () => {
    const contactSection = document.querySelector('#contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }
  return (
    <><section className="w-full lg:h-[755px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-end pb-10 sm:pb-32 py-32 lg:pb-[110px]">
      <div className="mx-auto max-w-max flex items-start justify-between flex-col-reverse lg:flex-row">
        <motion.div
          className="w-full lg:max-w-[530px]"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          <p className="mt-4 px-4 text-3xl opacity-73 font-bold tracking-[-0.04em] text-gray-900 sm:text-5xl/[3rem]">Por que a VideGlass é o
            <span className="font-extrabold text-black rounded-sm bg-linear-to-r/srgb from-amber-800 to-orange-400"> Parceiro Oficial </span> das Vidraçarias?
          </p>
          <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-gray-600">
          <span className="text-gray-600 mt-1">
            <TiArrowForward />
          </span>
          Tempera Própria
        </li>
        <li className="text-base flex gap-2 text-gray-600">
          <span className="text-gray-600 mt-1">
            <TiArrowForward />
          </span>
          Entrega com frota própria
        </li>
        <li className="text-base flex gap-2 text-gray-600">
          <span className="text-gray-600 mt-1">
            <TiArrowForward />
          </span>
          Orçamento Online
        </li>
        <li className="text-base flex gap-2 text-gray-600">
          <span className="text-gray-600 mt-1">
            <TiArrowForward />
          </span>
          Linha completa de Acessórios e Ferragens
        </li>
        <li className="text-base flex gap-2 text-gray-600">
          <span className="text-gray-600 mt-1">
            <TiArrowForward />
          </span>
          Atendemos exclusivamente Vidraçarias e Serralherias
        </li>
      </ul>
      <div className="mt-6 lg:mt-10 flex sm:items-center sm:gap-5 flex-col sm:flex-row">
            <Button className="w-max shadow-button" onClick={handleContact}>
            Fale com a nossa Equipe de Atendimento
              <HiArrowNarrowRight size={18} />
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 200, scale: 0.5 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 200, scale: 0.5 }}
          transition={{ duration: 0.5 }}
          className="origin-center"
        >
          <NextImage
            className="w-[300px] h-[300px] lg:w-[420px] lg:h-[404px] mb-6 lg:mb-0 rounded-lg object-cover"
            width={420}
            height={404}
            src={Img}
            alt="Foto de perfil do Gabriel Borges" />
        </motion.div>
      </div>
    </section>
    <div
      aria-hidden="true"
      className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
    >
        <div
          style={{
            clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
          }}
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30" />
      </div></>
  );
}
