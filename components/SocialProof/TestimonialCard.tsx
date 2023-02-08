import { BiUser } from "react-icons/bi";
import { ImQuotesRight } from "react-icons/im";

interface TestimonialProps {
  quote: string;
  name: string;
  role: string;
}

const TestimonialCard = ({ quote, name, role }: TestimonialProps) => {
  return (
    <div 
      className={`
        relative px-6 py-8 mx-4 max-w-[35rem] rounded-xl 
        [box-shadow:_10px_20px_50px_#4689D733]
      `}
    >
      <div 
        className={`
          absolute -top-4 right-1/2 translate-x-[50%] px-2 py-2 bg-primary/10 rounded-full
          md:px-4 md:py-4 md:-top-6
        `}
      >
        <ImQuotesRight
          className="w-4 h-4 text-accent md:w-6 md:h-6"
        />
      </div>
      <p className="text-left text-[#21262C] opacity-70 py-6 leading-6 md:leading-7">{quote}</p>
      <div className="flex items-center">
        <BiUser
          className="w-8 h-8 text-[#21262C] border border-[#21262C] rounded-full mr-4 md:w-9 md:h-9"
        />
        <div>
          <h4 className="text-sm text-[#21262C] mb-1 font-semibold">{name}</h4>
          <h5 className="text-xs text-[#21262C] opacity-70">{role}</h5>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;