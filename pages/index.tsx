import type { NextPage } from "next"
import Head from "next/head"
import Navbar from "../components/Navbar"

const Home: NextPage = () => {
  return (
    <div className="Home">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="min-h-[200vh]"></div>
    </div>
  )
}

export default Home
