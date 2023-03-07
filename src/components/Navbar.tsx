import Image from "next/image"
import Link from "next/link"
import { useState, useRef, useEffect } from "react"
import { RxCross2, RxHamburgerMenu } from "react-icons/rx"
import useScrollLock from "../hooks/useScrollLock"

type NavItemData = {
  text: string
  url: string
}

interface NavItemProps {
  text: string
  url: string
}

interface NavbarProps {
  navbarData: NavItemData[]
}

const NavItem = ({ text, url }: NavItemProps) => {
  return (
    <li className="transition-all duration-75 ease-linear hover:scale-110">
      <Link className="text-lg" href={url} scroll={false}>
        {text}
      </Link>
    </li>
  )
}

const NavItemMobile = ({ text, url }: NavItemProps) => {
  return (
    <li className="w-full text-gray-800 border-b border-gray-200 transition-colors duration-300 ease-in hover:text-primary">
      <Link className="block py-4 w-full text-center" href={url} scroll={false}>
        {text}
      </Link>
    </li>
  )
}

const Navbar = ({ navbarData }: NavbarProps) => {
  const [show, setShow] = useState(true)
  const { lockScroll, unlockScroll, scrollBarCompensation } = useScrollLock()
  const heightRef = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentHeight = window.scrollY

      if (heightRef.current - currentHeight < 0) {
        setShow(false)
      } else {
        setShow(true)
      }

      heightRef.current = currentHeight
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  })

  const [open, setOpen] = useState(false)

  const toggleNavbar = () => {
    if (!open) {
      lockScroll()
    } else {
      unlockScroll()
    }
    setOpen((previous) => !previous)
  }

  return (
    <nav
      className={`sticky top-0 left-0 z-50 bg-white/70 backdrop-blur justify-between items-center py-4 px-8 transition-transform duration-300 ease-out ${
        show ? "shadow-md shadow-primary/40" : "-translate-y-48"
      } ${scrollBarCompensation > 0 ? "w-screen" : "w-full"}`}
    >
      <div className="hidden lg:flex">
        <Link href="/">
          <Image src="/images/ceos_logo.svg" alt="" width={150} height={120} />
        </Link>
        <ul className="flex flex-row gap-x-8 items-center py-0 px-4 ml-auto">
          {navbarData.map((item, index) => {
            // The last item is the styled button
            if (index === navbarData.length - 1) {
              return (
                <button
                  className="bg-white border-2 border-[#FF9100] rounded-md py-2 px-4 transition-all duration-100 text-base hover:bg-[#FF9100] hover:scale-110 hover:text-white"
                  key={item.url + item.text}
                >
                  <Link href={item.url}>{item.text}</Link>
                </button>
              )
            }

            return (
              <NavItem
                key={item.url + item.text}
                text={item.text}
                url={item.url}
              />
            )
          })}
        </ul>
      </div>
      <div className="flex justify-between lg:hidden">
        <Link href="/">
          <Image
            src="/images/ceos_logo.svg"
            alt="logo da ceos"
            width={150}
            height={120}
          />
        </Link>
        <button
          className="py-2 px-2 text-2xl rounded transition-colors lg:hidden hover:text-primary"
          onClick={toggleNavbar}
        >
          {open ? (
            <RxCross2 style={{ marginRight: scrollBarCompensation }} />
          ) : (
            <RxHamburgerMenu />
          )}
        </button>
        <ul
          className={
            "absolute flex flex-col -top-96 left-0 w-full bg-white opacity-0 transition duration-500 ease-in-out lg:hidden shadow-md shadow-primary/40" +
            (open ? " translate-y-[29rem] opacity-100" : "")
          }
        >
          {navbarData.map((item) => {
            return (
              <NavItemMobile
                key={item.url + item.text}
                text={item.text}
                url={item.url}
              />
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
