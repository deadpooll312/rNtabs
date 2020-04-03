import { StyleSheet } from "react-native";
import { black, blue, white } from "../../styles/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  sortContainer: {
    paddingTop: 24,
    paddingBottom: 13,
    shadowColor: black,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
    backgroundColor: white,
    zIndex: 5
  },
  scrollView: {
    paddingHorizontal: 0
  },
  text: {
    fontSize: 42,
    textAlign: "left"
  },
  
  dropdown: {
    width: 115
  },
  angleIcon: {
    position: "absolute",
    bottom: 2,
    right: -10
  },
  select: {
    fontSize: 16,
    fontFamily: "lato",
    color: black
  },
  row: {
    paddingHorizontal: 15,
  },
  // select styles
  inputIOS: {
    fontSize: 14,
    fontFamily: "lato"
  },
  inputAndroid: {
    fontSize: 14,
    fontFamily: "lato"
  },
  loader: {
    marginTop: 15,
  }
});

export default styles;

