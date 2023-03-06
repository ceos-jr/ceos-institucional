import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AboutUs: NextPage = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full min-h-screen">
      <Head>
        <title>About us • CEOS</title>
      </Head>
      <main className="w-full min-h-screen">
        <Navbar />

        <section className="pb-8 lg:pb-12">
          <div className="flex flex-col items-center h-full">
            <Image
              className="min-h-[18.75rem] max-h-[35rem] 2xl:max-w-[1536px] object-cover"
              src="/images/imagemtime.jpg"
              alt="membros da ceos"
              width={1920}
              height={100}
            />
            <div className="container-wrapper flex flex-col gap-8 py-8 px-4">
              <h1 className="text-4xl text-secondary font-bold">Quem Somos</h1>
              <p className="text-description leading-8 opacity-70">
                Fundada em 1997, a Ceos é a Empresa Júnior do curso de Ciência
                da Computação da Universidade Federal do Ceará - UFC. Sempre
                focados na excelência e guiados por nosso lema O céu é o limite,
                desenvolvemos soluções inovadoras e personalizadas para o seu
                problema por meio do desenvolvimento de sites institucionais,
                sistemas personalizados, acessorias e outros serviços. Somos a
                CEOS, uma empresa formada por estudantes comprometidos em
                oferecer soluções inovadoras em tecnologia da informação para
                nossos clientes. Buscamos sempre atualização constante em nossas
                áreas de atuação, e trabalhamos em prol da ética e
                responsabilidade social.
              </p>
              <div>
                <h2 className="text-2xl text-secondary font-bold mb-4">
                  Nossa Missão
                </h2>
                <p className="text-description leading-8 opacity-70">
                  Transformar, em código, grandes histórias
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-8 lg:pb-16">
          <div className="container-wrapper flex flex-col">
            <h3 className="text-xl text-accent font-semibold mb-2">
              Nossos valores
            </h3>
            <h2 className="text-4xl text-secondary font-bold mb-12">
              Por que confiar na CEOS?
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:gap-12">
              <div>
                <h4 className="text-xl text-accent font-semibold mb-4">
                  Trabalho em Equipe
                </h4>
                <p className="text-description leading-8 opacity-70">
                  A CEOS considera o trabalho em equipe um valor essencial para
                  alcançar resultados de alta qualidade. A empresa acredita que
                  a colaboração entre membros de diferentes habilidades e
                  perspectivas é fundamental e envolve ouvir atentamente as
                  opiniões de todos os envolvidos, respeitar e valorizar as
                  ideias dos outros, e assumir responsabilidade compartilhada
                  pelos resultados finais.
                </p>
              </div>

              <div>
                <h4 className="text-xl text-accent font-semibold mb-4">
                  Resiliência
                </h4>
                <p className="text-description leading-8 opacity-70">
                  A CEOS considera a resiliência um valor importante para
                  alcançar seus objetivos, sabendo que enfrentará desafios ao
                  longo do caminho. A empresa acredita que pode superar
                  obstáculos com persistência, determinação e flexibilidade,
                  enxergando-os como oportunidades de aprendizado e crescimento.
                </p>
              </div>

              <div>
                <h4 className="text-xl text-accent font-semibold mb-4">
                  Disciplina
                </h4>
                <p className="text-description leading-8 opacity-70">
                  A CEOS considera a disciplina um valor fundamental que guia
                  seu trabalho diário, pois acredita que ela é essencial para
                  alcançar seus objetivos e manter a excelência em tudo o que
                  faz. Isso inclui definir metas claras, elaborar planos de ação
                  bem estruturados e se dedicar a cumpri-los com consistência e
                  comprometimento.
                </p>
              </div>

              <div>
                <h4 className="text-xl text-accent font-semibold mb-4">
                  Transparência
                </h4>
                <p className="text-description leading-8 opacity-70">
                  A CEOS considera a transparência um valor crucial em suas
                  interações internas e externas, pois acredita que a
                  honestidade e a comunicação clara são essenciais para
                  construir relações de confiança e tomar decisões informadas.
                  Isso implica em comunicar de forma aberta as atividades,
                  decisões e resultados da empresa, além de ouvir e responder às
                  opiniões e preocupações dos clientes, colaboradores e
                  parceiros.
                </p>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </div>
  );
};

export default AboutUs;
