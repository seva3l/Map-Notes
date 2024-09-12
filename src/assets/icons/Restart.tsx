import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const RestartSVG = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill={props.fill}
      d="M8.053 5.165a7.893 7.893 0 1 0 11.683 8.396.998.998 0 0 1 1.182-.802 1 1 0 0 1 .778 1.198 9.87 9.87 0 0 1-4.75 6.61c-4.732 2.732-10.782 1.11-13.514-3.62C.701 12.214 2.322 6.163 7.053 3.432 11.481.877 17.063 2.132 20 6.18V4a1 1 0 0 1 2 0v5.604a1.001 1.001 0 0 1-1.305.952l-5-1.604a1 1 0 0 1 .61-1.904l2.385.765A7.893 7.893 0 0 0 8.053 5.165Z"
    />
    <Path fill={props.fill} d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
  </Svg>
);
export default RestartSVG;
