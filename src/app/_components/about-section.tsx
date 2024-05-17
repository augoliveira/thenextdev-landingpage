/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable jsx-a11y/alt-text */
'use client';

import CldImage from '@/components/ui/CldImage';
import BlurImage from '@/components/ui/blur-image';
import Link from 'next/link';
import { useState } from 'react';

import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

import Sobre from '/public/Tecnologia.png'

import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  YoutTubeIcon,
} from '@/components/social-icons';

function SocialLink({ icon: Icon, ...props }: any) {
  return (
    <Link className='group -m-1 p-1' {...props}>
      <Icon className='h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300' />
    </Link>
  );
}

const features = [
  {
    name: 'QUEM SOMOS.',
    description:
      'A Glazing Design é uma empresa especializada na concepção e instalação de projetos inteligentes e modernos. Hoje em dia são virtualmente impossíveis não olhar ao redor e perceber a importância que o vidro tem em nossas vidas. Nossa missão é ajudar você quando o assunto é este material tão presente e arrojado. Adicione beleza e praticidade aos seus projetos de engenharia ou decoração!',
    icon: CloudArrowUpIcon,

  },
  {
    name: ' MISSÃO.',
    description: 'Oferecer soluções inovadoras em produtos e serviços que atenda as expectativas de qualidade Designer e praticidade a um preço justo, buscando sempre um relacionamento de longo prazo. Focado na ética, profissionalismo e comprometimento com nossos clientes, colaboradores, parceiro e fornecedores.',
    icon: LockClosedIcon,
  },
  {
    name: 'VALORES.',
    description: 'O rumo de nossa empresa é calcado em valores que são preponderantes para um relacionamento em longo prazo com nossos colaboradores, clientes e fornecedores. Pois entendemos que sem eles não temos condições de construir um futuro solido e atingível.   Nosso sucesso depende disso.',
    icon: ServerIcon,
  },
]

function AboutSection() {
  return (
    <section
      id='about'
      className='container flex flex-col md:max-w-[80rem] md:py-12 lg:py-24'
    >
      <div className='grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-y-12 lg:grid-rows-[auto-1fr]'>
        <div className='lg:pl-20 flex justify-center'>
          <div className='max-w-xs px-2.5 lg:max-w-none'>
          <CldImage
              src="https://res.cloudinary.com/dp1588w0y/image/upload/v1715905533/ucwbzb0ninumik2u4wwf.png"
              alt="sobre"
              fillBackground
              width={800}
              height={800}
              sizes="(max-width: 640px) 100vw,
                      (max-width: 768px) 80vw,
                      (max-width: 1024px) 60vw,
                      50vw"
              className="origin-top-left rotate-12 object-cover rounded-xl group-hover:opacity-80"
            />
          </div>
        </div>
        <div className='lg:order-first lg:row-span-2 text-center md:text-start'>
        <div className='pl-4 flex text-base font-semibold leading-7 text-[#fbb33f] border-b border-slate-300/30'><span className="-mb-px py-2 border-b border-b-current">SOBRE O QUE FAZEMOS</span></div>
          <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-300">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline text-slate-500">{feature.description}</dd>
                  </div>
                ))}
              </dl>
          <div className='mt-6 flex justify-center md:justify-start gap-6'>
            <SocialLink
              href='https://instagram.com/lucasnhimi'
              icon={InstagramIcon}
            />
            <SocialLink
              href='https://github.com/lucasnhimi'
              icon={GitHubIcon}
            />
            <SocialLink
              href='https://linkedin.com/in/lucasnhimi'
              icon={LinkedInIcon}
            />
            <SocialLink
              href='https://youtube.com/lucasnhimi'
              icon={YoutTubeIcon}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
