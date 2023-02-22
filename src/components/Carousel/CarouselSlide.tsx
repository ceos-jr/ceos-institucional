import { ReactNode, CSSProperties } from "react"

interface CarouselSlideProps {
  children: ReactNode
  position: number
  className?: string
}

const CarouselSlide = ({
  children,
  position,
  className,
}: CarouselSlideProps) => {
  const itemStyle = {
    transform: `translateX(${position * 100}%)`,
  } as CSSProperties

  return (
    <div
      className={`absolute h-full w-full [transition:_opacity_300ms_ease-out] ${className}`}
      style={itemStyle}
    >
      {children}
    </div>
  )
}

export default CarouselSlide
