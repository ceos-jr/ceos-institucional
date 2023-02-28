import { useState, ChangeEvent, FocusEvent } from "react"
import Image from "next/image"

interface ContactFormData {
  name: string
  phone: string
  email: string
  message: string
}

interface Validation {
  isValid: boolean
  errorReason: string
}

interface InputValidation {
  name: Validation
  email: Validation
  phone: Validation
  message: Validation
}

const DEFAULT_FORM_DATA = {
  name: "",
  phone: "",
  email: "",
  message: "",
}

const DEFAULT_VALIDATION = {
  name: {
    isValid: true,
    errorReason: "",
  },
  email: {
    isValid: true,
    errorReason: "",
  },
  phone: {
    isValid: true,
    errorReason: "",
  },
  message: {
    isValid: true,
    errorReason: "",
  },
}

const PATTERN = {
  phone: new RegExp("[0-9]{11}"),
}

const checkInputPattern = (string: string, field: string): boolean => {
  if (field === "phone") {
    return PATTERN["phone"].test(string) || string.trim() === ""
  }
  return true
}

const ErrorMessage = ({ id, msg }: { id: string; msg: string }) => {
  return (
    <span id={id} className="block text-sm text-red-500">
      {msg}
    </span>
  )
}
export default function ContactUs() {
  return (
    <section
      className="grid grid-cols-1 gap-8 place-items-center md:grid-cols-2 container-wrapper"
      id="fale-conosco"
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
                onChange={handleChange}
                onBlur={handleFocusOut}
                value={formData.name}
                className="form-input"
                required
              />
            </div>
            <div className="w-full">
              <input
                placeholder="85 987654321"
                type="tel"
                id="tel"
                name="phone"
                onChange={handleChange}
                onBlur={handleFocusOut}
                value={formData.phone}
                aria-invalid={!validation.phone.isValid}
                aria-errormessage={validation.phone.errorReason}
                className={`form-input ${
                  !validation.phone.isValid ? "form-input-error" : ""
                }`}
              />
              {!validation.phone.isValid && (
                <ErrorMessage id="phone" msg={validation.phone.errorReason} />
              )}
            </div>
          </div>
          <div>
            <input
              placeholder="marcelojr@gmail.com"
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
              onBlur={handleFocusOut}
              value={formData.email}
              className="form-input"
              required
            />
          </div>
          <div>
            <textarea
              placeholder="Mensagem"
              id="message"
              name="message"
              onChange={handleChange}
              onBlur={handleFocusOut}
              value={formData.message}
              className="form-input"
              required
            />
          </div>
          <button
            type="submit"
            className={`py-3 px-4 mt-4 text-white rounded-lg transition-all ${
              AreInputsValid ? "bg-accent hover:scale-105" : "bg-gray-500"
            }`}
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  )
}
