import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const OrderProperty = React.memo((props) => {
  const { icon } = props;
  
  return (
    <View style={styles.container}>
      {icon}
    </View>
  )
});

const styles = StyleSheet.create({
  container: {
  
  }
});