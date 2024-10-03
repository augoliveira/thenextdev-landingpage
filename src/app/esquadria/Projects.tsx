'use client'

import { CheckIcon } from '@heroicons/react/20/solid'
import amazonImg from "../../../public/bg-esquadria.jpg";
import cyberImg from "../../../public/Aluminio.jpg";
import noorShop from "../../../public/cortinas-vidro.svg";
import Image from "next/image";
import NextLink from '../../components/ui/NextLink';
import { InstagramLogo, WhatsappLogo, YoutubeLogo } from "@phosphor-icons/react";
import { BsWhatsapp } from 'react-icons/bs';


const includedFeatures = [
  'Porta de abrir',
  'Porta de correr',
  'Janelas',
]


const Projects = () => {
  return (
    <section id="project" className="max-w-container mx-auto lgl:px-32 py-16 px-16 bg-gradient-to-r from-zinc-100 to-[#4c497a]">
      {/* ============ project One Start here ================ */}
      <div className="w-full flex flex-col items-center justify-center gap-28 mt-8">
        <div className="flex flex-col xl:flex-row gap-6">
            <div className="w-full lg:w-96 xl:w-1/2 h-auto relative group">
              <video className="w-full h-full rounded-sm object-center object-cover aspect-video md:aspect-square" autoPlay loop muted controls preload="none">
                <source src={'./esquadria.mp4'} type="video/mp4" />
                <track
                  src="/path/to/captions.vtt"
                  kind="subtitles"
                  srcLang="en"
                  label="English"
                />
              </video>
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
              <p className="col-start-1 row-start-2 mt-4 max-w-[36rem] text-4xl font-extrabold tracking-tight text-slate-900 sm:text-7xl xl:max-w-[43.5rem]">
                Esquadria de alumínio
              </p>
          <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-slate-950 ring-1 ring-lime-950/10 hover:ring-gray-900/20">
          Solicite um Orçamento.{' '}
              <NextLink href="https://api.whatsapp.com/send?phone=5561986692775" className="bg-gradient-to-r from-bodyColor to-[#5f960d] px-4 rounded-full font-semibold text-indigo-600">
                <span className="absolute inset-0" aria-hidden="true" />
                Whatsapp <span aria-hidden="true">&rarr;</span>
              </NextLink>
            </div>
            <p className="bg-gradient-to-r from-bodyColor to-[#436909] text-sm tracking-tight md:text-base text-slate-400 p-2 md:p-6 rounded-md">
            Transforme sua casa em um verdadeiro refúgio de elegância e modernidade com nossas Esquadrias de alumínio são estruturas utilizadas em portas, janelas e fachadas, fabricadas a partir de perfis de alumínio. Essas esquadrias são conhecidas por sua durabilidade, leveza e resistência à corrosão, o que as torna ideais para ambientes internos e externos.{" "}
              <span className="text-lime-400 text-balance tracking-tight">Feitas sob medida para atender às suas necessidades, nossas esquadrias proporcionam não apenas beleza, mas também durabilidade e eficiência energética. </span> O alumínio permite acabamentos variados, como anodização ou pintura eletrostática, proporcionando diversas opções de cores e texturas. Além disso, as esquadrias de alumínio oferecem excelente isolamento térmico e acústico quando combinadas com vidros adequados, contribuindo para a eficiência energética e o conforto das edificações.
            </p>
            <ul className="text-xs md:text-2xl font-titleFont tracking-tight flex gap-2 md:gap-5 justify-between text-lime-950">
            {includedFeatures.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
            <div className="text-2xl flex gap-4">
              <NextLink
                className="hover:text-textGreen duration-300 text-slate-800"
                href="https://instagram.com/glazing_design"
                target="_blank"
              >
                <InstagramLogo size={32} weight="fill" />
              </NextLink>
              <NextLink
                className="hover:text-textGreen duration-300 text-slate-800"
                href="https://youtu.be/WzMtRfzkP-Q"
                target="_blank"
              >
                <WhatsappLogo size={32} weight="fill" />
              </NextLink>
              <NextLink
                className="hover:text-textGreen duration-300 text-slate-800"
                href="https://nextamazon.reactbd.com/"
                target="_blank"
              >
                <YoutubeLogo size={32} weight="fill" />
              </NextLink>
            </div>
          </div>
        </div>
        {/* ============ project One End here ================== */}
        {/* ============ project Two Start here ================ */}
        <div className="flex flex-col xl:flex-row-reverse gap-6">
          <NextLink
            className="w-full xl:w-1/2 h-auto relative group text-slate-800"
            href="https://www.noormohmmad.com/"
            target="_blank"
          >
            <div>
              <Image
                className="w-full h-full object-contain"
                src={cyberImg}
                alt="cyberImg"
              />
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </NextLink>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right z-10">
            <div>
              <h1 className="col-start-1 row-start-2 mt-4 max-w-[36rem] text-4xl font-extrabold tracking-tight text-slate-900 sm:text-7xl xl:max-w-[43.5rem]">
              Vidraçaria
              </h1>
              <p className="text-base font-bold tracking-tight text-slate-600">Temos toda a estrutura completa em vidros.</p>
            </div>
            <p className="bg-gradient-to-r from-bodyColor to-[#436909] text-sm tracking-tight md:text-base text-slate-400 p-2 md:p-6 rounded-md">
              Uma <span className="text-textGreen">VIDRAÇARIA</span> que oferece soluções personalizadas em vidros 
            para atender às necessidades específicas de projetos arquitetônicos. 
            
            
              <span className="text-textGreen"> Com uma ampla variedade de opções, desde vidros temperados a laminados, 
              proporciona segurança e design moderno a espaços residenciais e comerciais. </span> A expertise em medidas precisas e instalação qualificada faz da 
            vidraçaria sob medida uma escolha confiável para transformar 
              ambientes com elegância e funcionalidade.
            </p>
            <div className="flex-col md:flex-row hidden md:flex gap-5">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 bg-gray-200/10 ring-green-900/10 hover:ring-gray-900/20">
          Solicite um Orçamento.{' '}
              <NextLink href="https://api.whatsapp.com/send?phone=5561986692775" className="font-semibold text-[#ffffff] backdrop-grayscale bg-gradient-to-r from-bodyColor to-[#66a900]/90 rounded-full px-3 py-1">
                <span className="absolute inset-0" aria-hidden="true" />
                Whatsapp <span aria-hidden="true">&rarr;</span>
              </NextLink>
            </div>
          </div>
            <div className="text-2xl flex gap-4">
              <NextLink
                className="hover:text-textGreen duration-300 transition-colors hover:bg-gray-100 active:bg-gray-200"
                href="https://github.com/noorjsdivs"
                target="_blank"
              >
                <InstagramLogo size={32} weight="fill" />
              </NextLink>
              <NextLink
                className="hover:text-textGreen duration-300 transition-colors hover:bg-gray-100 active:bg-gray-200"
                href="https://youtu.be/49Fx963su1I"
                target="_blank"
              >
                <WhatsappLogo size={32} weight="fill" />
              </NextLink>
              <NextLink
                className="hover:text-textGreen duration-300 transition-colors hover:bg-gray-100 active:bg-gray-800"
                href="https://www.noormohmmad.com/"
                target="_blank"
              >
                <YoutubeLogo size={32} weight="fill" />
              </NextLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
