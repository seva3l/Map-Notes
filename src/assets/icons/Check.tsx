import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const CheckSVG = (props: SvgProps) => (
  <Svg
    width={34}
    height={34}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      d="M17 31.167c7.824 0 14.167-6.343 14.167-14.167S24.824 2.833 17 2.833 2.833 9.176 2.833 17 9.176 31.167 17 31.167Z"
    />
    <Path
      fill="#4B9A91"
      d="M22.652 12.75a1.43 1.43 0 0 0-1.014.398l-5.256 5.313c-.364.365-.73.297-1.015-.132l-1.413-2.125a1.445 1.445 0 0 0-1.987-.4 1.455 1.455 0 0 0-.399 1.992l1.414 2.125c1.275 1.918 3.763 2.162 5.388.533l5.298-5.269a1.462 1.462 0 0 0 0-2.037 1.43 1.43 0 0 0-1.013-.398h-.003Z"
    />
  </Svg>
)
export default CheckSVG
