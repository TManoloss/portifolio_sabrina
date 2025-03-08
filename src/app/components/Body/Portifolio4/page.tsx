"use client";

import React from "react";
import imagem1 from "../../../../images/Fourt/1.png";
import imagem2 from "../../../../images/Fourt/2.png";
import imagem3 from "../../../../images/Fourt/3.png";
import Titulo_projeto from "../../titulo_projeto/page"

const MasterComponent = () => {
  return (
    <div>
      <div className="relative w-full">
            <Titulo_projeto text="✨ Adega Baco" className="pt-4"/>
        </div>
      <div className="flex h-screen w-full bg-background p-10 gap-6">
        {/* Box esquerdo grande (Imagem) */}
        <div className="w-1/3 rounded-2xl overflow-hidden border-2 border-gray-500">
          <img
            src={imagem1.src}
            alt="Imagem esquerda"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col flex-1 gap-6">
          {/* Box superior horizontal (Imagem mais larga) */}
          
          {/* Linhas no meio (Textos e Imagem direita) */}
          <div className="flex flex-row gap-4">
            <div className="flex flex-col gap-4 w-3/4">
              <p className="flex-1 text-black text-lg font-nunito text-justify text-indent">
              O projeto de adega destaca o vinho como uma joia rara, comparando-o a uma pedra preciosa. Utilizamos revestimentos de pedras naturais nas cores rosa, branco e vermelho, MDF com textura de madeira, galhos secos e detalhes em metal dourado, criando um ambiente sofisticado e acolhedor, como uma mina repleta de preciosidades.
              </p>
            </div>
            {/* Box direito menor (Imagem abaixada) */}
            <div className="w-full rounded-2xl overflow-hidden mt-6 border-2 border-gray-500">
              <img
                src={imagem3.src}
                alt="Imagem direita"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="h-full w-full rounded-2xl overflow-hidden border-2 border-gray-500">
            <img
              src={imagem2.src}
              alt="Imagem superior"
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default MasterComponent;
