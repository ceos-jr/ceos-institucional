import styles from "../styles/Navbar.module.css"
import Image from "next/image"

const Navbar = () => {
  return (
    <nav className={styles.Navbar}>
      <Image src={"/Navbar/Ceos.svg"} alt="" width={150} height={120} />
      <ul className={styles.Menu}>
        <li>
          <a href="#">Início</a>
        </li>
        <li>
          <a href="#">Sobre nós</a>
        </li>
        <li>
          <a href="#">Portfólio</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
      </ul>
      <button className={styles.Button}>
        <a href="#" rel="">
          Fale conosco
        </a>
      </button>
    </nav>
  )
}

export default Navbar
