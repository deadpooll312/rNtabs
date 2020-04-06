import React from 'react';
import { View } from "react-native";

export function RenderContainer(optionNodes) {
  return (
    <View
      style={{
        flexDirection: "row",
        marginBottom: 16
      }}
    >
      {optionNodes}
    </View>
  );
}
