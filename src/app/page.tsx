import { Suspense } from "react";

import Projects from "@/components/ui/Projects";

import ProjectsSection from "../components/ProjectsSection/ProjectsSection";
import SecondFeatureSection from "../components/sections/SecondFeatureSection";
import Categoria from "../components/Slider/Categoria";
import AboutSection from "./_components/about-section";
import Archive from "./_components/Archive";
import IntroSection from "./_components/intro-section";
import InvestmentSection from "./_components/investment-section";
import Service from "./../components/service";
import Banner from "./../components/ui/Banner";
import FAQ from "./../components/ui/faq";
import PickServices from "./../components/ui/services/PickServices";

export default function Home() {
  return (
    <Suspense>
      <Banner />
      <PickServices />
      <Projects />
      <IntroSection />
      <AboutSection />
      <Service />
      <SecondFeatureSection />
      <Categoria />
      <InvestmentSection />
      <Archive />
      <ProjectsSection />
      <FAQ />
    </Suspense>
  );
}
