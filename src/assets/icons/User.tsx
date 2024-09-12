import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const UserBtnSVG = (props: SvgProps) => (
  <Svg width={28} height={28} fill={props.color} {...props}>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.73 27.032h.017c4.362-.002 9.714-.512 9.714-4.367 0-2.87-3.188-5.576-5.122-6.8a.37.37 0 0 1-.049-.577c1.623-1.54 2.331-4.211 2.331-7.518-.145-3.764-3.17-6.77-6.88-6.77-3.693 0-6.707 2.978-6.878 6.717 0 3.36.926 6.26 2.308 7.57a.37.37 0 0 1-.049.579C7.188 17.089 4 19.795 4 22.666c0 3.854 5.352 4.364 9.714 4.366h.016Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default UserBtnSVG;
