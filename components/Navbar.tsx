import Image from "next/image"
import { useState, useRef, useEffect } from "react"
import { RxCross2, RxHamburgerMenu } from "react-icons/rx"
import useScrollLock from "../hooks/useScrollLock"

const NavItemData = [
  {
    text: "Início",
    url: "#",
  },
  {
    text: "Sobre nós",
    url: "#",
  },
  {
    text: "Portfólio",
    url: "#",
  },
  {
    text: "Blog",
    url: "#",
  },
  {
    text: "Fale conosco",
    url: "#",
  },
]

interface NavItemProps {
  text: string
  url: string
}

const NavItemMobile = ({ text, url }: NavItemProps) => {
  return (
    <li className="w-full text-gray-800 border-b border-gray-200 hover:text-primary transition-colors duration-300 ease-in">
      <a href={url} className="block text-center w-full py-4">
        {text}
      </a>
    </li>
  )
}

const Navbar = () => {
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
      <div className="hidden lg:flex ">
        <Image src={"/Navbar/Ceos.svg"} alt="" width={150} height={120} />
        <ul className="flex flex-row items-center gap-x-8 ml-auto py-0 px-4">
          <li className="transition-all duration-75 ease-linear hover:scale-110">
            <a className="text-lg" href="#">
              Início
            </a>
          </li>
          <li className="transition-all duration-75 ease-linear hover:scale-110">
            <a className="text-lg" href="#">
              Sobre nós
            </a>
          </li>
          <li className="transition-all duration-75 ease-linear hover:scale-110">
            <a className="text-lg" href="#">
              Portfólio
            </a>
          </li>
          <li className="transition-all duration-75 ease-linear hover:scale-110">
            <a className="text-lg" href="#">
              Blog
            </a>
          </li>
          <button className="bg-white border-2 border-[#FF9100] rounded-md py-2 px-4 transition-all duration-100 text-base hover:bg-[#FF9100] hover:scale-110 hover:text-white">
            <a className="" href="#" rel="">
              Fale conosco
            </a>
          </button>
        </ul>
      </div>
      <div className="flex lg:hidden justify-between">
        <Image src={"/Navbar/Ceos.svg"} alt="" width={150} height={120} />
        <button
          className="bg-white px-2 py-2 rounded lg:hidden hover:text-primary text-2xl transition-colors"
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
          {NavItemData.map((item) => {
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
