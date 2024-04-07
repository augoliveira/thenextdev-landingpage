'use client';

import Image from 'next/image';

import { motion } from "framer-motion";

import { fadeUpAnimation } from '@/lib/animations'

import SliderButtons from "./SliderButtons";

export interface ServiceProp {
  id: number;
  name: string;
  description: string;
  image: {
    original: string;
  };
  buttons: ButtonProps[];
}

interface ButtonProps {
  id: number;
  text: string;
  link: string;
  type: string;
}

interface Prop {
  service: ServiceProp;
  index: number;
}

const Services = ({ service }: Prop) => {
  return (
    <>
          <div className="rounded-lg h-[526px] flex flex-col z-40 cursor-pointer bg-gray-800 overflow-hidden group border-2 border-gray-800 hover:border-emerald-500 opacity-100 hover:opacity-100 bg-gradient-to-r from-bodyColor to-[#66a900] p-4 transition-transform duration-200 ease-out hover:scale-105 hover:bg-gradient-to-b hover:from-gray-900">
              <motion.div
                data-aos="fade-up"
                className=""
                {...fadeUpAnimation}
                transition={{ duration: 0.5 }}
              >
                <div className="w-full h-48 overflow-hidden">
                  <Image
                    src={service.image.original}
                    alt=""
                    sizes="100vw"
                    style={{
                      width: '100%',
                      height: 'auto',
                    }}
                    width={500}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-110 duration-500 transition-all"
                  />
                </div>
                <div className="flex-1 flex flex-col p-8">
                  <div className="w-full "></div>
                  <strong className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight dark:text-slate-50 text-gray-50/90 group-hover:text-emerald-500 transition-all">{service.name}</strong>
                  <p className="mt-2 text-gray-400 line-clamp-4">
                    {service.description}
                  </p>
                  <span className="text-gray-300 text-sm font-medium block mt-8 truncate">
                      <p className="mt-4 inline-block rounded-full px-2 -py-8 text-white lg:mt-2">
                        <SliderButtons buttons={service.buttons} />
                      </p>
                  </span>
                </div>
              </motion.div>
          </div>
    </>
  );
};

export default Services;