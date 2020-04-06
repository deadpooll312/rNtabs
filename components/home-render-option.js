import React from 'react';
import { Text, TouchableOpacity, View } from "react-native";
import styles from './styles/home-render-option.styles';

export function RenderOption(option, selected, onSelect, index) {
  const style = selected
    ? { ...styles.selectContainer, ...styles.selectContainerActive }
    : styles.selectContainer;

  return (
    <TouchableOpacity activeOpacity={0.55} onPress={onSelect} key={index}>
      <View style={style}>
        <Text style={styles.select}>{option}</Text>
      </View>
    </TouchableOpacity>
  );
}



