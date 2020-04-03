import {StyleSheet} from 'react-native';
import { white, red } from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#333',
  },
  wrapper: {
    paddingTop: 68,
    paddingBottom: 25,
    paddingHorizontal: 24
  },
  list: {
    marginRight: 20,
  },
  notificationTextContainer: {
    width: 16,
    height: 16,
    backgroundColor: red,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: -5.5,
    right: -13
  },
  notificationText: {
    color: white,
    fontFamily: 'lato-bold',
    fontSize: 10
  },
  headerTitle: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  titleText: {
    color: white,
    fontSize: 20,
    fontFamily: 'lato-bold',
    flexGrow: 5
  },
  background: {
    resizeMode: "cover",
    justifyContent: "center"
  }
});

export default styles;
