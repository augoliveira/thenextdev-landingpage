/* eslint-disable import-helpers/order-imports */
"use client"; // <===== REQUIRED

import { motion } from "framer-motion";

// Swiper components, modules and styles
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Our custom button component
import SliderButtons from "./SliderButtons";

import Image from "next/image";

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
    <section className="w-full">
      <div className="h-screen">
        <div className="h-full w-full">
          <Swiper
            navigation
            pagination={{ type: "bullets", clickable: true }}
            autoplay={true}
            loop={true}
            modules={[Autoplay, Navigation, Pagination]}
            breakpoints={{
              700: {
                slidesPerView: 1
              }
            }}
            className="demoslider min-h-[520px]"
          >
            {data.map(({ id, image, tagline, title, subtitle, buttons }) => (
              <SwiperSlide key={id}>
                <div className="absolute left-0 top-0 h-full w-full">
                  <Image
                    alt="Mountains"
                    src={image}
                    className="image-layer lazyload"
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,[IMAGE_CODE_FROM_PNG_PIXEL]"
                    quality={100}
                    fill
                    sizes="100vw"
                    style={{
                      objectFit: "cover"
                    }}
                  />
                </div>
                <div className="absolute left-0 top-0 h-full w-full bg-black opacity-20"></div>
                <div className="relative z-10 flex h-full items-center justify-center px-4 sm:mt-10 sm:px-6 lg:px-8 xl:mt-16">
                  <div className="rounded-md bg-black/30 px-8 py-16 text-left backdrop-brightness-50">
                    <motion.div
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.7 }}
                      className="gradient-text dark:text-purple mb-4 max-w-2xl animate-gradient text-4xl font-extrabold md:text-5xl xl:text-6xl"
                    >
                      <div className="flex border-b border-slate-300/30 pl-4 text-xl text-[#ffc955]">
                        <span className="-mb-px border-b border-b-current py-2">
                          {subtitle}
                        </span>
                      </div>
                    </motion.div>
                    <motion.div
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.7 }}
                      className="gradient-text dark:text-purple mb-4 max-w-2xl animate-gradient text-4xl font-extrabold leading-none tracking-tight text-transparent md:text-5xl xl:text-6xl"
                    >
                      {title}
                    </motion.div>

                    {tagline && (
                      <motion.p
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        className="text-base font-medium text-textDark md:max-w-[650px]"
                      >
                        {tagline}
                      </motion.p>
                    )}

                    {buttons.length > 0 ? (
                      <p className="-py-8 inline-block rounded-full px-2 lg:mt-20">
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
