import { FaLinkedinIn } from "react-icons/fa"
import Image, { StaticImageData } from "next/image"

export interface TeamCardProps {
  name: string
  role: string
  memberImg: string | StaticImageData
  memberImgAlt: string
  linkedinURL: string
}

const TeamCard = ({
  name,
  role,
  memberImg,
  memberImgAlt,
  linkedinURL,
}: TeamCardProps) => {
  return (
    <div className="flex flex-col items-center py-10 bg-white rounded-xl transition-transform duration-300 ease-out hover:scale-105 w-[17rem] h-[23.5rem]">
      <Image
        className="object-cover mb-8 w-28 h-28 rounded-full"
        src={memberImg}
        alt={memberImgAlt}
        width={112}
        height={112}
      />
      <h3 className="text-2xl text-[#21262C] mb-3 font-bold">{name}</h3>
      <h4 className="text-base text-[#21262C] mb-8">{role}</h4>
      <ul className="flex gap-4">
        <li className="rounded-xl group/item">
          <a
            className="block py-2 px-2 rounded-xl border transition-colors duration-300 ease-in border-primary group-hover/item:bg-primary"
            href={linkedinURL}
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn className="text-2xl transition-colors duration-300 ease-in text-primary group-hover/item:text-white" />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default TeamCard
