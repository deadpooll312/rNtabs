import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
// local files
import {black, grey2} from "../styles/colors";
import { ArrowRightIconComponent } from "./icons";
import styles from "./styles/order-property.styles";

export const OrderProperty = React.memo((props) => {
  const { RenderIcon, title, navigation, path } = props;
  
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(path)}
      style={styles.container}
      activeOpacity={0.55}
    >
      <RenderIcon width={20} height={20} color={black}/>
      <Text style={styles.title}>{title}</Text>
      <ArrowRightIconComponent color={grey2}/>
    </TouchableOpacity>
  )
});

