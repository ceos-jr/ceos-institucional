import { NextPage } from "next"
import Head from "next/head"
import Navbar, { NavItemData } from "../components/Navbar"
import Footer from "../components/Footer"
import Image from "next/image"
import ButtonWithArrow from "../components/layout/ButtonWithArrow"
import { useRouter } from "next/router"

const nav_items: NavItemData[] = [
  {
    text: "Início",
    url: "/",
  },
  {
    text: "Fale Conosco",
    url: "/#fale-conosco",
  },
]

const Home: NextPage = () => {
  const router = useRouter()
  const name = router.query.name
  return (
    <div className="flex flex-col justify-center items-center w-full min-h-screen">
      <Head>
        <title>Home • CEOS</title>
        <meta
          name="description"
          content="CEOS Jr é a empresa junior da Ciência da Computação da UFC. Utilizamos linguagens de programação modernas como JavaScript, Python e TypeScript, além de frameworks como React para desenvolver aplicações web escaláveis e eficientes.."
        />
      </Head>
      <main className="w-full">
        <Navbar navbarData={nav_items} />
        <div className="flex flex-col gap-8 justify-center items-center my-40 w-full container-wrapper min-h-max">
          <h1 className="text-3xl font-bold text-center">
            Obrigado por entrar em contato {name ?? ""}!
          </h1>
          <Image
            src="/images/ceos_logo.svg"
            alt="logo ceos"
            width={300}
            height={100}
          />
          <p className="text-description/70">
            Um de nossos membros irá entrar em contato com você assim que
            possível.
          </p>
          <ButtonWithArrow href="/" name="Voltar para a página inicial" />
        </div>
      </main>
      <Footer />
    </div>
  )
}
export default Home
