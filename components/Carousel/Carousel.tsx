import { ReactNode, Children, CSSProperties, useState, TouchEvent } from "react"

interface CarouselProps {
  children: ReactNode
  className?: string
}

interface WrapperProps {
  children: ReactNode
  currentItem: number
  handleTouchStart: (e: TouchEvent) => void
  handleTouchMove: (e: TouchEvent) => void
}

const SWIPE_THRESHOLD = 5

const Wrapper = ({
  children,
  currentItem,
  handleTouchStart,
  handleTouchMove,
}: WrapperProps) => {
  const wrapperStyle = {
    transform: `translateX(-${currentItem * 100}%)`,
  } as CSSProperties
  return (
    <div
      className="absolute h-full w-full [transition:_transform_1s_ease-out]"
      style={wrapperStyle}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      {children}
    </div>
  )
}

const Carousel = ({ children, className }: CarouselProps) => {
  const [activeItem, setActiveItem] = useState(0)
  const [touchPosition, setTouchPosition] = useState<number | null>(null)
  const NUM_OF_ITEMS = Children.toArray(children).length

  const moveToNext = () => {
    if (activeItem === NUM_OF_ITEMS - 1) return

    // Value must only range from 0 to `NUM_OF_ITEMS - 1`
    setActiveItem((prev) => {
      return (prev + 1) % NUM_OF_ITEMS; 
    });
  }

  const moveToPrev = () => {
    if (activeItem === 0) return

    // Turn prev into a positive number in case it is negative
    setActiveItem((prev) => {
      return (prev < 0 ? -prev : prev) - 1; 
    });
  }

  const handleTouchStart = (e: TouchEvent) => {
    const touchDown = e.touches[0].clientX

    setTouchPosition(touchDown)
  }

  const handleTouchMove = (e: TouchEvent) => {
    const touchDown = touchPosition
    
    if (touchDown === null) return
        
    const currentTouch = e.touches[0].clientX
    const difference = touchDown - currentTouch

    if (difference > SWIPE_THRESHOLD) {
      moveToNext()
    }

    if (difference < -SWIPE_THRESHOLD) {
      moveToPrev()
    }

    setTouchPosition(null)
  }

  return (
    <div className={`relative h-96 w-full overflow-hidden ${className}`}>
      <Wrapper
        currentItem={activeItem}
        handleTouchStart={handleTouchStart}
        handleTouchMove={handleTouchMove}
      >
        {children}
      </Wrapper>
    </div>
  )
}

export default Carousel
