'use client';
import { useState } from "react";
import { AnimatedText } from './AnimatedText-page';
import Amazon from "./works/Amazon";
import Apple from "./works/Apple";
import Google from "./works/Google";
import Box from "./works/Box";
import Splash from "./works/Splash";

const Experience = () => {
  const [workBox, setWorkBox] = useState(true);
  const [workGoogle, setWorkGoogle] = useState(false);
  const [workApple, setWorkApple] = useState(false);
  const [workSplash, setWorkSplash] = useState(false);
  const [workAmazon, setWorkAmazon] = useState(false);

  const handleBox = () => {
    setWorkBox(true);
    setWorkGoogle(false);
    setWorkApple(false);
    setWorkSplash(false);
    setWorkAmazon(false);
  };

  const handleGoogle = () => {
    setWorkBox(false);
    setWorkGoogle(true);
    setWorkApple(false);
    setWorkSplash(false);
    setWorkAmazon(false);
  };

  const handleApple = () => {
    setWorkBox(false);
    setWorkGoogle(false);
    setWorkApple(true);
    setWorkSplash(false);
    setWorkAmazon(false);
  };
  const handleSplash = () => {
    setWorkBox(false);
    setWorkGoogle(false);
    setWorkApple(false);
    setWorkSplash(true);
    setWorkAmazon(false);
  };
  const handleAmazon = () => {
    setWorkBox(false);
    setWorkGoogle(false);
    setWorkApple(false);
    setWorkSplash(false);
    setWorkAmazon(true);
  };
  return (
    <section
      id="experience"
      className="mx-auto max-w-max py-32 sm:py-48 lg:py-56 flex w-full flex-col gap-20 md:px-14 md:py-40 lg:flex-row"
    >
      <div className="max-w-2xl py-12 flex items-center justify-center gap-x-6 lg:justify-center">
      <AnimatedText text='VIDROS' />
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
            onClick={handleGoogle}
            className={`${
              workGoogle
                ? "border-l-textGreen text-textGreen bg-gradient-to-r from-bodyColor to-[#66a900] text-white after:bg-lime-800 after:w-5 after:h-5 z-10 after:inline-block after:absolute after:-bottom-2 after:rotate-45"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-xl cursor-pointer duration-300 px-8 font-bold`}
          >
            Cobertura de Vidro
          </li>
          <li
            onClick={handleApple}
            className={`${
              workApple
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
        {workGoogle && <Google />}
        {workApple && <Apple />}
        {workSplash && <Splash />}
        {workAmazon && <Amazon />}
      </div>
    </section>
  );
};

export default Experience;
