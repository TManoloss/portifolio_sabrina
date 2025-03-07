"use client";

import React from "react";
import imagem7 from  "../../../../images/second/2.png";
import imagem8 from  "../../../../images/second/1.png";
import imagem9 from  "../../../../images/second/3.png";

const PortfolioComponent = () => {
  return (
    <div className="flex h-screen w-full bg-background p-10 gap-6">
      <div className="flex flex-1 flex-col gap-6">
        <div className="rounded-2xl overflow-hidden mb-4 border-2 border-gray-500">
          <img
            src={imagem7.src}
            alt="Imagem 7"
            className="w-full object-cover"
          />
        </div>
        <div className="flex gap-6">
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
        <h2 className="text-black text-2xl font-bold">Lorem Ipsum</h2>
        <p className="text-black text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio. Praesent libero. Sed cursus ante dapibus diam.
        </p>
      </div>
    </div>
  );
};

export default PortfolioComponent;
