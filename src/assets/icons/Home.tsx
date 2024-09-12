import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const HomeBtnSVG = (props: SvgProps) => (
  <Svg width={28} height={28} fill={props.color} {...props}>
    <Path
      fill={props.color}
      d="M23.836 9.166 16.341 3.17c-1.465-1.167-3.753-1.179-5.207-.012L3.64 9.166c-1.076.858-1.728 2.575-1.5 3.925l1.443 8.628c.332 1.934 2.128 3.456 4.085 3.456h12.13c1.934 0 3.765-1.556 4.097-3.467l1.441-8.628c.206-1.34-.446-3.056-1.499-3.914ZM14.59 20.598c0 .47-.389.858-.858.858a.865.865 0 0 1-.858-.858v-3.433c0-.47.389-.858.858-.858.47 0 .858.389.858.858v3.433Z"
      // opacity={0.3}
    />
  </Svg>
);
export default HomeBtnSVG;
