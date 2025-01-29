"use client";

import Link from "next/link";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const includedFeatures = [
  "Porta de abrir",
  "Porta de correr",
  "Porta com mola"
];

import { PhoneIcon, PlayCircleIcon } from "@heroicons/react/20/solid";
import {
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon
} from "@heroicons/react/24/outline";

import { AnimatedText } from "@/components/AnimatedText/index";

import amazonImg from "../../../public/assets/images/cortina-de-vidro1.jpg";
import NextImage from "./NextImage";

const products = [
  {
    name: "Orçamento online",
    description:
      "Oferecemos a nossos clientes, a possibilidade de solicitar seu orçamentos do conforto da sua casa, econommizando tempo e de forma dratuita.",
    href: "#",
    icon: ChartPieIcon
  },
  {
    name: "Rapidez na Entrega",
    description:
      "Prezamos principalmente pela experiência de nossos clientes, entregar os serviços no prazo é prioridade na Glazing Design.",
    href: "#",
    icon: CursorArrowRaysIcon
  },
  {
    name: "Materiais de Qualidade",
    description:
      "Do vidro aos materiais usados nas instalações, a qualidade é um ponto indispensavel, nosso papel é entregar o melhor resultado com durabilidade e segurança.",
    href: "#",
    icon: FingerPrintIcon
  }
];
const callsToAction = [
  { name: "Video de apresentação", href: "#", icon: PlayCircleIcon },
  { name: "Contato por telefone", href: "#", icon: PhoneIcon }
];

const Projects = () => {
  return (
    <section
      id="project"
      className="max-w-container mx-auto bg-clr_bg1 px-8 py-24 lgl:px-20"
    >
      <div className="px-24">
        <AnimatedText text="PORQUE NOS ESCOLHER" />
      </div>

      {/* ============ project One Start here ================ */}
      <div className="mt-10 flex w-full flex-col items-center justify-center gap-8">
        <div className="flex flex-col gap-6 xl:flex-row">
          <Link
            className="group relative h-auto w-full xl:w-2/3"
            href="https://nextamazon.reactbd.com/"
            target="_blank"
          >
            <div>
              <NextImage
                className="h-full w-full rounded-l-xl object-contain"
                src={amazonImg}
                alt="amazonImg"
                placeholder="blur"
                blurDataURL="data:image/png;base64,[IMAGE_CODE_FROM_PNG_PIXEL]"
              />
              <div className="absolute left-0 top-0 h-full w-full rounded-lg bg-textGreen/10 duration-300 group-hover:bg-transparent"></div>
            </div>
          </Link>
          <div className="z-10 flex w-full flex-col items-end gap-6 text-right lgl:justify-between xl:-ml-16 xl:w-2/3">
            <div>
              <p className="col-start-1 row-start-2 mt-4 max-w-[36rem] text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl xl:max-w-[43.5rem]">
                Nossas Vantagens
              </p>
            </div>
            <div className="top-full z-10 mt-3 max-w-xl rounded-3xl bg-white/30 shadow-lg ring-1 ring-gray-900/5 backdrop-blur-sm">
              <div className="p-4">
                {products.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                  >
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-cyan-500 shadow-lg shadow-cyan-500/50 group-hover:bg-gray-600">
                      <item.icon
                        className="h-6 w-6 text-gray-600 group-hover:text-indigo-400"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="flex-auto">
                      <Link
                        href={item.href}
                        className="col-start-1 row-start-2 mt-4 max-w-[36rem] text-4xl font-extrabold tracking-tight text-slate-900 sm:text-2xl xl:max-w-[43.5rem]"
                      >
                        {item.name}
                        <span className="absolute inset-0" />
                      </Link>
                      <p className="tracking-7 col-start-1 row-start-3 max-w-lg text-lg text-slate-700">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 divide-x divide-gray-200/5 bg-gradient-to-r from-[#0A192F] to-[#66a900]">
                {callsToAction.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-200 hover:bg-gray-800"
                  >
                    <item.icon
                      className="h-5 w-5 flex-none text-cyan-500"
                      aria-hidden="true"
                    />
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="relative rounded-full bg-gray-200/10 px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-green-900/10 hover:ring-gray-900/20">
              Solicite um Orçamento.{" "}
              <Link
                href="https://api.whatsapp.com/send?phone=5561986692775"
                className="rounded-full bg-gradient-to-r from-[#0A192F] to-[#66a900]/90 px-3 py-1 font-semibold text-[#ffffff] backdrop-grayscale"
              >
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
