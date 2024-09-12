import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
import { memo } from 'react';

const SvgComponent = (props: SvgProps) => {
  return(
    <Svg
      width={35}
      height={35}
      fill="none"
      {...props}
    >
      <Path
        stroke={'#000'}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.188}
        d="M13.125 14.583a2.917 2.917 0 1 0 0-5.833 2.917 2.917 0 0 0 0 5.833Z"
      />
      <Path
        stroke={'#000'}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.188}
        d="M17.5 2.917h-4.375c-7.292 0-10.209 2.917-10.209 10.208v8.75c0 7.292 2.917 10.209 10.209 10.209h8.75c7.291 0 10.208-2.917 10.208-10.209v-5.833"
      />
      <Path
        stroke={'#000'}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.188}
        d="M23.509 7.452c-.482-1.516.087-3.397 1.662-3.908.832-.262 1.867-.044 2.45.758.554-.83 1.619-1.035 2.45-.758 1.59.51 2.159 2.392 1.677 3.908-.758 2.392-3.383 3.646-4.112 3.646-.744 0-3.354-1.225-4.127-3.646ZM3.894 27.635l7.19-4.827c1.151-.773 2.814-.685 3.85.204l.48.423c1.138.977 2.975.977 4.113 0l6.067-5.206c1.137-.977 2.975-.977 4.112 0l2.377 2.042"
      />
    </Svg>
  );
};
const GallerySVG = memo(SvgComponent);
export default GallerySVG;
