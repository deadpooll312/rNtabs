import * as React from 'react';
import { Ionicons, Foundation} from '@expo/vector-icons';
import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  Image
} from 'react-native';
import { white, red } from '../styles/colors';
// local files
import Background from '../assets/backgorund.jpg';
import ListIconComponent from "./icons/list";

export function HeaderComponent(props) {
  return <View style={styles.container}>
    <ImageBackground source={Background} style={styles.background}>
      <View style={styles.wrapper}>
        <View style={styles.notification}>
          <View style={styles.notificationParent}>
            <View style={styles.notificationTextContainer}>
              <Text style={styles.notificationText}>9</Text>
            </View>
            <Ionicons name="ios-notifications" size={34} color={white} />
          </View>
        </View>
        <View style={styles.headerTitle}>
          <ListIconComponent
            style={{marginRight: 20}}
          />
          <Text style={styles.titleText}>WORK ORDERS</Text>
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
    paddingHorizontal: 15,
    paddingTop: 20,
    paddingBottom: 20
  },
  notification: {
    alignItems: 'flex-end'
  },
  notificationParent: {
    position: 'relative',
    paddingRight: 10,
  },
  notificationTextContainer: {
    position: 'absolute',
    top: -2,
    right: -5,
    backgroundColor: red,
    width: 18,
    height: 18,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 9,
    zIndex: 10
  },
  notificationText: {
    color: white,
    fontSize: 10,
  },
  headerTitle: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  titleText: {
    color: white,
    fontSize: 22,
  },
  background: {
    resizeMode: "cover",
    justifyContent: "center"
  }
});
