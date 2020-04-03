import * as React from 'react';
import {
  Text,
  StyleSheet,
  View,
  ImageBackground
} from 'react-native';
// local files
import Background from '../assets/header-background.jpg';
import ListIconComponent from "./icons/list";
import AlarmIconComponent from "./icons/alarm";
import { white, red } from '../styles/colors';

export function HeaderComponent(props) {
  return <View style={styles.container}>
    <ImageBackground source={Background} style={styles.background}>
      <View style={styles.wrapper}>
        <View style={styles.headerTitle}>
          <ListIconComponent
            style={{marginRight: 20}}
          />
          <Text style={styles.titleText}>WORK ORDERS</Text>
          <View>
            <AlarmIconComponent/>
            <View style={styles.notificationTextContainer}>
              <Text style={styles.notificationText}>3</Text>
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  </View>
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#333',
  },
  wrapper: {
    paddingTop: 68,
    paddingBottom: 25,
    paddingHorizontal: 24
  },
  notificationTextContainer: {
    width: 16,
    height: 16,
    backgroundColor: red,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: -5.5,
    right: -13
  },
  notificationText: {
    color: white,
    fontFamily: 'lato-bold',
    fontSize: 10
  },
  headerTitle: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  titleText: {
    color: white,
    fontSize: 20,
    fontFamily: 'lato-bold',
    flexGrow: 5
  },
  background: {
    resizeMode: "cover",
    justifyContent: "center"
  }
});
