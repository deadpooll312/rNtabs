import React from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from "react-native";
// local files
import {black, blue, grey2} from "../styles/colors";
import ListIconComponent from "./icons/list";
import ArrowRightIconComponent from "./icons/arrowRight";
import MapMarkerIconComponent from "./icons/mapMarker";

export default function ProjectItemComponent(props) {
  const { navigation, style, title, id } = props;
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Order")}
      style={{...styles.borderBottom, ...styles.container, ...style}}
      activeOpacity={0.55}
    >
      <View style={{...styles.header, ...styles.row}}>
        <ListIconComponent color={black} width={20} height={20}/>
        <Text style={styles.title}>#{id} {title}</Text>
        <Text style={styles.date}>22/6 - 1/8</Text>
      </View>
      <View style={{...styles.body, ...styles.row}}>
        <Text style={styles.text}>
          Bygga exklusivt badrum i guld och machogny hos Greve von Dinkelspiel af ...
        </Text>
       <ArrowRightIconComponent/>
      </View>
      <View style={styles.row}>
        <MapMarkerIconComponent/>
        <Text style={styles.locationText}>Grev Magnigattan 22</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
    backgroundColor: '#fafafa'
  },
  borderBottom: {
    borderBottomWidth: 2,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    borderStyle: 'solid'
  },
  header: {
    paddingRight: 40,
    marginBottom: 8
  },
  title: {
    flexGrow: 5,
    marginLeft: 15,
    textTransform: 'uppercase',
    fontFamily: 'lato-bold',
    fontSize: 14
  },
  date: {
    color: grey2,
    fontSize: 14
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  body: {
    marginBottom: 16
  },
  text: {
    color: grey2,
    fontSize: 16,
    width: 300,
    marginRight: 28,
    flexGrow: 5
  },
  locationText: {
    color: blue,
    marginLeft: 14
  },
});