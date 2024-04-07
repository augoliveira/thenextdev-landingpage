/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import Image from "next/image";
import { useRef } from "react";
import { useState } from "react";
import {
  PiArrowRight,
  PiBookOpenTextLight,
  PiClockAfternoonLight,
  PiCompassLight,
  PiFileThin,
  PiHeadset,
  PiMegaphoneLight,
  PiRocketLaunchFill,
  PiSparkleLight,
  PiTargetLight,
} from "react-icons/pi";

import { useInView } from "framer-motion";
import { motion } from "framer-motion";

const tabs = [
  {
    icon: <PiSparkleLight />,
    name: "Box padrão",
    image: "/assets/DancingDoodle.svg",
  },
  {
    icon: <PiBookOpenTextLight />,
    name: "Box de Abrir",
    image: "/assets/DogJumpDoodle.svg",
  },
  {
    icon: <PiRocketLaunchFill />,
    name: "Roldana aparente",
    image: "/assets/MeditatingDoodle.svg",
  },
  {
    icon: <PiMegaphoneLight />,
    name: "Box Multibox",
    image: "/assets/ReadingDoodle.svg",
  },
  {
    icon: <PiCompassLight />,
    name: "Box Light",
    image: "/assets/SittingDoodle.svg",
  },
  {
    icon: <PiHeadset />,
    name: "Box Elegance",
    image: "/assets/SleekDoodle.svg",
  },
];

const FifthSection = () => {
  const ref = useRef(null);

  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className=" relative flex justify-center items-center flex-col py-8 px-8 md:px-0 xl:w-3/4 mx-auto 2xl:w-[55%] ">
      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="col-start-1 row-start-2 mt-4 max-w-[46rem] text-4xl font-extrabold tracking-tight text-slate-400 sm:text-7xl xl:max-w-[60rem]">
        Transforme Seu Banheiro com Nossos Boxes de Vidro Exclusivos!
      </div>
      <p>
        Descubra a perfeição em cada detalhe com nossas opções exclusivas de
        boxes de vidro para banheiro. Seja qual for o seu estilo, temos a
        solução ideal para você:
      </p>
      <div className="grid grid-cols-4  md:grid-cols-6 md:row-span-1  gap-4  xl:gap-6 mt-8   xl:px-0  ">
        {tabs.map((tab) => (
          <motion.div
            key={tab.name}
            className={`
              flex 
            p-1
              md:p-2
                cursor-pointer
                ${
                  activeTab.name === tab.name
                    ? "rounded-md md:rounded-xl bg-[#164820]  md:bg-gray-600 border-gray-200 md:border items-center justify-center flex p-1 "
                    : "tablink bg-[#18181c] hover:shadow-md hover:bg-gradient-to-r from-slate-800 to-indigo-900 text-clr_ratting rounded-[5px] lg:text-lg text-sm uppercase font-semibold border-none lg:py-4 lg:px-[30px] py-[5px] px-2 text-center "
                } `}
            onClick={() => setActiveTab(tab)}
          >
            <div className="flex flex-col items-center md:justify-center mx-auto">
              
              <div className="font-medium text-sm  xl:text-lg mt-1">
                {tab.name}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Display content based on the active tab */}
      <div className="py-10   lg:px-16 xl:px-0 md:px-16  w-full ">
        {activeTab && (
          <div className=" flex justify-center items-center flex-col  ">
            <Image
              src={activeTab.image}
              width={1025}
              height={500}
              priority
              alt="logo"
              className="shadow-2xl object-cover
                w-full
             border
             p-20
             xl:p-20
             rounded-xl
                "
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default FifthSection;
