import { Button } from "./ui/button";

export const Cta = () => {
  return (
    <section
      id="cta"
      className="my-24 bg-hero-image bg-cover bg-fixed bg-center bg-no-repeat px-32 py-16 sm:my-32"
    >
      <div className="container place-items-center lg:grid lg:grid-cols-2">
        <div className="lg:col-start-1">
          <h2 className="text-3xl font-bold text-green-500 md:text-4xl">
            Box para
            <span className="bg-gradient-to-b from-primary/60 to-primary bg-clip-text text-transparent">
              {" "}
              Banheiro{" "}
            </span>
            de vidro temperado
          </h2>
          <p className="mb-8 mt-4 text-xl text-muted-foreground lg:mb-0">
            Os vidros fornecidos são temperados com 8mm de espessura, podendo
            ser com ou sem Película de Segurança, com várias opções de cores e
            texturas. Já o Kit para instalação, trabalhamos diversas opções em
            Alumínio ou Inox. Confira todas opções na nossa galeria de fotos!
          </p>
        </div>

        <div className="space-y-4 lg:col-start-2">
          <Button className="w-full md:mr-4 md:w-auto">Projetos</Button>
          <Button variant="outline" className="w-full md:w-auto">
            Orçamento
          </Button>
        </div>
      </div>
    </section>
  );
};
