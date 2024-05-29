
import { data } from "@/lib/_data";
import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
  
import Portifolio from '../components/Portifolio/Projects';
import ProjectsSection from "../components/ProjectsSection/ProjectsSection";
import SecondFeatureSection from "../components/sections/SecondFeatureSection";
import Services, { ServiceProp } from "../components/sections/Services";
import Categoria from '../components/Slider/Categoria';
import FifthSection from "../components/ui/fifth-section";
import Experience from "@/components/Experience";
import AboutSection from './_components/about-section';
import Archive from "./_components/Archive";
import IntroSection from './_components/intro-section';
import InvestmentSection from './_components/investment-section';
import dataSlider from "./_data/slider-data.json";
import FAQ from './../components/ui/faq';
import { CardContact } from './../components/CardContact/index';

const DemoSlider = dynamic(() => import('./_components/DemoSlider'), {
  loading: () => <div>Loading...</div>,
  ssr: false, // Set to true if you want to load the component on the server-side
});

export default function Home() {
  return (
    <>
      <div className='rouded-ms'>
      <Suspense fallback={<div>Loading...</div>}>
        <DemoSlider data={dataSlider} />
      </Suspense>
      <section id="product-marketing-sections" className="max-w-container z-40 py-16 px-4 sm:mt-4 sm:px-6 lg:px-8 xl:-mt-32 grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-x-4 gap-y-6">
        {data.map((item: ServiceProp, index) => (
          <Services key={item.id} service={item} index={index} />
        ))}
      </section>
        <IntroSection />
        <AboutSection />
        <div className="w-full backdrop-blur-xl bg-bodyColor">
          <FifthSection />
        </div>
          <div className="h-[88vh] mx-auto p-4 bg-teal-900">
            <Experience />
          </div>
        <Portifolio />
        <SecondFeatureSection />
        <Categoria />
        <InvestmentSection />
        <Archive />
        <ProjectsSection />
        <FAQ />
      </div>
    </>
  );
}
