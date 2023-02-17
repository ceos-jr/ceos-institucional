import Image from "next/image"
import styles from "../styles/sobre.module.css"
export default function Sobre() {
  return (
    <section className={`${styles.section} font-poppins container-wrapper`}>
      <div className={styles.div1}>
        <Image src="/imagemcelular.svg" alt="Imagem" width={890} height={900} />
      </div>
      <div className={styles.div2}>
        <h2 className="text-[#FF9100] text-xl mb-2">Sobre Nós</h2>
        <h3 className="text-[#0E0E5E] text-3xl mb-12 leading-10 lg:mb-8">
          Nossa visão é contruir uma solução empresarial de sucesso.
        </h3>
        <p className="text-[#21262C] opacity-70 text-base mb-8 leading-7 lg:mb-4">
          Um processo de desenvolvimento bem estruturado é crucial para criar
          produtos que as adoram. CEOS tem um processo de desenvolvimento
          rigoroso que inclui o desenvloviemnto dirigido por testes.
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
