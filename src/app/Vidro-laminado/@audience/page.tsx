import { Boundary } from '@/components/ui/boundary';
import Image from "next/image";
import Bg from '../../../../public/dobradica_gv48_90o.webp'
import { ClipboardDocumentCheckIcon } from '@heroicons/react/24/solid';

const includedFeatures = [
  'Não estilhaça quando quebrado',
  'Proteção UV',
  'Atenuação Acústica',
  'O vidro laminado bloqueia 99% dos raios UV, prevenindo o desbotamento dos móveis e o câncer de pele.',
]

export default function Page() {
  return (
    <Boundary labels={['@audience/page.tsx']} size="small">
      <div className="prose prose-sm prose-invert max-w-none bg-cyan-100 rounded-md">
        <div className="flex flex-col gap-4 items-center">
          <h1 className="mt-4 mb-4 font-extrabold tracking-tight text-slate-900 text-6xl">Vidro Lamindo</h1>
          <p className="gradient-text text-4xl tracking-tight font-medium text-transparent animate-gradient">
          Vantagens:
          </p>
          <div className="w-24 h-24 relative">
            <Image
              src={Bg}
              alt="m2"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
        <video className="w-full aspect-video md:aspect-square h-full -mt-28" autoPlay loop muted>
          <source src={'./Laminado.mp4'}/>
        </video>
        
        <div className="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
      <h1 className="mt-1 px-8  text-lg font-semibold text-black sm:text-slate-900 md:text-2xl dark:sm:text-slate-500">O vidro laminado é composto por duas ou mais placas de vidro, que são unidas por uma ou mais camadas intermediárias chamadas de interlayers. Quando quebrado, os estilhaços ficam presos à essa camada intermediária. Esta característica produz o efeito de uma "teia de aranha" quando o impacto não é totalmente suficiente para furar o vidro.</h1>
      <div className="p-8 sm:p-10 lg:flex-auto">
      <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
            >
              {includedFeatures.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <ClipboardDocumentCheckIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
            </div>
          </div>
    </div>
    </Boundary>
  );
}
