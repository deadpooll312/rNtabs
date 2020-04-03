import React from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from "react-native";
import {Foundation, Ionicons} from "@expo/vector-icons";
import {black, blue, grey2} from "../styles/colors";
import ListIconComponent from "./icons/list";

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
        <Text style={styles.cardTitle}>#{id} {title}</Text>
        <Text style={styles.date}>22/6 - 1/8</Text>
      </View>
      <View style={{...styles.body, ...styles.row}}>
        <Text style={styles.text}>
          Bygga exklusivt badrum i guld och machogny hos Greve von Dinkelspiel af ...
        </Text>
        <Ionicons name="ios-arrow-forward" size={24} color={grey2}/>
      </View>
      <View style={styles.row}>
        <Ionicons name="ios-pin" size={18} color={blue} style={{marginRight: 15}}/>
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
    marginBottom: 5
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  body: {
    marginBottom: 10
  },
  text: {
    color: grey2,
    fontSize: 16,
    width: '85%',
    marginRight: 20,
    flexGrow: 5
  },
  locationText: {
    color: blue
  },
});