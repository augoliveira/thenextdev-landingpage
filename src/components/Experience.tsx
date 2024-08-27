'use client';
import { useState } from "react";
import { AnimatedText } from './AnimatedText-page';
import Amazon from "./works/Amazon";
import Espelho from "./works/Espelho";
import Cobertura from "./works/Cobertura";
import Box from "./works/Box";
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
      className="mx-auto max-w-max py-8 sm:py-8 lg:py-24 gap-20 md:px-8 md:py-8 lg:flex-row"
    >
      <div className="max-w-7xl py-12 gap-x-6 lg:justify-center">
      <AnimatedText text='Ligue e peça uma visita: vamos até você' />
      </div>
      <div className="w-full mt-10 flex flex-col md:flex-row gap-8">
        <ul className="md:w-96 flex flex-col">
          <li
            onClick={handleBox}
            className={`${
              workBox
                ? "border-l-textGreen text-textGreen bg-gradient-to-r from-bodyColor to-[#66a900] text-white after:bg-lime-800 after:w-5 after:h-5 z-10 after:inline-block after:absolute after:-bottom-2 after:rotate-45"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-xl cursor-pointer duration-300 px-8 font-bold`}
          >
            Box de Banheiro
          </li>
          <li
            onClick={handleCobertura}
            className={`${
              workCobertura
                ? "border-l-textGreen text-textGreen bg-gradient-to-r from-bodyColor to-[#66a900] text-white after:bg-lime-800 after:w-5 after:h-5 z-10 after:inline-block after:absolute after:-bottom-2 after:rotate-45"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-xl cursor-pointer duration-300 px-8 font-bold`}
          >
            Cobertura de Vidro
          </li>
          <li
            onClick={handleEspelho}
            className={`${
              workEspelho
                ? "border-l-textGreen text-textGreen bg-gradient-to-r from-bodyColor to-[#66a900] text-white after:bg-lime-800 after:w-5 after:h-5 z-10 after:inline-block after:absolute after:-bottom-2 after:rotate-45"
                : "border-l-hoverColor text-textDark"
                
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-xl cursor-pointer duration-300 px-8 font-bold`}
          >
            Espelhos
          </li>
          <li
            onClick={handleSplash}
            className={`${
              workSplash
                ? "border-l-textGreen text-textGreen bg-gradient-to-r from-bodyColor to-[#66a900] text-white after:bg-lime-800 after:w-5 after:h-5 z-10 after:inline-block after:absolute after:-bottom-2 after:rotate-45"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-xl cursor-pointer duration-300 px-8 font-bold`}
          >
            Fachadas
          </li>
          <li
            onClick={handleAmazon}
            className={`${
              workAmazon
                ? "border-l-textGreen text-textGreen bg-gradient-to-r from-bodyColor to-[#66a900] text-white after:bg-lime-800 after:w-5 after:h-5 z-10 after:inline-block after:absolute after:-bottom-2 after:rotate-45"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-xl cursor-pointer duration-300 px-8 font-bold`}
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
