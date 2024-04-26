/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from "next/image";

import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

import BoxImage from "../../../public/box-evidence-720x480-3.png"


export default function BoxProduto() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-indigo-600">A Glazing Design</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Vidraçaria</h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
              especialista em box para banheiro no DF. Eles são indicados para otimizar espaços e organizar esse cômodo, já que criam uma área específica para banho, sem permitir que a água e a umidade invadam o banheiro todo.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <Image
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src={BoxImage}
            alt=""
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p>
              O box é um dos itens quase que obrigatório para os banheiros. Eles são feitos, na maioria das vezes, de vidros temperado da marca Blindex®. 

              <div>Essa é uma marca confiável, segura e com uma ótima durabilidade. E, em comparação ao box cortina ou cortina de vidro, é muito mais usual, moderno e não corre o risco de ficar com aspecto sujo. Além de ser totalmente higiênico e não acumular fungos, apesar de estar sempre molhado.</div>
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <CloudArrowUpIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Box com vidro temperado.</strong> Promove seu banheiro com elegância e segurança com nosso Box Temperado de Vidro Incolor de 8mm. Combinando durabilidade e estilo, nosso box frontal oferece o equilíbrio perfeito entre qualidade e preço acessível. Transforme seu espaço com um toque de sofisticação sem comprometer seu orçamento. Descubra a beleza e a funcionalidade do nosso box temperado hoje mesmo!
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <LockClosedIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Box com pelicula de segurança.</strong> Nos dias de hoje, ter box de vidro no banheiro é praticamente indispensável para qualquer ambiente residencial. Seja para evitar que o banheiro fique molhado ou até prevenir possíveis acidentes. Ao instalar uma película para box de banheiro, feita de polímero, evita que o vidro seja riscado e segura os estilhaços caso haja quebra, evitando problemas adicionais.

Porém, a película para box de banheiro também pode gerar alguns problemas caso não for aplicada de forma adequada por um profissional. Por exemplo, após a instalação, o box só pode ser utilizado após 6 horas. Além disso, se faz necessário a manutenção preventiva deste material a cada doze meses, de preferência.
                  </span>
                </li>
              </ul>
              
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">A Glazing Design.</h2>
              <p className="mt-6">
              disponibiliza inúmeros modelos que se adequam a diferentes projetos, como o box de correr, o de abrir e o de canto. Além de bonitos, os boxes de vidro são mais seguros e podem durar a vida toda.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}