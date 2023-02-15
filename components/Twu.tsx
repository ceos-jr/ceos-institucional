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
      <div className={styles.container}>
        <form action="/send-data-here" method="post">
          <label htmlFor="name">Nome</label>
          <input type="text" id="name" name="name" />
          <label htmlFor="telefone">Telefone</label>
          <input type="text" id="phone" name="phone" />
          <label htmlFor="email">Email</label>
          <input type="text" id="email" name="email" />
          <label htmlFor="menssage">Mensagem</label>
          <input type="text" id="message" name="message" />
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  )
}
