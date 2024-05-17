"use client"; // <===== REQUIRED

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
      <div className=" h-screen">
        <ul className="h-full w-full">
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
            {data.map(({ id, image, tagline, title, subtitle, buttons }) => (
              <SwiperSlide key={id}>
                <div
                  className="h-full w-full absolute left-0 top-0 lazyload"
                >
                   <CldImage
                width={1920}
                height={1080}
                crop="pad"
                src={image}
                alt={title}
                fillBackground
                sizes="(max-width: 640px) 100vw,
                      (max-width: 768px) 80vw,
                      (max-width: 1024px) 60vw,
                      50vw"
              />
              </div>
                <div className="h-full w-full absolute left-0 top-0 bg-black opacity-50"></div>
                <div className="relative z-10 h-full flex items-center justify-center">
                <div className="text-left backdrop-brightness-50 bg-gradient-to-r from-gray-900/30 from-10% via-green-900/30 via-30% to-emerald-900/30 to-90% shadow-2xl py-16 px-16 m-8 rounded-md">
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
                      className="mt-6 max-w-lg text-lg leading-8 text-gray-200">
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
              </SwiperSlide>
            ))}
          </Swiper>
        </ul>
      </div>
    </section>
  );
};

export default DemoSlider;