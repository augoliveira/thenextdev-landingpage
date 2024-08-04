'use client';
import { track } from '@vercel/analytics';

import { buttonVariants } from '@/components/ui/button';

import { cn } from '@/lib/utils';

import { ModeToggle } from './mode-toggle';

function IntroSection() {
  return (
    <section id='intro' className='space-y-6 py-8 md:py-12 lg:py-32 relative'>
      <svg
        viewBox='0 0 1024 1024'
        className='absolute left-1/3 top-full md:left-1/2 md:top-1/2 -z-10 h-[16rem] w-[16rem] md:h-[54rem] md:w-[54rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0'
        aria-hidden='true'
      >
        <circle
          cx='512'
          cy='512'
          r='512'
          fill='url(#759c1415-0410-454c-8f7c-9a820de03641)'
          fillOpacity='0.7'
        />
        <defs>
          <radialGradient id='759c1415-0410-454c-8f7c-9a820de03641'>
            <stop stopColor='#74C28A' />
            <stop offset='1' stopColor='#127D30' />
          </radialGradient>
        </defs>
      </svg>
      <div className='container flex max-w-[64rem] flex-col items-center font-sans text-center gap-4'>
        <span className='rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium flex items-center'>
          Glazing Design.
          <ModeToggle />
        </span>
        <h1 className='font-heading text-4xl md:text-6xl lg:text-7xl'>
        Vidros e espelhos
          <br />
          Para todas as <span className='text-primary'>necessidades</span>
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
