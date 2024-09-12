import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const EmailSVG = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#4B9A91"
      fillRule="evenodd"
      d="M7 4a5 5 0 0 0-5 5v6a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V9a5 5 0 0 0-5-5H7Zm.625 4.22a1 1 0 1 0-1.25 1.56l2.502 2.002a5 5 0 0 0 6.246 0l2.502-2.001a1 1 0 1 0-1.25-1.562l-2.5 2.001a3 3 0 0 1-3.749 0l-2.501-2Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default EmailSVG
