import Image from "next/image";
import Link from "next/link";
import { AiOutlineYoutube } from "react-icons/ai";
import { RxOpenInNewWindow } from "react-icons/rx";
import { TbBrandGithub } from "react-icons/tb";

import { CheckIcon } from "@heroicons/react/20/solid";

import amazonImg from "../assets/amazonImg.png";
import cyberImg from "../assets/cyberBlog.png";
import noorShop from "../assets/noorShop.png";
import { AnimatedText } from "./Portifolio/AnimatedText/index";

const includedFeatures = [
  "Porta de abrir",
  "Porta de correr",
  "Porta com mola"
];

const Projects = () => {
  return (
    <section
      id="project"
      className="max-w-container mx-auto bg-clr_bg1 px-24 py-24 lgl:px-20"
    >
      <AnimatedText text="PORTA E JANELAS" />
      {/* ============ project One Start here ================ */}
      <div className="mt-10 flex w-full flex-col items-center justify-center gap-28">
        <div className="flex flex-col gap-6 xl:flex-row">
          <Link
            className="group relative h-auto w-full xl:w-1/2"
            href="https://nextamazon.reactbd.com/"
            target="_blank"
          >
            <div>
              <Image
                className="h-full w-full object-contain"
                src={amazonImg}
                alt="amazonImg"
              />
              <div className="absolute left-0 top-0 h-full w-full rounded-lg bg-textGreen/10 duration-300 group-hover:bg-transparent"></div>
            </div>
          </Link>
          <div className="z-10 flex w-full flex-col items-end gap-6 text-right lgl:justify-between xl:-ml-16 xl:w-1/2">
            <div>
              <p className="col-start-1 row-start-2 mt-4 max-w-[36rem] text-4xl font-extrabold tracking-tight text-slate-900 sm:text-7xl xl:max-w-[43.5rem]">
                Porta de correr
              </p>
            </div>
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Solicite um Orçamento.{" "}
              <a
                href="https://api.whatsapp.com/send?phone=5561986692775"
                className="font-semibold text-indigo-600"
              >
                <span className="absolute inset-0" aria-hidden="true" />
                Whatsapp <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
            <p className="rounded-md bg-[#112240] p-2 text-sm md:p-6 md:text-base">
              Para responder o que é porta pivotante, precisamos explicar como
              ela funciona. A porta pivotante é fixada com pinos na parte de
              cima e de baixo e, por isso, giram em torno de um eixo vertical, o
              pivô – daí o nome des ses modelos de portas.{" "}
              <span className="text-textGreen">
                Esse funcionamento e o fato de não usar dobradiças e deixar as
                ferragens escondidas garante mais leveza e um efeito visual
                diferente, mais clean, à porta pivotante. Além disso, os modelos
                de porta pivotante costumam também ser maiores, mais largas e/ou
                mais altas, o que faz com que elas sejam vistas em projetos de
                ambientes mais amplos e com pé direito alto, mas existem também
                tipos mais compactos.
              </span>{" "}
              As nossas Porta de Vidro Sistema Blindex são produzidas através de
              processos de última geração e com as melhores matérias–primas
              disponíveis no mercado.
            </p>
            <ul className="font-titleFont flex justify-between gap-2 text-xs tracking-wide text-textDark md:gap-5 md:text-sm">
              {includedFeatures.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon
                    className="h-6 w-5 flex-none text-indigo-600"
                    aria-hidden="true"
                  />
                  {feature}
                </li>
              ))}
            </ul>
            <div className="flex gap-4 text-2xl">
              <a
                className="text-slate-800 duration-300 hover:text-textGreen"
                href="https://github.com/noorjsdivs"
                target="_blank"
                rel="noreferrer"
              >
                <TbBrandGithub />
              </a>
              <a
                className="text-slate-800 duration-300 hover:text-textGreen"
                href="https://youtu.be/WzMtRfzkP-Q"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineYoutube />
              </a>
              <a
                className="text-slate-800 duration-300 hover:text-textGreen"
                href="https://nextamazon.reactbd.com/"
                target="_blank"
                rel="noreferrer"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>
        {/* ============ project One End here ================== */}
        {/* ============ project Two Start here ================ */}
        <div className="flex flex-col gap-6 xl:flex-row-reverse">
          <a
            className="group relative h-auto w-full text-slate-800 xl:w-1/2"
            href="https://www.noormohmmad.com/"
            target="_blank"
            rel="noreferrer"
          >
            <div>
              <Image
                className="h-full w-full object-contain"
                src={cyberImg}
                alt="cyberImg"
              />
              <div className="absolute left-0 top-0 h-full w-full rounded-lg bg-textGreen/10 duration-300 group-hover:bg-transparent"></div>
            </div>
          </a>
          <div className="z-10 flex w-full flex-col items-end justify-between gap-6 text-right xl:w-1/2">
            <div>
              <p className="col-start-1 row-start-2 mt-4 max-w-[36rem] text-4xl font-extrabold tracking-tight text-slate-900 sm:text-7xl xl:max-w-[43.5rem]">
                Janela
              </p>
            </div>
            <p className="rounded-md bg-[#112240] p-2 text-sm md:p-6 md:text-base xl:-mr-16">
              A full functional Cyber Security Blog where you can view the
              latest post and{" "}
              <span className="text-textGreen">comments on</span> it by passing
              your ideas besides you can try to add your own{" "}
              <span className="text-textGreen">post</span> on it by logging on
              the portal.
            </p>
            <ul className="font-titleFont flex justify-between gap-2 text-xs tracking-wide text-textDark md:gap-5 md:text-sm">
              <li>Nextjs</li>
              <li>Typescript</li>
              <li>Next-auth</li>
              <li>Sanity</li>
              <li>React Hook Form</li>
            </ul>
            <div className="flex gap-4 text-2xl">
              <a
                className="duration-300 hover:text-textGreen"
                href="https://github.com/noorjsdivs"
                target="_blank"
                rel="noreferrer"
              >
                <TbBrandGithub />
              </a>
              <a
                className="duration-300 hover:text-textGreen"
                href="https://youtu.be/49Fx963su1I"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineYoutube />
              </a>
              <a
                className="duration-300 hover:text-textGreen"
                href="https://www.noormohmmad.com/"
                target="_blank"
                rel="noreferrer"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>
        {/* ============ project Two End here ================== */}
        {/* ============ project Three Start here ============== */}
        <div className="flex flex-col gap-6 xl:flex-row">
          <a
            className="group relative h-auto w-full xl:w-1/2"
            href="https://noorshop.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <div>
              <Image
                className="h-full w-full object-contain"
                src={noorShop}
                alt="noorShop"
              />
              <div className="absolute left-0 top-0 h-full w-full rounded-lg bg-textGreen/10 duration-300 group-hover:bg-transparent"></div>
            </div>
          </a>
          <div className="z-10 flex w-full flex-col items-end justify-between gap-6 text-right xl:-ml-16 xl:w-1/2">
            <div>
              <p className="font-titleFont text-sm tracking-wide text-textGreen">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Amazon Clone 2.0</h3>
            </div>
            <p className="rounded-md bg-[#112240] p-2 text-sm md:p-6 md:text-base">
              An Amazon clone website for visualizing personalized Amazon
              website. View your products, Add your account with{" "}
              <span className="text-textGreen">O-auth</span> and then make the
              purchage using <span className="text-textGreen">stripe</span>.
            </p>
            <ul className="font-titleFont flex justify-between gap-2 text-xs tracking-wide text-textDark md:gap-5 md:text-sm">
              <li>Nextjs</li>
              <li>Typescript</li>
              <li>Next-auth</li>
              <li>Stripe</li>
              <li>Vercel Deployment</li>
            </ul>
            <div className="flex gap-4 text-2xl">
              <a
                className="duration-300 hover:text-textGreen"
                href="https://github.com/noorjsdivs"
                target="_blank"
                rel="noreferrer"
              >
                <TbBrandGithub />
              </a>
              <a
                className="duration-300 hover:text-textGreen"
                href="https://youtu.be/fi0nQc25xAw"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineYoutube />
              </a>
              <a
                className="duration-300 hover:text-textGreen"
                href="https://noorshop.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>
        {/* ============ project Three End here ================== */}
      </div>
    </section>
  );
};

export default Projects;
