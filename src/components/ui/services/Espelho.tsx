import Image from "next/image";
import React from "react";
import { GiCheckMark } from "react-icons/gi";

import { aboutUsImgThree } from "@/assets";
import { motion } from "framer-motion";

const Espelho = () => {
  return (
    <div className="mt-14 flex w-full items-center gap-10 px-6">
      <motion.div
        initial={{ x: -20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.2,
          x: { type: "spring", stiffness: 60 },
          opacity: { duration: 1 },
          ease: "easeIn",
          duration: 0.5
        }}
        className="hidden w-2/5 lgl:inline-flex"
      >
        <Image
          src={aboutUsImgThree}
          alt="aboutUsImgThree"
          width={631}
          height={500}
          unoptimized
          className="h-full w-full rounded-l-lg object-cover transition-all duration-500 group-hover:scale-110"
        />
      </motion.div>
      <div className="w-full lgl:w-3/5">
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 100 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1
          }}
          className="flex flex-col gap-4"
        >
          <h3
            // initial={{ x: 50, opacity: 0 }}
            // whileInView={{ x: 0, opacity: 1 }}
            // viewport={{ once: true }}
            // transition={{
            //   delay: 0.2,
            //   x: { type: "spring", stiffness: 100 },
            //   opacity: { duration: 1 },
            //   ease: "easeIn",
            //   duration: 1,
            // }}
            className="col-start-1 row-start-2 mt-4 max-w-[36rem] text-4xl font-extrabold tracking-tight text-slate-400 sm:text-5xl xl:max-w-[43.5rem]"
          >
            ESPELHOS<span className="ml-3 text-lime-600">PARA BANHEIRO</span>
          </h3>
          <p className="text-base leading-[28px] tracking-wide text-darkText duration-300 hover:text-gray-300">
            O Espelho{" "}
            <span className="p-2 text-base font-extrabold tracking-tight text-lime-600">
              GLAZING DESIGN
            </span>
            é um Produto exclusivo, oferece grande beleza com resistência a
            riscos e oxidação. Ideal para diversas aplicações, seja como
            decoração, revestimento de peças, seja de maneira autoportante, em
            aplicações como tampos de mesas, estantes, biombos, etc.
            <span className="text-base font-extrabold tracking-tight text-lime-600">
              {" "}
              A GLAZING DESIGN
            </span>{" "}
            disponibiliza espelhos com acabamento bizotado, recortado e
            lapidado, com tamanhos grandes e pequenos trazendo um ótimo
            acabamento e proporcionando uma sensação de que o seu ambiente ficou
            maior.
          </p>
          <p className="text-base leading-[28px] tracking-wide text-darkText duration-300 hover:text-gray-300">
            Na{" "}
            <span className="text-base font-extrabold tracking-tight text-lime-600">
              GLAZING DESIGN
            </span>{" "}
            você encontra Espelhos com preços acessíveis, o melhor acabamentos e
            instalação rápida e simples, feita por profissionais altamente
            capacitados.
          </p>
        </motion.div>
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.3,
            x: { type: "spring", stiffness: 100 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1
          }}
          className="flex max-w-[450px] flex-col gap-0 py-6 md:gap-4 md:py-10"
        >
          <div className="flex flex-col items-start gap-0 md:flex-row md:items-center md:justify-between">
            <p className="flex cursor-pointer items-center gap-2 text-gray-300 duration-300 hover:text-white">
              <span className="text-lime-600">
                <GiCheckMark />
              </span>
              Espelho para banheiro
            </p>
            <p className="flex cursor-pointer items-center gap-2 text-gray-300 duration-300 hover:text-white">
              <span className="text-lime-600">
                <GiCheckMark />
              </span>
              Espelho para sala
            </p>
          </div>
          <div className="flex flex-col items-start gap-0 md:flex-row md:items-center md:justify-between">
            <p className="flex cursor-pointer items-center gap-2 text-gray-300 duration-300 hover:text-white">
              <span className="text-lime-600">
                <GiCheckMark />
              </span>
              Espelho decorativo
            </p>
            <p className="flex cursor-pointer items-center gap-2 text-gray-300 duration-300 hover:text-white">
              <span className="text-lime-600">
                <GiCheckMark />
              </span>
              Espelho organico
            </p>
          </div>
          <div className="flex flex-col items-start gap-0 md:flex-row md:items-center md:justify-between">
            <p className="flex cursor-pointer items-center gap-2 text-gray-300 duration-300 hover:text-white">
              <span className="text-lime-600">
                <GiCheckMark />
              </span>
              Espelho com bizoté
            </p>
            <p className="flex cursor-pointer items-center gap-2 text-gray-300 duration-300 hover:text-white">
              <span className="text-lime-600">
                <GiCheckMark />
              </span>
              Espelho lapidado
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.4,
            x: { type: "spring", stiffness: 100 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1
          }}
        >
          <p className="text-base leading-[28px] tracking-wide text-darkText duration-300 hover:text-gray-300">
            Entre em contato e solicite a visita de nosso técnico consultor que
            irá lhe orientar sobre as melhores opções de Espelhos.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Espelho;
