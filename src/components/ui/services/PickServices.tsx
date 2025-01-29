"use client";
import React, { useState } from "react";

import { DoorOpen, SquareHalf, Scroll, Copy } from "@phosphor-icons/react";

import Box from "./Box";
import Design from "./Design";
import Development from "./Development";
import Espelho from "./Espelho";

const PickServices = () => {
  const [espelho, setEspelho] = useState(true);
  const [box, setBox] = useState(false);
  const [design, setDesign] = useState(false);
  const [development, setDevelopment] = useState(false);
  return (
    <div className="mx-auto max-w-screen-2xl pb-10 pt-32">
      <div className="font-titleFont grid grid-cols-1 px-4 text-lg font-semibold uppercase md:grid-cols-2 lgl:grid-cols-4 lgl:text-base xl:text-lg">
        <p
          onClick={() => {
            setEspelho(true);
            setBox(false);
            setDesign(false);
            setDevelopment(false);
          }}
          className={`${
            espelho
              ? "z-10 bg-gradient-to-r from-[#0A192F] to-[#66a900] text-white after:absolute after:-bottom-2 after:inline-block after:h-5 after:w-5 after:rotate-45 after:bg-lime-800"
              : "border border-lime-900 bg-opacity-50 hover:bg-white hover:text-[primaryColor] xl:border-r-0"
          } relative flex h-16 w-full cursor-pointer items-center justify-center gap-3 bg-primaryColor`}
        >
          <span>
            <Copy size={32} weight="fill" />
          </span>
          ESPELHOS
        </p>
        <p
          onClick={() => {
            setEspelho(false);
            setBox(true);
            setDesign(false);
            setDevelopment(false);
          }}
          className={`${
            box
              ? "z-10 bg-gradient-to-r from-[#0A192F] to-[#66a900] text-white after:absolute after:-bottom-2 after:inline-block after:h-5 after:w-5 after:rotate-45 after:bg-lime-800"
              : "border border-lime-900 bg-opacity-50 hover:bg-white hover:text-primaryColor xl:border-r-0"
          } relative flex h-16 w-full cursor-pointer items-center justify-center gap-3 bg-primaryColor`}
        >
          <span>
            <SquareHalf size={32} weight="fill" />
          </span>
          BOX PARA BANHEIRO
        </p>
        <p
          onClick={() => {
            setEspelho(false);
            setBox(false);
            setDesign(true);
            setDevelopment(false);
          }}
          className={`${
            design
              ? "z-10 bg-gradient-to-r from-[#0A192F] to-[#66a900] text-white after:absolute after:-bottom-2 after:inline-block after:h-5 after:w-5 after:rotate-45 after:bg-lime-800"
              : "border border-lime-900 bg-opacity-50 hover:bg-white hover:text-primaryColor xl:border-r-0"
          } relative flex h-16 w-full cursor-pointer items-center justify-center gap-3 bg-primaryColor`}
        >
          <span>
            <DoorOpen size={32} weight="fill" />
          </span>
          PORTAS ESPECIAIS
        </p>
        <p
          onClick={() => {
            setEspelho(false);
            setBox(false);
            setDesign(false);
            setDevelopment(true);
          }}
          className={`${
            development
              ? "z-10 bg-gradient-to-r from-[#0A192F] to-[#66a900] text-white after:absolute after:-bottom-2 after:inline-block after:h-5 after:w-5 after:rotate-45 after:bg-lime-800"
              : "border border-lime-900 bg-opacity-50 hover:bg-white hover:text-primaryColor xl:border-r-0"
          } relative flex h-16 w-full cursor-pointer items-center justify-center gap-3 bg-primaryColor`}
        >
          <span>
            <Scroll size={32} weight="fill" />
          </span>
          PELICULAS DE SEGURANÇA
        </p>
      </div>
      <div>
        {espelho && <Espelho />}
        {box && <Box />}
        {design && <Design />}
        {development && <Development />}
      </div>
    </div>
  );
};

export default PickServices;
