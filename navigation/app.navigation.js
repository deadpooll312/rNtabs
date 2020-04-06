import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// local files
import {black, blue} from "../styles/colors";
import HomeScreen from "../screens/home";
import TimetableScreen from "../screens/timetable";
import ListIconComponent from '../components/icons/list';
import CalendarIconComponent from "../components/icons/calendar";

const Tab = createBottomTabNavigator();

const setScreenOptions = ({route}) => ({
  tabBarIcon: ({focused, color, size}) => {
    switch (route.name) {
      case 'Home':
        return <ListIconComponent color={color}/>;
      case 'Timetable':
        return <CalendarIconComponent color={color}/>
    }
  },
});

export default function AppNavigation() {
  return (
    <Tab.Navigator
      screenOptions={setScreenOptions}
      tabBarOptions={{
        activeTintColor: blue,
        inactiveTintColor: black,
        showLabel: false,
        style: {
          justifyContent: 'flex-start'
        }
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen}/>
      <Tab.Screen name="Timetable" component={TimetableScreen}/>
    </Tab.Navigator>
  )
}