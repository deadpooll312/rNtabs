import * as React from "react";
import Svg, { Path, G, Defs, ClipPath } from "react-native-svg";
import {black} from "../../styles/colors";

export const ClockIconComponent = React.memo((props) => {
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
        <Path d="M17.218 3.282A9.438 9.438 0 0010.5.5a9.44 9.44 0 00-6.718 2.782A9.438 9.438 0 001 9.999c0 2.537.988 4.922 2.782 6.717a9.434 9.434 0 006.718 2.782 9.44 9.44 0 006.718-2.782A9.434 9.434 0 0020 10a9.436 9.436 0 00-2.782-6.717zM10.5 18.5C5.813 18.5 2 14.687 2 10c0-4.687 3.813-8.5 8.5-8.5 4.687 0 8.5 3.813 8.5 8.5 0 4.687-3.813 8.5-8.5 8.5z" />
        <Path d="M16.129 6.75a.5.5 0 00-.683-.183l-4.92 2.84-3.835-2.684a.5.5 0 00-.573.819l4.096 2.867c.001.002.002.002.003.002.008.007.017.011.026.017l.007.003c.009.006.018.01.027.014l.006.003.031.014.019.008c.005.002.009.002.014.005l.02.005c.004.002.009.002.013.003l.02.005.014.004.019.002c.006.002.012.002.018.002a.409.409 0 00.108 0h.001a.53.53 0 00.055-.01h.004a.333.333 0 00.051-.017l.007-.002a.396.396 0 00.047-.022c.003-.002.006-.002.009-.005l.017-.008 5.196-3a.5.5 0 00.183-.683z" />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0">
          <Path d="M.5-.001h20v20H.5v-20z" fill="#fff" />
        </ClipPath>
      </Defs>
    </Svg>
  );
});
