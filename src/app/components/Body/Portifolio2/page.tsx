"use client";

import React from "react";
import imagem4 from "../../../../images/thrd/1.png";
import imagem5 from "../../../../images/thrd/2.png";
import imagem6 from "../../../../images/thrd/3.png";

const PortfolioComponent = () => {
  return (
    <div className="flex min-h-screen w-full bg-background p-10 gap-6">
      <div className="w-1/3 flex flex-col justify-center gap-4 mb-4">
        <h2 className="text-black text-2xl font-bold">Lorem Ipsum</h2>
        <p className="text-black text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio. Praesent libero. Sed cursus ante dapibus diam.
        </p>
      </div>

      <div className="flex flex-1 flex-col gap-6 min-h-[calc(100vh-10rem)]">
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
  );
};

export default PortfolioComponent;
