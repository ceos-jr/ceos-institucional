import Sobre from "../components/Sobre"

import Services from "../components/Services/Services"
import { NextPage } from "next"

import Footer from "../components/Footer"

import Head from "next/head"
import SocialProf from "../components/SocialProof/SocialProof"
import OurTeam from "../components/OurTeam/OurTeam"
import OurGoals from "../components/OurGoals"

const Home: NextPage = () => {
  return (
    <div className="flex flex-col justify-center items-center py-2 w-full min-h-screen">
      <Head>
        <title>CEOS Institucional</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-full min-h-screen">
        <Services />
        <Sobre/>
        <OurGoals />
        <OurTeam />
        <SocialProf />
      </main>
      <Footer />
    </div>
  )
}

export default Home
