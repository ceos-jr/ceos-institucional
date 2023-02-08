import type { NextPage } from "next"

import Sobre from "../components/Sobre"
import Head from "next/head"

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Sobre />
      </main>
      <footer></footer>
    </div>
  )
}

export default Home
