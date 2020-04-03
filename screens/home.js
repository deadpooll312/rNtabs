import * as React from "react";
// local files
import { createStackNavigator } from "@react-navigation/stack";
import ProjectsScreen from "./projects/projects";
import OrderScreen from "./order";

const Stack = createStackNavigator();

export default function HomeScreen() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Project" component={ProjectsScreen} />
      <Stack.Screen name="Order" component={OrderScreen} />
    </Stack.Navigator>
  );
}
