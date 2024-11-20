import {
  CheckBadgeIcon,
  ChatBubbleBottomCenterTextIcon
} from "@heroicons/react/24/outline";

export default function Marketing() {
  return (
    <div className="relative isolate bg-gray-900 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-4xl font-semibold tracking-tight text-white">
              Bem-vindo à nossa vidraçaria,
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              onde a qualidade e a confiança se encontram para transformar seus
              projetos em realidade. Com anos de experiência no mercado,
              oferecemos soluções completas em vidro para todos os tipos de
              ambientes, seja para sua residência, comércio ou indústria. Nosso
              compromisso é entregar produtos de alto padrão, com um atendimento
              personalizado e profissionalismo, garantindo durabilidade,
              segurança e estética para o seu espaço.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <CheckBadgeIcon
                  aria-hidden="true"
                  className="size-8 text-white"
                />
              </div>
              <div className="mt-4 text-base font-semibold text-white">
                Elegância e Estilo
              </div>
              <p className="mt-2 text-base/7 text-gray-400">
                Non laboris consequat cupidatat laborum magna. Eiusmod non irure
                cupidatat duis commodo amet.
              </p>
            </div>
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <ChatBubbleBottomCenterTextIcon
                  aria-hidden="true"
                  className="size-8 text-white"
                />
              </div>
              <div className="mt-4 text-base font-semibold text-white">
                Valorização da Estética
              </div>
              <p className="mt-2 text-base/7 text-gray-400">
                Officia excepteur ullamco ut sint duis proident non adipisicing.
                Voluptate incididunt anim.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
          }}
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
        />
      </div>
    </div>
  );
}
