import React from "react"
import Image from "next/image"
import { BsArrowRight } from "react-icons/bs"

function OurGoals() {
  return (
    <div className="h-full flex flex-col items-center py-8">
      <div className="container-wrapper flex flex-col">
        <h2 className="text-[#FF9100] text-xl mb-2">Nossos objetivos</h2>
        <h3 className="text-[#0E0E5E] text-3xl mb-12 leading-10">
          Consulte nossos especialistas sobre o seu projeto
          <span className="font-bold "> gratuitamente.</span>
        </h3>
        <p className="text-[#21262C] opacity-70 text-lg mb-8 leading-7">
          Um processo de desenvolvimento bem estruturado é crucial para criar
          produtos que as adoram. CEOS tem um processo de desenvolvimento
          rigoroso que inclui o desenvloviemnto dirigido por testes.
        </p>
        <p className="text-[#21262C] opacity-70 leading-7 text-lg">
          Desenvolvemos com sucesso muitos projetos,incluindoblogs, plataformas
          de publicação e gestão de talentos, sites de comércio eletrônico,
          agências de viagens, um aplicativo da web compatível com HIPAA e uma
          plataforma de concurso sem fins lucrativos.
        </p>
        <button className="my-12 text-white shadow-lg px-4 py-3 bg-[#FF9100] rounded-md transition-all hover:scale-105">
          <a className="flex items-center justify-between" href="#" rel="">
            <span>Inicie um projeto conosco</span>{" "}
            <BsArrowRight className="text-3xl" />
          </a>
        </button>
      </div>
      <Image src="/OurGoals/OurGoals.svg" alt="" width={400} height={200} />
    </div>
  )
}

export default OurGoals
