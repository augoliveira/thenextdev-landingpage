import { Suspense } from "react";
import Loading from "./loading";

import SliderCars from "@/components/sections/sliderCars";
import Marketing from "@/components/ui/Marketing";
import Projects from "@/components/ui/Projects";
import FloatingWhatsappIcon from "./_components/FloatingWhatsappIcon";


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
    <>
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
      <Suspense fallback={<p><Loading /></p>}>
        <Categoria />
      </Suspense>
      <InvestmentSection />
      <Archive />
      <FAQ />
    </Suspense>
    </>
  );
}
