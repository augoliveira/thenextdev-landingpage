/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import Image from "next/image";
import React from "react";

import { motion } from "framer-motion";

import left from "../../../public/left.svg";
import right from "../../../public/right.svg";
import Button from "./Button";
import { images } from "./constants";


type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  activeImage: any;
  clickNext: any;
  clickPrev: any;
};

const Description = ({ activeImage, clickNext, clickPrev }: Props) => {
  return (
    <div className="relative grid w-full place-items-start bg-cyan-400 md:rounded-r-3xl">
      <div className="absolute right-4 top-2 text-sm uppercase underline underline-offset-4">
        Coffee Cafe
      </div>
      {images.map((elem, idx) => (
        <div
          key={idx}
          className={`${
            idx === activeImage
              ? "block h-full w-full px-10 py-20 text-left md:h-[80vh] md:px-20"
              : "hidden"
          }`}
        >
          <motion.div
            initial={{
              opacity: idx === activeImage ? 0 : 0.5,
              scale: idx === activeImage ? 0.5 : 0.3,
            }}
            animate={{
              opacity: idx === activeImage ? 1 : 0.5,
              scale: idx === activeImage ? 1 : 0.3,
            }}
            transition={{
              ease: "linear",
              duration: 2,
              x: { duration: 1 },
            }}
            className="w-full"
          >
            <div className="py-16 text-5xl font-extrabold">{elem.title}</div>
            <div className="h-60 text-base font-medium italic leading-relaxed tracking-wide text-gray-600 md:h-40">
              {" "}
              {elem.desc}
            </div>
          </motion.div>

          <Button link="/" text="Saiba Mais" />
          <div className="absolute bottom-10 right-10 flex w-full items-center justify-center md:bottom-1 md:right-0">
            <div
              className="absolute bottom-2 right-10 cursor-pointer"
              onClick={clickPrev}
            >
              <Image src={left} alt="" />
            </div>

            <div
              className="absolute bottom-2 right-2 cursor-pointer"
              onClick={clickNext}
            >
              <Image src={right} alt="" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Description;
