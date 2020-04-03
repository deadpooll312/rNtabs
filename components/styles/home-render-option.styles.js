import {StyleSheet} from 'react-native';
import { blue } from '../../styles/colors';

const styles = StyleSheet.create({
  selectContainer: {
    marginRight: 25,
    borderColor: "transparent",
    borderBottomWidth: 2,
    paddingBottom: 6
  },
  selectContainerActive: {
    borderColor: blue
  },
});

export default styles;
