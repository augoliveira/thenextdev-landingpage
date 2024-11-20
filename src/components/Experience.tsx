"use client";
import { useState } from "react";

import { AnimatedText } from "./AnimatedText-page";
import Amazon from "./works/Amazon";
import Box from "./works/Box";
import Cobertura from "./works/Cobertura";
import Espelho from "./works/Espelho";
import Splash from "./works/Splash";

const Experience = () => {
  const [workBox, setWorkBox] = useState(true);
  const [workCobertura, setWorkCobertura] = useState(false);
  const [workEspelho, setWorkEspelho] = useState(false);
  const [workSplash, setWorkSplash] = useState(false);
  const [workAmazon, setWorkAmazon] = useState(false);

  const handleBox = () => {
    setWorkBox(true);
    setWorkCobertura(false);
    setWorkEspelho(false);
    setWorkSplash(false);
    setWorkAmazon(false);
  };

  const handleCobertura = () => {
    setWorkBox(false);
    setWorkCobertura(true);
    setWorkEspelho(false);
    setWorkSplash(false);
    setWorkAmazon(false);
  };

  const handleEspelho = () => {
    setWorkBox(false);
    setWorkCobertura(false);
    setWorkEspelho(true);
    setWorkSplash(false);
    setWorkAmazon(false);
  };
  const handleSplash = () => {
    setWorkBox(false);
    setWorkCobertura(false);
    setWorkEspelho(false);
    setWorkSplash(true);
    setWorkAmazon(false);
  };
  const handleAmazon = () => {
    setWorkBox(false);
    setWorkCobertura(false);
    setWorkEspelho(false);
    setWorkSplash(false);
    setWorkAmazon(true);
  };
  return (
    <section
      id="experience"
      className="mx-auto max-w-max gap-20 py-8 sm:py-8 md:px-8 md:py-8 lg:flex-row lg:py-24"
    >
      <div className="max-w-7xl gap-x-6 py-12 lg:justify-center">
        <AnimatedText text="Ligue e peça uma visita: vamos até você" />
      </div>
      <div className="mt-10 flex w-full flex-col gap-8 md:flex-row">
        <ul className="flex flex-col md:w-96">
          <li
            onClick={handleBox}
            className={`${
              workBox
                ? "z-10 border-l-textGreen bg-gradient-to-r from-bodyColor to-[#66a900] text-textGreen after:absolute after:-bottom-2 after:inline-block after:h-5 after:w-5 after:rotate-45 after:bg-lime-800"
                : "border-l-hoverColor text-textDark"
            } cursor-pointer border-l-2 bg-transparent px-8 py-3 text-xl font-bold duration-300 hover:bg-[#112240]`}
          >
            Box de Banheiro
          </li>
          <li
            onClick={handleCobertura}
            className={`${
              workCobertura
                ? "z-10 border-l-textGreen bg-gradient-to-r from-bodyColor to-[#66a900] text-textGreen after:absolute after:-bottom-2 after:inline-block after:h-5 after:w-5 after:rotate-45 after:bg-lime-800"
                : "border-l-hoverColor text-textDark"
            } cursor-pointer border-l-2 bg-transparent px-8 py-3 text-xl font-bold duration-300 hover:bg-[#112240]`}
          >
            Cobertura de Vidro
          </li>
          <li
            onClick={handleEspelho}
            className={`${
              workEspelho
                ? "z-10 border-l-textGreen bg-gradient-to-r from-bodyColor to-[#66a900] text-textGreen after:absolute after:-bottom-2 after:inline-block after:h-5 after:w-5 after:rotate-45 after:bg-lime-800"
                : "border-l-hoverColor text-textDark"
            } cursor-pointer border-l-2 bg-transparent px-8 py-3 text-xl font-bold duration-300 hover:bg-[#112240]`}
          >
            Espelhos
          </li>
          <li
            onClick={handleSplash}
            className={`${
              workSplash
                ? "z-10 border-l-textGreen bg-gradient-to-r from-bodyColor to-[#66a900] text-textGreen after:absolute after:-bottom-2 after:inline-block after:h-5 after:w-5 after:rotate-45 after:bg-lime-800"
                : "border-l-hoverColor text-textDark"
            } cursor-pointer border-l-2 bg-transparent px-8 py-3 text-xl font-bold duration-300 hover:bg-[#112240]`}
          >
            Fachadas
          </li>
          <li
            onClick={handleAmazon}
            className={`${
              workAmazon
                ? "z-10 border-l-textGreen bg-gradient-to-r from-bodyColor to-[#66a900] text-textGreen after:absolute after:-bottom-2 after:inline-block after:h-5 after:w-5 after:rotate-45 after:bg-lime-800"
                : "border-l-hoverColor text-textDark"
            } cursor-pointer border-l-2 bg-transparent px-8 py-3 text-xl font-bold duration-300 hover:bg-[#112240]`}
          >
            Guarda-Corpo
          </li>
        </ul>
        {workBox && <Box />}
        {workCobertura && <Cobertura />}
        {workEspelho && <Espelho />}
        {workSplash && <Splash />}
        {workAmazon && <Amazon />}
      </div>
    </section>
  );
};

export default Experience;
