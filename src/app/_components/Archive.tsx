'use client';

import { useState } from "react";

import { motion } from "framer-motion";

import ArchiveCard from "./ArchiveCard";

const Archive = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="max-w-contentContainer mx-auto px-4 py-24">
      <div className="w-full flex flex-col items-center">
      <div className='pr-4 flex col-start-1 row-start-2 mt-4 max-w-[36rem] text-4xl font-extrabold tracking-tight sm:text-4xl xl:max-w-[43.5rem] text-[#fff] border-b pe-4 border-slate-300/30'><span className="-mb-px py-2 border-b border-b-current">Todos projetos</span></div>
        <p className="text-sm font-titleFont text-textGreen">
          Veja mais detalhe
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10">
        <ArchiveCard
          title="Box para banheiro"
          img="/ProdutoBoxFlex.jpg"
          des=" O box de vidro para banheiro é o tipo de envidraçamento mais realizado pelo Brasil."
          listItem={["Box reto", "Box de canto", "Box com porta de abrir"]}
          link="/box-para-banheiro"
        />
        <ArchiveCard
          title="Portas e janelas"
          img="/ProdutoJanela.jpg"
          des=" Fabricação e instalação de portas de vidro elegantes e funcionais para residências e estabelecimentos comerciais."
          listItem={["Porta de abrir", "Porta de correr", "Porta de vidro light holder"]}
          link="/portas-e-janelas"
        />
        <ArchiveCard
          title="Coberturas de vidro"
          img="/ProdutoTeto.jpg"
          des=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            laudantium velit qui sint non, voluptates quo a veritatis."
          listItem={["Economia de energia", "Proteção", "Pouca manutenção"]}
          link="/cobertura"
        />
        <ArchiveCard
          title="Esquadrias em alumínio."
          img="/ProdutoEsquadrias.jpg"
          des=" Na Glazing Design, oferecemos esquadrias em alumínio de alta qualidade para complementar e valorizar seus projetos arquitetônicos."
          listItem={["Portas", "Janelas", "Divissorias"]}
          link="/esquadria"
        />
        <ArchiveCard
          title="Guarda Corpo de vidro"
          img="/ProdutoGuarda-corpo.jpg"
          des=" Oferecemos soluções de guarda-corpo em vidro que unem segurança, elegância e funcionalidade."
          listItem={["vidro resinado", "vidro laminado", "vidro temperado"]}
          link="https://jsondata.reactbd.com/"
        />
        <ArchiveCard
          title="Fachada Pele de Vidro"
          img="/ProdutoPele.jpg"
          des=" Somos especialistas em projetos de fachadas com pele de vidro, oferecendo soluções modernas e elegantes para edifícios comerciais, residenciais e industriais. Nossa equipe altamente qualificada trabalha em estreita colaboração com arquitetos e clientes para projetar e instalar sistemas de fachada que combinam beleza arquitetônica com desempenho excepcional."
          listItem={["Stick ou Grid", "Unitizado", "Híbrido"]}
          link="https://portfolioone.reactbd.com/"
        />

        {showMore && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <ArchiveCard
                title="Espelhos"
                img="/bg-espelho.svg"
                des=" Os espelhos são um elemento muito versátil e útil na decoração de interiores e oferecem várias vantagens para uma casa."
                listItem={["Reactjs", "Tailwind CSS", "getform.io"]}
                link="/espelho"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <ArchiveCard
                title="Noor Online Shopping Store"
                img="/ProdutoPele.jpg"
                des=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            laudantium velit qui sint non, voluptates quo a veritatis."
                listItem={["Reactjs", "Tailwind CSS", "redux-toolkit"]}
                link="https://noorshop.netlify.app/"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <ArchiveCard
                title="Personalized Blog"
                img="/ProdutoPele.jpg"
                des=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            laudantium velit qui sint non, voluptates quo a veritatis."
                listItem={["Nextjs", "Tailwind CSS", "next-auth", "firebase"]}
                link="https://my-blog-delta-eight.vercel.app/"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <ArchiveCard
                title="Shoppers Online Shopping Market"
                img="/ProdutoPele.jpg"
                des=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            laudantium velit qui sint non, voluptates quo a veritatis."
                listItem={["Nextjs", "react-slick", "redux-toolkit"]}
                link="https://shoppersyt.vercel.app/"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <ArchiveCard
                title="Single Page Personalized Portfolio"
                img="/ProdutoPele.jpg"
                des=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            laudantium velit qui sint non, voluptates quo a veritatis."
                listItem={["Reactjs", "Tailwind CSS", "vercel deploy"]}
                link="https://portfoliotwo.reactbd.com/"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <ArchiveCard
                title="Nextjs Dynamic Portfolio"
                img="/ProdutoPele.jpg"
                des=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            laudantium velit qui sint non, voluptates quo a veritatis."
                listItem={["Reactjs", "Tailwind CSS", "vercel deploy"]}
                link="https://portfoliothree.reactbd.com/"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <ArchiveCard
                title="Bazaar - A Modern Shopping app"
                img="/ProdutoPele.jpg"
                des=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            laudantium velit qui sint non, voluptates quo a veritatis."
                listItem={["Reactjs", "Tailwind CSS", "vercel deploy"]}
                link="https://bazar.reactbd.com/"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <ArchiveCard
                title="Blog101 Application"
                img="/ProdutoPele.jpg"
                des=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            laudantium velit qui sint non, voluptates quo a veritatis."
                listItem={["Nextjs", "Tailwind CSS", "next-auth"]}
                link="https://blog101.reactbd.com/"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <ArchiveCard
                title="Todo application"
                img="/ProdutoPele.jpg"
                des=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            laudantium velit qui sint non, voluptates quo a veritatis."
                listItem={["Reactjs", "Tailwind CSS", "vercel deploy"]}
                link="https://youtubetodo.vercel.app/"
              />
            </motion.div>
          </>
        )}
      </div>
      <div className="mt-12 flex items-center justify-center">
        {showMore ? (
          <button
            onClick={() => setShowMore(false)}
            className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
          >
            Mostrar menos
          </button>
        ) : (
          <button
            onClick={() => setShowMore(true)}
            className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
          >
            Mostrar mais
          </button>
        )}
      </div>
    </div>
  );
};

export default Archive;
