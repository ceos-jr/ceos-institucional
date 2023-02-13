import React from "react"
import Image from "next/image"

function OurGoals() {
  return (
    <div className="flex items-center ml-5 mx-5">
      <div className="">
        <h2 className="text-[#FF9100] text-xs">Nossos objetivos</h2>
        <h3 className="text-[#0E0E5E] text-xl">
          Consulte nossos especialistas sobre o seu projeto
          <h3 className="font-bold ">gratuitamente.</h3>
        </h3>
        <p className="text-[#21262C] opacity-70 text-xs leading-5">
          Um processo de desenvolvimento bem estruturado é crucial para criar
          produtos que as adoram. CEOS tem um processo de desenvolvimento
          rigoroso que inclui o desenvloviemnto dirigido por testes.
        </p>
        <p className="text-[#21262C] opacity-70 text-xs leading-5">
          Desenvolvemos com sucesso muitos projetos,incluindoblogs, plataformas
          de publicação e gestão de talentos, sites de comércio eletrônico,
          agências de viagens, um aplicativo da web compatível com HIPAA e uma
          plataforma de concurso sem fins lucrativos.
        </p>
        <button className="translate-x-1 mt-6 text-white shadow-lg px-4 py-2 bg-[#FF9100] rounded transition-all hover:scale-105">
          <a href="#" rel="">
            Inicie um projeto conosco ➔
          </a>
        </button>
      </div>
      <Image src="/OurGoals/OurGoals.svg" alt="" width={400} height={200} />
    </div>
  )
}

export default OurGoals
