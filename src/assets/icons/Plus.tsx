import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const PlusSVG = (props: SvgProps) => (
  <Svg
    width={30}
    height={30}
    fill="none"
    {...props}
  >
    <Path
      fill={props.color ? props.color : '#FFF'}
      d="M22.5 15.938h-15A.944.944 0 0 1 6.562 15c0-.512.425-.938.938-.938h15c.512 0 .938.426.938.938a.944.944 0 0 1-.938.938Z"
    />
    <Path
      fill={props.color ? props.color : '#FFF'}
      d="M15 23.438a.944.944 0 0 1-.938-.938v-15c0-.513.426-.938.938-.938s.938.425.938.938v15a.944.944 0 0 1-.938.938Z"
    />
  </Svg>
);
export default PlusSVG;
