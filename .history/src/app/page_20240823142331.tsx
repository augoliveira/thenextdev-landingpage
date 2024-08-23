
import { data } from "@/lib/_data";
import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';   
  
import Portifolio from '../components/Portifolio/Projects';
import ProjectsSection from "../components/ProjectsSection/ProjectsSection";
import SecondFeatureSection from "../components/sections/SecondFeatureSection";
import Categoria from '../components/Slider/Categoria';
import FifthSection from "../components/ui/fifth-section";
import Experience from "@/components/Experience";
import AboutSection from './_components/about-section';
import Archive from "./_components/Archive";
import IntroSection from './_components/intro-section';
import InvestmentSection from './_components/investment-section';
import FAQ from './../components/ui/faq';
import { CardContact } from './../components/CardContact/index';
import Projects from "@/components/ui/Projects";  
import CardImage from './../components/CardImage/page';
import SlideImagem from './../components/SlideImagem/index';

export default function Home() {
  return (
    <>
      <div className='rouded-ms'>
      
        <Projects />
        <CardImage />
        <IntroSection />
        <AboutSection />
          <div className="w-full h-full p-4 bg-teal-900">
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