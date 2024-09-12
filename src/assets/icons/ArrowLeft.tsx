import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const ArrowLeftSVG = (props: SvgProps) => (
  <Svg width={40} height={40} fill="none" {...props}>
    <Path
      fill="#101010"
      fillRule="evenodd"
      d="M24.512 10.488a1.667 1.667 0 0 1 0 2.357L17.357 20l7.155 7.155a1.667 1.667 0 0 1-2.357 2.357l-8.333-8.334a1.667 1.667 0 0 1 0-2.356l8.333-8.334a1.667 1.667 0 0 1 2.357 0Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default ArrowLeftSVG;
