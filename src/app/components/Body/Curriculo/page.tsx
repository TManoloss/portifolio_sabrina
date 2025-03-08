"use client";

import React from "react";
import Titulo from "../../Titulo/Titulo";

const CurriculoTab = () => {
  const experiencias = [
    {
      titulo: "Épura Arquitetura",
      resumo:
        "Auxílio em detalhamentos, modelagem, renderização e desenhos técnicos.",
      local: "Curitiba, PR",
      entrada: "Mar/2024",
      saida: "Atual",
    },
    {
      titulo: "Marcenaria Experienza",
      resumo:
        "Modelagem de móveis, medições e desenvolvimento de projetos de interiores.",
      local: "Curitiba, PR",
      entrada: "Ago/2023",
      saida: "Abr/2024",
    },
    {
      titulo: "Construplay",
      resumo:
        "Desenhos técnicos, conferência de projetos e acompanhamento de obras.",
      local: "Campo Mourão, PR",
      entrada: "Fev/2023",
      saida: "Jul/2023",
    },
    {
      titulo: "Engenharia Mariot",
      resumo: "Elaboração de projetos técnicos em AutoCAD.",
      local: "Campo Mourão, PR",
      entrada: "Ago/2022",
      saida: "Jan/2023",
    },
  ];

  const formacoes = [
    "Bacharelado em Arquitetura e Urbanismo - Centro Universitário Integrado (2021 - Atual)",
  ];

  const softwares = ["AutoCAD", "SketchUp", "V-Ray", "Revit", "Layout"];

  return (
    <div className="pb-20">
        <div>
            <div className="relative w-full flex justify-center ">
                <Titulo texto="Portfólio" className="mb-4 "/>
            </div>
        </div>
        <div className="p-6 bg-background w-full max-w-3xl mx-auto text-xs md:text-sm">
        {/* TÍTULO PORTFÓLIO */}
        

        {/* EXPERIÊNCIA - QUADRADOS */}
        <div className="mb-6 pb-7">
            <h3 className="text-md md:text-2xl font-semibold mb-3">
            ✨ EXPERIÊNCIA 
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {experiencias.map((exp, index) => (
                <div
                key={index}
                className="p-4 border border-gray-300 rounded-lg shadow-sm font-nunito"
                >
                <h4 className="font-bold">{exp.titulo}</h4>
                <p>{exp.resumo}</p>
                <p className="text-gray-500">
                    {exp.local} | {exp.entrada} - {exp.saida}
                </p>
                </div>
            ))}
            </div>
        </div>

        {/* FORMAÇÃO */}
        <div className="mb-6 pb-7">
            <h3 className="text-md md:text-2xl font-semibold mb-3"> ✨ FORMAÇÃO</h3>
            <ul className="list-disc list-inside font-nunito">
            {formacoes.map((formacao, index) => (
                <li key={index}>{formacao}</li>
            ))}
            </ul>
        </div>

        {/* SOFTWARES */}
        <div>
            <h3 className="text-md md:text-2xl font-semibold mb-3"> ✨ SOFTWARES</h3>
            <ul className="flex flex-wrap gap-2 font-nunito">
            {softwares.map((software, index) => (
                <li
                key={index}
                className="px-3 py-1 bg-gray-200 rounded text-gray-800"
                >
                {software}
                </li>
            ))}
            </ul>
        </div>
        </div>
    </div>
  );
};

export default CurriculoTab;
