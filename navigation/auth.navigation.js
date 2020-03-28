import * as React from 'react';
import LoginScreen from '../screens/login';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function AuthNavigation() {
  return <Stack.Navigator>
    <Stack.Screen name="Home" component={LoginScreen} />
  </Stack.Navigator>
}
