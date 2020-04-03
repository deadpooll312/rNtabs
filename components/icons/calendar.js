import * as React from "react";
import Svg, { Path } from "react-native-svg";
import {white} from "../../styles/colors";

function CalendarIconComponent(props) {
  const { width, height, color, style } = props;
  return (
    <Svg
      style={style}
      width={width ? width : 28}
      height={height ? height : 28}
      viewBox="0 0 28 28"
      fill="none"
      {...props}
    >
      <Path
        d="M25.9 2.8h-3.5v-.7a.7.7 0 00-1.4 0v.7H7v-.7a.7.7 0 00-1.4 0v.7H2.1C.942 2.8 0 3.742 0 4.9v19.6c0 1.158.942 2.1 2.1 2.1h23.8c1.158 0 2.1-.942 2.1-2.1V4.9c0-1.158-.942-2.1-2.1-2.1zM2.1 4.2h3.5v2.1a.7.7 0 001.4 0V4.2h14v2.1a.7.7 0 001.4 0V4.2h3.5a.7.7 0 01.7.7v3.5H1.4V4.9a.7.7 0 01.7-.7zm23.8 21H2.1a.7.7 0 01-.7-.7V9.8h25.2v14.7a.7.7 0 01-.7.7z"
        fill={color ? color : white}
      />
      <Path
        d="M13.3 22.4H9.1a.7.7 0 010-1.4h3.5v-2.8h-2.1a.7.7 0 010-1.4h2.1V14H9.1a.7.7 0 010-1.4h4.2a.7.7 0 01.7.7v8.4a.7.7 0 01-.7.7zM18.9 22.4a.7.7 0 01-.7-.7v-8.4a.7.7 0 011.4 0v8.4a.7.7 0 01-.7.7z"
        fill={color ? color : white}
      />
    </Svg>
  )
}

export default CalendarIconComponent;
