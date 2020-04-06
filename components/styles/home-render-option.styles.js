import {StyleSheet} from 'react-native';
import {black, blue} from '../../styles/colors';

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
  select: {
    fontSize: 16,
    fontFamily: "lato",
    color: black
  },
});

export default styles;
