import {
  ReactNode,
  Children,
  CSSProperties,
  useState,
  TouchEvent,
  cloneElement,
  ReactElement,
  MouseEvent,
} from "react"
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi"

interface CarouselProps {
  children: ReactNode
  className?: string
  show?: number
}

interface WrapperProps {
  children: ReactNode
  currentItem: number
  show: number
  handleTouchStart: (e: TouchEvent) => void
  handleTouchMove: (e: TouchEvent) => void
}

const isReactElement = (element: any): element is ReactElement => {
  if (element?.props !== undefined) return true
  return false
}

const SWIPE_THRESHOLD = 5

const Wrapper = ({
  children,
  currentItem,
  show,
  handleTouchStart,
  handleTouchMove,
}: WrapperProps) => {
  const screens = Math.floor(currentItem / Math.floor(show));
  
  const percentage = currentItem % Math.floor(show) === 0 
    ? currentItem * (100 / show)
    : screens * 100

  const wrapperStyle = {
    transform: `translateX(-${percentage}%)`,
  } as CSSProperties

  const elements = Children.toArray(children).map((child, index) => {
    if (!isReactElement(child)) return child
    
    // Turn opaque all elements that are not fully visible
    const opaque = index !== currentItem;  

    return cloneElement(
      child,
      { 
        ...child.props,  
        className: opaque ? `${child.props.className} opacity-40` : child.props.className,
      },
      child.props.children
    )
  })

  return (
    <div
      className="absolute h-full w-full [transition:_transform_1s_ease-out]"
      style={wrapperStyle}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      {elements}
    </div>
  )
}

const Carousel = ({ children, className, show = 1 }: CarouselProps) => {
  const [activeItem, setActiveItem] = useState(0)
  const [touchPosition, setTouchPosition] = useState<number | null>(null)

  const NUM_OF_ITEMS = Children.toArray(children).length

  const moveToNext = () => {
    if (activeItem === NUM_OF_ITEMS - 1) return

    // Value must only range from 0 to `NUM_OF_ITEMS - 1`
    setActiveItem((prev) => {
      return (prev + 1) % NUM_OF_ITEMS
    })
  }

  const moveToPrev = () => {
    if (activeItem === 0) return

    // Turn prev into a positive number in case it is negative
    setActiveItem((prev) => {
      return (prev < 0 ? -prev : prev) - 1
    })
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
    <div 
      className={`relative h-[26rem] w-full overflow-hidden ${className}`}
    >
      <Wrapper
        show={show}
        currentItem={activeItem}
        handleTouchStart={handleTouchStart}
        handleTouchMove={handleTouchMove}
      >
        {children}
      </Wrapper>
      <button
        onClick={moveToPrev}
        className={`
          hidden md:block absolute outline-0 text-xl text-primary bottom-0 left-[45%] 
          [transition:_color_300ms_ease-out_transform_300ms_ease-out] z-10
          hover:text-accent hover:scale-[1.3] 
          focus:text-accent focus:scale-[1.3]
        `}
      >
        <HiOutlineChevronLeft />
      </button>
      <button
        onClick={moveToNext}
        className={`
          hidden md:block absolute outline-0 text-xl text-primary bottom-0 right-[45%] 
          [transition:_color_300ms_ease-out_transform_300ms_ease-out] z-10
          hover:text-accent hover:scale-[1.3] 
          focus:text-accent focus:scale-[1.3]
        `}
      >
        <HiOutlineChevronRight />
      </button>
    </div>
  )
}

export default Carousel
