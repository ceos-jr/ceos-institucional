import { useState } from "react"

interface ScrollLockReturn {
  lockScroll: () => void
  unlockScroll: () => void
  scrollBarCompensation: number
}

const useScrollLock = (): ScrollLockReturn => {
  const [scrollBarCompensation, setScrollBarComprensation] = useState<number>(0)

  /* Aqui é onde a mágica acontece
   * Calculamos a distancia entre a largura da tela inteira contra o tamanho do body sem a scrollbar
   * E setamos o valor do scrollBarCompensation */
  const lockScroll = () => {
    setScrollBarComprensation(window.innerWidth - document.body.offsetWidth)
  }

  const unlockScroll = () => {
    setScrollBarComprensation(0)
  }

  /* Necessario para quando o NextJS fizer build
   * A window não estará disponivel
   * Se o tamanho da scrollbar for maior que 0, quer dizer que ela está visivel
   * E setamos o overflow do body pra hidden
   * Se não, setamos o overflow pra auto
   * E sempre ajustamos o valor do paddingRight para compensar a scrollbar
   * */
  if (typeof window !== "undefined") {
    document.body.style.overflow = scrollBarCompensation > 0 ? "hidden" : "auto"
    document.body.style.paddingRight = `${scrollBarCompensation}px`
  }
  return { lockScroll, unlockScroll, scrollBarCompensation }
}

export default useScrollLock
