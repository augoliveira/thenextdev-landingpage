'use client';
import { track } from '@vercel/analytics';

import { buttonVariants } from '@/components/ui/button';

import { cn } from '@/lib/utils';

function IntroSection() {
  return (
    <section id='intro' className='space-y-6 py-8 md:py-12 lg:py-32 relative'>
      <div className='container flex max-w-[64rem] flex-col items-center font-sans text-center gap-4'>
        <h1 className='text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center dark:text-slate-300'>
        Vidros e espelhos
          <br />
          Para todas as <span className='text-clr_ratting'>necessidades</span>
        </h1>
        <p className='max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8'>
        Conheça nossa linha completa de vidros e espelhos para a sua obra.
        </p>
        <div className='space-x-4'>
          <a
            href='#investment'
            className='bg-primary py-2 px-4 text-md text-white rounded shadow-lg font-bold'
            onClick={() => {
              track('enrollment', { location: 'intro' });
            }}
          >
            CONHEÇA OS PRODUTOS 
          </a>
          <a
            href='#feature'
            className={cn(buttonVariants({ variant: 'outline', size: 'lg' }))}
            onClick={() => {
              track('features');
            }}
          >
            SOLICITAR ORÇAMENTO 
          </a>
        </div>
      </div>
    </section>
  );
}

export default IntroSection;
