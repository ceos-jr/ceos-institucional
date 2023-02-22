import next from "next"
import Link from "next/link"
import Image from "next/image"
import styles from "../styles/twu.module.css"

export default function Twu() {
  return (
    <section className={styles.global}>
      <div className={styles.svgtwu}>
        <Image src="images/twu.svg" alt="twuimage" fill />
      </div>
      <div className={styles.globaltext}>
        <h2>Fale Conosco</h2>
        <h1>
          Consulte <strong>gratuitamente </strong>nossos especialistas sobre seu
          projeto
        </h1>
        <p>
          Ajudamos sua empresa a refletir seu verdadeiro eu por meio de projetos
          inovadores...
        </p>
        <form
          className={styles.globalform}
          action="/send-data-here"
          method="post"
        >
          <input placeholder="Nome" type="text" id="name" name="name" />
          <input placeholder="Telefone" type="text" id="tel" name="tel" />
          <input placeholder="Email" type="text" id="email" name="email" />
          <textarea placeholder="Mensagem" id="message" name="message" />
          <button type="submit">Enviar</button>
        </form>
      </div>
    </section>
  )
}
