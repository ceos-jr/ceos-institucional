import CarouselSlide from "../Carousel/CarouselSlide"
import Carousel from "../Carousel/Carousel"
import useWindowSize from "../../hooks/useWindowSize"
import { FaDesktop, FaDonate, FaGlobe, FaHandsHelping } from "react-icons/fa"
import { IconType } from "react-icons"
import Link from "next/link"
import { HiArrowNarrowRight } from "react-icons/hi"
import { PossibleServices } from "../typings/services"

type ServicesCardProps = {
  title: string
  description: string
  Icon: IconType
  kind: PossibleServices
}

const ServicesCard = ({
  title,
  kind,
  description,
  Icon,
}: ServicesCardProps) => {
  return (
    <div className="flex flex-col gap-6 py-12 px-8 rounded-xl shadow-2xl transition-all duration-500 hover:text-white w-[280px] bg-slate-100 h-[340px] group text-description hover:shadow-blue-800/70 hover:bg-primary">
      <div className="w-min bg-gray-300 rounded-full transition-colors group-hover:text-white text-primary group-hover:bg-white/20">
        <Icon
          size="3rem"
          className="p-2.5 transition-colors group-hover:text-white text-primary"
        />
      </div>
      <h1 className="text-lg font-bold">{title}</h1>
      <p className="text-sm opacity-70">{description}</p>
      <Link
        href={{
          pathname: "/fale-conosco",
          query: { service: kind },
        }}
        className="flex gap-2 items-center text-sm font-semibold transition-colors group-hover:text-white text-accent"
      >
        Solicite um Orçamento
        <HiArrowNarrowRight size="1.5rem" />
      </Link>
    </div>
  )
}

const services: ServicesCardProps[] = [
  {
    title: "Sites Institucionais",
    kind: "institucional",
    description:
      "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    Icon: FaGlobe,
  },
  {
    title: "Sistemas Web",
    kind: "sistema",
    description:
      "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    Icon: FaDesktop,
  },
  {
    title: "E-commerce",
    kind: "ecommerce",
    description:
      "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    Icon: FaDonate,
  },
  {
    title: "Assessoria de Sites",
    kind: "assessoria",
    description:
      "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    Icon: FaHandsHelping,
  },
]

export default function Services() {
  const { width } = useWindowSize()

  const slidesCount =
    width >= 1200 ? 4 : width >= 1024 ? 3 : width >= 768 ? 2 : 1.15

  return (
    <section>
      <div className="container-wrapper">
        <div className="flex flex-col gap-4 text-secondary">
          <h2 className="text-xl text-accent">Serviços</h2>
          <h1 className="text-3xl font-bold">
            Somos uma pequena equipe de contadores de histórias, pensadores e
            solucionadores de problemas.
          </h1>
          <p>
            Ajudamos a sua empresa a refletir seu verdadeiro eu por meio de
            projetos inovadores.
          </p>
        </div>
        <Carousel show={slidesCount}>
          {services.map((service, index) => (
            <CarouselSlide
              className="flex justify-center items-center w-[87%] md:w-1/2 lg:w-1/3 xl:w-1/4"
              position={index}
              key={`service-${service.title}`}
            >
              <ServicesCard {...service} />
            </CarouselSlide>
          ))}
        </Carousel>
      </div>
    </section>
  )
}
