import Sobre from "../components/Sobre"
import Services from "../components/Services/Services"
import { NextPage } from "next"
import Footer from "../components/Footer"
import Head from "next/head"
import SocialProf from "../components/SocialProof/SocialProof"
import Navbar from "../components/Navbar"
import OurTeam from "../components/OurTeam/OurTeam"
import Hero from "../components/Hero"
import OurGoals from "../components/OurGoals"
import Twu from "../components/Twu"

const Home: NextPage = () => {
  return (
    <div className="flex flex-col justify-center items-center py-2 w-full min-h-screen">
      <Head>
        <title>Home • CEOS</title>
        <meta
          name="description"
          content="CEOS Jr é a empresa junior da Ciência da Computação da UFC. Utilizamos linguagens de programação modernas como JavaScript, Python e TypeScript, além de frameworks como React para desenvolver aplicações web escaláveis e eficientes.."
        />
      </Head>
      <header className="w-full bg-white h-[12vh]">
        <Navbar />
      </header>
      <main className="w-full min-h-screen">
        <Hero />
        <Services />
        <Sobre />
        <OurGoals />
        <OurTeam />
        <SocialProf />
        <Twu />
      </main>
      <Footer />
    </div>
  )
}
export default Home
