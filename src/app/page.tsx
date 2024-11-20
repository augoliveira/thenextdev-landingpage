import { Suspense } from "react";

import SliderCars from "@/components/sections/sliderCars";
import Marketing from "@/components/ui/Marketing";
import Projects from "@/components/ui/Projects";

import { data } from "@/lib/_data";

import SecondFeatureSection from "../components/sections/SecondFeatureSection";
import Categoria from "../components/Slider/Categoria";
import AboutSection from "./_components/about-section";
import Archive from "./_components/Archive";
import IntroSection from "./_components/intro-section";
import InvestmentSection from "./_components/investment-section";
import Service from "./../components/service";
import FAQ from "./../components/ui/faq";
import PickServices from "./../components/ui/services/PickServices";

export default function Home() {
  return (
    <Suspense>
      <SliderCars />
      <Marketing />
      <PickServices />
      <Projects />
      <IntroSection />
      <AboutSection />
      <div className="bg-slate-300">
        <Service />
      </div>
      <SecondFeatureSection />
      <Categoria />
      <InvestmentSection />
      <Archive />
      <FAQ />
    </Suspense>
  );
}
