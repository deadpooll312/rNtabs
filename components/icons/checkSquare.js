import * as React from "react";
import Svg, { Path, G, Defs, ClipPath } from "react-native-svg";
import {black} from "../../styles/colors";

export const CheckSquareIconComponent = React.memo((props) => {
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
      <G clipPath="url(#prefix__clip0)" fill={color ? color : black}>
        <Path d="M18.5 19.5h-16c-.826 0-1.5-.672-1.5-1.5V2C1 1.175 1.675.5 2.5.5h16c.828 0 1.5.674 1.5 1.5v16c0 .828-.672 1.5-1.5 1.5zm-16-18A.5.5 0 002 2v16a.5.5 0 00.5.5h16a.5.5 0 00.5-.5V2a.5.5 0 00-.5-.5h-16z" />
        <Path d="M8.5 14a.502.502 0 01-.353-.145l-3-3a.5.5 0 01.707-.707L8.5 12.794l6.646-6.646a.5.5 0 01.707.707l-7 7a.498.498 0 01-.354.146H8.5z" />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0">
          <Path d="M.5 0h20v20H.5V0z" fill="#fff" />
        </ClipPath>
      </Defs>
    </Svg>
  );
});
