import * as React from 'react';
import {
  Text,
  View,
  ImageBackground,
} from 'react-native';
// local files
import Background from '../assets/header-background.jpg';
import ListIconComponent from "./icons/list";
import AlarmIconComponent from "./icons/alarm";
import styles from './styles/header.styles';

export function HeaderComponent(props) {
  return <View style={styles.container}>
    <ImageBackground source={Background} style={styles.background}>
      <View style={styles.wrapper}>
        <View style={styles.headerTitle}>
          <ListIconComponent style={styles.list} />
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
