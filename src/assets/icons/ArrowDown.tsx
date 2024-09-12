import * as React from 'react';
import { useColorScheme } from 'react-native';
import Svg, { SvgProps, Path } from 'react-native-svg';
const ArrowDownSVG = (props: SvgProps) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <Path
        stroke={isDarkMode ? '#FFF' : '#C5C5C6'}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d="m19.92 8.95-6.52 6.52c-.77.77-2.03.77-2.8 0L4.08 8.95"
      />
    </Svg>
  );
};
export default ArrowDownSVG;
