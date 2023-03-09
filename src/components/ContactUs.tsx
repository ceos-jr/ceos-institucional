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

const PATTERN = /^([1-9]{2}\s?)?[9]?\d{4}(-|\s)?\d{4}$/

const checkInputPattern = (str: string, field: string): boolean => {
  if (field === "phone") {
    return PATTERN.test(str) || str.trim() === ""
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

export default function Twu() {
  const [formData, setFormData] = useState<ContactFormData>(DEFAULT_FORM_DATA)
  const [validation, setValidation] =
    useState<InputValidation>(DEFAULT_VALIDATION)

  const AreInputsValid = Object.values(validation).every(
    (item) => item.isValid === true
  )

  const handleFocusOut = (
    e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const target = e.target
    const { name, value, required } = target
    const patternValid = checkInputPattern(value, name)
    const lengthValid = required
      ? value.trim().length === 0
        ? false
        : true
      : true
    const errorReason = lengthValid
      ? patternValid
        ? ""
        : "Campo não obedece ao padrão"
      : "Campo obrigatório"

    setValidation((previous) => {
      return {
        ...previous,
        [name]: {
          isValid: lengthValid && patternValid,
          errorReason: errorReason,
        },
      }
    })
  }

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const target = e.target

    if (target.name === "phone") {
      const patternValid = checkInputPattern(target.value, target.name)
      const errorReason = patternValid ? "" : "Campo não obedece ao padrão"

      setValidation((previous) => {
        return {
          ...previous,
          [target.name]: {
            isValid: patternValid,
            errorReason: errorReason,
          },
        }
      })
    }

    setFormData((previous) => {
      return {
        ...previous,
        [target.name]: target.value,
      }
    })
  }

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
          Não perca tempo tentando realizar seu projeto sozinho. Ajude sua
          empresa a refletir seu verdadeiro potencial por meio de projetos
          inovadores. Agende já sua consulta!
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
                aria-invalid={!validation.name.isValid}
                aria-errormessage={validation.name.errorReason}
                className={`form-input ${
                  !validation.name.isValid ? "form-input-error" : ""
                }`}
                required
              />
              {!validation.name.isValid && (
                <ErrorMessage
                  id="name-error"
                  msg={validation.name.errorReason}
                />
              )}
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
                <ErrorMessage
                  id="phone-error"
                  msg={validation.phone.errorReason}
                />
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
              aria-invalid={!validation.email.isValid}
              aria-errormessage={validation.email.errorReason}
              className={`form-input ${
                !validation.email.isValid ? "form-input-error" : ""
              }`}
              required
            />
            {!validation.email.isValid && (
              <ErrorMessage
                id="email-error"
                msg={validation.email.errorReason}
              />
            )}
          </div>
          <div>
            <textarea
              placeholder="Mensagem"
              id="message"
              name="message"
              onChange={handleChange}
              onBlur={handleFocusOut}
              value={formData.message}
              aria-invalid={!validation.message.isValid}
              aria-errormessage={validation.message.errorReason}
              className={`form-input ${
                !validation.message.isValid ? "form-input-error" : ""
              }`}
              required
            />
            {!validation.email.isValid && (
              <ErrorMessage
                id="message-error"
                msg={validation.email.errorReason}
              />
            )}
          </div>
          <button
            type="submit"
            className={`py-3 px-4 mt-4 text-white rounded-lg transition-all ${
              AreInputsValid ? "bg-accent hover:scale-105" : "bg-gray-500"
            }`}
            disabled={!AreInputsValid ? true : false}
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  )
}
