import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const DeleteSVG = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#FF7373"
      fillRule="evenodd"
      d="M10 1a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 1 0 0-2h-5V2a1 1 0 0 0-1-1h-4Zm3 3h-2V3h2v1Z"
      clipRule="evenodd"
    />
    <Path
      fill="#FF7373"
      d="M10 11a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0v-6a1 1 0 0 1 1-1ZM15 12a1 1 0 0 0-2 0v6a1 1 0 0 0 2 0v-6Z"
    />
    <Path
      fill="#FF7373"
      fillRule="evenodd"
      d="M4 7a1 1 0 0 0-.99 1.141l1.755 12.283A3 3 0 0 0 7.735 23h8.53a3 3 0 0 0 2.97-2.576L20.99 8.141A1 1 0 0 0 20 7H4Zm2.745 13.141L5.153 9h13.694l-1.592 11.141a1 1 0 0 1-.99.859h-8.53a1 1 0 0 1-.99-.859Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default DeleteSVG
