import {StyleSheet} from "react-native";
import {white} from "../../styles/colors";

const styles = StyleSheet.create({
  background: {
    overflow: 'hidden',
    resizeMode: "cover"
  },
  headerTitle: {
    paddingTop: 70,
    paddingBottom: 15,
    paddingHorizontal: 15,
    alignItems: 'center',
    position: 'relative'
  },
  headerTitleText: {
    fontSize: 20,
    fontFamily: 'lato',
    color: white,
    flexGrow: 5,
    textAlign: 'center'
  },
  headerBackIcon: {
    position: 'absolute',
    left: 13,
    bottom: 6,
    paddingVertical: 10,
    paddingHorizontal: 10,
    zIndex: 5
  },
  headerMain: {
    paddingTop: 10,
    paddingBottom: 14,
    paddingLeft: 20,
    paddingRight: 24,
    justifyContent: 'space-between'
  },
  row: {
    flexDirection: 'row'
  },
  headerLocation: {
    alignItems: 'center',
  },
  headerLocationIcon: {
    marginRight: 20,
    marginLeft: -5
  },
  headerCol: {
    width: '45%',
  },
  address: {
    fontFamily: 'lato',
    fontSize: 14,
    color: white
  },
  addressOpacity: {
    opacity: 0.55
  },
  headerBottom: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingHorizontal: 17,
    paddingVertical: 16,
    justifyContent: 'flex-start',
    marginRight: -40
  },
  checkMarksBlock: {
    alignItems: 'center',
    marginRight: 40,
    opacity: 0.5,
  },
  checkMarksBlockActive: {
    opacity: 1,
  },
  checkText: {
    color: white,
    fontSize: 14,
    fontFamily: 'lato',
    marginLeft: 8
  }
});

export default styles;