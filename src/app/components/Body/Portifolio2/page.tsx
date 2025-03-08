"use client";

import React from "react";
import imagem4 from "../../../../images/thrd/1.png";
import imagem5 from "../../../../images/thrd/2.png";
import imagem6 from "../../../../images/thrd/3.png";
import Titulo_projeto from "../../titulo_projeto/Titulo_projeto"


const PortfolioComponent = () => {
  return (
    <div>
      <div className="relative w-full">
            <Titulo_projeto text="✨ Centro Oncológico Jardim" className="pt-4"/>
        </div>
      <div className="flex min-h-screen w-full bg-background p-10 gap-6">
        
        <div className="w-1/3 flex flex-col justify-center gap-4 mb-4">
          <h2 className="text-black text-2xl font-bold"></h2>
          <p className="text-black text-lg text-justify font-nunito text-indent">
  Localizado no bairro Jardim Victória, em Campo Mourão, o projeto tem como foco a criação de um ambiente acolhedor e tranquilo para pacientes com doenças delicadas.
</p>
<p className="text-black text-lg text-justify font-nunito text-indent">
  A escolha do terreno foi estratégica, considerando seu crescimento potencial e a proximidade com um hospital. A edificação foi projetada com ênfase na integração com a vegetação local, criando um espaço que transmite leveza e tranquilidade.
</p>
<p className="text-black text-lg text-justify font-nunito text-indent">
  A proposta inclui uma praça interna com formas orgânicas, vegetação abundante e bancos, promovendo um ambiente de convivência e descompressão.
</p>
<p className="text-black text-lg text-justify font-nunito text-indent">
  Árvores foram estrategicamente posicionadas ao longo da edificação, reforçando a conexão com a natureza e proporcionando um espaço que visa oferecer conforto e acolhimento, sem causar sensação de sufocamento aos pacientes.
</p>

        </div>

        <div className="flex flex-1 flex-col min-h-[calc(100vh-10rem)]">
          <div className="flex gap-6">
            <div className="w-1/2 rounded-2xl overflow-hidden border-2 border-gray-500">
              <img
                src={imagem4.src}
                alt="Imagem 4"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-1/2 rounded-2xl overflow-hidden border-2  border-gray-500">
              <img
                src={imagem5.src}
                alt="Imagem 5"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden border-2 mt-6 border-gray-500">
            <img
              src={imagem6.src}
              alt="Imagem 6"
              className="w-full h-auto mb-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioComponent;
