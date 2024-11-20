"use client";
import React, { useState } from "react";

import SliderText from "./SliderText";

const Banner = () => {
  const sliderContent = [
    {
      title: "BEM VINDO AO SITE",
      subtitle: "DA GLAZING DESIGN",
      desTitle: "Vidraçaria",
      des: "com mais de 24 anos de experiência no mercado, oferecendo serviços de alta qualidade e soluções em vidros para nossos clientes. Nossa empresa é reconhecida por sua excelência, compromisso e atendimento personalizado.",
      backgroundClass: "bg-bgOne"
    },
    {
      title: "Envidraçamento de",
      subtitle: "sacada",
      desTitle: "Vidro Temperado",
      des: "A Glazing Design é uma empresa especializada na fabricação, fornecimento e instalação de esquadrias de alumínio e vidro, fornecendo diversas soluções para envidraçamento de varandas, fechamento de sacadas, box para banheiro, portas de vidros, portas automáticas, vidros temperados, vidros laminados, vidros comuns, tampos de vidro, espelhos, muro de vidro, cortina de vidro, dentre outros.",
      backgroundClass: "bg-bgTwo"
    },
    {
      title: "Construimos",
      subtitle: "Confiança para sua obra",
      desTitle: "Esquadria de aluminio",
      des: "A GLAZING DESIGN produz Esquadrias de Alumínio sob medida para atender aos mais variados projetos de portões, janelas de correr, grades, veneziana e corrimão.",
      backgroundClass: "bg-bgThree"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="w-full">
      <div
        className={`${sliderContent[currentSlide].backgroundClass} transition-bg font-titleFont relative w-full bg-cover bg-center bg-no-repeat py-10 duration-1000 mdl:py-[5rem] xl:bg-cover`}
      >
        <div className="mx-auto flex max-w-screen-2xl flex-col items-start gap-10 px-4">
          <SliderText
            title={sliderContent[currentSlide].title}
            subtitle={sliderContent[currentSlide].subtitle}
            desTitle={sliderContent[currentSlide].desTitle}
            des={sliderContent[currentSlide].des}
          />
        </div>
        <div className="absolute -bottom-2 flex w-full items-start justify-center gap-2 bg-primaryColor bg-transparent px-4 py-24 text-[14px] text-gray-400 mdl:bottom-0 mdl:flex-row mdl:items-center mdl:gap-6">
          {sliderContent.map((_, index) => (
            <p
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`${
                currentSlide === index ? "text-white" : "text-gray-400"
              } group relative h-full w-48 overflow-hidden bg-primaryColor bg-opacity-10 px-3 py-1 duration-300 hover:cursor-pointer hover:text-white`}
            >
              0{index + 1}
              <span
                className={`${
                  currentSlide === index
                    ? "translate-y-0 bg-secondaryColor"
                    : "translate-y-[1px] bg-gray-400"
                } absolute bottom-0 left-0 inline-flex h-0.5 w-full transform transition-transform duration-500 group-hover:translate-y-0 group-hover:bg-secondaryColor`}
              ></span>
              <span
                className={`${
                  currentSlide === index
                    ? "-translate-x-0 bg-secondaryColor"
                    : "-translate-x-[1px] bg-gray-400"
                } absolute bottom-0 left-0 inline-flex h-3 w-0.5 transition-transform duration-500 group-hover:-translate-x-0 group-hover:bg-secondaryColor`}
              ></span>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
