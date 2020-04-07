import {StyleSheet} from "react-native";
import {black} from "../../styles/colors";

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingLeft: 16,
    paddingRight: 22,
    paddingVertical: 25,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    borderStyle: 'solid',
    borderBottomWidth: 1
  },
  title: {
    flexGrow: 5,
    fontFamily: 'lato',
    fontSize: 16,
    marginLeft: 17,
    color: black
  }
});

export default styles;