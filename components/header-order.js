import React, { useState } from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
// local files
import Background from "../assets/backgorund.jpg";
import { white, blue, grey2 } from '../styles/colors';
import { SwitchComponent } from './switch-component';
import styles from "./styles/header-order.styles";

export const HeaderOrder = React.memo((props) => {
  const { navigation: { goBack } } = props;
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  
  return (
    <View>
      <ImageBackground source={Background} style={styles.background}>
        <View style={{...styles.headerTitle, ...styles.row}}>
          <TouchableOpacity style={styles.headerBackIcon} onPress={() => goBack()}>
            <Ionicons name="ios-arrow-back" color={white} size={32}/>
          </TouchableOpacity>
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
});