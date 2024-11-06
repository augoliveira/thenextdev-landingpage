
import { data } from "@/lib/_data";
import Portifolio from '../components/works/CardBox';
import ProjectsSection from "../components/ProjectsSection/ProjectsSection";
import SecondFeatureSection from "../components/sections/SecondFeatureSection";
import Categoria from '../components/Slider/Categoria';
import FifthSection from "../components/ui/fifth-section";
import AboutSection from './_components/about-section';
import Archive from "./_components/Archive";
import DemoSlider from "./_components/DemoSlider";
import IntroSection from './_components/intro-section';
import InvestmentSection from './_components/investment-section';
import dataSlider from "./_data/slider-data.json";
import FAQ from './../components/ui/faq';
import { CardContact } from './../components/CardContact/index';
import Projects from "@/components/ui/Projects";
import Banner from "./../components/ui/Banner";
import PickServices from "./../components/ui/services/PickServices";
import Service from './../components/service';

export default function Home() {
      return (
    <>
      <div className='rouded-ms'>
        <Banner />
        <PickServices />
        <Projects />
        <IntroSection />
        <AboutSection />
          <div className="w-full h-full p-4 bg-slate-400">
            <Service />
          </div>
        
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
