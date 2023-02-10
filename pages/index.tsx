import { NextPage } from "next"
import Footer from "../components/Footer"
import Head from "next/head"
import SocialProf from "../components/SocialProof/SocialProof"
import Navbar from "../components/Navbar"

const Home: NextPage = () => {
  return (
    <div className="flex flex-col justify-center items-center py-2 w-full min-h-screen">

      <Head>
        <title>CEOS Institucional</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="w-full min-h-screen">
        <SocialProf />
      </main>
      <Footer />
    </div>
  )
}

export default Home
