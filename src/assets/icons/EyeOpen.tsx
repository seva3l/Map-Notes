import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

function EyeOpenSVG(props: SvgProps) {
  return (
    <Svg viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        opacity={0.1}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.85 7.05a7 7 0 00-9.9 0L4.829 9.172c-1.334 1.333-2 2-2 2.828 0 .828.666 1.495 2 2.828l2.12 2.122a7 7 0 009.9 0l2.122-2.122c1.333-1.333 2-2 2-2.828 0-.828-.667-1.495-2-2.828L16.849 7.05zM12 8.75a3.25 3.25 0 100 6.5 3.25 3.25 0 000-6.5z"
        fill="#323232"
      />
      <Path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" stroke="#323232" strokeWidth={2} />
      <Path
        d="M6.95 7.05a7 7 0 019.9 0l2.12 2.122c1.334 1.333 2 2 2 2.828 0 .828-.666 1.495-2 2.828l-2.12 2.122a7 7 0 01-9.9 0l-2.122-2.122c-1.333-1.333-2-2-2-2.828 0-.828.667-1.495 2-2.828L6.95 7.05z"
        stroke="#323232"
        strokeWidth={2}
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default EyeOpenSVG;
