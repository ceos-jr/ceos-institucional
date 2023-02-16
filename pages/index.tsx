import Sobre from "../components/Sobre"
import Services from "../components/Services/Services"
import { NextPage } from "next"
import Footer from "../components/Footer"
import Head from "next/head"
import SocialProf from "../components/SocialProof/SocialProof"
import OurTeam from "../components/OurTeam/OurTeam"
import Hero from "../components/Hero"
import OurGoals from "../components/OurGoals"
import Twu from "../components/Twu"

export default function Index() {
  return (
    <div className="flex flex-col justify-center items-center py-2 w-full min-h-screen">
      <Head>
        <title>CEOS Institucional</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
