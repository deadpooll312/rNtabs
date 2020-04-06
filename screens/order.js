import * as React from 'react';
import { SafeAreaView } from 'react-native';
import { HeaderOrder } from '../components';

export default function OrderScreen(props) {
  const { navigation } = props;
  return (
    <React.Fragment>
      <HeaderOrder navigation={navigation}/>
      <SafeAreaView>
      
      </SafeAreaView>
    </React.Fragment>
  );
}