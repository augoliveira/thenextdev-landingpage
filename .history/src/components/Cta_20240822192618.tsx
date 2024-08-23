import { Button } from "./ui/button";

export const Cta = () => {
  return (
    <section
      id="cta"
      className="bg-fixed bg-hero-image bg-cover bg-center bg-no-repeat py-16 px-32 my-24 sm:my-32"
    >
      <div className="container lg:grid lg:grid-cols-2 place-items-center">
        <div className="lg:col-start-1">
          <h2 className="text-3xl md:text-4xl font-bold text-green-500">
          Box para
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              {" "}
              Banheiro {" "}
            </span>
            de vidro temperado
          </h2>
          <p className="text-muted-foreground text-xl mt-4 mb-8 lg:mb-0">
          Os vidros fornecidos são temperados com 8mm de espessura, podendo ser com ou sem Película de Segurança, com várias opções de cores e texturas.
Já o Kit para instalação, trabalhamos diversas opções em Alumínio ou Inox. Confira todas opções na nossa galeria de fotos!
          </p>
        </div>

        <div className="space-y-4 lg:col-start-2">
          <Button className="w-full md:mr-4 md:w-auto">Projetos</Button>
          <Button
            variant="outline"
            className="w-full md:w-auto"
          >
            Orçamento
          </Button>
        </div>
      </div>
    </section>
  );
};