import React from 'react';
import { Card } from '@/components/Cards'

import { AnimatedText } from './AnimatedText/index';
import { projectOne, guardaCorpo, box, cortina, projectTwo, projectThree } from './index';
import ProjectsCard from './ProjectsCard';

const Portifolio = () => {
  return (
    <section
      id='projects'
      className='w-full border-b-[1px] border-b-black bg-slate-100 py-20'
    >
      <div className='mx-auto mt-24 min-h-screen max-w-7xl px-8 xl:px-0'>
          <Card />
        <h1 className="mt-14 text-5xl font-bold text-gray-900 text-center">
          Nossos <span className="text-violet-500">Destaques</span>
        </h1>
        <div className='grid grid-cols-1 gap-6 py-16 md:grid-cols-2 xl:grid-cols-3 xl:gap-14'>
          <ProjectsCard
            title='TELHADO DE VIDRO'
            des=' Acabar com a luminosidade na entrada da sua casa não é legal né? A cobertura de vidro te protege da chuva e ainda garante a luminosidade para sua fachada.'
            src={projectOne}
          />

          <ProjectsCard
            title='JANELAS DE VIDRO'
            des=' Janela de vidro temperado de correr com fixo de canto. As janelas de alumínio em vidro temperado, além de promover grande segurança, são uma ótimas opção para dar toda a praticidade na hora da limpeza e o visual elegante que sua casa precisa!'
            src={projectTwo}
          />

          <ProjectsCard
            title='ESQUADRIA DE ALUMINIO'
            des=' Apresentamos nossas Esquadrias de Alumínio, soluções modernas e versáteis para o seu projeto arquitetônico. Fabricadas com alumínio de alta qualidade.'
            src={projectThree}
          />

          <ProjectsCard
            title='CORTINA DE VIDRO'
            des='A cortina de vidro, conhecida também como janelas panorâmicas, é a nova sensação na decoração de sacadas e áreas fechadas, veja como utiliza-las.'
            src={cortina}
          />

          <ProjectsCard
            title='GUARDA CORPO DE VIDRO'
            des=' O guarda-corpo de vidro, uma solução estética e funcional, oferece uma sensação de amplitude e fluidez, permitindo que a luz natural permeie o espaço.'
            src={guardaCorpo}
          />

          <ProjectsCard
            title='BOX PARA BANHEIRO'
            des=' O box para banheiro é daquelas peças que não podem faltar no cômodo. Afinal, ele garante mais organização, praticidade e limpeza, ao limitar a área do banho.'
            src={box}
          />
        </div>
      </div>
    </section>
  );
};

export default Portifolio;
