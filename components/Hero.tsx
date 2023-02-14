import styles from "../styles/hero.module.css"
import Image from "next/image"
import next from "next"
import { HiOutlineArrowLongRight } from "react-icons/hi2"

export default function Hero() {
  return (
    <section className={styles.bg}>
      <div className={styles.global}>
        <div className={styles.globaltext}>
          <h1 className=" font-semibold">
            Obtenha a melhor solução para o seu projeto
          </h1>
          <p className="font-semibold text-base text-[#21262C] opacity-70">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className={`${styles.abutton} text-base text-[#FFFFFF]`}>
            <span>Inicie um projeto conosco</span>
            <HiOutlineArrowLongRight className={styles.buttonarrow} />
          </p>
        </div>
        <Image
          className={styles.svghero}
          src="images/hero.svg"
          alt="heroimage"
          height={1000}
          width={500}
        />
        <Image
          className={styles.svgparceiros}
          src="images/parceiros.svg"
          alt="parceirosimage"
          height={2000}
          width={1000}
        />
      </div>
    </section>
  )
}
