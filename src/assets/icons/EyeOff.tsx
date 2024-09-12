import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

function EyeOffSVG(props: SvgProps) {
  return (
    <Svg viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        opacity={0.1}
        d="M6.295 7.876L5 9.172c-1.333 1.333-2 2-2 2.828 0 .829.667 1.495 2 2.829l2.121 2.12a7 7 0 009.9 0l.411-.41-2.927-2.277a3.25 3.25 0 01-5.1-3.967l-3.11-2.419z"
        fill="#323232"
      />
      <Path
        d="M3.171 5.13l18 14"
        stroke="#323232"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path d="M14.365 13.846a3 3 0 01-4.767-3.643" stroke="#323232" strokeWidth={2} />
      <Path
        d="M9 5.627a7.003 7.003 0 017.85 1.423l3.001 3.002c.497.497.745.745.885 1.008a2 2 0 010 1.88c-.14.263-.388.511-.885 1.008v0L19.8 14"
        stroke="#323232"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.016 8.398a1 1 0 10-1.414-1.414l1.414 1.414zm.64 7.845l-2.12-2.122-1.415 1.415 2.122 2.12 1.414-1.413zm8.486 0a6 6 0 01-8.485 0l-1.414 1.414a8 8 0 0011.313 0l-1.414-1.414zM5.536 9.879l1.48-1.48-1.414-1.415-1.48 1.48L5.535 9.88zm11.21 5.76l-.604.604 1.414 1.414.605-.604-1.415-1.415zM5.537 14.12c-.687-.686-1.13-1.132-1.413-1.503-.265-.348-.295-.51-.295-.618h-2c0 .72.304 1.306.705 1.832.384.502.942 1.057 1.588 1.704l1.415-1.415zM4.12 8.464c-.646.647-1.204 1.202-1.588 1.705-.4.525-.705 1.11-.705 1.831h2c0-.108.03-.27.295-.618.284-.371.726-.817 1.413-1.503L4.12 8.464z"
        fill="#323232"
      />
    </Svg>
  );
}

export default EyeOffSVG;
