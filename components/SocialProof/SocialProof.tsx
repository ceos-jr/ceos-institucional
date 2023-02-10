import useWindowSize from "../../hooks/useWindowSize"
import Carousel from "../Carousel/Carousel"
import CarouselSlide from "../Carousel/CarouselSlide"
import TestimonialCard from "./TestimonialCard"

const SocialProf = () => {
  const { width } = useWindowSize();
  const slidesCount = (width >= 1024) ? 2.5 : (width >= 768) ? 2 : 1 

  return (
    <section className="flex flex-col items-center min-h-screen w-full py-10 font-poppins">
      <h3 className="text-accent text-xl mb-5 md:mb-0">Depoimentos</h3>
      <h2 className="text-[#0E0E5E] text-center font-semibold text-3xl leading-10 mb-12 px-2 md:mb-16">
        Citações especiais de nossos clientes sobre nós.
      </h2>
      <Carousel 
        show={slidesCount}
      >
        <CarouselSlide
          className="flex justify-center items-center md:w-1/2 lg:w-[40%]"
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
          className="flex justify-center items-center md:w-1/2 lg:w-[40%]"
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
          className="flex justify-center items-center md:w-1/2 lg:w-[40%]"
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
          className="flex justify-center items-center md:w-1/2 lg:w-[40%]"
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
          className="flex justify-center items-center md:w-1/2 lg:w-[40%]"
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
          className="flex justify-center items-center md:w-1/2 lg:w-[40%]"
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
