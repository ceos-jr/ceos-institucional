import React from "react"

interface ScrollLockReturn {
  lockScroll: () => void
  unlockScroll: () => void
}

const useScrollLock = (): ScrollLockReturn => {
  const lockScroll = () => {
    const scrollBarCompensation = window.innerWidth - document.body.offsetWidth
    document.body.style.overflow = "hidden"
    document.body.style.paddingRight = `${scrollBarCompensation}px`
  }

  const unlockScroll = () => {
    document.body.style.overflow = "auto"
    document.body.style.paddingRight = "0px"
  }

  return { lockScroll, unlockScroll }
}

export default useScrollLock
