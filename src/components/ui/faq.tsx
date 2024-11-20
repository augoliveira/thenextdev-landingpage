"use client";

import Link from "next/link";

import MaxWidthWrapper from "@/components/shared/max-width-wrapper";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Box para banheiro com sistema com roldanas aparentes",
    answer:
      "O Box de Vidro Com Roldanas Aparentes com acabamento em aço inox é um dos modelos mais procurados atualmente por conseguir agregar alta resistência com beleza e sofisticação."
  },
  {
    title:
      "Escolha o melhor modelo de Box Para Banheiro para pequenos espaços:",
    question: "Box para Banheiro de Abrir",
    answer: `O Box para banheiro de Abrir é um modelo prático, mais indicado para pequenos ambientes, pois permite maior comodidade na abertura da porta e na passagem entre o seu box de vidro para banheiro e os outros móveis e louças sanitárias. Caso seu banheiro tenha um espaço pequeno e reduzido. O modelo ideal é o Box Marine com porta de abrir, uma opção é instalar a dobradiça com a abertura para dentro do box, desde que haja espaço útil entre a porta e as paredes internas. ou box do tipo Camarão Articulado onde as duas folhas recolhem.`
  },
  {
    question: "Box Articulado – Box de Vidro Articulado Arty Rollit",
    answer: `O Box de Vidro Rollit Arty Articulado, box do tipo camarão, foi projetado para atender pequenos espaços. Ou seja, box para banheiros menores, garantindo a abertura total do vão.`,

    paragrafo1: `O Box para banheiros menores articulado do tipo camarão, oferece praticidade e durabilidade em um produto resistente, fabricado em aço inox 304, material inoxidável com qualidade inigualável e preços competitivos. Instalados e comercializados com vidro temperado de 08 mm.`,

    paragrafo2: `Um Produto com toque de requinte, beleza e nobreza. Para proporcionar mais praticidade e comodidade aos clientes Glazing Desing, oferecemos o serviço de Instalação e Montagem com hora marcada para todos os tipos de box de banheiro articulados.`,

    paragrafo3: `A Glazing Desing, tem uma grande parceria com as melhores Indústrias do mercado de box para banheiro articulado, Industrias Rollit, Blindex, Elegance, Idéia Glass entre outras, disponibilizando para você diversos modelos de box articulado, com acabamento em aço inox.

    E para a escolha do modelo ideal, nossos especialistas irão avaliar o mais adequado ao seu tipo de banheiro, decoração e espaço disponível, mas levando em consideração também seu gosto pessoal.`
  },
  {
    title:
      "Escolha o Modelo ideal de Box para Banheiro de Canto para sua Residência:",
    question: "Box Para Banheiro de Canto",
    answer: `O box para banheiro de canto, também chamado de box de vidro em ângulo ou em “L” é uma ótima opção para banheiros compactos, pois otimiza o espaço cercando a área de banho com folhas de vidro e as próprias paredes do banheiro. Mas também podem ser instalados em banheiros amplos, isolando o chuveiro do restante do ambiente formando uma divisória de vidro para banheiro aconchegante.`,

    contato: `Consulte já sobre box de Canto com medidas e projetos exclusivo. Sua Casa Merece o Melhor box para banheiro.`
  }
];

export default function FAQ() {
  return (
    <div className="border-t border-gray-200 bg-white/10 py-20 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur">
      <MaxWidthWrapper className="">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          <div className="p-3">
            <h1 className="font-display mt-5 text-4xl font-extrabold leading-[1.15] text-white sm:text-6xl sm:leading-[1.15]">
              DÚVIDAS
              <br />
              <span className="bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent sm:text-5xl sm:leading-[1.15]">
                FREQUENTES
              </span>
            </h1>
          </div>
          <Accordion
            type="single"
            collapsible
            className="col-span-2 px-3 sm:px-0"
          >
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={idx.toString()}>
                <AccordionTrigger className="py-2">
                  <h2 className="text-left text-lg">{faq.question}</h2>
                </AccordionTrigger>
                <AccordionContent>
                  <h3 className="text-md font-extrabold text-slate-900 dark:text-slate-200">
                    {faq.title}
                  </h3>
                  <div className="py-3">{faq.answer}</div>
                  <div className="py-3">{faq.paragrafo1}</div>
                  <div className="py-3">{faq.paragrafo2}</div>
                  <div className="py-3">{faq.paragrafo3}</div>
                  <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                    <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                      {faq.contato}
                      <Link href="#" className="font-semibold text-indigo-600">
                        <span className="absolute inset-0" aria-hidden="true" />
                        Whatsapp <span aria-hidden="true">&rarr;</span>
                      </Link>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
