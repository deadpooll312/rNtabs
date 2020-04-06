import {StyleSheet} from "react-native";
import {blue, grey2} from "../../styles/colors";


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

export default styles;