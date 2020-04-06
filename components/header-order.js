import React, { useState } from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
// local files
import Background from "../assets/header-background-order.jpg";
import { white, blue } from '../styles/colors';
import { SwitchComponent } from './switch-component';
import styles from "./styles/header-order.styles";
import ArrowLeftIconComponent from "./icons/arrowLeft";
import MapMarkerIconComponent from "./icons/mapMarker";
import CheckMarkIconComponent from "./icons/checkmark";

export const HeaderOrder = React.memo((props) => {
  const { navigation: { goBack } } = props;
  const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  
  return (
    <View>
      <ImageBackground source={Background} style={styles.background}>
        <View style={{...styles.headerTitle, ...styles.row}}>
          <TouchableOpacity style={styles.headerBackIcon} onPress={() => goBack()}>
            <ArrowLeftIconComponent color={white}/>
          </TouchableOpacity>
          <Text style={styles.headerTitleText}>#321 Build a Bathroom</Text>
        </View>
        <View style={{...styles.headerMain, ...styles.row}}>
          <View style={{...styles.row, ...styles.headerLocation, ...styles.headerCol}}>
            <MapMarkerIconComponent style={styles.headerLocationIcon} color={white} height={25} width={25}/>
            <View>
              <Text style={{...styles.address, marginBottom: 3}}>Grev Magnigatan 22 Stockholm</Text>
              <Text style={{...styles.address, ...styles.addressOpacity}}>Vetekransen 45</Text>
            </View>
          </View>
          <View style={{...styles.headerCol, alignItems: 'flex-end'}}>
            <Text style={{...styles.address, marginBottom: 15}}>22/6 - 1/8</Text>
            <SwitchComponent
              toggleSwitch={toggleSwitch}
              switchValue ={isEnabled}
              iosBackgroundColor={blue}
              // trackColor={{ false: grey2, true: blue }}
              switchLabel="I’m done"
            />
          </View>
        </View>
        <View style={{...styles.headerBottom, ...styles.row}}>
          <View style={{...styles.row, ...styles.checkMarksBlock, ...styles.checkMarksBlockActive}}>
            <CheckMarkIconComponent/>
            <Text style={styles.checkText}>Staffed</Text>
          </View>
          <View style={{...styles.row, ...styles.checkMarksBlock}}>
            <CheckMarkIconComponent/>
            <Text style={styles.checkText}>Ongoing</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  )
});