import * as React from 'react';
// local files
import {createStackNavigator} from '@react-navigation/stack';
import ProjectsScreen from "./projects";
import OrderScreen from "./order";

const Stack = createStackNavigator();

export default function FeedScreen(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={ProjectsScreen}/>
      <Stack.Screen name="Order" component={OrderScreen}/>
    </Stack.Navigator>
  )
}
