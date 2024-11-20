import React from "react";
import { GiCheckMark } from "react-icons/gi";

import { projectTwoImg } from "@/assets";
import { motion } from "framer-motion";

import NextImage from "../NextImage";

const Design = () => {
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
        <NextImage src={projectTwoImg} alt="projectTwoImg" />
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
            Porta de
            <span className="ml-3 text-lime-600">aluminio com vidro</span>
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
            className="grid grid-cols-1 gap-10 mdl:grid-cols-2"
          >
            <div className="flex flex-col gap-6">
              <h3 className="font-titleFont flex items-center gap-4 text-lg font-bold">
                <span className="text-lime-600">
                  <GiCheckMark />
                </span>
                Porta de vidro temperado
              </h3>
              <p className="text-base text-darkText duration-300 hover:text-gray-300">
                Na Glazing Design Você encontra Existem diversos tipos de portas
                no mercado… Mas você conhece a porta de vidro temperado? A porta
                de vidro temperado é um assunto que acaba gerando muitas dúvidas
                por parte dos clientes, principalmente, na hora de iniciar o
                projeto ou uma reforma… Porém, no post de hoje iremos explorar
                um pouco mais sobre esse assunto para que você compreenda ao
                máximo sobre esse tipo de porta.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <h3 className="font-titleFont flex items-center gap-4 text-lg font-bold">
                <span className="text-lime-600">
                  <GiCheckMark />
                </span>
                Porta de vidro laminado
              </h3>
              <p className="text-base text-darkText duration-300 hover:text-gray-300">
                Uma porta de vidro laminado é um tipo de porta que utiliza vidro
                laminado, um material feito de duas ou mais camadas de vidro
                unidas por uma camada intermediária de material plástico,
                geralmente polivinil butiral (PVB). Esse tipo de vidro é
                projetado para oferecer uma combinação de segurança,
                durabilidade e estética.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <h3 className="font-titleFont flex items-center gap-4 text-lg font-bold">
                <span className="text-lime-600">
                  <GiCheckMark />
                </span>
                Porta de esquadria de aluminio
              </h3>
              <p className="text-base text-darkText duration-300 hover:text-gray-300">
                Uma porta de esquadria de alumínio é um tipo de porta feita com
                uma estrutura de alumínio, conhecida por sua durabilidade,
                resistência e estética moderna. A esquadria refere-se à
                estrutura de alumínio que forma a moldura da porta, e pode ser
                usada em combinação com diferentes tipos de painéis, como vidro
                ou painéis sólidos.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <h3 className="font-titleFont flex items-center gap-4 text-lg font-bold">
                <span className="text-lime-600">
                  <GiCheckMark />
                </span>
                Porta com acustico
              </h3>
              <p className="text-base text-darkText duration-300 hover:text-gray-300">
                Uma porta acústica é projetada para reduzir a transmissão de som
                entre ambientes, proporcionando um nível elevado de isolamento
                acústico. Essas portas são especialmente úteis em locais onde é
                necessário minimizar o ruído, como em estúdios de gravação,
                salas de conferências, consultórios, ou até mesmo em ambientes
                residenciais para maior conforto.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Design;
