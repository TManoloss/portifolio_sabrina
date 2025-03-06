"use client";

import React from "react";
import imagem1 from "../../../../images/1.png";
import imagem2 from "../../../../images/2.png";
import imagem3 from "../../../../images/3.png";

const MasterComponent = () => {
  return (
    <div className="flex h-screen w-full bg-background p-10 gap-6">
      {/* Box esquerdo grande (Imagem) */}
      <div className="w-1/3 rounded-2xl overflow-hidden">
        <img
          src={imagem1.src}
          alt="Imagem esquerda"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col flex-1 gap-6">
        {/* Box superior horizontal (Imagem mais larga) */}
        <div className="h-60 -mr-6 rounded-2xl overflow-hidden">
          <img
            src={imagem2.src}
            alt="Imagem superior"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Linhas no meio (Textos e Imagem direita) */}
        <div className="flex flex-row gap-4">
          <div className="flex flex-col gap-4 w-3/4">
            <p className="flex-1 text-black text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae maximus mi, in facilisis magna. 
            Nullam eu orci non est condimentum tristique nec eget eros. Aliquam fringilla dolor neque, et elementum 
            eros malesuada sed. Quisque congue nulla lorem, at efficitur urna venenatis quis. Sed pretium arcu ac 
            elementum finibus. In hac habitasse platea dictumst. Nam tristique euismod semper. Etiam eu nisl quis 
            leo tempor dignissim. Praesent molestie sit amet ex a faucibus. Vestibulum ante ipsum primis in faucibus 
                       </p>
          </div>
          {/* Box direito menor (Imagem abaixada) */}
          <div className="w-full rounded-2xl overflow-hidden mt-6">
            <img
              src={imagem3.src}
              alt="Imagem direita"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MasterComponent;
