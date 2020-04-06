import * as React from "react";
import Svg, { Path } from "react-native-svg";
import {white} from "../../styles/colors";

function CheckMarkIconComponent(props) {
  const { width, height, color, style } = props;
  return (
    <Svg
      style={style}
      width={width ? width : 17}
      height={height ? height : 12}
      viewBox="0 0 17 12"
      fill="none"
      {...props}
    >
      <Path
        d="M4.9 11.943a.404.404 0 01-.283-.115l-4-3.96a.393.393 0 010-.559.403.403 0 01.565 0L4.9 10.988 15.816.183a.403.403 0 01.566 0 .393.393 0 010 .56l-11.2 11.085a.4.4 0 01-.284.115H4.9z"
        fill={color ? color : white}
      />
    </Svg>
  )
}

export default CheckMarkIconComponent;
