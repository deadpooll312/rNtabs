import * as React from "react";
import Svg, { Path, G, Defs, ClipPath } from "react-native-svg";
import {black} from "../../styles/colors";

export const PencilIconComponent = React.memo((props) => {
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
        <Path d="M19.103 1.396A2.955 2.955 0 0017 .525c-.794 0-1.542.309-2.103.871l-9.75 9.75a.497.497 0 00-.116.183l-2 5.5a.5.5 0 00.641.641l5.5-2a.51.51 0 00.183-.116l9.75-9.75a2.955 2.955 0 00.871-2.104c0-.795-.309-1.542-.871-2.104h-.002zM8.725 14.568l-4.389 1.596 1.596-4.389L14 3.707 16.793 6.5l-8.068 8.068zm9.672-9.672l-.897.896-2.793-2.793.897-.896A1.961 1.961 0 0117 1.525c.527 0 1.023.205 1.397.578.373.373.578.869.578 1.396 0 .527-.205 1.023-.578 1.396v.001z" />
        <Path d="M17.5 20.5h-16C.673 20.5 0 19.827 0 19V3c0-.827.673-1.5 1.5-1.5h10a.5.5 0 010 1h-10A.5.5 0 001 3v16a.5.5 0 00.5.5h16a.5.5 0 00.5-.5V9a.5.5 0 011 0v10c0 .827-.673 1.5-1.5 1.5z" />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0">
          <Path d="M0 .5h20v20H0V.5z" fill="#fff" />
        </ClipPath>
      </Defs>
    </Svg>
  );
});
