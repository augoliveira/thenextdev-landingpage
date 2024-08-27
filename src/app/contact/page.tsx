"use client";
import React, { useState } from "react";
import NextLink from "@/components/ui/NextLink";
import { FaHome } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import { BsPhoneFill } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { AnimatedText } from './AnimatedText/index';
import ContactForm from "@/components/ui/ContactForm";
import { motion } from "framer-motion";

const Contact = () => {
  // ============== Error message start here ==============
  let [successMessage, setSuccessMessage] = useState("");

  return (
    <div className="w-full">
      <AnimatedText text='Vamos conversar?' />
      <div className="max-w-screen-2xl mx-auto flex flex-col mdl:flex-row justify-between gap-10 pb-10 pt-5 px-4">
        <div className="w-full mdl:w-3/4 flex flex-col gap-10 col-start-1 col-end-4">
          <div className="flex flex-col gap-5 mdl:gap-10">
            <h2 className="font-titleFont text-2xl mdl:text-5xl">
              Contato
            </h2>
            <p className="text-sm max-w-lg mdl:text-base text-darkText leading-[25px]">
            Se você tiver dúvidas ou apenas gostaria de dizer olá, entre em contato comigo. Farei o possível para entrar em contato com você!
              <span className="text-secondaryColor p-4">(61) 9 8669-2775</span>
            </p>
          </div>
          <div>
            {successMessage ? (
              <motion.p
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="font-titleFont text-lg px-10 text-green-400"
              >
                {successMessage}
              </motion.p>
            ) : (
              <ContactForm setSuccessMessage={setSuccessMessage} />
            )}
          </div>
        </div>
        <div className="w-full mdl:w-1/4 font-titleFont">
          <h3 className="font-titleFont text-2xl underline underline-offset-4 decoration-[1px] decoration-secondaryColor">
            Informação de contato
          </h3>
          <div className="mt-4 flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <h4 className="text-lg uppercase">Brasília DF :</h4>
              <p className="flex items-center gap-3 text-darkText hover:text-white hover:cursor-pointer transition-hover duration-300">
                <span className="text-secondaryColor text-lg">
                  <FaHome />
                </span>
                SHA conj. 02 ADE  <br />
                Aniqueira Aguas claras.
              </p>
              <NextLink href='mailto:contato@upexpert.com.br' target='_blank' className="flex items-center gap-3 text-darkText hover:text-white hover:cursor-pointer transition-hover duration-300">
                <span className="text-secondaryColor text-lg">
                  <MdMarkEmailUnread />
                </span>contato@upexpert.com.br
            </NextLink>
              <p className="flex items-center gap-3 text-darkText hover:text-white hover:cursor-pointer transition-hover duration-300">
                <span className="text-secondaryColor text-lg">
                  <BsPhoneFill />
                </span>
                (61) 9 8669-2775
              </p>
              <p className="flex items-center gap-3 text-darkText hover:text-white hover:cursor-pointer transition-hover duration-300">
                <span className="text-secondaryColor text-lg">
                  <IoLogoWhatsapp />
                </span>
                (61)99525-1946
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="text-lg uppercase">Saiba Mais :</h4>
              <NextLink href="#" className="flex items-center gap-3 text-darkText hover:text-white hover:cursor-pointer transition-hover duration-300">
                Box Vidro Temperado
              </NextLink>
              <NextLink href="#" className="flex items-center gap-3 text-darkText hover:text-white hover:cursor-pointer transition-hover duration-300">
                Janelas e Portas de Vidro
              </NextLink>
              <NextLink href="#" className="flex items-center gap-3 text-darkText hover:text-white hover:cursor-pointer transition-hover duration-300">
                Manutenção Vidros e Box
              </NextLink>
              <NextLink href="#" className="flex items-center gap-3 text-darkText hover:text-white hover:cursor-pointer transition-hover duration-300">
                Fotos Serviços
              </NextLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
