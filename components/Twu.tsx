import next from "next"
import Link from "next/link"
import Image from "next/image"
import styles from "../styles/twu.module.css"


export default function Twu() {
  return (
    <div>
      <Image src="images/twu.svg" alt="twuimage" height={100} width={100}
      className={styles.container} />
    </div>
  )
}
