"use client"; // <===== REQUIRED

import { useState } from "react";
import { motion } from 'framer-motion';
import CldImage from '@/components/ui/CldImage';

// Swiper components, modules and styles
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Our custom button component
import SliderButtons from "./SliderButtons";
import Image from 'next/image';

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

const normalizeSrc = (src) => src[0] === '/' ? src.slice(1) : src

export function cloudinaryLoader({ src, width, quality }) {
  const params = ['f_auto', 'c_limit', 'w_' + width, 'q_' + (quality || 'auto')];
  return `https://res.cloudinary.com/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload/${params.join(',')}/${normalizeSrc(src)}`;
}

const DemoSlider: React.FC<DemoSliderProps> = ({ data }) => {
  return (
    <section className="w-full">
      <div className=" h-screen">
        <div className="h-full w-full">
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
                  className="h-full w-full absolute left-0 top-0"
                >
                  <CldImage
                    alt="Mountains"
                    src={image}
                    quality={100}
                    fill
                    fillBackground
                    sizes="100vw"
                    loader={cloudinaryLoader}
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className="h-full w-full absolute left-0 top-0 bg-black opacity-20"></div>
                <div className="relative z-10 h-full flex items-center justify-center px-4 sm:mt-10 sm:px-6 lg:px-8 xl:mt-16">
                <div className="text-left backdrop-brightness-50 bg-black/30 py-16 px-8 rounded-md">
                <motion.div
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.7 }}
                      className="gradient-text mb-4 max-w-2xl animate-gradient text-4xl font-extrabold md:text-5xl xl:text-6xl dark:text-purple">
                        <div className='pl-4 flex text-xl text-[#ffc955] border-b border-slate-300/30'><span className="-mb-px py-2 border-b border-b-current">{subtitle}</span></div>
                    </motion.div>
                    <motion.div
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.7 }}
                      className="gradient-text mb-4 max-w-2xl animate-gradient text-4xl font-extrabold leading-none tracking-tight text-transparent md:text-5xl xl:text-6xl dark:text-purple">
                      {title}
                    </motion.div>
                    
                    {tagline && (
                      <motion.p
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.8 }}
                      className="text-base md:max-w-[650px] text-textDark font-medium"
                    >
                        {tagline}
                      </motion.p>
                    )}
                    
                    {buttons.length > 0 ? (
                      <p className="inline-block rounded-full px-2 -py-8 lg:mt-20">
                        <SliderButtons buttons={buttons} />
                      </p>
                    ) : null}
                    
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default DemoSlider;
