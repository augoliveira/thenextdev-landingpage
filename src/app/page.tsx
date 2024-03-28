import Image from 'next/image';

import DemoSlider from "./_components/DemoSlider";
import dataSlider from "./_data/slider-data.json";
import Services, { ServiceProp } from "../components/sections/Services";
import { data } from "@/lib/_data";
import IntroSection from './_components/intro-section';
import AboutSection from './_components/about-section';
import Portifolio from '../components/Portifolio/Projects';
import FeatureSection from './_components/feature-section';
import InvestmentSection from './_components/investment-section';
import FaqSection from './_components/faq-section';

export default function Home() {
  return (
    <>
      {/* <div className='fixed h-18 md:h-12 text-sm md:text-base p-4 flex justify-center items-center group bg-gradient-to-r from-primary to-secondary w-full z-10'>
        <p className='text-white'>
          Utilize o cupom{' '}
          <span className='font-mono font-bold'>COMUNIDADETND</span> e ganhe 50%
          de desconto. Valor à vista de{' '}
          <span className='font-mono font-bold'>
            R$ 489,00 ou 12x de R$ 48,81
          </span>{' '}
          .
        </p>
      </div> */}
      <main className='pt-6 md:pt-18'>
      <DemoSlider data={dataSlider} />
      <section id="product-marketing-sections" className="max-w-container z-40 py-16 px-4 sm:mt-4 sm:px-6 lg:px-8 xl:-mt-32 grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-x-4 gap-y-6">
        {data.map((item: ServiceProp, index) => (
          <Services key={item.id} service={item} index={index} />
        ))}
      </section>
        <IntroSection />
        <AboutSection />
        <Portifolio />
        <FeatureSection />
        <InvestmentSection />
        <FaqSection />
      </main>
    </>
  );
}
