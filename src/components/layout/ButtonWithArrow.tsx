import Link from "next/link"
import { BsArrowRight } from "react-icons/bs"

interface ButtonWithArrowProps {
  name: string
  href: string
  className?: string
  scroll?: boolean
}

const ButtonWithArrow = ({
  name,
  href,
  className,
  scroll = false,
}: ButtonWithArrowProps) => {
  return (
    <button
      className={`text-white shadow-lg bg-accent rounded-md transition-all hover:scale-105 ${className}`}
    >
      <Link
        href={href}
        scroll={scroll}
        className="flex justify-between items-center py-3 px-4"
      >
        <span className="font-semibold">{name}</span>
        <BsArrowRight className="text-3xl" />
      </Link>
    </button>
  )
}

export default ButtonWithArrow
