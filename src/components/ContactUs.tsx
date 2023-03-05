import Image from "next/image"

const ErrorMessage = ({ id, msg }: { id: string; msg: string }) => {
  return (
    <span id={id} className="block text-sm text-red-500">
      {msg}
    </span>
  )
}
export default function Twu() {
  return (
    <section
      className="grid grid-cols-1 gap-8 place-items-center md:grid-cols-2 container-wrapper"
      id="faleconosco"
    >
      <div className="relative w-full sm:w-3/4 md:w-full aspect-square">
        <Image src="/images/twu.svg" alt="talk with us image" fill />
      </div>
      <div className="flex flex-col gap-5 text-left">
        <h2 className="text-xl text-accent">Fale Conosco</h2>
        <h1 className="text-3xl font-medium text-secondary">
          Consulte <span className="font-extrabold">gratuitamente </span>nossos
          especialistas sobre seu projeto
        </h1>
        <p className="text-description/70">
          Não perca tempo tentando realizar seu projeto sozinho. Consulte
          gratuitamente nossos especialistas altamente qualificados e coloque
          suas ideias em prática. Agende já sua consulta!
        </p>
        <form
          className="flex flex-col gap-6 mx-auto w-full"
          action="/send-data-here"
          method="post"
        >
          <div className="flex gap-4 justify-between">
            <div className="w-full">
              <label htmlFor="name"></label>
              <input
                placeholder="Marcelo Junior"
                type="text"
                id="name"
                name="name"
                aria-invalid={false}
                aria-errormessage="name-error"
                className={`form-input ${true ? "form-input-error" : ""}`}
              />
              <ErrorMessage id="name-error" msg="Handle me" />
            </div>
            <div className="w-full">
              <input
                placeholder="85 12345678"
                type="text"
                id="tel"
                name="tel"
                className={`form-input ${false ? "form-input-error" : ""}`}
              />
            </div>
          </div>
          <div>
            <input
              placeholder="marcelojr@gmail.com"
              type="text"
              id="email"
              name="email"
              className={`form-input ${false ? "form-input-error" : ""}`}
            />
          </div>
          <div>
            <textarea
              placeholder="Mensagem"
              id="message"
              name="message"
              className={`form-input ${false ? "form-input-error" : ""}`}
            />
          </div>
          <button
            type="submit"
            className={`py-3 px-4 mt-4 text-white rounded-lg transition-all ${
              true ? "bg-gray-500" : "bg-accent hover:scale-105"
            }`}
            disabled={true}
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  )
}
