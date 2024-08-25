import React from "react";
import { motion } from "framer-motion";
import { GiCheckMark } from "react-icons/gi";
import { aboutUsImgThree } from "@/assets";
import Image from "next/image";

const Espelho = () => {
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
        className="w-2/5 hidden lgl:inline-flex"
      >
        <Image 
        src={aboutUsImgThree} 
        alt="aboutUsImgThree" 
        width={1080}
        height={672}
        unoptimized
        className="w-full h-full rounded-l-lg object-cover group-hover:scale-110 duration-500 transition-all"
        />
      </motion.div>
      <div className="w-full lgl:w-3/5">
        <motion.div
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
          className="flex flex-col gap-4"
        >
          <h3
            // initial={{ x: 50, opacity: 0 }}
            // whileInView={{ x: 0, opacity: 1 }}
            // viewport={{ once: true }}
            // transition={{
            //   delay: 0.2,
            //   x: { type: "spring", stiffness: 100 },
            //   opacity: { duration: 1 },
            //   ease: "easeIn",
            //   duration: 1,
            // }}
            className="text-2xl font-medium tracking-tight"
          >
            ESPELHOS<span className="text-secondaryColor ml-3">PARA BANHEIRO</span>
          </h3>
          <p className="text-base text-darkText leading-[28px] tracking-wide hover:text-gray-300 duration-300">
          O <span className="text-base font-extrabold tracking-tight">
            Espelho GLAZING DESIGN
            </span>
              é um Produto exclusivo, oferece grande beleza com resistência a riscos e oxidação. 
              Ideal para diversas aplicações, seja como decoração, revestimento de peças, seja de maneira autoportante, 
              em aplicações como tampos de mesas, estantes, biombos, etc. 
              <span className="text-base font-extrabold tracking-tight"> A GLAZING DESIGN</span> disponibiliza espelhos com acabamento bizotado, recortado e lapidado, 
              com tamanhos grandes e pequenos trazendo um ótimo acabamento e proporcionando uma sensação de que o seu ambiente ficou maior. 
          </p>
          <p className="text-base text-darkText leading-[28px] tracking-wide hover:text-gray-300 duration-300">
          Na <VITRON você encontra Espelhos com preços acessíveis, o melhor acabamentos e instalação rápida e simples, feita por profissionais altamente capacitados.
          </p>
        </motion.div>
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
          className="max-w-[450px] py-6 md:py-10 flex flex-col gap-0 md:gap-4"
        >
          <div className="flex flex-col items-start gap-0 md:flex-row md:items-center md:justify-between">
            <p className="flex items-center gap-2 text-gray-300 hover:text-white duration-300 cursor-pointer">
              <span className="text-secondaryColor">
                <GiCheckMark />
              </span>
              Make it memorable
            </p>
            <p className="flex items-center gap-2 text-gray-300 hover:text-white duration-300 cursor-pointer">
              <span className="text-secondaryColor">
                <GiCheckMark />
              </span>
              Avoid hyphens
            </p>
          </div>
          <div className="flex flex-col items-start gap-0 md:flex-row md:items-center md:justify-between">
            <p className="flex items-center gap-2 text-gray-300 hover:text-white duration-300 cursor-pointer">
              <span className="text-secondaryColor">
                <GiCheckMark />
              </span>
              Make it memorable
            </p>
            <p className="flex items-center gap-2 text-gray-300 hover:text-white duration-300 cursor-pointer">
              <span className="text-secondaryColor">
                <GiCheckMark />
              </span>
              Avoid hyphens
            </p>
          </div>
          <div className="flex flex-col items-start gap-0 md:flex-row md:items-center md:justify-between">
            <p className="flex items-center gap-2 text-gray-300 hover:text-white duration-300 cursor-pointer">
              <span className="text-secondaryColor">
                <GiCheckMark />
              </span>
              Make it memorable
            </p>
            <p className="flex items-center gap-2 text-gray-300 hover:text-white duration-300 cursor-pointer">
              <span className="text-secondaryColor">
                <GiCheckMark />
              </span>
              Avoid hyphens
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.4,
            x: { type: "spring", stiffness: 100 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
        >
          <p className="text-base text-darkText leading-[28px] tracking-wide hover:text-gray-300 duration-300">
            These all factors should be considered when you are going to choose
            a domain name. But it&apos;s fine if you disregard any of them as
            your convenience to focus on others.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Espelho;
