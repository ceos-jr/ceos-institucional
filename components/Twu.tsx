import next from "next"
import Link from "next/link"
import Image from "next/image"
import styles from "../styles/twu.module.css"

export default function Twu() {
  return (
    <div className={styles.global}>
      <Image
        src="images/twu.svg"
        alt="twuimage"
        height={100}
        width={100}
        className={styles.svgtwu}
      />
      <div className={styles.globaltext}>
        <h1>Fale Conosco</h1>
        <h2>Consulte gratuitamente nossos sobre seu projeto</h2>
        <p>
          Ajudamos sua empresa a refletir seu verdadeiro eu por meio de projetos
          inovadores...
        </p> 
      </div>
    </div>
  )
}
