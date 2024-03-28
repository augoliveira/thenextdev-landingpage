import React from "react";
import Image from 'next/image'
import MainButton from "../../app/common/MainButton";
import { roboto } from "@/lib/util";
import feature_1 from "../../../public/Vidraçaria.jpg";
import rectangular from "../../../public/rectangular.png";
import Logo from "../../../public/woo_reduced_opacity.png";


function SecondFeatureSection() {
  return (
    <section className="bg-blue-950 px-4 md:px-8 md:primary-bg relative rounded-[14px] md:rounded-[0]">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="md:mt-[-4rem] relative">
          <Image src={feature_1} alt="feature 1" className="z-30 rounded-lg w-577 h-638" />
          <div className="hidden lg:block absolute top-[15rem] left-0 -z-10">
            <Image src={rectangular} alt="shape" />
          </div>
        </div>
        <div>
          <p className="text-[2.25rem] font-[700] text-white">
          SOLICITE UMA <span className="text-blck">COTAÇÃO</span>
          </p>
          <p
            className={`${roboto.className} text-normal text-white my-[0.81rem] md:pr-[16rem]`}
          >
            A <span className="mt-4 font-semibold text-green-300">GlAzing Design</span> possui toda a experiência para a viabilização e realização de seu projeto. Entre em contato conosco através da nossa central de atendimento e solicite um orçamento.
          </p>
          <div className="my-[2.44rem]">
            <MainButton
              text={"Solicite um contato"}
              classes="bg-secondary hover:bg-secondary text-black rounded-[3.75rem] h-[4rem] w-[16rem]"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-8 items-center md:ml-[19rem]">
        <div>
          <p className="col-start-1 row-start-2 mt-4 max-w-[36rem] text-4xl font-extrabold tracking-tight text-slate-500 sm:text-7xl xl:max-w-[43.5rem]">
          BOX DE BANHEIRO
          </p>
          <div className="flex justify-end p-4">
            <div className="pointer-events-auto flex divide-x divide-slate-400/20 overflow-hidden rounded-md bg-white text-[0.8125rem] font-medium leading-5 text-slate-700 shadow-sm ring-1 ring-slate-700/10">
                <div className="px-4 py-2 hover:bg-slate-50 hover:text-slate-900">
                  Box Rollit
                </div>
                <div className="px-4 py-2 hover:bg-slate-50 hover:text-slate-900">
                  Box Elegance
                </div>
                <div className="px-4 py-2 hover:bg-slate-50 hover:text-slate-900">
                  Box flex
                </div>
                <div className="px-4 py-2 hover:bg-slate-50 hover:text-slate-900">
                  Box até o teto
                </div>
                <div className="px-4 py-2 hover:bg-slate-50 hover:text-slate-900">
                  Box tradicionais
                </div>
              </div>
            </div>
          <div className="my-[2.44rem]">
            <MainButton
              text={"SOLICITAR ORÇAMENTO"}
              classes="bg-secondary hover:bg-secondary text-black rounded-[3.75rem] h-[4rem] w-[16rem]"
            />
          </div>
        </div>
        <div className="md:mb-[-4rem]">
        
        </div>
      </div>

      <div className="hidden md:block absolute top-0 right-0">
        <Image
          src={Logo}
          alt="woo logo"
          className="w-[300px]"
        />
      </div>
    </section>
  );
}

export default SecondFeatureSection;