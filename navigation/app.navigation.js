import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Ionicons} from "@expo/vector-icons";
// local files
import {black, blue} from "../styles/colors";
import HomeScreen from "../screens/home";
import FeedScreen from "../screens/feed";
import TimeScreen from "../screens/time";
import CalendarScreen from "../screens/calendar";

const Tab = createBottomTabNavigator();

const setScreenOptions = ({route}) => ({
  tabBarIcon: ({focused, color, size}) => {
    let iconName;
    
    switch (route.name) {
      case 'Home':
        iconName = 'ios-home';
        break;
      case 'Feed':
        iconName = 'ios-clipboard';
        break;
      case 'Time':
        iconName = 'ios-clock';
        break;
      case 'Calendar':
        iconName = 'ios-calendar';
        break;
      default:
        iconName = 'ios-home';
        break;
    }
    
    // You can return any component that you like here!
    return <Ionicons name={iconName} size={size} color={color}/>;
  },
});

export default function AppNavigation() {
  return (
    <Tab.Navigator
      screenOptions={setScreenOptions}
      tabBarOptions={{
        activeTintColor: blue,
        inactiveTintColor: black,
        showLabel: false
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen}/>
      <Tab.Screen name="Feed" component={FeedScreen}/>
      <Tab.Screen name="Time" component={TimeScreen}/>
      <Tab.Screen name="Calendar" component={CalendarScreen}/>
    </Tab.Navigator>
  )
}