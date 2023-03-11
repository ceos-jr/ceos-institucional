import React from "react"
import Image from "next/image"
import ButtonWithArrow from "./layout/ButtonWithArrow"

function OurGoals() {
  return (
    <section className="flex flex-col items-center py-8 h-full" id="objetivos">
      <div className="flex flex-col lg:flex-row container-wrapper">
        <div>
          <h2 className="mb-2 text-xl text-accent">Nossos objetivos</h2>
          <h1 className="mb-12 text-3xl font-medium leading-10 lg:mb-8 text-secondary">
            <span className="font-extrabold">
              Transformar, em código, grandes histórias
            </span>
          </h1>
          <p className="mb-8 text-base leading-7 lg:mb-4 text-description/70">
            Não perca a oportunidade de transformar suas grandes histórias em
            soluções de código inovadoras e performáticas! Nós, como um time de
            estudantes apaixonados por tecnologia, estamos prontos para agregar
            valor ao seu negócio e ajudá-lo a alcançar o verdadeiro potencial.{" "}
          </p>
          <p className="mb-8 text-base leading-7 lg:mb-4 text-description/70">
            Juntos, podemos criar soluções personalizadas e eficientes que
            atendam às suas necessidades e superem suas expectativas. Nosso time
            está comprometido em trabalhar de perto com você para garantir que
            cada projeto seja entregue com excelência.
          </p>
          <ButtonWithArrow
            name="Inicie um projeto conosco"
            href="#fale-conosco"
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
    </section>
  )
}

export default OurGoals
