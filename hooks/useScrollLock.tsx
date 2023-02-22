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
    document.body.style.overflow = "hidden"
    document.body.style.paddingRight = `${scrollBarCompensation}px`
  }

  const unlockScroll = () => {
    document.body.style.overflow = "auto"
    document.body.style.paddingRight = "0px"
  }

  return { lockScroll, unlockScroll, scrollBarCompensation }
}

export default useScrollLock
