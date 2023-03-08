import { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const navbarData = [
  {
    text: "Quem Somos",
    url: "#quem-somos",
  },
  {
    text: "Nossos Valores",
    url: "#nossos-valores",
  },
  {
    text: "Fale conosco",
    url: "/#fale-conosco",
  },
]

const AboutUs: NextPage = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full min-h-screen">
      <Head>
        <title>Sobre Nós • CEOS</title>
        <meta
          name="description"
          content="CEOS Jr é a empresa junior da Ciência da Computação da UFC. Utilizamos linguagens de programação modernas como JavaScript, Python e TypeScript, além de frameworks como React para desenvolver aplicações web escaláveis e eficientes.."
        />
      </Head>
      <main className="w-full min-h-screen">
        <Navbar navbarData={navbarData} />
        <section className="pb-8">
          <div className="flex flex-col items-center h-full">
            <Image
              className="object-cover min-h-[18.75rem] max-h-[35rem] 2xl:max-w-[1536px]"
              src="/images/team.jpg"
              alt="membros da ceos"
              width={1920}
              height={100}
              priority
            />
            <div
              className="flex flex-col gap-8 py-8 px-4 container-wrapper"
              id="quem-somos"
            >
              <h1 className="text-4xl font-bold text-secondary">Quem Somos</h1>
              <p className="leading-8 opacity-70 text-description">
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
                <h2 className="mb-4 text-2xl font-bold text-secondary">
                  Nossa Missão é:
                </h2>
                <p className="font-bold leading-8 opacity-70 text-accent">
                  Transformar, em código, grandes histórias
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8 lg:pb-16" id="nossos-valores">
          <div className="flex flex-col container-wrapper">
            <h3 className="mb-2 text-xl font-semibold text-accent">
              Nossos valores
            </h3>
            <h2 className="mb-12 text-4xl font-bold text-secondary">
              Por que confiar na CEOS?
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:gap-12">
              <div>
                <h4 className="mb-4 text-xl font-semibold text-accent">
                  Trabalho em Equipe
                </h4>
                <p className="leading-8 opacity-70 text-description">
                  O trabalho em equipe um valor essencial para alcançar
                  resultados de alta qualidade. Nos acreditamos que a
                  colaboração entre membros de diferentes habilidades e
                  perspectivas é fundamental e envolve ouvir atentamente as
                  opiniões de todos os envolvidos, respeitar e valorizar as
                  ideias dos outros, e assumir responsabilidade compartilhada
                  pelos resultados finais.
                </p>
              </div>

              <div>
                <h4 className="mb-4 text-xl font-semibold text-accent">
                  Resiliência
                </h4>
                <p className="leading-8 opacity-70 text-description">
                  A resiliência é um valor importante para alcançarmos nossos
                  objetivos, sabendo que enfrentaremos desafios ao longo do
                  caminho. Acreditamos que podemos superar obstáculos com
                  persistência, determinação e flexibilidade, enxergando-os como
                  oportunidades de aprendizado e crescimento.
                </p>
              </div>

              <div>
                <h4 className="mb-4 text-xl font-semibold text-accent">
                  Disciplina
                </h4>
                <p className="leading-8 opacity-70 text-description">
                  A disciplina é um valor fundamental que guia nosso trabalho
                  diário, pois acreditamos que ela é essencial para alcançarmos
                  nossos objetivos e mantermos a excelência em tudo o que
                  fazemos. Isso inclui definir metas claras, elaborar planos de
                  ação bem estruturados e se dedicar a cumpri-los com
                  consistência e comprometimento.
                </p>
              </div>

              <div>
                <h4 className="mb-4 text-xl font-semibold text-accent">
                  Transparência
                </h4>
                <p className="leading-8 opacity-70 text-description">
                  A transparência um valor crucial em nossas interações internas
                  e externas, pois acreditamos que a honestidade e a comunicação
                  clara são essenciais para construir relações de confiança e
                  tomar decisões informadas. Isso implica em comunicar de forma
                  aberta as atividades, decisões e resultados da empresa, além
                  de ouvir e responder às opiniões e preocupações dos clientes,
                  colaboradores e parceiros.
                </p>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </div>
  )
}

export default AboutUs
