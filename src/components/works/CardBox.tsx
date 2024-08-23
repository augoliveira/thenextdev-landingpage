"use client";

import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ServiceCard from "./ServiceCard";
import { useMediaQuery } from "react-responsive";

export default function CardBox() {
  const data = [
    {
      imageUrl: "/box-articulado.jpg",
      title: "Linha Box Articulado",
      description:
        "Conheça o Box Articulado e descubra novas oportunidades de aproveitamento do espaço do seu banheiro com design prático, moderno e flexível.",
    },
  ];

  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: false });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return (
    <section ref={ref} className="md:mt-[2rem]">
      <div className="max-w-container z-40 py-16 px-4 sm:mt-4 sm:px-6 lg:px-8 xl:-mt-32 grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,min-max(350px,1fr))] gap-x-4 gap-y-6">
        {data.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: inView ? 1 : isTabletOrMobile ? 1 : 0.5,
              y: inView ? 0 : 20,
            }}
            transition={{ duration: 0.5, delay: 0.5 * index }}
          >
            <ServiceCard {...service} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}