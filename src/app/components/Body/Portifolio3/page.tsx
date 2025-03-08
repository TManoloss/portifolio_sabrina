"use client";

import React from "react";
import imagem7 from  "../../../../images/second/2.png";
import imagem8 from  "../../../../images/second/1.png";
import imagem9 from  "../../../../images/second/3.png";
import Titulo_projeto from "../../titulo_projeto/Titulo_projeto"


const PortfolioComponent = () => {
  return (
    <div>
      <div className="relative w-full">
            <Titulo_projeto text="✨ Igreja" className="pt-4"/>
        </div>
      <div className="flex h-screen w-full bg-background p-10 gap-6">
        <div className="flex flex-1 flex-col ">
          <div className="rounded-2xl overflow-hidden mb-4 border-2 border-gray-500">
            <img
              src={imagem7.src}
              alt="Imagem 7"
              className="w-full object-cover"
            />
          </div>
          <div className="flex gap-4">
            <div className="w-1/2  rounded-2xl overflow-hidden border-2 border-gray-500">
              <img
                src={imagem8.src}
                alt="Imagem 8"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-1/2 rounded-2xl overflow-hidden border-2 border-gray-500">
              <img
                src={imagem9.src}
                alt="Imagem 9"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="w-1/3 flex flex-col justify-center gap-4 mt-4">
          <h2 className="text-black text-2xl font-bold"></h2>
          <p className="text-black text-lg font-nunito text-indent">
  O conceito do projeto da igreja foca em criar uma edificação transparente e única, distinta das igrejas tradicionais com a arquitetura "caixa". Utilizamos ferro e vidro para criar uma estrutura leve, capaz de vencer grandes vãos livres, ideal para cerimônias de casamento.
</p>
<p className="text-black text-lg font-nunito text-indent">
  Optamos pelo estilo eclético, que mistura influências de diferentes períodos arquitetônicos. Incorporamos elementos góticos, como rosáceas e um pé-direito alto, conferindo monumentalidade ao edifício. O uso de ferro e vidro proporciona uma estética romântica, criando a impressão de uma "igreja de cristal".
</p>
<p className="text-black text-lg font-nunito text-indent">
  O projeto oferece uma nova visão de igreja, combinando grandiosidade com leveza e delicadeza, criando um espaço único e inspirador.
</p>



        </div>
      </div>
    </div>
  );
};

export default PortfolioComponent;
