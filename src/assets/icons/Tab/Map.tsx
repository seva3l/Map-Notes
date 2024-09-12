import * as React from 'react';
import Svg, { SvgProps, G, Path } from 'react-native-svg';
import { memo } from 'react';

interface Props extends SvgProps{
  focused?: boolean
}
const SvgComponent = (props: Props) => (
  <Svg
  width={30}
  height={30}
  fill="none"
  viewBox="0 0 24 24"
  {...props}
>
  <G stroke={props.focused ? '#FFF' : '#A9ABAD'} strokeWidth={1.5}>
    <Path
      strokeLinecap="round"
      d="M5.875 12.573C5.308 11.25 5 9.84 5 8.515 5 4.917 8.134 2 12 2s7 2.917 7 6.515c0 3.57-2.234 7.735-5.72 9.225a3.277 3.277 0 0 1-2.56 0c-1.113-.476-2.099-1.225-2.925-2.14"
    />
    <Path d="M14 9a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
    <Path
      strokeLinecap="round"
      d="M20.96 15.5c.666.602 1.04 1.282 1.04 2 0 .925-.62 1.785-1.684 2.5M3.04 15.5C2.374 16.102 2 16.782 2 17.5 2 19.985 6.477 22 12 22c1.653 0 3.212-.18 4.586-.5"
    />
  </G>
</Svg>
);
const MapTabSVG = memo(SvgComponent);
export default MapTabSVG;
