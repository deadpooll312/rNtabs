import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import Background from "../assets/backgorund.jpg";
import { Ionicons } from '@expo/vector-icons';
import { white, blue, grey2 } from '../styles/colors';
import SwitchComponent from '../components/switchComponent'

export default function HeaderOrder(props) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  
  return (
    <View>
      <ImageBackground source={Background} style={styles.background}>
        <View style={{...styles.headerTitle, ...styles.row}}>
          <Ionicons style={styles.headerBackIcon} name="ios-arrow-back" color={white} size={32}/>
          <Text style={styles.headerTitleText}>#321 Bygga Badrum</Text>
        </View>
        <View style={{...styles.headerMain, ...styles.row}}>
          <View style={{...styles.row, ...styles.headerLocation, ...styles.headerCol}}>
            <Ionicons style={{marginRight: 15}} name="ios-pin" size={32} color={white}/>
            <View>
              <Text style={styles.addressLarge}>Grev Magnigattan 22 Stockholm</Text>
              <Text style={styles.addressSmall}>Vetekransen 45</Text>
            </View>
          </View>
          <View style={{...styles.headerCol, alignItems: 'flex-end'}}>
            <Text style={{...styles.addressLarge, marginBottom: 15}}>22/6 - 1/8</Text>
            <SwitchComponent
              toggleSwitch={toggleSwitch}
              switchValue ={isEnabled}
              iosBackgroundColor={blue}
              trackColor={{ false: grey2, true: blue }}
              switchLabel="Jah ar klar"
            />
          </View>
        </View>
        <View style={{...styles.headerBottom, ...styles.row}}>
          <View style={{...styles.row, ...styles.checkMarksBlock}}>
            <Ionicons style={{marginRight: 10}} name="ios-checkmark" size={48} color={white}/>
            <Text style={styles.checkText}>Bemannad</Text>
          </View>
          <View style={{...styles.row, ...styles.checkMarksBlock}}>
            <Ionicons style={{marginRight: 10}} name="ios-checkmark" size={48} color={white}/>
            <Text style={styles.checkText}>Bemannad</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  background: {
    overflow: 'hidden'
  },
  headerTitle: {
    paddingTop: 45,
    paddingBottom: 15,
    paddingHorizontal: 15,
    alignItems: 'center',
    position: 'relative',
    borderWidth: 1,
    borderStyle: 'dotted',
    borderRadius: 1,
    borderColor: white,
    marginRight: -1,
    marginLeft: -1,
    marginTop: -1
  },
  headerTitleText: {
    fontSize: 24,
    color: white,
    flexGrow: 5,
    textAlign: 'center'
  },
  headerBackIcon: {
    position: 'absolute',
    left: 15,
    top: 43
  },
  headerMain: {
    paddingHorizontal: 15,
    paddingVertical: 20,
    justifyContent: 'space-between'
  },
  row: {
    flexDirection: 'row'
  },
  headerLocation: {
    alignItems: 'center',
  },
  headerCol: {
    width: '45%',
  },
  addressLarge: {
    color: white,
    fontSize: 20
  },
  addressSmall: {
    color: white,
    fontSize: 16
  },
  headerBottom: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingHorizontal: 15,
    paddingVertical: 5,
    justifyContent: 'flex-end',
    marginRight: -40
  },
  checkMarksBlock: {
    alignItems: 'center',
    marginRight: 40
  },
  checkText: {
    color: white,
    fontSize: 18
  }
});