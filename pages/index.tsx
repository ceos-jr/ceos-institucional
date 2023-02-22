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
    <div className="flex flex-col justify-center items-center w-full min-h-screen">
      <Head>
        <title>CEOS Institucional</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="bg-white h-[12vh] w-full">
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
