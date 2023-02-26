import React from "react"
import Image from "next/image"
import ButtonWithArrow from "./layout/ButtonWithArrow"

function OurGoals() {
  return (
    <div className="flex flex-col items-center py-8 h-full">
      <div className="flex flex-col lg:flex-row container-wrapper">
        <div>
          <h2 className="mb-2 text-xl text-accent">Nossos objetivos</h2>
          <h1 className="mb-12 text-3xl font-medium leading-10 lg:mb-8 text-secondary">
            Consulte nossos especialistas sobre o seu projeto
            <span className="font-extrabold"> gratuitamente.</span>
          </h1>
          <p className="mb-8 text-base leading-7 lg:mb-4 text-description/70">
            Um processo de desenvolvimento bem estruturado é crucial para criar
            produtos que as adoram. CEOS tem um processo de desenvolvimento
            rigoroso que inclui o desenvloviemnto dirigido por testes.
          </p>
          <p className="text-base leading-7 text-description/70">
            Desenvolvemos com sucesso muitos projetos,incluindoblogs,
            plataformas de publicação e gestão de talentos, sites de comércio
            eletrônico, agências de viagens, um aplicativo da web compatível com
            HIPAA e uma plataforma de concurso sem fins lucrativos.
          </p>
          <ButtonWithArrow
            name="Inicie um projeto conosco"
            href="fale-conosco"
            className="my-12 w-full md:w-1/2 lg:w-[55%]"
          />
        </div>
        <Image
          className="self-center lg:w-[425px] xl:w-[550px]"
          src="/images/OurGoals/OurGoals.svg"
          alt=""
          width={400}
          height={200}
        />
      </div>
    </div>
  )
}

export default OurGoals
