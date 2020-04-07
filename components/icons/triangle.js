import * as React from "react";
import Svg, { Path } from "react-native-svg";
import {white} from "../../styles/colors";

export const TriangleIconComponent = React.memo((props) => {
  const { width, height, color, style } = props;
  return (
    <Svg
      style={style}
      width={width ? width : 10}
      height={height ? height : 10}
      viewBox="0 0 10 10"
      fill="none"
      {...props}
    >
      <Path d="M10 10V0L0 10h10z" fill={color ? color : white} />
    </Svg>
  )
});
