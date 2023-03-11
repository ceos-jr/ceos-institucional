import "../styles/globals.css"
import type { AppProps } from "next/app"
import { Quicksand } from "@next/font/google"

const font = Quicksand({
  subsets: ["latin"],
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={font.className}>
      <Component {...pageProps} />
    </div>
  )
}
export default MyApp
