import * as React from "react";
import Svg, { Path } from "react-native-svg";

export const ArrowLeftIconComponent = React.memo((props) => {
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
      <Path
        d="M10 20.369a.49.49 0 00.354-.153.54.54 0 000-.74l-8.646-9.045 8.646-9.045a.54.54 0 000-.74.485.485 0 00-.707 0l-9 9.416a.54.54 0 000 .74l9 9.415a.487.487 0 00.354.153L10 20.368z"
        fill={color ? color : "#7c7c7c"}
      />
    </Svg>
  )
});
