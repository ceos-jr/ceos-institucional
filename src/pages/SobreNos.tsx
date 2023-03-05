import Image from "next/image"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
export default function AboutUs() {
  return (
    <section>
      <Navbar />
      <div className="bg-scroll bg-black">
      
        <Image src="/images/imagemtime.jpg" alt="" width={1920} height={100} />
        </div>
        <div className="absolute bottom-1/3">
        

        <div className="flex flex-col items-start h-full pb-5">
          <h1 className="text-2xl font-bold lg:text-2xl lg:leading-snug text-white pl-8">
            Quem Somos
          </h1>
        </div>
        <div>
          <p className="font-semibold leading-8 text-white pl-8 pb-16">
            Fundada em 1997, a Ceos é a Empresa Júnior do curso de Ciência da
            Computação da Universidade Federal do Ceará - UFC. Sempre focados na
            excelência e guiados por nosso lema O céu é o limite, desenvolvemos
            soluções inovadoras e personalizadas para o seu problema por meio do
            desenvolvimento de sites institucionais, sistemas personalizados,
            acessorias e outros serviços. Somos a CEOS, uma empresa formada por
            estudantes comprometidos em oferecer soluções inovadoras em
            tecnologia da informação para nossos clientes. Buscamos sempre
            atualização constante em nossas áreas de atuação, e trabalhamos em
            prol da ética e responsabilidade social. Acreditamos que o
            conhecimento deve ser compartilhado, e é por isso que nossos
            projetos têm como objetivo principal disseminar conhecimento e
            proporcionar experiências enriquecedoras para a comunidade acadêmica
            e empresarial. Através de nosso trabalho, buscamos transformar a
            realidade das empresas e instituições que atendemos, contribuindo
            para o desenvolvimento da sociedade como um todo.
          </p>
        </div>
        </div>
      

      <div className="bg-slate-200 pt-5">
        <div className="text-2xl lg:text-2xl lg:leading-snug text-secondary pl-8 py-5">
          <h1>Por que confiar na CEOS ?</h1>
        </div>
        <div>
          <div>
            <h1 className="text-2xl font-bold lg:text-2xl lg:leading-snug text-secondary pl-16 pt-8">
              Nossos Valores
            </h1>
          </div>
          <div className="grid grid-cols-2 items-center justify-center pl-16 py-8">
            <div>
              <p className="font-semibold leading-7  text-[#FFB100]">Valor 1</p>
              <p className="leading-10 font-bold text-secondary opacity-70">
                *descrição valor 1
              </p>
            </div>
            <div>
              <p className="font-semibold leading-7 text-[#FFB100]">Valor 2</p>
              <p className="leading-10 font-bold text-secondary opacity-70">
                *descrição valor 2
              </p>
            </div>
            <div>
              <p className="font-semibold leading-7  text-[#FFB100]">Valor 3</p>
              <p className="leading-10 font-bold text-secondary opacity-70">
                *descrição valor 3
              </p>
            </div>
            <div>
              <p className="font-semibold leading-7  text-[#FFB100]">Valor 4</p>
              <p className="leading-10 font-bold text-secondary opacity-70">
                *descrição valor 4
              </p>
            </div>
            <div>
              <p className="font-semibold leading-7 text-[#FFB100]">Valor 5</p>
              <p className="leading-10 font-bold text-secondary opacity-70">
                *descrição valor 5
              </p>
            </div>
            <div>
              <p className="font-semibold leading-7  text-[#FFB100]">Valor 6</p>
              <p className="leading-10 font-bold text-secondary opacity-70">
                *descrição valor 6
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start py-8 h-full">
          <h1 className="text-2xl font-bold lg:text-2xl lg:leading-snug text-secondary pl-16">
            Nossa Missão
          </h1>
        </div>
        <div>
          <h1 className="leading-10 font-bold text-secondary opacity-70 pl-16">
            Transformar, em código, grandes histórias.
          </h1>
        </div>
        <Footer/>
      </div>
      
    </section>
  )
}
