import styles from "../styles/sobre.module.css"
export default function Sobre() {
  return (
    <section className={styles.section}>
      <h1 className={styles.SobreNos}>Sobre Nós</h1>
      <p className={styles.titulo}>
        Nossa visão é construir uma <br></br> solução empresarial de sucesso.
      </p>
      <p className={styles.paragrafo}>
        Um processo de desenvolvimento bem estruturado é crucial para criar
        <br></br> produtos que as pessoas adoram. CEOS tem um processo de{" "}
        <br></br> desenvolvimento rigoroso que inclui o desenvolvimento dirigido
        por<br></br> testes.
      </p>
      <span className={styles.numeros}>
        <p className={styles.n1}>4500</p>
        <p className={styles.n2}>250+</p>
        <p>350</p>
      </span>
      <span className={styles.descricao}>
        <p className={styles.p1}>Project done</p>
        <p className={styles.p2}>Clients</p>
        <p className={styles.p3}>Running Work</p>
      </span>
    </section>
  )
}
