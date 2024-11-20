"use client";

import { useState } from "react";

import Arrows from "@/components/widgets/arrows";
import SliderItem from "@/components/widgets/slider-item";
import SliderThumbnailItem from "@/components/widgets/slider-thumbnail-item";

export default function SliderCars() {
  const [itemActive, setItemActive] = useState<number>(1);
  const countItems = 5;

  const onNext = () => {
    setItemActive(itemActive + 1);
    if (itemActive >= countItems) {
      setItemActive(1);
    }
  };

  const onPrevius = () => {
    setItemActive(itemActive - 1);
    if (itemActive === 1) {
      setItemActive(5);
    }
  };

  return (
    <div className="relative min-h-[800px]">
      <div>
        <SliderItem
          itemActive={itemActive}
          id={1}
          image="/esquadria.png"
          brand="Dodge"
          title="DA GLAZING DESIGN"
          name="Bem vindo ao site"
          desTitle="Vidraçaria"
          desc="com mais de 24 anos de experiência no mercado, oferecendo serviços de alta qualidade e soluções em vidros para nossos clientes. Nossa empresa é reconhecida por sua excelência, compromisso e atendimento personalizado."
        />
        <SliderItem
          itemActive={itemActive}
          id={2}
          image="/images/2.webp"
          brand="Dodge"
          title="Envidraçamento de"
          name="Camaro"
          desTitle="Vidro Temperado"
          desc="El Dodge Camaro es un icónico muscle car con líneas agresivas, rendimiento poderoso y una estética moderna que cautiva a los amantes de la velocidad."
        />
        <SliderItem
          itemActive={itemActive}
          id={3}
          image="/images/3.webp"
          brand="Dodge"
          title="Construimos"
          name="Charger"
          desTitle="Esquadria de aluminio"
          desc="El Dodge Charger es una sedán deportivo con diseño imponente, potente rendimiento y características de alto nivel, fusionando estilo y velocidad."
        />
        <SliderItem
          itemActive={itemActive}
          id={4}
          image="/images/4.webp"
          brand="Jeep"
          title=""
          name="Jeep"
          desTitle="Esquadria de aluminio"
          desc="Jeep, sinónimo de aventura todoterreno. Modelos como el Wrangler y Grand Cherokee ofrecen robustez y estilo icónico en cada viaje."
        />
        <SliderItem
          itemActive={itemActive}
          id={5}
          image="/images/5.webp"
          brand="Dodge"
          title=""
          name="Ram"
          desTitle="Esquadria de aluminio"
          desc="La Dodge Ram es una robusta camioneta con poderoso rendimiento y lujoso interior. Con un diseño imponente, es líder en fuerza y comodidad."
        />
      </div>
      {/* Buttons arrows */}
      <Arrows onClickPrev={() => onPrevius()} onClickNext={() => onNext()} />
      {/* Thumbnails */}
      <div className="absolute bottom-0 z-10 flex h-[250px] w-full gap-3 overflow-x-auto overflow-y-hidden px-14 sm:justify-end">
        <SliderThumbnailItem
          itemActive={itemActive}
          image="/esquadria.png"
          id={1}
          name="Challenger"
          onClick={() => setItemActive(1)}
        />
        <SliderThumbnailItem
          itemActive={itemActive}
          image="/images/2.webp"
          id={2}
          name="Camaro"
          onClick={() => setItemActive(2)}
        />
        <SliderThumbnailItem
          itemActive={itemActive}
          image="/images/3.webp"
          id={3}
          name="Charger"
          onClick={() => setItemActive(3)}
        />
        <SliderThumbnailItem
          itemActive={itemActive}
          image="/images/4.webp"
          id={4}
          name="Jeep"
          onClick={() => setItemActive(4)}
        />
        <SliderThumbnailItem
          itemActive={itemActive}
          image="/images/5.webp"
          id={5}
          name="Ram"
          onClick={() => setItemActive(5)}
        />
      </div>
    </div>
  );
}
