import amazonImg from "../../../../public/Cobertura5.jpg";
import Image from "next/image";
import NextLink from "../../../components/ui/NextLink"
import { AiOutlineYoutube } from "react-icons/ai";
import { TbBrandGithub } from "react-icons/tb";
import { AnimatedText } from '../AnimatedText/index';
import { RxOpenInNewWindow } from "react-icons/rx";
import { ShadModal } from "@/components/ui/ShadModal";

const Section = () => {
  return (
    <section id="project" className="max-w-container mx-auto lgl:px-20 py-24 bg-zinc-900">
        <AnimatedText text='Cobertura de vidro' />
      {/* ============ project One Start here ================ */}
      <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
        <div className="flex flex-col xl:flex-row gap-6">
          <NextLink
            className="w-full xl:w-1/2 h-auto relative group"
            href="#"
          >
            
            <div>
              <Image
                className="w-full h-full object-contain"
                src={amazonImg}
                alt="amazonImg"
              />
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </NextLink>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Estrutura de aluminio
              </p>
              <h3 className="text-2xl font-bold">Com vidro</h3>
            </div>
            <p className="bg-[#112240] text-slate-300 text-sm md:text-base p-2 md:p-6 rounded-md">
            Seja para compor edifícios empresariais ou residenciais, a cobertura de vidro é capaz de unir características funcionais, segurança e estética. Esse tipo de cobertura está cada vez mais popular no Brasil, mas para que ela ofereça todas as vantagens acima citadas, é essencial que a mesma seja projetada com os vidros certos e instalada por equipes especializadas.{" "}
              <span className="text-textGreen">A experiência</span>  e segurança de profissionais treinados asseguram a melhor execução do projeto e garante segurança, estanqueidade e as características especiais que a <span className="text-textGreen">cobertura atribui às edificações.</span>.
            </p>
            <div className="py-8">
              <ShadModal />
            </div>
            <div className="text-2xl flex gap-4">
              <NextLink
                className="hover:text-textGreen duration-300"
                href="https://github.com/noorjsdivs"
                target="_blank"
              >
                <TbBrandGithub />
              </NextLink>
              <NextLink
                className="hover:text-textGreen duration-300"
                href="https://youtu.be/WzMtRfzkP-Q"
                target="_blank"
              >
                <AiOutlineYoutube />
              </NextLink>
              <NextLink
                className="hover:text-textGreen duration-300"
                href="https://nextamazon.reactbd.com/"
                target="_blank"
              >
                <RxOpenInNewWindow />
              </NextLink>
            </div>
          </div>
        </div>
        {/* ============ project Three End here ================== */}
      </div>
    </section>
  );
};

export default Section;