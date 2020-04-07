import * as React from 'react';
import { ScrollView } from 'react-native';
// local files
import { HeaderOrder } from '../components';
import { OrderProperty } from "../components";
import { AlarmIconComponent } from "../components/icons";

export default function OrderScreen(props) {
  const { navigation } = props;
  return (
    <React.Fragment>
      <HeaderOrder navigation={navigation}/>
      <ScrollView>
      
      </ScrollView>
    </React.Fragment>
  );
}