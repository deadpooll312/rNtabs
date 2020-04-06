import React from 'react';
import { View, Text, Switch } from 'react-native';
// local files
import styles from './styles/switch-component.styles';

export const SwitchComponent = React.memo((props) => {
  const { toggleSwitch, switchValue, trackColor, thumbColor, switchLabel } = props;
  return (
    <View style={styles.container}>
      {switchLabel && <Text style={styles.label}>{switchLabel}</Text>}
      <Switch
        onValueChange={toggleSwitch}
        value={switchValue}
        trackColor={trackColor}
        thumbColor={thumbColor}
      />
    </View>
  );
});