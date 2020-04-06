import React from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import {white} from "../styles/colors";

export default function SwitchComponent(props) {
  const { toggleSwitch, switchValue, trackColor, thumbColor, switchLabel } = props;
  return (
    <View style={styles.container}>
      {switchLabel && <Text style={styles.label}>{switchLabel}</Text>}
      <Switch
        onValueChange={toggleSwitch}
        value={switchValue}
        trackColor={trackColor}
        thumbColor={thumbColor}
        // style={{ transform: [{ scaleX: .9 }, { scaleY: .9 }] }}
        // ios_backgroundColor={iosBackgroundColor}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  label: {
    color: white,
    fontSize: 16,
    marginRight: 10
  }
});