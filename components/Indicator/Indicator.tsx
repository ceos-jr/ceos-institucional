import Image from "next/image"

interface IndicatorProps {
  className?: string
  leftHeight?: number
  leftWidth?: number
  rightHeight?: number
  rightWidth?: number
}

const Indicator = ({
  className,
  leftHeight = 20,
  leftWidth = 20,
  rightHeight = 20,
  rightWidth = 60,
}: IndicatorProps) => {
  return (
    <div className={`flex ${className}`}>
      <Image
        src={"/images/left-arrow.svg"}
        alt="Arrow pointed to the left"
        height={leftHeight}
        width={leftWidth}
      />
      <Image
        className="ml-6"
        src={"/images/right-arrow.svg"}
        alt="Arrow pointed to the right"
        height={rightHeight}
        width={rightWidth}
      />
    </div>
  )
}

export default Indicator
