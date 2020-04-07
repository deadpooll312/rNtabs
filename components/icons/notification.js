import * as React from "react";
import Svg, { Path, G, Defs, ClipPath } from "react-native-svg";
import {black} from "../../styles/colors";

export const NotificationIconComponent = React.memo((props) => {
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
        <Path d="M16.218 3.794A9.438 9.438 0 009.5 1.012a9.44 9.44 0 00-6.718 2.782A9.434 9.434 0 000 10.511c0 2.537.988 4.923 2.782 6.718A9.434 9.434 0 009.5 20.011a9.44 9.44 0 006.718-2.782A9.434 9.434 0 0019 10.511a9.436 9.436 0 00-2.782-6.717zM9.5 19.012c-4.687 0-8.5-3.813-8.5-8.5 0-4.687 3.813-8.5 8.5-8.5 4.687 0 8.5 3.813 8.5 8.5 0 4.687-3.813 8.5-8.5 8.5z" />
        <Path d="M9.5 18.012a.5.5 0 01-.5-.5v-1a.5.5 0 011 0v1a.5.5 0 01-.5.5zM9.5 15.012a.5.5 0 01-.5-.5v-10a.5.5 0 011 0v10a.5.5 0 01-.5.5z" />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0">
          <Path d="M0 .012h20v20H0v-20z" fill="#fff" />
        </ClipPath>
      </Defs>
    </Svg>
  );
});
