import AboutUs from "../components/AboutUs"
import { NextPage } from "next"
import Head from "next/head"
import Navbar from "../components/Navbar"
import OurTeam from "../components/OurTeam/OurTeam"
import Hero from "../components/Hero"
import OurGoals from "../components/OurGoals"
import Footer from "../components/Footer"
import ContactUs from "../components/ContactUs"
import Services from "../components/Services/Services"

const navbarData = [
  {
    text: "Início",
    url: "#hero",
  },
  {
    text: "Serviços",
    url: "#servicos",
  },
  {
    text: "Sobre nós",
    url: "#sobre-nos",
  },
  {
    text: "Objetivos",
    url: "#objetivos",
  },
  {
    text: "Nosso Time",
    url: "#nosso-time",
  },
  {
    text: "Fale conosco",
    url: "#fale-conosco",
  },
]

const Home: NextPage = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full min-h-screen">
      <Head>
        <title>Home • CEOS</title>
        <meta
          name="description"
          content="CEOS Jr é a empresa junior da Ciência da Computação da UFC. Utilizamos linguagens de programação modernas como JavaScript, Python e TypeScript, além de frameworks como React para desenvolver aplicações web escaláveis e eficientes.."
        />
      </Head>
      <main className="w-full min-h-screen">
        <Navbar navbarData={navbarData} />
        <Hero />
        <Services />
        <AboutUs />
        <OurGoals />
        <OurTeam />
        <ContactUs />
      </main>
      <Footer />
    </div>
  )
}
export default Home
