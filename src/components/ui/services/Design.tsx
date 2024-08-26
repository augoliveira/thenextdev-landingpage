import React from "react";
import { motion } from "framer-motion";
import { GiCheckMark } from "react-icons/gi";
import { projectTwoImg } from "@/assets";
import Image from "next/image";

const Design = () => {
  return (
    <div className="w-full px-6 flex items-center gap-10 mt-14">
      <motion.div
        initial={{ x: -20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.2,
          x: { type: "spring", stiffness: 60 },
          opacity: { duration: 1 },
          ease: "easeIn",
          duration: 0.5,
        }}
        className="hidden lgl:inline-flex w-2/5"
      >
        <Image src={projectTwoImg} alt="projectTwoImg" />
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
              duration: 1,
            }}
            className="text-2xl font-medium tracking-tight mb-10"
          >
            Porta de
            <span className="text-lime-600 ml-3">aluminio com vidro</span>
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
              duration: 1,
            }}
            className="grid grid-cols-1 mdl:grid-cols-2 gap-10"
          >
            <div className="flex flex-col gap-6">
              <h3 className="font-titleFont text-lg font-bold flex items-center gap-4">
                <span className="text-lime-600">
                  <GiCheckMark />
                </span>
                Porta de vidro temperado
              </h3>
              <p className="text-base text-darkText hover:text-gray-300 duration-300">
              A <span classname="text-lime-600">porta de vidro temperado</span> Uma porta de vidro temperado é um tipo de porta feita de vidro que foi tratado para aumentar sua resistência e segurança. O vidro temperado é submetido a um processo de aquecimento e resfriamento rápido, o que o torna muito mais robusto do que o vidro comum.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <h3 className="font-titleFont text-lg font-bold flex items-center gap-4">
                <span className="text-lime-600">
                  <GiCheckMark />
                </span>
                Porta de vidro laminado
              </h3>
              <p className="text-base text-darkText hover:text-gray-300 duration-300">
              Uma porta de vidro laminado é um tipo de porta que utiliza vidro laminado, um material feito de duas ou mais camadas de vidro unidas por uma camada intermediária de material plástico, geralmente polivinil butiral (PVB). Esse tipo de vidro é projetado para oferecer uma combinação de segurança, durabilidade e estética.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <h3 className="font-titleFont text-lg font-bold flex items-center gap-4">
                <span className="text-lime-600">
                  <GiCheckMark />
                </span>
                Porta de esquadria de aluminio
              </h3>
              <p className="text-base text-darkText hover:text-gray-300 duration-300">
              Uma porta de esquadria de alumínio é um tipo de porta feita com uma estrutura de alumínio, conhecida por sua durabilidade, resistência e estética moderna. A esquadria refere-se à estrutura de alumínio que forma a moldura da porta, e pode ser usada em combinação com diferentes tipos de painéis, como vidro ou painéis sólidos.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <h3 className="font-titleFont text-lg font-bold flex items-center gap-4">
                <span className="text-lime-600">
                  <GiCheckMark />
                </span>
                Porta com acustico
              </h3>
              <p className="text-base text-darkText hover:text-gray-300 duration-300">
              Uma porta acústica é projetada para reduzir a transmissão de som entre ambientes, proporcionando um nível elevado de isolamento acústico. Essas portas são especialmente úteis em locais onde é necessário minimizar o ruído, como em estúdios de gravação, salas de conferências, consultórios, ou até mesmo em ambientes residenciais para maior conforto.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Design;
