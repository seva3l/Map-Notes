import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

interface Props extends SvgProps {
  isBig?: boolean;
}
const PauseSVG = (props: Props) => {
  if (props.isBig) {
    return (
      <Svg width={24} height={38} fill="none" {...props}>
        <Path
          fill="#fff"
          d="M5.01.333A4.667 4.667 0 0 0 .342 5v28a4.666 4.666 0 1 0 9.333 0V5A4.667 4.667 0 0 0 5.01.333Zm14 0A4.667 4.667 0 0 0 14.342 5v28a4.667 4.667 0 0 0 9.333 0V5A4.667 4.667 0 0 0 19.01.333Z"
        />
      </Svg>
    );
  }
  return (
    <Svg width={28} height={28} viewBox="-1 0 8 8" {...props}>
      <Path
        fill="#FFF"
        fillRule="evenodd"
        d="M1 0a1 1 0 0 0-1 1v6a1 1 0 0 0 2 0V1a1 1 0 0 0-1-1m5 1v6a1 1 0 0 1-2 0V1a1 1 0 0 1 2 0"
      />
    </Svg>
  );
};
export default PauseSVG;
