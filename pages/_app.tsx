import "../styles/globals.css"
import type { AppProps } from "next/app"
import { Poppins } from "@next/font/google"

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700" , "800", "900"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={`${poppins.variable} font-sans`}>
      <Component {...pageProps} />
    </div>
  )
}
export default MyApp
