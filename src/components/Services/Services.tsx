import ServicesCard from "./ServicesCard"
import styles from "../../styles/Services.module.css"
import CarouselSlide from "../Carousel/CarouselSlide"
import Carousel from "../Carousel/Carousel"
import useWindowSize from "../../hooks/useWindowSize"

export default function Services() {
  const { width } = useWindowSize()

  const slidesCount =
    width >= 1200 ? 4 : width >= 1024 ? 3 : width >= 768 ? 2 : 1.15

  return (
    <section>
      <div className="container-wrapper">
        <div className={styles.texto}>
          <h2>Serviços</h2>
          <h1>
            Somos uma pequena equipe de contadores de histórias, pensadores e
            solucionadores de problemas.
          </h1>
          <p>
            Ajudamos a sua empresa a refletir seu verdadeiro eu por meio de
            projetos inovadores.
          </p>
        </div>
        <Carousel show={slidesCount}>
          <CarouselSlide
            className="flex items-center w-[87%] justify-center md:w-1/2 lg:w-1/3 xl:w-1/4"
            position={0}
          >
            <ServicesCard />
          </CarouselSlide>
          <CarouselSlide
            className="flex items-center w-[87%] justify-center md:w-1/2 lg:w-1/3 xl:w-1/4"
            position={1}
          >
            <ServicesCard />
          </CarouselSlide>
          <CarouselSlide
            className="flex items-center w-[87%] justify-center md:w-1/2 lg:w-1/3 xl:w-1/4"
            position={2}
          >
            <ServicesCard />
          </CarouselSlide>
          <CarouselSlide
            className="flex items-center w-[87%] justify-center md:w-1/2 lg:w-1/3 xl:w-1/4"
            position={3}
          >
            <ServicesCard />
          </CarouselSlide>
        </Carousel>
      </div>
    </section>
  )
}
