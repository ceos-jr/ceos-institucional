import type { NextPage } from "next"
import Head from "next/head"

import Navbar from "../components/Navbar"

const Home: NextPage = () => {
  return (
    <div>

      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <main></main>

      <footer></footer>
      
    </div>
  )
}

export default Home
