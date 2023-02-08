import { BiUser } from "react-icons/bi";
import { ImQuotesRight } from "react-icons/im";

interface TestimonialProps {
  quote: string;
  name: string;
  role: string;
}

const TestimonialCard = ({ quote, name, role }: TestimonialProps) => {
  return (
    <div className="relative h-[20.5rem] w-[21.5rem] px-6 py-8 rounded-lg [box-shadow:_10px_20px_50px_#4689D733]">
      <div 
        className="absolute -top-4 right-1/2 translate-x-[50%] px-2 py-2 bg-primary/10 rounded-full "
      >
        <ImQuotesRight className="w-4 h-4 text-accent"/>
      </div>
      <p className="text-left text-[#21262C] opacity-70 leading-6 py-6">{quote}</p>
      <div className="flex items-center">
        <BiUser
          className="w-8 h-8 border border-[#21262C] rounded-full mr-4"
        />
        <div>
          <h4 className="text-sm text-[#21262C] mb-1">{name}</h4>
          <h5 className="text-xs text-[#21262C] opacity-70">{role}</h5>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;