import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import NextImage from './../../../components/ui/NextImage';
import Img from '../../../../public/bg-esquadria.jpg'

export default function CoberturaDetalhe() {
  return (
    <div className='max-w-[1400px] h-[500px] bg-clr_bg1 mx-auto my-20 pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4'>
      <div className='lg:top-20 relative lg:col-span-1 col-span-2'>
        <h3 className='col-start-1 row-start-2 mt-4 max-w-[36rem] text-4xl font-extrabold tracking-tight text-slate-900 sm:text-7xl xl:max-w-[43.5rem]'>Cobertura de vidro</h3>
        <div class="absolute -inset-x-8 bottom-0 h-px bg-slate-900/15 [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
        <p className='col-start-1 row-start-3 mt-4 max-w-lg text-lg text-slate-700'>
        Cobertura de vidro: Vantagens e onde utilizar A cobertura de vidro proporciona vantagens estéticas e funcionais para os ambientes.
        </p>
      </div>

      <div className='grid grid-cols-2 col-span-2 gap-2 bg-'>
        <NextImage
        className='object-cover w-full h-full'
          src={Img}
          alt='/'
        />
        <NextImage
        className='row-span-2 object-cover w-full h-full'
          src={Img}
          alt='/'
        />
        <NextImage
        className='object-cover w-full h-full'
          src={Img}
          alt='/'
        />
      </div>
    </div>
  )
}