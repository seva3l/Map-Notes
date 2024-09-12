import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const ShuffleSVG = (props: SvgProps) => (
  <Svg
    width={24}
    height={25}
    fill="none"
    {...props}
  >
    <Path
      fill="#F5F6FF"
      d="M16.4 8.7a1 1 0 0 0 1.2 1.6l4-3a1 1 0 0 0 0-1.6l-4-3a1 1 0 1 0-1.2 1.6L18 5.5h-1.764a4.618 4.618 0 0 0-4.123 2.538 1 1 0 0 0 1.791.89A2.619 2.619 0 0 1 16.236 7.5H18l-1.6 1.2ZM5.764 19.5c1.742 0 3.335-.98 4.12-2.533a1 1 0 0 0-1.787-.898A2.618 2.618 0 0 1 5.764 17.5H3a1 1 0 1 0 0 2h2.764ZM2 6.5a1 1 0 0 1 1-1h2.528A5 5 0 0 1 10 8.264l3.789 7.578a3 3 0 0 0 2.683 1.658H18l-1.6-1.2a1 1 0 1 1 1.2-1.6l4 3a.999.999 0 0 1 0 1.6l-4 3a1 1 0 0 1-1.2-1.6l1.6-1.2h-1.528A5 5 0 0 1 12 16.736L8.211 9.158A3 3 0 0 0 5.528 7.5H3a1 1 0 0 1-1-1Z"
    />
  </Svg>
)
export default ShuffleSVG
