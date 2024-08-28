import React from "react";
import { motion } from "framer-motion";
import { GiCheckMark } from "react-icons/gi";
import { projectOneImg } from "@/assets";
import Image from "next/image";

const Box = () => {
  return (
    <div className="w-full px-6 flex items-center gap-10 mt-14">
      <motion.div
        initial={{ x: -20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.2,
          x: { type: "spring", stiffness: 60 },
          opacity: { duration: 1 },
          ease: "easeIn",
          duration: 0.5,
        }}
        className="w-2/5 hidden lgl:inline-flex"
      >
        <video className="w-full h-full rounded-sm object-center object-cover aspect-video md:aspect-square" autoPlay loop muted controls preload="none">
          <source src={'./bg-box.mp4'} type="video/mp4" />
          <track
        src="/path/to/captions.vtt"
        kind="subtitles"
        srcLang="en"
        label="English"
        />
        </video>
      </motion.div>
      <div className="w-full lgl:w-3/5">
        <div className="flex flex-col gap-4">
          <motion.h3
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 100 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
            className="col-start-1 row-start-2 mt-4 max-w-[36rem] text-4xl font-extrabold tracking-tight text-slate-400 sm:text-5xl xl:max-w-[43.5rem]"
          >
            Box {" "}
            <span className="text-lime-600 ml-3">Para banheiro</span>
          </motion.h3>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.3,
              x: { type: "spring", stiffness: 100 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
            className="grid grid-cols-1 lgl:grid-cols-2 gap-10"
          >
            <div className="flex w-full flex-col gap-6">
              <h3 className="font-titleFont text-lg font-bold flex items-center gap-4">
                <span className="text-lime-600">
                  <GiCheckMark />
                </span>
                Kit Multi Box
              </h3>
              <p className="text-base text-darkText hover:text-gray-300 duration-300 max-w-96">
              É um modelo de box em tendência que está sendo muito usado, deixa com aparência moderna e suave clean ao ambiente pode ser usado na altura padrão ou inteiriço até o teto deixando o ambiente mais agradável.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <h3 className="font-titleFont text-lg font-bold flex items-center gap-4">
                <span className="text-lime-600">
                  <GiCheckMark />
                </span>
                Box elegance
              </h3>
              <p className="text-base text-darkText hover:text-gray-300 duration-300 max-w-96">
              O banheiro costuma ser um ambiente pequeno e, por isso, a escolha de cada detalhe é estratégica e fundamental. Um detalhe a mais ou a menos pode mudar toda a perspectiva, como amplitude e o aspecto do local. Por isso, neste caso, as cores precisam ser escolhidas com cuidado, já que podem influenciar de maneira positiva ou negativa em seu banheiro.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <h3 className="font-titleFont text-lg font-bold flex items-center gap-4">
                <span className="text-lime-600">
                  <GiCheckMark />
                </span>
                Box de canto
              </h3>
              <p className="text-base text-darkText hover:text-gray-300 duration-300 max-w-96">
              O Box Encanto da Ideia Glass é a solução perfeita para banheiros pequenos. Com fácil adaptação aos banheiros e ainda sem exagero de espaço, o Box Encanto além de bonito é funcional. Com design único de roldanas aparentes, o modelo é uma ideia atrativa que realça o espaço, sem perder a funcionalidade necessária.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <h3 className="font-titleFont text-lg font-bold flex items-center gap-4">
                <span className="text-lime-600">
                  <GiCheckMark />
                </span>
                Box com pelicula de segurança.
              </h3>
              <p className="text-base text-darkText hover:text-gray-300 duration-300 max-w-96">
              Nos dias de hoje, ter box de vidro no banheiro é praticamente indispensável para qualquer ambiente residencial. 
              Seja para evitar que o banheiro fique molhado ou até prevenir possíveis acidentes. 
              Ao instalar uma película para box de banheiro, feita de polímero, evita que o vidro seja riscado e segura os estilhaços caso haja quebra, evitando problemas adicionais. 
              Porém, a película para box de banheiro também pode gerar alguns problemas caso não for aplicada de forma adequada por um profissional. Por exemplo, após a instalação, o box só pode ser utilizado após 6 horas. 
              Além disso, se faz necessário a manutenção preventiva deste material a cada doze meses, de preferência.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Box;
