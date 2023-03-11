import Image from "next/image"
import ButtonWithArrow from "./layout/ButtonWithArrow"

export default function AboutUs() {
  return (
    <section
      className="grid grid-cols-1 place-items-center py-8 md:grid-cols-2 container-wrapper"
      id="sobre-nos"
    >
      <div className="relative mb-8 w-full md:mb-0 xl:w-3/4 aspect-square">
        <Image src="/images/SobreNos/sobre_nos.svg" alt="" fill />
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="w-full text-xl text-accent">Sobre Nós</h2>
        <h1 className="text-3xl font-bold leading-10 text-secondary">
          Nossa visão é construir uma solução empresarial de sucesso.
        </h1>
        <p className="mb-8 leading-7 text-description/70">
          Por meio de projetos inovadores e um desenvolvimento bem estruturado,
          desenvolvemos os melhores produtos utilizando tecnologia de ponta.
          Dessa forma, guiados pelo nosso lema &quot;O céu é o limite&quot;,
          somos capazes de agregar o máximo de valor para os nossos parceiros.
        </p>
        <ButtonWithArrow
          className="lg:max-w-[300px]"
          href="/sobre-nos"
          name="Saiba mais"
          scroll={true}
        />
      </div>
    </section>
  )
}
