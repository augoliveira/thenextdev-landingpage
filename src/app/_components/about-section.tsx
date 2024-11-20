"use client";

import Link from "next/link";

import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon
} from "@heroicons/react/20/solid";

import CldImage from "@/components/ui/CldImage";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function SocialLink({ icon: Icon, ...props }: any) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  );
}

const features = [
  {
    name: "QUEM SOMOS.",
    description:
      "A Glazing Design é uma empresa especializada na concepção e instalação de projetos inteligentes e modernos. Hoje em dia são virtualmente impossíveis não olhar ao redor e perceber a importância que o vidro tem em nossas vidas. Nossa missão é ajudar você quando o assunto é este material tão presente e arrojado. Adicione beleza e praticidade aos seus projetos de engenharia ou decoração!",
    icon: CloudArrowUpIcon
  },
  {
    name: " MISSÃO.",
    description:
      "Oferecer soluções inovadoras em produtos e serviços que atenda as expectativas de qualidade Designer e praticidade a um preço justo, buscando sempre um relacionamento de longo prazo. Focado na ética, profissionalismo e comprometimento com nossos clientes, colaboradores, parceiro e fornecedores.",
    icon: LockClosedIcon
  },
  {
    name: "VALORES.",
    description:
      "O rumo de nossa empresa é calcado em valores que são preponderantes para um relacionamento em longo prazo com nossos colaboradores, clientes e fornecedores. Pois entendemos que sem eles não temos condições de construir um futuro solido e atingível.   Nosso sucesso depende disso.",
    icon: ServerIcon
  }
];

function AboutSection() {
  return (
    <section
      id="about"
      className="container flex flex-col md:max-w-[80rem] md:py-12 lg:py-24"
    >
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto-1fr] lg:gap-y-12">
        <div className="flex justify-center lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <CldImage
              src="https://res.cloudinary.com/dp1588w0y/image/upload/v1715905533/ucwbzb0ninumik2u4wwf.png"
              alt="sobre"
              width={800}
              height={800}
              crop="fill"
              blur="100"
              sizes="(max-width: 640px) 100vw,
                      (max-width: 768px) 80vw,
                      (max-width: 1024px) 60vw,
                      50vw"
              className="origin-top-left rotate-12 rounded-xl object-cover group-hover:opacity-80"
            />
          </div>
        </div>
        <div className="text-center md:text-start lg:order-first lg:row-span-2">
          <div className="flex border-b border-slate-300/30 pl-4 text-base font-semibold leading-7 text-[#fbb33f]">
            <span className="-mb-px border-b border-b-current py-2">
              SOBRE O QUE FAZEMOS
            </span>
          </div>
          <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-9">
                <dt className="inline font-semibold text-gray-300">
                  <feature.icon
                    className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                    aria-hidden="true"
                  />
                  {feature.name}
                </dt>{" "}
                <dd className="inline text-slate-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
