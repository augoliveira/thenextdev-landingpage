import { AnimatedText } from "../AnimatedText";
import PreviaSlider from "./PreviaSlider";

export default function Categoria() {
  return (
    <section className="min-h-[680px] bg-slate-200 p-8">
      <div className="container mx-auto lg:flex-row">
        <div className="mb-8">
          <AnimatedText text="Nossos Projetos" />
        </div>
        <PreviaSlider />
      </div>
    </section>
  );
}
