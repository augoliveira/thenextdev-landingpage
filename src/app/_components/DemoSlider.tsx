/* eslint-disable import-helpers/order-imports */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"; // <===== REQUIRED

import Image from "next/image";
import React from "react";

import { motion } from 'framer-motion';


// Swiper components, modules and styles
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import Img from '/public/banner1.png';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Our custom button component
import SliderButtons from "./SliderButtons";
import BlurImage from './../../components/ui/blur-image';

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  tagline: string;
  image: string;
  perfil: string;
  buttons: ButtonProps[];
}

interface ButtonProps {
  id: number;
  text: string;
  link: string;
  type: string;
}

interface DemoSliderProps {
  data: Slide[];
}

const DemoSlider: React.FC<DemoSliderProps> = ({ data }) => {
  return (
    <section className="min-h-[760px]">
        <div className="continer mx-auto h-[760px]">
          
          <Swiper
            navigation
            pagination={{ type: "bullets", clickable: true }}
            autoplay={true}
            loop={true}
            modules={[Autoplay, Navigation, Pagination]}
            breakpoints={{
              700: {
                slidesPerView: 1,
              },
            }}
            className="demoslider min-h-[520px]"
          >
            {data.map(({ id, image, perfil, tagline, title, subtitle, buttons }) => (
              <SwiperSlide key={id}>
                <div
                  className="col-span-4 place-self-center mt-8 lg:mt-0"
                >
                  <BlurImage
                    alt="Mountains"
                    src={image}
                    className="trasition-opacity-0 duration-[2s]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    onLodingComplete={(image) => image.classList.remove("opacity-0")}
                    quality={100}
                    fill
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </div>
                
          
                <div className="absolute left-0 top-0 h-full w-full bg-black/20 opacity-20"></div>
                <div className="space-y-5 title-content absolute py-[8%] px-16 sm:py-[8rem] left-3">
                  <div className="flex flex-col gap-y-5 px-8 lg:px-8 md:flex-row md:gap-x-16">
                  <div className="mr-auto place-self-center lg:col-span-7">
                  <div className="text-left backdrop-brightness-50 bg-black/50 py-16 px-16 rounded-md">
                    <motion.div
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.7 }}
                      className="gradient-text heavy mb-4 max-w-2xl animate-gradient text-4xl font-extrabold leading-none drop-shadow-md tracking-tight text-transparent md:text-5xl xl:text-6xl dark:text-purple">
                        <div className='pl-4 flex text-lg text-[#fbb33f] border-b border-slate-300/30'><span className="-mb-px py-2 border-b border-b-current">{subtitle}</span></div>
                    </motion.div>
                    <motion.div
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.7 }}
                      className="gradient-text heavy mb-4 max-w-2xl animate-gradient text-4xl font-extrabold leading-none drop-shadow-md tracking-tight text-transparent md:text-5xl xl:text-6xl dark:text-purple">
                      {title}
                    </motion.div>
                    
                    {tagline && (
                      <motion.p
                      initial={{ opacity: 0, y: 200, scale: 0.5 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 200, scale: 0.5 }}
                      transition={{ duration: 0.5 }}
                      className="col-start-1 row-start-3 leading-6 mt-4 max-w-lg text-lg text-slate-200">
                        {tagline}
                      </motion.p>
                    )}
                    
                    {buttons.length > 0 ? (
                      <p className="inline-block rounded-full px-2 -py-8 text-white lg:mt-20">
                        <SliderButtons buttons={buttons} />
                      </p>
                    ) : null}
                    
                  </div>
                  </div>
                
                </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
    </section>
  );
};

export default DemoSlider;
