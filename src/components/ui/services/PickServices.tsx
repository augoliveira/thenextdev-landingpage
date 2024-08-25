"use client";
import React, { useState } from "react";
import Espelho from "./Espelho";
import Box from "./Box";
import Design from "./Design";
import Development from "./Development";

import { DoorOpen, SquareHalf, Scroll, Copy } from '@phosphor-icons/react'

const PickServices = () => {
  let [espelho, setEspelho] = useState(true);
  let [box, setBox] = useState(false);
  let [design, setDesign] = useState(false);
  let [development, setDevelopment] = useState(false);
  return (
    <div className="max-w-screen-2xl mx-auto pt-32 pb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-4 font-titleFont font-semibold uppercase text-lg lgl:text-base xl:text-lg px-4">
        <p
          onClick={() => {
            setEspelho(true);
            setBox(false);
            setDesign(false);
            setDevelopment(false);
          }}
          className={`${
            espelho
              ? "bg-gradient-to-r from-bodyColor to-[#66a900] text-white after:bg-lime-800 after:w-5 after:h-5 z-10 after:inline-block after:absolute after:-bottom-2 after:rotate-45"
              : " hover:bg-white hover:text-primaryColor border border-lime-900 xl:border-r-0 bg-opacity-50"
          } flex items-center justify-center gap-3 w-full bg-primaryColor h-16 cursor-pointer relative`}
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
              ? "bg-gradient-to-r from-bodyColor to-[#66a900] text-white after:bg-lime-800 after:w-5 after:h-5 z-10 after:inline-block after:absolute after:-bottom-2 after:rotate-45"
              : " hover:bg-white hover:text-primaryColor border border-lime-900 xl:border-r-0 bg-opacity-50"
          } flex items-center justify-center gap-3 w-full bg-primaryColor h-16 cursor-pointer relative`}
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
              ? "bg-gradient-to-r from-bodyColor to-[#66a900] text-white after:bg-lime-800 after:w-5 after:h-5 z-10 after:inline-block after:absolute after:-bottom-2 after:rotate-45"
              : " hover:bg-white hover:text-primaryColor border border-lime-900 xl:border-r-0 bg-opacity-50"
          } flex items-center justify-center gap-3 w-full bg-primaryColor h-16 cursor-pointer relative`}
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
              ? "bg-gradient-to-r from-bodyColor to-[#66a900] text-white after:bg-lime-800 after:w-5 after:h-5 z-10 after:inline-block after:absolute after:-bottom-2 after:rotate-45"
              : " hover:bg-white hover:text-primaryColor border border-lime-900 xl:border-r-0 bg-opacity-50"
          } flex items-center justify-center gap-3 w-full bg-primaryColor h-16 cursor-pointer relative`}
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
