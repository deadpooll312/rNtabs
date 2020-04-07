import * as React from "react";
import Svg, { Path, G, Defs, ClipPath } from "react-native-svg";
import {black} from "../../styles/colors";

export const FilesIconComponent = React.memo((props) => {
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
          d="M16.5 4.5H16V4c0-.827-.673-1.5-1.5-1.5H14V2c0-.827-.673-1.5-1.5-1.5H5a.504.504 0 00-.354.146l-3.5 3.5A.5.5 0 001 4.5V15c0 .827.673 1.5 1.5 1.5H3v.5c0 .827.673 1.5 1.5 1.5H5v.5c0 .827.673 1.5 1.5 1.5h10c.827 0 1.5-.673 1.5-1.5V6c0-.827-.673-1.5-1.5-1.5zM5 1.707V4a.5.5 0 01-.5.5H2.207L5 1.707zM2 15V5.5h2.5C5.327 5.5 6 4.827 6 4V1.5h6.5a.5.5 0 01.5.5v13a.5.5 0 01-.5.5h-10A.5.5 0 012 15zm2 2v-.5h8.5c.827 0 1.5-.673 1.5-1.5V3.5h.5a.5.5 0 01.5.5v13a.5.5 0 01-.5.5h-10A.5.5 0 014 17zm13 2a.5.5 0 01-.5.5h-10A.5.5 0 016 19v-.5h8.5c.827 0 1.5-.673 1.5-1.5V5.5h.5a.5.5 0 01.5.5v13z"
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
