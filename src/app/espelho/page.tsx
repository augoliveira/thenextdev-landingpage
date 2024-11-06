import { ExternalLink } from '@/components/ui/external-link';
import { PageIntroduction } from './page-introduction';
import { AnimatedText } from './AnimatedText';
import Features from "./components/Features";

export default function Page() {
  return (
    <div className="prose prose-sm prose-invert max-w-none">
      <PageIntroduction />
      <div>
          <AnimatedText text='Produtos' />
        </div>
        
        <p className="text-gray-400 text-center max-w-[640px] my-6 text-lg leading-5 sm:text-base">
        Soluções em Esquadrias de Alumínio
        Fechamento para Condomínios em Alumínio e Vidro.
        </p>

      <Features />

      <div className="flex gap-2">
        <ExternalLink href="https://nextjs.org/docs/app/building-your-application/data-fetching/fetching#static-data-fetching">
          Docs
        </ExternalLink>
        <ExternalLink href="https://github.com/vercel/app-playground/tree/main/app/ssg">
          Code
        </ExternalLink>
      </div>
    </div>
  );
}