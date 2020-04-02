import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
// local files
import OrderScreen from "../screens/order";
import TabsNavigation from "./tabs.navigation";
const Stack = createStackNavigator();

export default function AppNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={TabsNavigation}/>
      <Stack.Screen name="Order" component={OrderScreen}/>
    </Stack.Navigator>
  )
}
