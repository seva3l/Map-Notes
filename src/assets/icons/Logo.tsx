import * as React from 'react';
import Svg, { SvgProps, G, Path } from 'react-native-svg';
import { memo } from 'react';
const SvgComponent = (props: SvgProps) => (
  <Svg
    width={100}
    height={100}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <G fill="#1C274C" fillRule="evenodd" clipRule="evenodd">
      <Path d="M6 8.107C6 4.734 8.686 2 12 2s6 2.734 6 6.107c0 3.347-1.915 7.252-4.903 8.649a2.587 2.587 0 0 1-2.194 0C7.915 15.359 6 11.454 6 8.107ZM12 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
      <Path
        d="M3.627 14.534a.75.75 0 0 1-.122 1.054c-.573.454-.755.855-.755 1.162 0 .243.11.538.44.88.334.345.856.695 1.566 1.017 1.254.569 2.988 1 4.994 1.187v-.459a.75.75 0 0 1 1.244-.564l1.5 1.312a.75.75 0 0 1 0 1.129l-1.5 1.313A.75.75 0 0 1 9.75 22v-.66c-2.185-.191-4.14-.659-5.614-1.327-.814-.369-1.515-.815-2.024-1.34-.511-.53-.862-1.179-.862-1.923 0-.95.567-1.738 1.324-2.338a.75.75 0 0 1 1.053.122Zm16.746 0a.75.75 0 0 1 1.053-.122c.757.6 1.324 1.388 1.324 2.338 0 1.378-1.168 2.41-2.547 3.101-1.441.723-3.412 1.234-5.627 1.459a.75.75 0 0 1-.152-1.493c2.098-.212 3.877-.69 5.107-1.307 1.294-.648 1.719-1.303 1.719-1.76 0-.307-.182-.708-.755-1.162a.75.75 0 0 1-.122-1.054Z"
        opacity={0.5}
      />
    </G>
  </Svg>
);
const LogoSVG = memo(SvgComponent);
export default LogoSVG;
