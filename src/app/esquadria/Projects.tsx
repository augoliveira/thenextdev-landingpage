'use client'

import { CheckIcon } from '@heroicons/react/20/solid'
import amazonImg from "../../../public/bg-esquadria.jpg";
import cyberImg from "../../../public/laminated-glass.webp";
import noorShop from "../../../public/cortinas-vidro.svg";
import Image from "next/image";
import NextLink from '../../components/ui/NextLink';
import { InstagramLogo, WhatsappLogo, YoutubeLogo } from "@phosphor-icons/react";


const includedFeatures = [
  'Porta de abrir',
  'Porta de correr',
  'Janelas',
]


const Projects = () => {
  return (
    <section id="project" className="max-w-container mx-auto lgl:px-8 py-16 px-16 bg-gradient-to-r from-zinc-100 to-[#4c497a]">
      {/* ============ project One Start here ================ */}
      <div className="w-full flex flex-col items-center justify-center gap-28 mt-8">
        <div className="flex flex-col xl:flex-row gap-6">
            <div className="w-full lg:w-96 xl:w-1/2 h-auto relative group">
              <video className="w-full h-full rounded-sm object-center object-cover aspect-video md:aspect-square" autoPlay loop muted controls preload="none">
                <source src={'./esquadria.mp4'} type="video/mp4" />
                <track
                  src="/path/to/captions.vtt"
                  kind="subtitles"
                  srcLang="en"
                  label="English"
                />
              </video>
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
              <p className="col-start-1 row-start-2 mt-4 max-w-[36rem] text-4xl font-extrabold tracking-tight text-slate-900 sm:text-7xl xl:max-w-[43.5rem]">
                Porta de correr
              </p>
          <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-slate-950 ring-1 ring-lime-950/10 hover:ring-gray-900/20">
          Solicite um Orçamento.{' '}
              <NextLink href="https://api.whatsapp.com/send?phone=5561986692775" className="bg-gradient-to-r from-bodyColor to-[#5f960d] px-4 rounded-full font-semibold text-indigo-600">
                <span className="absolute inset-0" aria-hidden="true" />
                Whatsapp <span aria-hidden="true">&rarr;</span>
              </NextLink>
            </div>
            <p className="bg-gradient-to-r from-bodyColor to-[#436909] text-sm tracking-tight md:text-base text-slate-400 p-2 md:p-6 rounded-md">
            As esquadrias de alumínio são muito utilizadas em projetos de arquitetura e construção civil. A esquadria de alumínio é muito valorizada por causa da sua durabilidade, facilidade de manutenção e resistência à corrosão. Devido a sua polivalência e versatilidade, são alternativas para residências e empreendimentos empresariais. Acompanhe esse artigo e vamos conhecer quais os tipos de esquadrias de alumínio disponíveis no mercado.{" "}
              <span className="text-lime-400 text-balance tracking-tight">O uso do alumínio e suas vantagens para a arquitetura</span> O alumínio é amplamente utilizado em projetos de arquitetura e construção civil por causa das suas várias propriedades e vantagens, como por exemplo:

– Proteção elevada contra corrosão: o que indica a possibilidade de usar em áreas externas expostas a intempéries sem se deteriorar.

– Leveza: o fato de o alumínio ser mais leve que o aço, por exemplo, torna o elemento em alternativa popular para utilização em diversos níveis.

– Durabilidade e resistência: O alumínio é um material muito durável e resistente, o que indica que as estruturas derivadas do alumínio tendem a durar por muitos e muitos anos.

– Versatilidade: O alumínio é um elemento que pode ser facilmente moldado em diferentes formas e tamanho, possibilitando a criação de projetos singulares.

– Sustentabilidade: O alumínio é um material 100% reciclável e pode ser facilmente reaproveitado, o que agrega características sustentáveis à arquitetura e construção civil.

Ainda comentando sobre quais os tipos de esquadrias de alumínio, lembramos que todas essas vantagens acima relacionadas são facilmente transportadas para a esquadria, o que faz com que a esquadria de alumínio seja uma alternativa de ótimo custo benefício para a projeção de portas, janelas, divisórias, fachadas, divisórias de ambientes, etc.
            </p>
            <ul className="text-xs md:text-2xl font-titleFont tracking-tight flex gap-2 md:gap-5 justify-between text-lime-950">
            {includedFeatures.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
            <div className="text-2xl flex gap-4">
              <NextLink
                className="hover:text-textGreen duration-300 text-slate-800"
                href="https://instagram.com/glazing_design"
                target="_blank"
              >
                <InstagramLogo size={32} weight="fill" />
              </NextLink>
              <NextLink
                className="hover:text-textGreen duration-300 text-slate-800"
                href="https://youtu.be/WzMtRfzkP-Q"
                target="_blank"
              >
                <WhatsappLogo size={32} weight="fill" />
              </NextLink>
              <NextLink
                className="hover:text-textGreen duration-300 text-slate-800"
                href="https://nextamazon.reactbd.com/"
                target="_blank"
              >
                <YoutubeLogo size={32} weight="fill" />
              </NextLink>
            </div>
          </div>
        </div>
        {/* ============ project One End here ================== */}
        {/* ============ project Two Start here ================ */}
        <div className="flex flex-col xl:flex-row-reverse gap-6">
          <NextLink
            className="w-full xl:w-1/2 h-auto relative group text-slate-800"
            href="https://www.noormohmmad.com/"
            target="_blank"
          >
            <div>
              <Image
                className="w-full h-full object-contain"
                src={cyberImg}
                alt="cyberImg"
              />
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </NextLink>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right z-10">
            <div>
              <p className="col-start-1 row-start-2 mt-4 max-w-[36rem] text-4xl font-extrabold tracking-tight text-slate-900 sm:text-7xl xl:max-w-[43.5rem]">
                Janela
              </p>
            </div>
            <p className="text-sm md:text-base bg-[#112240] p-2 md:p-6 rounded-md xl:-mr-16">
              A full functional Cyber Security Blog where you can view the
              latest post and{" "}
              <span className="text-textGreen">comments on</span> it by passing
              your ideas besides you can try to add your own{" "}
              <span className="text-textGreen">post</span> on it by logging on
              the portal.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>Nextjs</li>
              <li>Typescript</li>
              <li>Next-auth</li>
              <li>Sanity</li>
              <li>React Hook Form</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <NextLink
                className="hover:text-textGreen duration-300"
                href="https://github.com/noorjsdivs"
                target="_blank"
              >
                <InstagramLogo size={32} weight="fill" />
              </NextLink>
              <NextLink
                className="hover:text-textGreen duration-300"
                href="https://youtu.be/49Fx963su1I"
                target="_blank"
              >
                <WhatsappLogo size={32} weight="fill" />
              </NextLink>
              <a
                className="hover:text-textGreen duration-300"
                href="https://www.noormohmmad.com/"
                target="_blank"
              >
                <YoutubeLogo size={32} weight="fill" />
              </a>
            </div>
          </div>
        </div>
        {/* ============ project Two End here ================== */}
        {/* ============ project Three Start here ============== */}
        <div className="flex flex-col xl:flex-row gap-6">
          <NextLink
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://noorshop.netlify.app/"
            target="_blank"
          >
            <div>
              <Image
                className="w-full h-full object-contain"
                src={noorShop}
                alt="noorShop"
              />
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </NextLink>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right xl:-ml-16 z-10">
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Amazon Clone 2.0</h3>
            </div>
            <p className="text-sm md:text-base bg-[#112240] p-2 md:p-6 rounded-md">
              An Amazon clone website for visualizing personalized Amazon
              website. View your products, Add your account with{" "}
              <span className="text-textGreen">O-auth</span> and then make the
              purchage using <span className="text-textGreen">stripe</span>.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>Nextjs</li>
              <li>Typescript</li>
              <li>Next-auth</li>
              <li>Stripe</li>
              <li>Vercel Deployment</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <NextLink
                className="hover:text-textGreen duration-300"
                href="https://github.com/noorjsdivs"
                target="_blank"
              >
                <InstagramLogo size={32} weight="fill" />
              </NextLink>
              <NextLink
                className="hover:text-textGreen duration-300"
                href="https://youtu.be/fi0nQc25xAw"
                target="_blank"
              >
                <WhatsappLogo size={32} weight="fill" />
              </NextLink>
              <NextLink
                className="hover:text-textGreen duration-300"
                href="https://noorshop.netlify.app/"
                target="_blank"
              >
                <YoutubeLogo size={32} weight="fill" />
              </NextLink>
            </div>
          </div>
        </div>
        {/* ============ project Three End here ================== */}
      </div>
    </section>
  );
};

export default Projects;
