'use client'

import { AnimatePresence } from "framer-motion";
import React from "react";
import BackgroundImage from "../SlideImagem/BackgroundImage";
import Slides from "../SlideImagem/Slides";
import SlideInfo from "../SlideImagem/SlideInfo";
import Controls from "../SlideImagem/Controls";

export type Data = {
  img: string;
  title: string;
  description: string;
  location: string;
};

export type CurrentSlideData = {
  data: Data;
  index: number;
};

export default function SlideImagem() {
  const [data, setData] = React.useState<Data[]>(sliderData.slice(1));
  const [transitionData, setTransitionData] = React.useState<Data>(
    sliderData[0]
  );
  const [currentSlideData, setCurrentSlideData] =
    React.useState<CurrentSlideData>({
      data: initData,
      index: 0,
    });

  return (
    <div className="relative min-h-screen select-none overflow-hidden">
     <AnimatePresence>
        <BackgroundImage
          transitionData={transitionData}
          currentSlideData={currentSlideData}
        />
        <div className="absolute z-20  h-full w-full">
          <div className=" flex h-full w-full grid-cols-10 flex-col md:grid">
            {/* Slider Left Section Content */}
            <div className=" col-span-4 mb-3 flex h-full flex-1 flex-col justify-end px-5 md:mb-0 md:justify-center md:px-10">
              <SlideInfo
                transitionData={transitionData}
                currentSlideData={currentSlideData}
              />
            </div>

            {/* Slider Right Carousel Content */}
            <div className=" col-span-6 flex h-full flex-1 flex-col justify-start p-4 md:justify-center md:p-10">
              <Slides data={data} />
              <Controls
                currentSlideData={currentSlideData}
                data={data}
                transitionData={transitionData}
                initData={initData}
                handleData={setData}
                handleTransitionData={setTransitionData}
                handleCurrentSlideData={setCurrentSlideData}
                sliderData={sliderData}
              />
            </div>
          </div>
        </div>
      </AnimatePresence>
    </div>
  );
}

const sliderData = [
  {
    img: "/Slide.webp",
    location: "Fechamento de varandas",
    description:
      "As melhores opções em envidraçamento de varandas e vãos.",
    title: "VIDRO LAMINADO",
  },
  {
    img: "/esquadria.png",
    title: "fachadas em pele de vidro",
    description:
      "Pele de vidro é um tipo de estrutura de fachada de vidro, que contribui esteticamente com os edifícios de médio e grande porte, além de proporcionar uma série de vantagens.",
    location: "PELE DE VIDRO",
  },
  {
    img: "/Fechamento.png",
    title: "Escada de vidro",
    description:
      "Quando é feita uma visita no local, podemos indicar o melhor modelo, tirar medidas precisas e apresentar um projeto tridimensional.",
    location: "ESCADA DE VIDRO LAMINADO",
  },
  {
    img: "/fechamento.jpg",
    title: "FECHAMENTO DE AMBIENTE",
    description:
      "vidros temperados , box p/banheiros e fechamentos de varandas. Atendimento Via Email. Atendimento Direcionado. Atendimento Via Telefone. Destaques: Seguros, Sofisticados, Modernos.",
    location: "fechamentos de varandas",
  },
  {
    img: "/Guarda-corpo.png",
    title: "Guarda corpo de vidro ",
    description:
      "Tropical beaches, volcano hikes, ancient temples, and friendly people",
    location: "ESCADA DE VIDRO",
  },
];

const initData = sliderData[0];
