import Image from "next/image"
import styles from "../styles/Footer.module.css"
import { FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa"

function Footer() {
  return (
    <footer className={styles.Footer}>
      <div className={`${styles.Logo} ${styles.column}`}>
        <Image src="/images/ceos_logo.svg" alt="" width={200} height={200} />
        <p>Your best partner through the digital market-place</p>
      </div>
      <div className={`${styles.Links} ${styles.column}`}>
        <h3 className="">Links</h3>
        <ul>
          <li>
            <a href="#" rel="">
              Início
            </a>
          </li>
          <li>
            <a href="#" rel="">
              Sobre nós
            </a>
          </li>
          <li>
            <a href="#" rel="">
              Serviços
            </a>
          </li>
          <li>
            <a href="#" rel="">
              Blog
            </a>
          </li>
        </ul>
      </div>
      <div className={`${styles.Contatos} ${styles.column}`}>
        <h3 className="font-poppins">Contatos</h3>
        <ul>
          <li>(85)12345-6789</li>
          <li>ceos@gmail.com</li>
          <li>Fortaleza, CE.</li>
        </ul>
      </div>
      <div className={`${styles.Socials} ${styles.column}`}>
        <ul>
          <li>
            <a href="#" rel="">
              <FaWhatsapp className={styles.Icon} />
            </a>
          </li>
          <li>
            <a href="#" rel="">
              <FaLinkedin className={styles.Icon} />
            </a>
          </li>
          <li>
            <a href="#" rel="">
              <FaInstagram className={styles.Icon} />
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.Copyright}>
        <p>Copyright © CEOS All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
