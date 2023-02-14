import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa"
import Image from "next/image"

interface TeamCardProps {
  name: string
  role: string
  memberImg: string
  memberImgAlt: string
  facebookURL: string
  twitterURL: string
  linkedinURL: string
  instagramURL: string
}

const TeamCard = ({
  name,
  role,
  memberImg,
  memberImgAlt,
  facebookURL,
  twitterURL,
  linkedinURL,
  instagramURL,
}: TeamCardProps) => {
  return (
    <div className="flex flex-col items-center w-[17rem] h-[23.5rem] py-10 rounded-xl bg-white hover:scale-105 transition-transform duration-300 ease-out">
      <Image
        className="h-28 w-28 object-cover mb-8 rounded-full"
        src={memberImg}
        alt={memberImgAlt}
        width={112}
        height={112}
      />
      <h3 className="text-2xl text-[#21262C] mb-3 font-bold">{name}</h3>
      <h4 className="text-base text-[#21262C] mb-8">{role}</h4>
      <ul className="flex gap-4">
        <li className="group/item rounded-xl">
          <a
            className="block px-2 py-2 border border-primary rounded-xl transition-colors duration-300 ease-in group-hover/item:bg-primary"
            href={facebookURL}
            target="_blank"
            rel="external"
          >
            <FaFacebookF className="text-primary text-sm transition-colors duration-300 ease-in group-hover/item:text-white" />
          </a>
        </li>
        <li className="group/item rounded-xl">
          <a
            className="block px-2 py-2 border border-primary rounded-xl transition-colors duration-300 ease-in group-hover/item:bg-primary"
            href={twitterURL}
            target="_blank"
            rel="external"
          >
            <FaTwitter className="text-primary text-sm transition-colors duration-300 ease-in group-hover/item:text-white" />
          </a>
        </li>
        <li className="group/item rounded-xl">
          <a
            className="block px-2 py-2 border border-primary rounded-xl transition-colors duration-300 ease-in group-hover/item:bg-primary"
            href={linkedinURL}
            target="_blank"
            rel="external"
          >
            <FaLinkedinIn className="text-primary text-sm transition-colors duration-300 ease-in group-hover/item:text-white" />
          </a>
        </li>
        <li className="group/item rounded-xl">
          <a
            className="block px-2 py-2 border border-primary rounded-xl transition-colors duration-300 ease-in group-hover/item:bg-primary"
            href={instagramURL}
            target="_blank"
            rel="external"
          >
            <FaInstagram className="text-primary text-sm transition-colors duration-300 ease-in group-hover/item:text-white" />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default TeamCard
