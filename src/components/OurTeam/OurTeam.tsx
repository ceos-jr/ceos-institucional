import Carousel from "../Carousel/Carousel"
import CarouselSlide from "../Carousel/CarouselSlide"
import MemberCard, { TeamCardProps } from "./MemberCard"
import useWindowSize from "../../hooks/useWindowSize"

import Luquitas from "../../../public/images/OurTeam/luquitas.jpeg"
import Saido from "../../../public/images/OurTeam/saido.jpeg"
import DiretorMarcelinho from "../../../public/images/OurTeam/marcelinhopfvrfunciona.jpeg"
import Enzo from "../../../public/images/OurTeam/enzo.jpeg"
import Juia from "../../../public/images/OurTeam/juia.jpeg"
import Lg from "../../../public/images/OurTeam/lg.jpeg"
import Vivi from "../../../public/images/OurTeam/vivi.jpeg"
import Alanbida from "../../../public/images/OurTeam/alan.jpeg"
import John from "../../../public/images/OurTeam/john.jpeg"

const members: TeamCardProps[] = [
  {
    name: "Lucas Braide",
    role: "Presidente da CEOS",
    linkedinURL: "https://www.linkedin.com/in/lucas-braide-70a8b5206",
    memberImg: Luquitas,
    memberImgAlt: "Presidente Lucas",
  },
  {
    name: "Said Rodrigues",
    role: "Diretor de Projetos",
    linkedinURL: "https://www.linkedin.com/in/said-rodrigues-752316149/",
    memberImg: Saido,
    memberImgAlt: "Diretor Said",
  },
  {
    name: "Marcelo Marques",
    role: "Diretor de Pessoas e Processos",
    memberImg: DiretorMarcelinho,
    memberImgAlt: "Diretor Marcelinho",
    linkedinURL: "https://www.linkedin.com/in/marcelo-marques-27a9a7267/",
  },
  {
    name: "Enzo Lozano",
    role: "Gerente de Marketing",
    memberImg: Enzo,
    memberImgAlt: "Diretor Enzo",
    linkedinURL: "https://www.linkedin.com/in/enzo-lozano-abreu-3886b01bb/",
  },
  {
    name: "Julia Naomi",
    role: "Gerente Admin-Financeiro",
    memberImg: Juia,
    memberImgAlt: "Gerente Naomi",
    linkedinURL:
      "https://www.linkedin.com/in/julia-naomi-takihi-makiyama-1a4540257",
  },
  {
    name: "Luiz Gustavo",
    role: "Gerente de Projetos",
    memberImg: Lg,
    memberImgAlt: "Gerente Luiz Gustavo",
    linkedinURL:
      "https://www.linkedin.com/in/luiz-gustavo-marques-costa-790297217/",
  },
  {
    name: "Victoria de Castro",
    role: "Gerente de Pessoas",
    memberImg: Vivi,
    memberImgAlt: "Gerente Victoria",
    linkedinURL: "https://www.linkedin.com/in/victoria-de-castro-19ba5a242",
  },
  {
    name: "Alan Cabral",
    role: "Consultor de Vendas",
    memberImg: Alanbida,
    memberImgAlt: "Consultor de Vendas, Alan",
    linkedinURL: "https://www.linkedin.com/in/alan-carneiro-cabral-39035024a/",
  },
  {
    name: "Jonathan Aires",
    role: "Assessor de Projetos",
    memberImg: John,
    memberImgAlt: "Assessor de Projetos, Jonathan",
    linkedinURL: "http://www.linkedin.com/in/jonathan-aires-2258a1268",
  },
]

const OurTeam = () => {
  const { width } = useWindowSize()

  const slidesCount =
    width >= 1200 ? 4 : width >= 1025 ? 3 : width >= 768 ? 2 : 1.15

  return (
    <section className="relative p-8" id="nosso-time">
      <div
        className="absolute top-0 left-0 z-0 w-full h-full bg-[#F5F7FC]"
        style={{
          clipPath: "polygon(0 0, 100% 15%, 100% 100%, 0 85%)",
        }}
      ></div>
      <div className="flex z-10 flex-col py-8 container-wrapper">
        <h3 className="z-10 mb-4 text-xl md:mb-0 text-accent">Nosso Time</h3>
        <h2 className="z-10 text-3xl font-semibold leading-10 text-secondary max-w-[45ch]">
          Somos uma pequena equipe de contadores de histórias, pensadores e
          solucionadores de problemas.
        </h2>
        <Carousel show={slidesCount}>
          {members.map((member, index) => (
            <CarouselSlide
              className="flex justify-center items-center w-[87%] md:w-1/2 lg:w-1/3 xl:w-1/4"
              key={member.name}
              position={index}
            >
              <MemberCard {...member} />
            </CarouselSlide>
          ))}
        </Carousel>
      </div>
    </section>
  )
}

export default OurTeam
