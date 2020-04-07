import React from 'react';
import { Text, TouchableOpacity, View } from "react-native";
// local files
import { black } from "../styles/colors";
import { ListIconComponent, ArrowRightIconComponent, MapMarkerIconComponent } from "./icons";
import styles from './styles/project-item.styles';

export const ProjectItemComponent = React.memo((props) => {
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
});