import Image from "next/image"
import ButtonWithArrow from "./layout/ButtonWithArrow"

export default function Hero() {
  return (
    <section id="hero">
      <div className="grid grid-cols-1 gap-5 place-items-center py-10 md:grid-cols-2 container-wrapper">
        <div className="flex z-10 flex-col gap-8">
          <h1 className="text-4xl font-bold lg:text-6xl lg:leading-snug text-secondary">
            Obtenha a melhor solução para o seu projeto
          </h1>
          <p className="font-semibold leading-7 opacity-70 text-description">
            Todos os nossos projetos são feitos sob medida para atender às
            necessidades e objetivos de cada cliente, garantindo soluções únicas
            e eficientes para o seu problema.
          </p>
          <ButtonWithArrow
            name="Inicie um projeto conosco"
            href="#fale-conosco"
            className="w-full xl:w-3/5"
          />
        </div>
        <div className="relative w-full xl:w-4/5 aspect-square">
          <Image
            src="/images/Hero/hero_people.svg"
            alt="hero image"
            fill
            priority
          />
        </div>
        {/* <div className="hidden relative col-span-full place-self-end w-3/5 h-16 md:inline-block">
          <Image src="/images/Hero/parceiros.svg" alt="parceiros image" fill />
        </div> */}
      </div>
    </section>
  )
}
