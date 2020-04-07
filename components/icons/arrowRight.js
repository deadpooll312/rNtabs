import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

export const ArrowRightIconComponent = React.memo((props) => {
  const { width, height, color, style } = props;
  return (
    <Svg
      style={style}
      width={width ? width : 20}
      height={height ? height : 20}
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <G clipPath="url(#prefix__clip0)">
        <Path
          d="M5 20a.5.5 0 01-.354-.853l8.646-8.646-8.646-8.646a.5.5 0 01.707-.707l9 9a.5.5 0 010 .707l-9 9a.498.498 0 01-.354.146L5 20z"
          fill={color ? color : "#7c7c7c"}
        />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0">
          <Path d="M0 0h20v20H0V0z" fill={color ? color : "#7c7c7c"} />
        </ClipPath>
      </Defs>
    </Svg>
  )
});
