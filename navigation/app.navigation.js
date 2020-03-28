import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// local files
import SettingsScreen from '../screens/settings';
import FeedScreen from '../screens/feed';

const Tab = createBottomTabNavigator();

export default function AppNavigation() {
  return <Tab.Navigator>
    <Tab.Screen name="Home" component={FeedScreen} />
    <Tab.Screen name="Settings" component={SettingsScreen} />
  </Tab.Navigator>
}
