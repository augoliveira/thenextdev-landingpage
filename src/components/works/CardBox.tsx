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
    {
      imageUrl: "/box-articulado.jpg",
      title: "TELHADO DE VIDRO",
      description:
        "Conheça o Box Articulado e descubra novas oportunidades de aproveitamento do espaço do seu banheiro com design prático, moderno e flexível.",
    },
    {
      imageUrl: "/box-articulado.jpg",
      title: "TELHADO DE VIDRO",
      description:
        "Conheça o Box Articulado e descubra novas oportunidades de aproveitamento do espaço do seu banheiro com design prático, moderno e flexível.",
    },
    {
      imageUrl: "/box-articulado.jpg",
      title: "TELHADO DE VIDRO",
      description:
        "Conheça o Box Articulado e descubra novas oportunidades de aproveitamento do espaço do seu banheiro com design prático, moderno e flexível.",
    },
    {
      imageUrl: "/box-articulado.jpg",
      title: "TELHADO DE VIDRO",
      description:
        "Conheça o Box Articulado e descubra novas oportunidades de aproveitamento do espaço do seu banheiro com design prático, moderno e flexível.",
    },
    {
      imageUrl: "/box-articulado.jpg",
      title: "TELHADO DE VIDRO",
      description:
        "Conheça o Box Articulado e descubra novas oportunidades de aproveitamento do espaço do seu banheiro com design prático, moderno e flexível.",
    },
    {
      imageUrl: "/box-articulado.jpg",
      title: "TELHADO DE VIDRO",
      description:
        "Conheça o Box Articulado e descubra novas oportunidades de aproveitamento do espaço do seu banheiro com design prático, moderno e flexível.",
    },
    {
      imageUrl: "/box-articulado.jpg",
      title: "TELHADO DE VIDRO",
      description:
        "Conheça o Box Articulado e descubra novas oportunidades de aproveitamento do espaço do seu banheiro com design prático, moderno e flexível.",
    },
    {
      imageUrl: "/box-articulado.jpg",
      title: "TELHADO DE VIDRO",
      description:
        "Conheça o Box Articulado e descubra novas oportunidades de aproveitamento do espaço do seu banheiro com design prático, moderno e flexível.",
    },
  ];

  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: false });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return (
    <section ref={ref} className="md:mt-[2rem]">
      <div className="grid grid-cols-1 gap-6 py-16 md:grid-cols-2 xl:grid-cols-3 xl:gap-14">
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