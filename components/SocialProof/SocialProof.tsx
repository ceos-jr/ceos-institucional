import useWindowSize from "../../hooks/useWindowSize"
import Carousel from "../Carousel/Carousel"
import CarouselSlide from "../Carousel/CarouselSlide"
import TestimonialCard from "./TestimonialCard"

const SocialProf = () => {
  const { width } = useWindowSize()
  const slidesCount = width >= 1024 ? 3 : width >= 768 ? 2 : 1
  const highlightSlide = width >= 1024 ? true : false

  return (
    <section className="flex flex-col items-center min-h-screen w-full py-8 font-poppins">
      <div className="container flex flex-col items-center">
        <h3 className="text-accent text-xl mb-4 md:mb-0 lg:self-start">
          Depoimentos
        </h3>
        <h2 className="text-[#0E0E5E] text-center font-semibold text-3xl leading-10 mb-12 lg:self-start">
          Citações especiais de nossos clientes sobre nós.
        </h2>
      </div>
      <Carousel show={slidesCount} highlight={highlightSlide}>
        <CarouselSlide
          className="flex justify-center items-center md:w-1/2 lg:w-1/3"
          position={0}
        >
          <TestimonialCard
            quote={
              "We've tried many different screen sharing tools but we weren't happy with any of them. Agento finally solves the screen sharing pain. My sales reps are now 5-10% more productive each day. And Agento took our product demos to a more professional level."
            }
            name={"Tarik Eamin"}
            role={"Product Manager"}
          />
        </CarouselSlide>
        <CarouselSlide
          className="flex justify-center items-center md:w-1/2 lg:w-1/3"
          position={1}
        >
          <TestimonialCard
            quote={
              "We've tried many different screen sharing tools but we weren't happy with any of them. Agento finally solves the screen sharing pain. My sales reps are now 5-10% more productive each day. And Agento took our product demos to a more professional level."
            }
            name={"Tarik Eamin"}
            role={"Product Manager"}
          />
        </CarouselSlide>
        <CarouselSlide
          className="flex justify-center items-center md:w-1/2 lg:w-1/3"
          position={2}
        >
          <TestimonialCard
            quote={
              "We've tried many different screen sharing tools but we weren't happy with any of them. Agento finally solves the screen sharing pain. My sales reps are now 5-10% more productive each day. And Agento took our product demos to a more professional level."
            }
            name={"Tarik Eamin"}
            role={"Product Manager"}
          />
        </CarouselSlide>
        <CarouselSlide
          className="flex justify-center items-center md:w-1/2 lg:w-1/3"
          position={3}
        >
          <TestimonialCard
            quote={
              "We've tried many different screen sharing tools but we weren't happy with any of them. Agento finally solves the screen sharing pain. My sales reps are now 5-10% more productive each day. And Agento took our product demos to a more professional level."
            }
            name={"Tarik Eamin"}
            role={"Product Manager"}
          />
        </CarouselSlide>
        <CarouselSlide
          className="flex justify-center items-center md:w-1/2 lg:w-1/3"
          position={4}
        >
          <TestimonialCard
            quote={
              "We've tried many different screen sharing tools but we weren't happy with any of them. Agento finally solves the screen sharing pain. My sales reps are now 5-10% more productive each day. And Agento took our product demos to a more professional level."
            }
            name={"Tarik Eamin"}
            role={"Product Manager"}
          />
        </CarouselSlide>
        <CarouselSlide
          className="flex justify-center items-center md:w-1/2 lg:w-1/3"
          position={5}
        >
          <TestimonialCard
            quote={
              "We've tried many different screen sharing tools but we weren't happy with any of them. Agento finally solves the screen sharing pain. My sales reps are now 5-10% more productive each day. And Agento took our product demos to a more professional level."
            }
            name={"Tarik Eamin"}
            role={"Product Manager"}
          />
        </CarouselSlide>
      </Carousel>
    </section>
  )
}

export default SocialProf
