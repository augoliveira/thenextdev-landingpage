"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import { AnimatedText } from "../AnimatedText";
import Link from "next/link";

const projectsData = [
  {
    id: 1,
    title: "Box com vidro Neutral 14",
    description: "O Neutral 14 faz parte da linha SunGuard da Guardian, que controla a luz solar e permite o melhor uso da luz e da cor.",
    image: "/Box-Espelhado-new.jpg",
    tag: ["TODOS", "BOX/BANHEIRO"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Box de canto até o teto",
    description: "Box até o teto: a tendência que vai inovar seu espaço",
    image: "/Blackcoffee.png",
    tag: ["TODOS", "BOX/BANHEIRO"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Fachada de vidro temperado",
    description: "A fachada de vidro temperado pode ter ainda mais vantagens que as grades de alumínio, que são opções mais simples.",
    image: "/fachada.png",
    tag: ["TODOS", "FACHADA"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Espelho para banheiro",
    description: "Um espelho grande em um banheiro pequeno faz com que a percepção de espaço seja ampliada, deixando o banheiro mais confortável.",
    image: "/espelho.png",
    tag: ["TODOS", "ESPELHOS"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Full-stack Roadmap",
    description: "Project 5 description",
    image: "/box-articulado.jpg",
    tag: ["TODOS", "BOX/BANHEIRO"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "porta de vidro temperado",
    description: "A porta de vidro temperado é um material perfeito para agregar conforto, elegância e sofisticação em ambientes.",
    image: "/portas.png",
    tag: ["TODOS", "PORTAS/JANELAS"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("TODOS");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag: React.SetStateAction<string>) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section className="bg-slate-200 p-8 max-w-container mx-auto lgl:px-20 py-24" id="projects">
      <AnimatedText text='Projetos' />
      <div className="max-w-sm mx-auto grid-cols-1 lg:max-w-5xl space-x-2 space-y-2 lg:py-4 lg:gap-x-2 lg:grid-cols-5">
        <ProjectTag
          onClick={handleTagChange}
          name="TODOS"
          isSelected={tag === "TODOS"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="BOX/BANHEIRO"
          isSelected={tag === "BOX/BANHEIRO"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="FACHADA"
          isSelected={tag === "FACHADA"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="PORTAS/JANELAS"
          isSelected={tag === "PORTAS/JANELAS"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="ESPELHOS"
          isSelected={tag === "ESPELHOS"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-2 p-8 md:gap-4">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
      <div className="mt-[100px] flex justify-center">
          <Link
            href=""
            className="md:w-52 md:h-52 w-32 h-32 bg-lime-600 rounded-full flex justify-center items-center text-center relative before:w-full before:h-full before:rounded-full before:border before:border-green-900 before:content-[''] before:absolute before:top-[10px] before:-left-[7px] before:duration-500 hover:before:-top-[10px]"
            data-aos="zoom-out-down"
            data-aos-duration="2000"
          >
            <span className="relative z-10">
              <i
                className="bi-arrow-right mb-[1px] md:text-[28px] text-base text-center flex justify-center text-clr_title transition-all"
              >
              </i>
              <span
                className="text-[#282828] md:text-lg text-sm font-medium leading-[30px] capitalize transition-all"
              >
                Veja mais projetos.
              </span>
            </span>
          </Link>
        </div>
    </section>
  );
};

export default ProjectsSection;