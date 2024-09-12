import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
import { memo } from 'react';
import {Colors} from '@constants/Colors';
const SvgComponent = (props: SvgProps) => {
    return(
        <Svg
          width={18}
          height={18}
          fill="none"
          {...props}
        >
          <Path
            fill={Colors.light.text}
            stroke={Colors.light.text}
            strokeWidth={0.76}
            d="m14.474 9.314.269-.269-.27-.269-1.522-1.522a.186.186 0 0 1 0-.258c.07-.069.189-.069.258 0l1.92 1.92c.07.07.07.189 0 .258l-1.92 1.92a.177.177 0 0 1-.129.054.177.177 0 0 1-.129-.054.186.186 0 0 1 0-.258l1.523-1.522Z"
          />
          <Path
            fill={Colors.light.text}
            stroke={Colors.light.text}
            strokeWidth={0.76}
            d="M14.948 9.227H7.32a.187.187 0 0 1-.182-.182c0-.098.085-.183.182-.183h7.628c.097 0 .182.085.182.183a.187.187 0 0 1-.182.182Z"
          />
          <Path
            fill={Colors.light.text}
            d="M8.82 15.563c-3.862 0-6.562-2.7-6.562-6.563 0-3.862 2.7-6.563 6.562-6.563.308 0 .563.256.563.563a.567.567 0 0 1-.563.563C5.618 3.563 3.383 5.797 3.383 9c0 3.203 2.235 5.438 5.437 5.438.308 0 .563.255.563.562a.567.567 0 0 1-.563.563Z"
          />
        </Svg>
      );
};
const SignOutSVG = memo(SvgComponent);
export default SignOutSVG;
