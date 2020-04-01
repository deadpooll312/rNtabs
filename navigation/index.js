import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// local files
import AppNavigation from './app.navigation';
import AuthNavigation from './auth.navigation';
import OrderScreen from '../screens/order';

export default function Navigation(props) {
  const { isUser } = props;

  return (
    <NavigationContainer>
      { isUser ? <OrderScreen /> : <AuthNavigation /> }
    </NavigationContainer>
  );
}
// AppNavigation