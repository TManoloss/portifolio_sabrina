"use client";

import React from "react";
import imagem1 from "../../../../images/1.png";
import imagem2 from "../../../../images/2.png";
import imagem3 from "../../../../images/3.png";
import Titulo from "../../Titulo/Titulo"
import Titulo_projeto from "../../titulo_projeto/Titulo_projeto"

const MasterComponent = () => {
  return (
    
    <div className="">
      <div className="flex justify-center items-center">
        <div className="relative w-full flex justify-center ">
            <Titulo texto="Portfólio" className="mb-4 "/>
        </div>
      </div>
        <div className="relative w-full pb-10">
            <Titulo_projeto text="✨ Spa" className="pt-4 "/>
        </div>
      <div className="flex h-screen w-full bg-background py-0 px-10 pb-4 gap-6">
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
          <div className="h-60 w-full rounded-2xl overflow-hidden border-2 border-gray-500">
            <img
              src={imagem2.src}
              alt="Imagem superior"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Linhas no meio (Textos e Imagem direita) */}
          <div className="flex flex-row gap-4">
            <div className="flex flex-col gap-4 w-3/4">
            <p className="flex-1 text-black text-lg font-nunito text-justify text-indent">
  Criamos um jardim sensorial para o evento CasaCor, com foco no tato, utilizando lavanda, pedras, madeira, água e grama.
</p>
<p className="flex-1 text-black text-lg font-nunito text-justify text-indent">
  O conceito de "jardim secreto" foi combinado com arquitetura clássica, incluindo um gazebo e um espelho d'água orgânico.
</p>
<p className="flex-1 text-black text-lg font-nunito text-justify text-indent">
  A banheira foi colocada no centro de um gazebo revestido com chukum, criando um ambiente único.
</p>



            </div>
            {/* Box direito menor (Imagem abaixada) */}
            <div className="w-full h-full rounded-2xl overflow-hidden mt-6 border-2 border-gray-500">
              <img
                src={imagem3.src}
                alt="Imagem direita"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MasterComponent;
