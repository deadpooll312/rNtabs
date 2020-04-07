import * as React from "react";
import Svg, { Path, G, Defs, ClipPath } from "react-native-svg";
import {black} from "../../styles/colors";

export const CordIconComponent = React.memo((props) => {
  const { width, height, color, style } = props;
  return (
    <Svg
      style={style}
      width={width ? width : 20}
      height={height ? height : 21}
      viewBox="0 0 20 21"
      fill="none"
      {...props}
    >
      <G clipPath="url(#prefix__clip0)">
        <Path
          d="M18.756 17.65a.5.5 0 00-.707-.006A6.462 6.462 0 0113.5 19.5a6.508 6.508 0 01-6.483-6.03A4.506 4.506 0 0011 9V5.5h.5a.5.5 0 000-1H9V1a.5.5 0 00-1 0v3.5H5V1a.5.5 0 00-1 0v3.5H1.5a.5.5 0 000 1H2V9a4.506 4.506 0 004.015 4.474 7.44 7.44 0 002.182 4.829A7.45 7.45 0 0013.5 20.5a7.456 7.456 0 005.249-2.143.5.5 0 00.007-.707zM3 9V5.5h7V9c0 1.93-1.57 3.5-3.5 3.5S3 10.93 3 9z"
          fill={color ? color : black}
        />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0">
          <Path d="M0 .5h20v20H0V.5z" fill="#fff" />
        </ClipPath>
      </Defs>
    </Svg>
  );
});
