import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
import { memo } from 'react';

interface Props extends SvgProps{
  focused?: boolean
}
const SvgComponent = (props: Props) => (
  <Svg
    width={30}
    height={30}
    viewBox="0 0 32 32"
    {...props}
  >
    <Path fill={props.focused ? '#FFF' : '#A9ABAD'} d="M25 26a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V5h10V3H5v23a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3V13h-2Z" />
    <Path fill={props.focused ? '#FFF' : '#A9ABAD'} d="M27.12 2.88a3.08 3.08 0 0 0-4.24 0L17 8.75l-1 5.3L21.25 13l5.87-5.87a3 3 0 0 0 0-4.25Zm-6.86 8.27-1.76.35.35-1.76 3.32-3.33 1.42 1.42Zm5.45-5.44-.71.7L23.59 5l.7-.71a1 1 0 0 1 1.42 0 1 1 0 0 1 0 1.42Z" />
  </Svg>
);
const NoteTabSVG = memo(SvgComponent);
export default NoteTabSVG;
