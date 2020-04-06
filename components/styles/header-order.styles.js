import {StyleSheet} from "react-native";
import {white} from "../../styles/colors";

const styles = StyleSheet.create({
  background: {
    overflow: 'hidden',
    resizeMode: "cover"
  },
  headerTitle: {
    paddingTop: 45,
    paddingBottom: 15,
    paddingHorizontal: 15,
    alignItems: 'center',
    position: 'relative',
    borderWidth: 1,
    borderStyle: 'dotted',
    borderRadius: 1,
    borderColor: white,
    marginRight: -1,
    marginLeft: -1,
    marginTop: -1
  },
  headerTitleText: {
    fontSize: 24,
    color: white,
    flexGrow: 5,
    textAlign: 'center'
  },
  headerBackIcon: {
    position: 'absolute',
    left: 5,
    top: 33,
    paddingVertical: 10,
    paddingHorizontal: 10,
    zIndex: 5
  },
  headerMain: {
    paddingHorizontal: 15,
    paddingVertical: 20,
    justifyContent: 'space-between'
  },
  row: {
    flexDirection: 'row'
  },
  headerLocation: {
    alignItems: 'center',
  },
  headerCol: {
    width: '45%',
  },
  addressLarge: {
    color: white,
    fontSize: 20
  },
  addressSmall: {
    color: white,
    fontSize: 16
  },
  headerBottom: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingHorizontal: 15,
    paddingVertical: 5,
    justifyContent: 'flex-end',
    marginRight: -40
  },
  checkMarksBlock: {
    alignItems: 'center',
    marginRight: 40
  },
  checkText: {
    color: white,
    fontSize: 18
  }
});

export default styles;