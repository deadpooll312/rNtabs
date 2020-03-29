import * as React from 'react';
import { connect } from 'react-redux';
import { Ionicons, Foundation } from '@expo/vector-icons'
import {
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View
} from 'react-native';
import { white, black, red } from '../styles/colors';
// local files

export function HeaderComponent(props) {
  return <View style={styles.container}>
    <View style={styles.wrapper}>
      <View style={styles.notification}>
        <View style={styles.notificationParent}>
          <Text style={styles.notificationText}>12</Text>
          <Ionicons name="ios-notifications" size={50} color={white} />
        </View>
      </View>
      <View style={styles.headerTitle}>
        <Foundation name="clipboard-notes" size={34} color={white} />
      </View>
    </View>
  </View>
}

const styles = StyleSheet.create({
  container: {
    height: 190,
    backgroundColor: '#333',
  },
  wrapper: {
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  notification: {
    alignItems: 'flex-end'
  },
  notificationParent: {
    position: 'relative',
    paddingRight: 10,
  },
  notificationText: {
    color: red,
    fontSize: 12,
    position: 'absolute',
    top: 0,
    right: 0
  }

});
