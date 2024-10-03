"use client";
import bannerOne from "../../../public/Corbertura1.png";
import bannerTwo from "../../../public/Corbertura2.png";
import bannerThree from "../../../public/Corbertura.jpg";
import Image from "next/image";
import { motion } from "framer-motion";
import FadeIn from "./componentes/FadeIn";

import { PageIntroduction } from './page-introduction';
import Container from "../../components/ui/container";
import CoberturaDetalhe from "./componentes/CoberturaDetalhe";

import Section from "./componentes/Section";
import { Unitereg } from "../../components/ui/Unitereg";


import PersonalInfo from "./componentes/Steps/PersonalInfo";
import Sidebar, { MobileSidebar } from "./componentes/Sidebar";
import SelectPan from "./componentes/Steps/SelectPan";
import { useState } from "react";
import PickAddOns from "./componentes/Steps/PickAddOns";
import FinishingUp from "./componentes/Steps/FinishingUp";
import ThankYou from "./components/Steps/ThankYou";
import { Navigation } from '../../components/Navigation/index'
import ActiveLink from '../../components/ui/ActiveLink'

export default function Page() {
  const [activeStep, setActiveStep] = useState(1);

  function nextStep() {
    setActiveStep(activeStep + 1);
  }

  function prevStep() {
    setActiveStep(activeStep - 1);
  }

  function RenderStep() {
    switch (activeStep) {
      case 1:
        return <PersonalInfo nextStep={nextStep} />;
      // Render other steps here
      case 2:
        return <SelectPan nextStep={nextStep} prevStep={prevStep} />;
      case 3:
        return <PickAddOns nextStep={nextStep} prevStep={prevStep} />;
      case 4:
        return (
          <FinishingUp setActiveStep={setActiveStep} prevStep={prevStep} />
        );
      default:
        return null;
    }
  }
  return (
    <>
      <PageIntroduction />
      <CoberturaDetalhe />
      <div className="bg-primeColor relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          aria-hidden="true"
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200/30 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
        >
          <defs>
            <pattern
              x="50%"
              y={-1}
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" width="100%" height="100%" strokeWidth={0} />
        </svg>
      </div>
      <Container className="my-16">
        <div className="text-white  grid md:grid-cols-2 gap-20 font-titleFont place-items-center">
          <div className="flex flex-col gap-6 xl:gap-10">
            <FadeIn>
              <h1 className="text-3xl text-zinc-50 md:text-2xl mdl:text-3xl lgl:text-4xl xl:text-5xl font-semibold">
              Coberturas de Vidro
              </h1>
            </FadeIn>
            <FadeIn>
              <p className="mt-4 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-slate-400">
              Para proteger alguma área da sua residência, comércio ou empresa é necessária uma cobertura resistente, eficaz e moderna. Tudo isso é oferecido pelas coberturas de vidro.
              Esse material oferece diversos benefícios aos moradores e frequentadores do local, pois não prejudica a iluminação natural do espaço, permite o controle da temperatura interna e ainda colabora para uma decoração elegante.
              </p>
            </FadeIn>
            <FadeIn>
              <div className="w-full p-6 xl:p-10 bg-white rounded-3xl flex flex-col lg:flex-row text-black justify-between gap-5">
                <input
                  className="w-full h-12 border-[1px] text-base text-gray-600 placeholder:tracking-wide border-gray-300 rounded-xl px-4 outline-none hover:border-primeColor focus-visible:border-primeColor duration-300"
                  type="text"
                  placeholder="Email"
                />
                <button className="w-full h-12 rounded-xl bg-black text-white uppercase font-medium text-sm tracking-wider hover:bg-green-950 cursor-pointer duration-300 group">
                  next
                </button>
              </div>
            </FadeIn>
          </div>
          <div className="w-full relative flex justify-center items-center gap-6">
            <motion.div
              initial={{ y: 200 }}
              animate={{ y: 0 }}
              transition={{ duration: 1 }}
              className="flex items-center justify-center z-20"
            >
              <Image
                className="w-52 rounded-2xl object-cover "
                src={bannerOne}
                alt="bannerImg"
              />
            </motion.div>

            <div className="flex flex-col gap-7 z-20">
              <motion.div
                initial={{ y: 300 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Image
                  className="w-52 rounded-2xl object-cover"
                  src={bannerTwo}
                  alt="bannerImg"
                />
              </motion.div>
              <motion.div
                initial={{ y: 200 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Image
                  className="w-52 rounded-2xl object-cover"
                  src={bannerThree}
                  alt="bannerImg"
                />
              </motion.div>
            </div>
            <div className="w-72 h-72 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-400 blur-3xl opacity-80" />
          </div>
        </div>
      </Container>
      <Section />
      <div className="flex min-h-screen w-full bg-light-blue md:items-center justify-center p-5  pt-32 md:pt-5">
        <MobileSidebar activeStep={activeStep} />
          <main className="bg-white h-[600px] z-20 w-full max-w-[900px] flex gap-10  p-4 rounded-2xl flex-col md:flex-row   ">
            <Sidebar activeStep={activeStep} />
            <div className=" pt-10    ">
              <RenderStep />
            </div>
          </main>
      </div>
    <Unitereg />
    <Navigation />
    <nav>
    <style jsx global>{`
      .nav-link {
        text-decoration: none;
      }

      .active:after {
        content: " (current page)";
      }
    `}</style>
    <ul className="nav">
      <li>
        <ActiveLink activeClassName="active" className="bg-black py-4 px-4" href="/cobertura">
          Home
        </ActiveLink>
      </li>
      <li>
        <ActiveLink activeClassName="active" className="nav-link" href="/cobertura">
          About
        </ActiveLink>
      </li>
      <li>
        <ActiveLink activeClassName="active" className="nav-link" href="/blog">
          Blog
        </ActiveLink>
      </li>
      <li>
        <ActiveLink
          activeClassName="active"
          className="nav-link"
          href="/dynamic-route"
        >
          Dynamic Route
        </ActiveLink>
      </li>
    </ul>
  </nav>
    </div>
    </>
  );
}
