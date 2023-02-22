import { useState } from "react"

interface ScrollLockReturn {
  lockScroll: () => void
  unlockScroll: () => void
  scrollBarCompensation: number
}

const useScrollLock = (): ScrollLockReturn => {
  const [scrollBarCompensation, setScrollBarComprensation] = useState<number>(0)

  const lockScroll = () => {
    setScrollBarComprensation(window.innerWidth - document.body.offsetWidth)
  }

  const unlockScroll = () => {
    setScrollBarComprensation(0)
  }

  if (typeof window !== "undefined") {
    document.body.style.overflow = scrollBarCompensation > 0 ? "hidden" : "auto"
    document.body.style.paddingRight = `${scrollBarCompensation}px`
  }
  return { lockScroll, unlockScroll, scrollBarCompensation }
}

export default useScrollLock
