import Head from "next/head"
import Image from "next/image"
import Link from "next/link"

const Custom500 = () => {
  return (
    <div className="flex flex-col justify-center items-center p-8 h-screen lg:flex-row container-wrapper">
      <Head>
        <title>Erro no Servidor • CEOS</title>
      </Head>
      <div className="relative w-full h-1/2 2xl:w-1/2">
        <Image src="/images/500.svg" alt="500 error image" priority fill />
      </div>
      <div className="flex flex-col justify-center items-center space-y-4 text-center">
        <h1 className="text-5xl font-bold md:text-6xl">500</h1>
        <h2 className="text-3xl md:text-4xl">Ocorreu um erro no servidor</h2>
        <p className="text-base md:text-xl">
          Aconteceu algum erro nos nossos servidores. Por favor, volte à página
          inicial
        </p>
        <button className="py-2 px-4 text-white rounded-full shadow-lg transition-transform hover:scale-105 bg-primary">
          <Link href="/">Voltar à página inicial</Link>
        </button>
      </div>
    </div>
  )
}

export default Custom500
