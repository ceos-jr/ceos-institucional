import Image from "next/image"
import styles from "../styles/sobre.module.css"
export default function Sobre() {
  return (
    <section className={`${styles.section} font-poppins`}>
      <div className={styles.div1}>
        <Image src="/imagemcelular.svg" alt="Imagem" width={890} height={900} />
      </div>
      <div className={styles.div2}>
        <h1 className={styles.SobreNos}>Sobre nós</h1>
        <p className={styles.titulo}>
          Nossa visão é construir uma solução empresarial de sucesso.
        </p>
        <p className={styles.paragrafo}>
          Um processo de desenvolvimento bem estruturado é crucial para criar
          produtos que as pessoas adoram. CEOS tem um processo de
          desenvolvimento rigoroso que inclui o desenvolvimento dirigido por
          testes.
        </p>

        <div className={styles.descricao}>
          <div>
            <span>4500</span>
            <h3>Project done</h3>
          </div>
          <div>
            <span>250+</span>
            <h3>Clients</h3>
          </div>
          <div>
            <span>350</span>
            <h3>Running work</h3>
          </div>
        </div>
      </div>
    </section>
  )
}
