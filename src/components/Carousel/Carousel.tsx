import {
  ReactNode,
  Children,
  CSSProperties,
  useState,
  useEffect,
  TouchEvent,
  cloneElement,
  ReactElement,
} from "react"
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi"
import useWindowSize from "../../hooks/useWindowSize"

interface CarouselProps {
  children: ReactNode
  className?: string
  transition?: string
  highlight?: boolean
  show?: number
}

interface WrapperProps {
  children: ReactNode
  currentItem: number
  transition: string
  highlight: boolean
  show: number
  handleTouchStart: (e: TouchEvent) => void
  handleTouchMove: (e: TouchEvent) => void
}

const SWIPE_THRESHOLD = 5
const DEFAULT_SHOW = 1
const DEFAULT_HIGHLIGHT = false
const DEFAULT_TRANSITION = "[transition:_transform_1s_ease-out]"

const isReactElement = (element: any): element is ReactElement => {
  if (element?.props !== undefined) return true
  return false
}

const Wrapper = ({
  children,
  currentItem,
  transition,
  highlight,
  show,
  handleTouchStart,
  handleTouchMove,
}: WrapperProps) => {
  const screens = Math.floor(currentItem / Math.floor(show))

  const percentage = highlight
    ? currentItem % Math.floor(show) === 0
      ? currentItem * (100 / show)
      : screens * 100
    : currentItem * (100 / show)

  const wrapperStyle = {
    transform: `translateX(-${percentage}%)`,
  } as CSSProperties

  const elements = highlight
    ? Children.toArray(children).map((child, index) => {
        if (!isReactElement(child)) return child

        // Turn opaque all elements that are not fully visible
        const opaque = index !== currentItem

        return cloneElement(
          child,
          {
            ...child.props,
            className: opaque
              ? `${child.props.className} opacity-40`
              : child.props.className,
          },
          child.props.children
        )
      })
    : children

  return (
    <div
      className={`absolute h-full w-full ${transition}`}
      style={wrapperStyle}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      {elements}
    </div>
  )
}

const Carousel = ({
  children,
  className,
  transition = DEFAULT_TRANSITION,
  highlight = DEFAULT_HIGHLIGHT,
  show = DEFAULT_SHOW,
}: CarouselProps) => {
  const [activeItem, setActiveItem] = useState(0)
  const [touchPosition, setTouchPosition] = useState<number | null>(null)
  const { width } = useWindowSize()

  // When the highlight option is active the carousel will transition the slides
  // and count the limit in a different manner
  const LENGTH = Children.toArray(children).length
  const LIMIT = LENGTH - (highlight ? 1 : show)
  const SHOW_LEFT_ARROW = show !== LENGTH && activeItem !== 0
  const SHOW_RIGHT_ARROW = show !== LENGTH && activeItem < LIMIT

  // Every time the user resizes his window, the carousel sets itself to
  // the first item
  useEffect(() => {
    setActiveItem(0)
  }, [width])

  const moveToNext = () => {
    if (activeItem >= LIMIT) return

    // Value must only range from 0 to `LIMIT`
    setActiveItem((prev) => {
      return (prev + 1) % LENGTH
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
    <div className={`relative h-[30rem] w-full overflow-hidden ${className}`}>
      <Wrapper
        show={show}
        currentItem={activeItem}
        transition={transition}
        highlight={highlight}
        handleTouchStart={handleTouchStart}
        handleTouchMove={handleTouchMove}
      >
        {children}
      </Wrapper>
      {SHOW_LEFT_ARROW && (
        <button
          onClick={moveToPrev}
          className={`
            hidden sm:block absolute outline-0 text-3xl text-primary bottom-1/2 left-2 
            [transition:_color_300ms_ease-out_transform_300ms_ease-out] z-10
            hover:text-accent hover:scale-[1.2] 
            focus:text-accent focus:scale-[1.2]
        `}
        >
          <HiOutlineChevronLeft />
        </button>
      )}
      {SHOW_RIGHT_ARROW && (
        <button
          onClick={moveToNext}
          className={`
            hidden sm:block absolute outline-0 text-3xl text-primary bottom-1/2 right-2 
            [transition:_color_300ms_ease-out_transform_300ms_ease-out] z-10
            hover:text-accent hover:scale-[1.2] 
            focus:text-accent focus:scale-[1.2]
        `}
        >
          <HiOutlineChevronRight />
        </button>
      )}
    </div>
  )
}

export default Carousel
