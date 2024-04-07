import { AnimatedText } from "../AnimatedText";
import CategoriaSlider from "./CategoriaSlider";


export default function Categoria() {
  return (
    <section id="Categoria" className="min-h-[680px] bg-slate-200 p-8"> 
    <div className="container mx-auto lg:flex-row">
    <AnimatedText text='PRODUTOS' />
      <CategoriaSlider />
      </div>   
    </section>
  );
}