import Navbar from "../components/Navbar"
export default function AboutUs() {
  return (
    <section>
      <Navbar/>
      <div>
        <h1 className="text-4xl font-bold lg:text-6xl lg:leading-snug text-secondary">Quem Somos?</h1>
      </div>
      <div>
        <p>
          Fundada em 1997, a Ceos é a Empresa Júnior do curso de Ciência da
          Computação da Universidade Federal do Ceará - UFC. Sempre focados na
          excelência e guiados por nosso lema "O céu é o limite", desenvolvemos
          soluções inovadoras e personalizadas para o seu problema por meio do
          desenvolvimento de sites institucionais, sistemas personalizados,
          acessorias e outros serviços.
        </p>
      </div>
    </section>
  )
}
