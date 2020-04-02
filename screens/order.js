import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';
import HeaderOrder from '../components/headerOrder';

export default function OrderScreen() {
  return (
    <React.Fragment>
      <HeaderOrder/>
      <SafeAreaView style={styles.container}>
      
      </SafeAreaView>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
  
  }
});