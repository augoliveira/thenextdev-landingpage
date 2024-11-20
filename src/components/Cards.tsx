"use client";

import { Article, CreditCard, Lock, Truck } from "phosphor-react";

export function Card() {
  return (
    <div className="my-10 flex flex-col items-center justify-center gap-7 md:justify-around lg:flex-row">
      <div className="flex items-center gap-3">
        <div className="rounded-full border-2 border-green-500 p-2">
          <CreditCard className="text-green-400" size={48} />
        </div>
        <div className="font-secondary flex flex-col items-start justify-center">
          <h1 className="text-xl font-semibold text-gray-900">Parcelamento</h1>
          <span className="text-base font-normal text-gray-400">
            Em até 12x nos Cartões
          </span>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="rounded-full border-2 border-green-500 p-2">
          <Article className="text-green-400" weight="fill" size={48} />
        </div>
        <div className="font-secondary flex flex-col items-start justify-center">
          <h1 className="text-xl font-semibold text-gray-900">Boleto e Pix</h1>
          <span className="text-base font-normal text-gray-400">
            com 10% de Desconto
          </span>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="rounded-full border-2 border-green-500 p-2">
          <Truck className="text-green-400" size={48} />
        </div>
        <div className="font-secondary flex flex-col items-start justify-center">
          <h1 className="text-xl font-semibold text-gray-900">
            Entrega garantida
          </h1>
          <span className="text-base font-normal text-gray-400">
            em todo o Brasil.
          </span>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="rounded-full border-2 border-green-500 p-2">
          <Lock className="text-green-400" weight="fill" size={48} />
        </div>
        <div className="font-secondary flex flex-col items-start justify-center">
          <h1 className="text-xl font-semibold text-gray-900">Compra Segura</h1>
          <span className="text-base font-normal text-gray-400">
            Seus dados protegidos
          </span>
        </div>
      </div>
    </div>
  );
}
