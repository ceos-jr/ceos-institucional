import Image from "next/image"
import { FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa"
import { IconType } from "react-icons"

const LinkItem = ({ href, name }: { href: string; name: string }) => {
  return (
    <li>
      <a
        href={href}
        className="transition-all duration-300 ease-in-out hover:pl-2 hover:text-secondary"
      >
        {name}
      </a>
    </li>
  )
}

const MediaItem = ({ href, Icon }: { href: string; Icon: IconType }) => {
  return (
    <li>
      <a href={href}>
        <Icon
          className="p-1.5 rounded-2xl transition-colors hover:text-white border-primary text-primary border-[1px] hover:bg-primary"
          size="2.5rem"
        />
      </a>
    </li>
  )
}

function Footer() {
  return (
    <footer className="flex flex-wrap mt-8 bg-[#f5f7ff] w-full p-6">
      <div className="mx-auto mt-8 mb-8 w-full md:p-4 md:mt-0 md:mb-0 md:w-1/4">
        <Image
          src="/images/ceos_logo.svg"
          alt=""
          width={200}
          height={200}
          className="mb-4"
        />
        <p className="text-gray-500 max-w-">
          Your best partner through the digital market-place
        </p>
      </div>
      <div className="mx-auto mb-8 w-full md:mb-0 md:w-1/4">
        <h3 className="mb-2 text-2xl font-bold text-secondary">Links</h3>
        <ul className="flex flex-col gap-2 text-gray-500">
          <LinkItem href="#" name="Início" />
          <LinkItem href="#" name="Sobre nós" />
          <LinkItem href="#" name="Serviços" />
          <LinkItem href="#" name="Blog" />
        </ul>
      </div>
      <div className="mx-auto mb-8 w-full md:mb-0 md:w-1/4">
        <h3 className="mb-2 text-2xl font-bold text-secondary">Contatos</h3>
        <ul className="flex flex-col gap-2 text-gray-500">
          <li>(85)12345-6789</li>
          <li>ceos@gmail.com</li>
          <li>Fortaleza, CE.</li>
        </ul>
      </div>
      <div className="mx-auto mb-8 w-full md:mb-0 md:w-1/4">
        <ul className="flex gap-4 p-2 mb-6">
          <MediaItem href="#" Icon={FaWhatsapp} />
          <MediaItem
            href="https://www.linkedin.com/company/ceos-jr-empresa-junior-da-computa%C3%A7%C3%A3o-ufc/"
            Icon={FaLinkedin}
          />
          <MediaItem
            href="https://www.instagram.com/ceosjr/"
            Icon={FaInstagram}
          />
        </ul>
      </div>
      <div className="pt-8 mt-8 w-full text-gray-500 border-t-gray-500 border-t-[1px]">
        <p className="text-center">Copyright © CEOS All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
