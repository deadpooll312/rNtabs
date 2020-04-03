import * as React from "react";
import Svg, { Path } from "react-native-svg";
import {white} from "../../styles/colors";

function AlarmIconComponent(props) {
  const { width, height, color, style } = props;
  return (
    <Svg
      style={style}
      width={width ? width : 24}
      height={height ? height : 24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Path
        d="M20.16 18.12A5.36 5.36 0 0118 13.8v-3.6a6.611 6.611 0 00-4.8-6.351v-.85c0-.992-.808-1.8-1.8-1.8S9.6 2.007 9.6 3v.85c-2.767.786-4.8 3.335-4.8 6.35v3.6c0 1.715-.787 3.29-2.16 4.322A.6.6 0 003 19.2h5.46a3.004 3.004 0 002.939 3.6 3.004 3.004 0 002.94-3.6h5.46a.6.6 0 00.36-1.08h.001zM10.8 3A.6.6 0 0112 3v.627a6.61 6.61 0 00-1.2 0v-.628zm2.4 16.8c0 .992-.808 1.8-1.8 1.8a1.802 1.802 0 01-1.697-2.4h3.394c.067.191.103.394.103.6zM4.49 18a6.68 6.68 0 00.791-1.202A6.522 6.522 0 006 13.8v-3.6c0-2.977 2.423-5.4 5.4-5.4 2.977 0 5.4 2.423 5.4 5.4v3.6a6.537 6.537 0 001.51 4.2H4.49z"
        fill={color ? color : white}
      />
    </Svg>
  )
}

export default AlarmIconComponent;
