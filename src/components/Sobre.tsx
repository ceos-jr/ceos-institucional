import Image from "next/image"

const StatItem = ({ name, number }: { name: string; number: number }) => {
  return (
    <div className="w-full text-secondary">
      <span className="text-3xl font-bold">{number}</span>
      <h3>{name}</h3>
    </div>
  )
}

export default function Sobre() {
  return (
    <section
      className="grid grid-cols-1 place-items-center py-8 md:grid-cols-2 container-wrapper"
      id="sobre"
    >
      <div className="relative mb-8 w-full md:mb-0 xl:w-3/4 aspect-square">
        <Image src="/images/SobreNos/sobre_nos.svg" alt="" fill />
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="w-full text-xl text-accent">Sobre Nós</h2>
        <h1 className="text-3xl font-bold leading-10 text-secondary">
          Nossa visão é contruir uma solução empresarial de sucesso.
        </h1>
        <p className="mb-8 leading-7 text-description/70">
          Um processo de desenvolvimento bem estruturado é crucial para criar
          produtos que as adoram. CEOS tem um processo de desenvolvimento
          rigoroso que inclui o desenvloviemnto dirigido por testes.
        </p>
        <div className="flex flex-col gap-4 justify-around items-center w-full sm:flex-row md:items-start">
          <StatItem name="Projetos concluídos" number={4500} />
          <StatItem name="Clientes" number={250} />
          <StatItem name="Running work" number={350} />
        </div>
      </div>
    </section>
  )
}
