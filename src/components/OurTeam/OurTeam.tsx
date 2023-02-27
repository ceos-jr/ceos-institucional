import Carousel from "../Carousel/Carousel"
import CarouselSlide from "../Carousel/CarouselSlide"
import MemberCard from "./MemberCard"
import useWindowSize from "../../hooks/useWindowSize"

const OurTeam = () => {
  const { width } = useWindowSize()

  const slidesCount =
    width >= 1200 ? 4 : width >= 1024 ? 3 : width >= 768 ? 2 : 1

  return (
    <section
      className={
        "relative h-full w-full overflow-hidden before:absolute before:bg-[#F5F7FC] before:top-[0%] before:-left-[20%] before:w-[130%] before:h-[90%] before:rotate-[5deg]"
      }
    >
      <div className="container-wrapper py-8 flex flex-col">
        <h3 className="text-accent text-xl mb-4 md:mb-0 z-10">Nosso Time</h3>
        <h2 className="text-[#0E0E5E] text-3xl max-w-[45ch] font-semibold leading-10 z-10">
          Somos uma pequena equipe de contadores de histórias, pensadores e
          solucionadores de problemas.
        </h2>
        <Carousel show={slidesCount}>
          <CarouselSlide
            className="flex justify-center items-center md:w-1/2 lg:w-1/3 xl:w-1/4"
            position={0}
          >
            <MemberCard
              name="Lucas Braide"
              role="Presidente da CEOS"
              memberImg="/images/OurTeam/man-01.png"
              memberImgAlt="Company's CEO picture"
              facebookURL="#"
              twitterURL="#"
              linkedinURL="https://www.linkedin.com/in/lucas-braide-70a8b5206"
              instagramURL="#"
            />
          </CarouselSlide>
          <CarouselSlide
            className="flex justify-center items-center md:w-1/2 lg:w-1/3 xl:w-1/4"
            position={1}
          >
            <MemberCard
              name="Said Cavalcante"
              role="Diretor de Projetos"
              memberImg="/images/OurTeam/man-02.png"
              memberImgAlt="Company's Senior Officer"
              facebookURL="#"
              twitterURL="#"
              linkedinURL="#"
              instagramURL="#"
            />
          </CarouselSlide>
          <CarouselSlide
            className="flex justify-center items-center md:w-1/2 lg:w-1/3 xl:w-1/4"
            position={2}
          >
            <MemberCard
              name="Marcelo Marques"
              role="Diretor de Pessoas e Processos"
              memberImg="/images/OurTeam/woman-01.png"
              memberImgAlt="Company's Marketing Officer 1"
              facebookURL="#"
              twitterURL="#"
              linkedinURL="https://www.linkedin.com/in/marcelo-marques-27a9a7267/"
              instagramURL="#"
            />
          </CarouselSlide>
          <CarouselSlide
            className="flex justify-center items-center md:w-1/2 lg:w-1/3 xl:w-1/4"
            position={3}
          >
            <MemberCard
              name="Enzo Lozano"
              role="Gerente de Marketing"
              memberImg="/images/OurTeam/woman-02.png"
              memberImgAlt="Company's Marketing Officer 2"
              facebookURL="#"
              twitterURL="#"
              linkedinURL="https://www.linkedin.com/in/enzo-lozano-abreu-3886b01bb/"
              instagramURL="#"
            />
          </CarouselSlide>
          <CarouselSlide
            className="flex justify-center items-center md:w-1/2 lg:w-1/3 xl:w-1/4"
            position={4}
          >
            <MemberCard
              name="Julia Naomi"
              role="Gerente Admin-Financeira"
              memberImg="/images/OurTeam/woman-01.png"
              memberImgAlt="Company's Marketing Officer 1"
              facebookURL="#"
              twitterURL="#"
              linkedinURL="https://www.linkedin.com/in/julia-naomi-takihi-makiyama-1a4540257"
              instagramURL="#"
            />
          </CarouselSlide>
          <CarouselSlide
            className="flex justify-center items-center md:w-1/2 lg:w-1/3 xl:w-1/4"
            position={5}
          >
            <MemberCard
              name="Luiz Gustavo"
              role="Gerente de Projetos"
              memberImg="/images/OurTeam/woman-01.png"
              memberImgAlt="Company's Marketing Officer 1"
              facebookURL="#"
              twitterURL="#"
              linkedinURL="#"
              instagramURL="#"
            />
          </CarouselSlide>
          <CarouselSlide
            className="flex justify-center items-center md:w-1/2 lg:w-1/3 xl:w-1/4"
            position={6}
          >
            <MemberCard
              name="Victoria Castro"
              role="Gerente de Pessoas"
              memberImg="/images/OurTeam/woman-01.png"
              memberImgAlt="Company's Marketing Officer 1"
              facebookURL="#"
              twitterURL="#"
              linkedinURL="#"
              instagramURL="#"
            />
          </CarouselSlide>
          <CarouselSlide
            className="flex justify-center items-center md:w-1/2 lg:w-1/3 xl:w-1/4"
            position={7}
          >
            <MemberCard
              name="Alan Carneiro"
              role="Membro efetivo da CEOS"
              memberImg="/images/OurTeam/woman-01.png"
              memberImgAlt="Company's Marketing Officer 1"
              facebookURL="#"
              twitterURL="#"
              linkedinURL="https://www.linkedin.com/in/alan-carneiro-cabral-39035024a/"
              instagramURL="#"
            />
          </CarouselSlide>
          <CarouselSlide
            className="flex justify-center items-center md:w-1/2 lg:w-1/3 xl:w-1/4"
            position={8}
          >
            <MemberCard
              name="Jonathan Aires"
              role="Membro efetivo da CEOS"
              memberImg="/images/OurTeam/woman-01.png"
              memberImgAlt="Company's Marketing Officer 1"
              facebookURL="#"
              twitterURL="#"
              linkedinURL="#"
              instagramURL="#"
            />
          </CarouselSlide>
        </Carousel>
      </div>
    </section>
  )
}

export default OurTeam
