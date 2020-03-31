import * as React from 'react';
import { connect } from 'react-redux';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View
} from 'react-native';
// local files
import { initFeed } from '../actions/feed.action';
import { HeaderComponent } from '../components/header';
import RNPickerSelect from 'react-native-picker-select';
import { black, blue, grey } from "../styles/colors";
import { Ionicons } from '@expo/vector-icons';

const items = [
  { label: 'Football', value: 'football' },
  { label: 'Baseball', value: 'baseball' },
  { label: 'Hockey', value: 'hockey' },
];

function FeedScreen(props) {
  const { feed, initData } = props;

  React.useEffect(() => {
    initData();
  }, []);

  return <React.Fragment>
    <HeaderComponent />
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={{...styles.row, ...styles.borderBottom}}>
          <View style={styles.dropdown}>
            <RNPickerSelect
              placeholder={{label: 'Select value'}}
              onValueChange={(value) => console.log(value)}
              items={items}
            />
            <Ionicons style={styles.angleIcon} name="ios-arrow-dropdown-circle" size={12} color={blue}/>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  </React.Fragment>
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scrollView: {
    paddingHorizontal: 0,
  },
  text: {
    fontSize: 42,
    textAlign: 'left'
  },
  row: {
    paddingHorizontal: 10,
    paddingVertical: 10
  },
  dropdown: {
    width: 200
  },
  angleIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0
  },
  borderBottom: {
    borderBottomWidth: 2,
    borderColor: grey,
    borderStyle: 'solid'
  }
});



const mapState = ({ feed }) => ({
  feed
});

const mapDispatch = dispatch => ({
  initData: () => dispatch(initFeed)
});

export default connect(mapState, mapDispatch)(FeedScreen)
