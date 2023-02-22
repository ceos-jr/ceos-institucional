import styles from "../../styles/ServicesCard.module.css"
import { BsArrowRight } from "react-icons/bs"
import RocketIcon from "../RocketIcon"

export default function ServicesCard() {
  return (
    <div className={styles.card}>
      <RocketIcon className={styles.rocketIcon} />
      <h1>Software Development</h1>
      <p>We help your company to develop its true self through tone</p>
      <button className="flex">
        Explore More
        <BsArrowRight className={styles.seta} />
      </button>
    </div>
  )
}
