/* eslint-disable import-helpers/order-imports */
"use client";

import Image from "next/image";
import { Button } from "../components/button/index";
import React, { useState } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

import { AnimatePresence, motion } from "framer-motion";

import Image1 from "../../public/cortina-de-vidro1.jpg";
import Image3 from "../../public/guada-corpo.jpg";
import Image4 from "../../public/Corbertura.jpg";
import Image2 from "../../public/Portas.jpg";
import Container from "./ui/container";

// import { Container } from './styles';
import { AnimatedText } from "@/components/AnimatedText/index";

const Service: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleContact = () => {
    const contactSection = document.querySelector("#contato");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const TimelineItems = [
    {
      title: "Envidraçamento de sacadas",
      description:
        "O envidraçamento de sacadas é sinônimo de segurança! Você sabe por quê? Aprenda isso e mais nesse artigo da Construção em Vidros.",
      image: Image1
    },
    {
      title: "Esquadrias de Alumínio e Vidro",
      description:
        "As esquadrias são muito importantes em qualquer obra, já que precisam se adequar ao projeto corretamente não apenas por questões estéticas, mas também por desempenho.",
      image: Image2
    },
    {
      title: "Guarda corpo de vidro",
      description:
        "Um guarda-corpo de vidro é uma solução moderna e elegante para segurança em espaços que exigem uma proteção sem obstruir a visão.",
      image: Image3
    },
    {
      title: "Cobertura De Vidro",
      description:
        "Cobertura de vidro: Quer deixar algumas áreas de sua casa como:  varanda, área de lazer ou hall de entrada,  muito mais bonito? Que tal investir na cobertura de vidro?  Elas são geralmente feitas com aço galvanizado ou alumínio em sua estrutura, além disso dispõe de uma pintura especial que impede a oxidação. Já o vidro pode ser incolor ou mais escuro. Tudo depende, é claro, da quantidade de iluminação que se deseja ter no ambiente e do gosto de cada cliente. Os vidros claros possibilitam a entrada de até 92% da iluminação natural, que atravessa quase livremente a cobertura.",
      image: Image4
    }
  ];
  return (
    <Container>
      <main className="flex w-full flex-col gap-20 px-4 py-20 md:px-14 md:py-40 lg:flex-row">
        <div className="flex w-full flex-col justify-between lg:w-1/2">
          <AnimatedText text="PORQUE NOS ESCOLHER" />
          <div className="flex w-full flex-col items-center justify-center">
            {TimelineItems.map((item, index) => (
              <div
                key={index}
                className={`${
                  activeIndex === index
                    ? "bg-backdrop-blur-sm z-10 border-l-textGreen bg-white/30 text-white after:absolute after:-bottom after:inline-block after:h-5 after:w-5 after:rotate-45 after:bg-slate-400"
                    : "border-l-hoverColor text-textDark"
                } cursor-pointer border-l-2 bg-transparent px-8 py-3 text-xl font-bold duration-300 hover:bg-green-700`}
              >
                <h1
                  className={`col-start-1 row-start-2 max-w-[36rem] cursor-pointer text-4xl font-extrabold tracking-tight text-lime-950 sm:text-2xl xl:max-w-[43.5rem] ${
                    activeIndex === index ? "text-black" : "text-gray-400"
                  }`}
                  onClick={() => setActiveIndex(index)}
                >
                  {item.title}
                </h1>
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{
                    opacity: activeIndex === index ? 1 : 0,
                    height: activeIndex === index ? "auto" : 0
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="mb-2 overflow-hidden rounded-md border-l-2 border-blue-500 bg-blue-100 p-4 pl-10 text-sm font-semibold text-gray-500 transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down sm:text-base"
                >
                  <p className="pb-2 text-sm text-gray-500">
                    {item.description}
                  </p>
                </motion.div>
              </div>
            ))}
            <div className="py-8">
              <Button className="w-max shadow-button" onClick={handleContact}>
                Orçamento
                <HiArrowNarrowRight size={18} />
              </Button>
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <AnimatePresence>
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <Image
                src={TimelineItems[activeIndex].image}
                alt="Image"
                width={1080}
                height={672}
                unoptimized
                className="rounded-lg"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </Container>
  );
};

export default Service;
