/** @format */
// "use client";

import React from "react";

import bgSidebarDesktop from "../../../../public/bg-lateral-bar.jpg";
import bgSidebarMobile from "../../../assets/bg-sidebar-mobile.webp";
import { cn } from "@/utils/cn";
import NextImage from './../../../components/ui/NextImage';

const fromSteps = [
  {
    step: 1,
    title: "Selecione o seu perfil"
  },
  {
    step: 2,
    title: " Select plan"
  },
  {
    step: 3,
    title: "Add-ons"
  },
  {
    step: 4,
    title: "Summary"
  }
];

type SidebarType = {
  activeStep: number;
};

export default function Sidebar(props: SidebarType) {
  //   console.log("activeStep", props.activeStep);
  return (
    <div className="relative z-10 hidden md:flex">
      
      <NextImage
        className=" hidden md:flex"
        src={bgSidebarDesktop}
        alt="bg-sidebar-desktop"
      />
      <div className="absolute top-0 left-0  py-8 px-8 flex md:flex-col gap-6  ">
        <h2>Siga as 4 etapas para fazer o seu pedido de proposta de investimento.</h2>
        {fromSteps.map((d, i) => (
          <ProgressStep
            key={i}
            activeStep={props.activeStep}
            title={d.title}
            step={d.step}
          />
        ))}
      </div>
    </div>
  );
}

// ProgressStep

type ProgressStepType = {
  step: number;
  title: string;
  activeStep: number;
};

function ProgressStep(props: ProgressStepType) {
  return (
    <div className="flex gap-6 items-center">
      {/* step left */}
      <div
        className={cn(
          "h-5 w-5 border border-white p-4  rounded-full flex items-center justify-center text-white font-semibold ",
          { "bg-light-blue text-black  ": props.activeStep === props.step }
        )}
      >
        {props.step}
      </div>
      {/* right  */}
      <div className="hidden md:block">
        <p className="text-gray-400">SETP 1</p>
        <p className="text-white font-bold uppercase"> {props.title} </p>
      </div>
    </div>
  );
}

export function MobileSidebar(props: SidebarType) {
  return (
    <div className=" md:hidden fixed  z-10   top-0 left-0  w-full">
      <NextImage
        className="md:hidden   w-full object-contain"
        src={bgSidebarMobile}
        alt="bg-sidebar-desktop"
      />

      <div className=" absolute  z-10   py-8 px-8 flex md:flex-col gap-6  top-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
        {fromSteps.map((d, i) => (
          <ProgressStep
            key={i}
            activeStep={props.activeStep}
            title={d.title}
            step={d.step}
          />
        ))}
      </div>
    </div>
  );
}
