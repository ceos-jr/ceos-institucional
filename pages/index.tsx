import { NextPage } from "next"
import Footer from "../components/Footer"
import Head from "next/head"

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main></main>

      <Footer />
    </div>
  )
}

export default Home
