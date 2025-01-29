"use client";
import bannerOne from "../../../public/Corbertura1.png";
import bannerTwo from "../../../public/Corbertura2.png";
import bannerThree from "../../../public/Corbertura.jpg";
import Image from "next/image";
import NextImage from "../../components/ui/NextImage";
import { motion } from "framer-motion";
import FadeIn from "./componentes/FadeIn";

import { PageIntroduction } from './page-introduction';
import Container from "../../components/ui/container";
import CoberturaDetalhe from "./componentes/CoberturaDetalhe";

import Section from "./componentes/Section";
import { Unitereg } from "../../components/ui/Unitereg";


import PersonalInfo from "./componentes/Steps/PersonalInfo";
import SelectPan from "./componentes/Steps/SelectPan";
import { useState } from "react";
import PickAddOns from "./componentes/Steps/PickAddOns";
import FinishingUp from "./componentes/Steps/FinishingUp";
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
  <section className="relative md:py-24 py-16">
    <div className="container relative">
      <div className="grid md:grid-cols-12 grid-cols-1 gap-6">
        <div className="lg:col-span-5 md:col-span-6">
          <div className="grid grid-cols-1 gap-6">
            <NextImage src={bannerThree} className="rounded-xl" alt="" />
            <NextImage src={bannerThree} className="rounded-xl" alt="" />
            <NextImage src={bannerThree} className="rounded-xl" alt="" />
            </div>
            </div>
            <div className="lg:col-span-7 md:col-span-6">
              <div className="sticky top-20">
                <div className="grid lg:grid-cols-12 grid-cols-1 gap-6">
                  <div className="lg:col-span-12">
                    <div className="work-details">
                      <h4 className="text-xl font-semibold mb-3 border-b border-gray-100 dark:border-gray-700 pb-3">Project Name :</h4>
                      <p className="text-slate-400 dark:text-white/60">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit totam atque dignissimos porro, exercitationem, neque alias ea aliquid quibusdam voluptates impedit maxime aut asperiores consequatur iste. Corporis fuga ducimus dignissimos. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci non dolorem consequatur vitae hic.</p>
                      <p className="text-slate-400 dark:text-white/60 mt-2">Suscipit totam atque dignissimos porro, exercitationem, neque alias ea aliquid quibusdam voluptates impedit maxime aut asperiores consequatur iste. Corporis fuga ducimus dignissimos.</p>
                      </div>
                      </div>
                      <div className="lg:col-span-7">
                        <div className="bg-gray-50 dark:bg-slate-800 shadow dark:shadow-gray-800 p-6 rounded-xl">
                          <h5 className="text-lg font-semibold border-b border-gray-100 dark:border-gray-700 pb-3 mb-3">Project Info :</h5>
                          <dl className="grid grid-cols-12 mb-0">
                            <dt className="md:col-span-4 col-span-5 mt-2">Client :</dt>
                            <dd className="md:col-span-8 col-span-7 mt-2 text-slate-400">Calvin Carlo</dd>
                            <dt className="md:col-span-4 col-span-5 mt-2">Category :</dt>
                            <dd className="md:col-span-8 col-span-7 mt-2 text-slate-400">Web Design</dd>
                            <dt className="md:col-span-4 col-span-5 mt-2">Date :</dt>
                            <dd className="md:col-span-8 col-span-7 mt-2 text-slate-400">23rd Sep, 2021</dd>
                            <dt className="md:col-span-4 col-span-5 mt-2">Website :</dt>
                            <dd className="md:col-span-8 col-span-7 mt-2 text-slate-400">www.yourdomain.com</dd>
                            <dt className="md:col-span-4 col-span-5 mt-2">Location :</dt>
                            <dd className="md:col-span-8 col-span-7 mt-2 text-slate-400">3/2/64 Mongus Street, UK</dd>
                            </dl>
                            </div>
                            </div>
                            </div>
                            </div>
                            </div>
                            </div>
                            </div>
                            <div className="container relative md:mt-24 mt-16">
                              <div className="grid grid-cols-1 text-center">
                                <span className="text-slate-400 dark:text-white/60 mb-4">Available for freelance projects</span>
                                <h3 className="md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Do you have designing project? <br /> Let's talk.</h3>
                                <div className="mt-6">
                                  <a className="py-2 px-5 inline-flex items-center font-medium tracking-wide border align-middle duration-500 text-[15px] text-center bg-orange-500 hover:bg-orange-600 border-orange-500 hover:border-orange-600 text-white rounded-xl" href="/contactus">
                                  <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="h-[15px] w-[15px] me-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z">
                                    </path>
                                    </svg> Contact us</a>
                                    </div>
                                    </div>
                                    </div>
                                    </section>
    </div>
    </>
  );
}
