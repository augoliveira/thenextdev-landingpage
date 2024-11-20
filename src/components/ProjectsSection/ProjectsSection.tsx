"use client";
import Link from "next/link";
import React, { useState, useRef } from "react";

import { motion, useInView } from "framer-motion";

import { AnimatedText } from "../AnimatedText";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "Box com vidro Neutral 14",
    description:
      "O Neutral 14 faz parte da linha SunGuard da Guardian, que controla a luz solar e permite o melhor uso da luz e da cor.",
    image: "/Box-Espelhado-new.jpg",
    tag: ["TODOS", "BOX/BANHEIRO"],
    gitUrl: "/",
    previewUrl: "/"
  },
  {
    id: 2,
    title: "Box de canto até o teto",
    description: "Box até o teto: a tendência que vai inovar seu espaço",
    image: "/Blackcoffee.png",
    tag: ["TODOS", "BOX/BANHEIRO"],
    gitUrl: "/",
    previewUrl: "/"
  },
  {
    id: 3,
    title: "Fachada de vidro temperado",
    description:
      "A fachada de vidro temperado pode ter ainda mais vantagens que as grades de alumínio, que são opções mais simples.",
    image: "/fachada.png",
    tag: ["TODOS", "FACHADA"],
    gitUrl: "/",
    previewUrl: "/"
  },
  {
    id: 4,
    title: "Espelho para banheiro",
    description:
      "Um espelho grande em um banheiro pequeno faz com que a percepção de espaço seja ampliada, deixando o banheiro mais confortável.",
    image: "/espelho.png",
    tag: ["TODOS", "ESPELHOS"],
    gitUrl: "/",
    previewUrl: "/"
  },
  {
    id: 5,
    title: "Full-stack Roadmap",
    description: "Project 5 description",
    image: "/box-articulado.jpg",
    tag: ["TODOS", "BOX/BANHEIRO"],
    gitUrl: "/",
    previewUrl: "/"
  },
  {
    id: 6,
    title: "porta de vidro temperado",
    description:
      "A porta de vidro temperado é um material perfeito para agregar conforto, elegância e sofisticação em ambientes.",
    image: "/portas.png",
    tag: ["TODOS", "PORTAS/JANELAS"],
    gitUrl: "/",
    previewUrl: "/"
  }
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
    animate: { y: 0, opacity: 1 }
  };

  return (
    <section
      className="max-w-container mx-auto bg-slate-200 p-8 py-24 lgl:px-20"
      id="projects"
    >
      <AnimatedText text="Projetos" />
      <div className="mx-auto max-w-sm grid-cols-1 space-x-2 space-y-2 lg:max-w-5xl lg:grid-cols-5 lg:gap-x-2 lg:py-4">
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
      <ul ref={ref} className="grid gap-2 p-8 md:grid-cols-3 md:gap-4">
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
          className="relative flex h-32 w-32 items-center justify-center rounded-full bg-lime-600 text-center before:absolute before:-left-[7px] before:top-[10px] before:h-full before:w-full before:rounded-full before:border before:border-green-900 before:duration-500 before:content-[''] hover:before:-top-[10px] md:h-52 md:w-52"
          data-aos="zoom-out-down"
          data-aos-duration="2000"
        >
          <span className="relative z-10">
            <i className="bi-arrow-right mb-[1px] flex justify-center text-center text-base text-clr_title transition-all md:text-[28px]"></i>
            <span className="text-sm font-medium capitalize leading-[30px] text-[#282828] transition-all md:text-lg">
              Veja mais projetos.
            </span>
          </span>
        </Link>
      </div>
    </section>
  );
};

export default ProjectsSection;
