import * as React from "react";
import Svg, { Path } from "react-native-svg";
import {blue} from "../../styles/colors";

function MapMarkerIconComponent(props) {
  const { width, height, color, style } = props;
  return (
    <Svg
      style={style}
      width={width ? width : 21}
      height={height ? height : 20}
      viewBox="0 0 21 20"
      fill="none"
      {...props}
    >
      <Path
        d="M10.707 20a.5.5 0 01-.393-.191c-.057-.073-1.418-1.814-2.797-4.385-.812-1.513-1.46-2.999-1.925-4.416C5.005 9.221 4.708 7.536 4.708 6c0-3.308 2.692-6 6-6s6 2.692 6 6c0 1.536-.298 3.22-.884 5.008-.465 1.417-1.113 2.903-1.925 4.416-1.38 2.571-2.74 4.312-2.797 4.385a.5.5 0 01-.393.191h-.002zm0-19c-2.757 0-5 2.243-5 5 0 3.254 1.463 6.664 2.69 8.951a34.41 34.41 0 002.31 3.71 34.38 34.38 0 002.318-3.726c1.223-2.283 2.682-5.687 2.682-8.935 0-2.757-2.243-5-5-5z"
        fill={color ? color : blue}
      />
      <Path
        d="M10.707 9c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm0-5c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z"
        fill={color ? color : blue}
      />
    </Svg>
  )
}

export default MapMarkerIconComponent;
