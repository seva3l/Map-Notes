import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const PenSVG = (props: SvgProps) => (
  <Svg
    width={18}
    height={18}
    fill="none"
    {...props}
  >
    <Path
      fill="#94C9C3"
      fillRule="evenodd"
      d="M14.405 2.095a2.34 2.34 0 0 0-3.31 0l-6.831 6.83a2.25 2.25 0 0 0-.593 1.046l-.648 2.598a.75.75 0 0 0 .91.908l2.596-.648a2.249 2.249 0 0 0 1.045-.593l6.831-6.83a2.34 2.34 0 0 0 0-3.311Zm-2.25 1.06a.84.84 0 1 1 1.19 1.19l-6.831 6.83a.75.75 0 0 1-.349.198l-1.384.347.346-1.385a.75.75 0 0 1 .197-.348l6.831-6.832Z"
      clipRule="evenodd"
    />
    <Path
      fill="#94C9C3"
      d="M3.75 15a.75.75 0 1 0 0 1.5h10.5a.75.75 0 1 0 0-1.5H3.75Z"
    />
  </Svg>
)
export default PenSVG
