/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import NextImage from '../ui/NextImage';
import { useState } from 'react';

import { motion } from "framer-motion";
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import Box from '../../../public/box-evidence-720x480-3.png';
import Pelicula from '../../../public/Espresso.png';
import Laminado from '../../../public/laminated-glass.webp';
import Vidro from '../../../public/spader.png';

const Categoria = [
  {
    "id": 1,
    name: "Spider",
    description: "O sistema spider glass é formado por aranha e rótula - peças pontuais e articuladas, cujo objetivo é fixar os vidros a uma estrutura. As rótulas podem ser fixas ou flexíveis e são fixadas ao vidro por meio de parafusos especiais. Tenha em mente que o spider surgiu com o objetivo de facilitar o trabalho diário, garantindo mais rapidez e eficiência na fixação dos vidros.",
    image: Vidro,
    btnText: "Orçmento",
  },
  {
    "id": 2,
    name: "Vidro Laminado",
    description: "O vidro laminado, apesar de também garantir segurança, passa por um processo diferente na sua fabricação. Este tipo de vidro é composto por duas – ou até mais – placas de vidro que são unidas por uma camada intermediária de Polivinil Butiral (PVB). Este processo garante que, caso o material se danifique, os estilhaços permaneçam colados na película e não se soltem.",
    span: "A película de PVB também filtra até 99,6% dos raios ultravioleta, que são responsáveis por descolorir móveis, tecidos e objetos. Além disso, o vidro laminado também auxilia na redução de ruídos, diminuindo as vibrações sonoras, por meio da camada de polivinil butiral.",
    image: Laminado,
    btnText: "especificações técnicas",
  },
  {
    "id": 3,
    name: "Guarda-corpo",
    description: "Você sabia que não é permitido utilizar qualquer tipo de vidro para a construção de guarda-corpos? Para quem está construindo, é de suma importância saber que esse item deve atender a algumas normas técnicas para proporcionar maior segurança. Infelizmente, ainda há casos em que as pessoas não observam essas regras e acabam deixando que o preço mais baixo seja um elemento de definição na escolha do vidro.",
    image: Pelicula,
    btnText: "Saiba mais ou solicite um orçamento",
  },
  {
    "id": 4,
    name: "Box de vidro Elegance",
    description: "O box de vidro frontal é o mais vendido hoje em dia, sua grande variedade de cores e modelos, a Glazing Design têm diversos para te oferecer!",
    span: "Lembrando que ao pedir um orçamento, e se tiver dúvidas da cor do vidro do box, pode nos enviar uma foto do banheiro onde será instalado e daremos algumas dicas 😉",
    image: Box,
    btnText: "especificações técnicas",
  }
]

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import Button from '../SliderProduto/Button';
export default function CategoriaSlider() {
  const [loading, setLoading] = useState(true);
  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={30}
      slidesPerView={1}
      navigation={true}
      breakpoints={{
700: {
  slidesPerView: 1,
},      
    }}
    className="demoslider drop-shadow-xl min-h-[660px]"
      >
      {Categoria.map((Categoria, id) => {
      return (
        <>
            <SwiperSlide className='w-full lg:h-[755px] rounded-md bg-slate-300 px-2 shadow-md flex flex-col justify-end sm:pb-16 py-32 lg:pb-[110px]' key={id}>
            <div className="container flex items-start justify-between flex-col-reverse lg:flex-row">
            <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-7xl px-6 lg:px-8"
        >
            <div className='mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10'>
                  <NextImage
                    src={Categoria.image}
                    alt='codeBucka'
                    className='w-[600px] h-[300px] lg:w-[600px] lg:h-[404px] mb-6 lg:mb-0 shadow-2xl rounded-lg object-cover'
                    placeholder='blur'
                    blurDataURL='data:image/png;base64,[IMAGE_CODE_FROM_PNG_PIXEL]'
                    width={420}
                    height={404}
                    sizes='100vw'
                  />
            <div className='relative -mt-[6.75rem] lg:h-auto overflow-hidden pb-16 pt-[5.75rem]'>
            <div className='flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px] text-4xl font-extrabold tracking-tight text-slate-900 sm:text-7xl xl:max-w-[43.5rem]'>
              {Categoria.name}
            </div>
            <div className='h-[3px] w-[160px] rounded bg-green-600'></div>
              <div className='col-start-1 row-start-3 mt-4 max-w-2xl text-lg text-slate-700'>
                {Categoria.description}
              </div>
              <code className="font-montserrt font-semibold">{Categoria.span}</code>
              <div className='py-4 sm:mb-4'>
                <Button link="#" text={Categoria.btnText} />
                </div>
            </div>
            </div>
            </motion.div>
            </div>
            </SwiperSlide>
        </>
      )
      })
    }
    </Swiper>
  );
}