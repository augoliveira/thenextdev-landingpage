import React from "react";
import { GiCheckMark } from "react-icons/gi";

import { projectThreeImg } from "@/assets";
import { motion } from "framer-motion";

import NextImage from "../NextImage";

const Development = () => {
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
        <NextImage src={projectThreeImg} alt="projectThreeImg" />
      </motion.div>
      <div className="w-full lgl:w-3/5">
        <div className="flex flex-col gap-4">
          <motion.h3
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
            className="col-start-1 row-start-2 mt-4 max-w-[36rem] text-4xl font-extrabold tracking-tight text-slate-400 sm:text-5xl xl:max-w-[43.5rem]"
          >
            Vidro com
            <span className="ml-3 text-lime-600">Película de Segurança</span>
          </motion.h3>
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
            className="grid grid-cols-1 gap-8 mdl:grid-cols-2"
          >
            <div className="flex flex-col gap-6">
              <h3 className="font-titleFont flex items-center gap-4 text-lg font-bold">
                <span className="text-lime-600">
                  <GiCheckMark />
                </span>
                Películas decorativas
              </h3>
              <p className="text-base text-darkText duration-300 hover:text-gray-300">
                As películas decorativas oferecem uma grande variedade de
                soluções e podem trazer um toque pessoal aos seus vidros.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <h3 className="font-titleFont flex items-center gap-4 text-lg font-bold">
                <span className="text-lime-600">
                  <GiCheckMark />
                </span>
                Películas segurança
              </h3>
              <p className="text-base text-darkText duration-300 hover:text-gray-300">
                Extremamente duráveis, estas películas oferecem a segurança de
                pessoas e bens. Permitem evitar a destruição do vidro.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <h3 className="font-titleFont flex items-center gap-4 text-lg font-bold">
                <span className="text-lime-600">
                  <GiCheckMark />
                </span>
                Películas Privacidade
              </h3>
              <p className="text-base text-darkText duration-300 hover:text-gray-300">
                As películas espelho unidirecional permitem criar de um lado do
                vidro um espelho perfeito e a transparência.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <h3 className="font-titleFont flex items-center gap-4 text-lg font-bold">
                <span className="text-lime-600">
                  <GiCheckMark />
                </span>
                Películas térmicas
              </h3>
              <p className="text-base text-darkText duration-300 hover:text-gray-300">
                As películas adesivas anti-calor resistentes são a alternativa
                perfeita para o ar condicionado. Aplicadas às janelas, rejeitam
                até 80% do calor.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Development;
