import { useState } from "react"

interface ScrollLockReturn {
  lockScroll: () => void
  unlockScroll: () => void
  locked: boolean
  scrollBarCompensation: number
}

const useScrollLock = (): ScrollLockReturn => {
  const [scrollBarCompensation, setScrollBarComprensation] = useState<number>(0)
  const [locked, setLocked] = useState<boolean>(false)

  /* Aqui é onde a mágica acontece
   * Calculamos a distancia entre a largura da tela inteira contra o tamanho do body sem a scrollbar
   * E setamos o valor do scrollBarCompensation */
  const lockScroll = () => {
    setScrollBarComprensation(window.innerWidth - document.body.offsetWidth)
    setLocked(true)
  }

  const unlockScroll = () => {
    setScrollBarComprensation(0)
    setLocked(false)
  }

  /* Necessario para quando o NextJS fizer build
   * A window não estará disponivel
   * Se a variavel locked for verdadeira quer dizer que ela está visivel
   * E setamos o overflow do body pra hidden
   * Se não, setamos o overflow pra auto
   * E sempre ajustamos o valor do paddingRight para compensar a scrollbar
   * */
  if (typeof window !== "undefined") {
    document.body.style.overflow = locked ? "hidden" : "auto"
    document.body.style.paddingRight = `${scrollBarCompensation}px`
  }
  return { lockScroll, unlockScroll, locked, scrollBarCompensation }
}

export default useScrollLock
