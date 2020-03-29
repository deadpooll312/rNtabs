import * as React from 'react';
import { connect } from 'react-redux';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView
} from 'react-native';
// local files
import { initFeed } from '../actions/feed.action';
import { HeaderComponent } from '../components/header';

function FeedScreen(props) {
  const { feed, initData } = props;

  React.useEffect(() => {
    initData();
  }, []);

  return <React.Fragment>
    <HeaderComponent />
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {feed.data.map(item => <Text key={item.id}>TITLE: {item.title}</Text>)}
      </ScrollView>
    </SafeAreaView>
  </React.Fragment>
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // marginTop: Constants.statusBarHeight,
  },
  scrollView: {
    paddingHorizontal: 15,
    // justifyContent: 'flex-start'
  },
  text: {
    fontSize: 42,
    textAlign: 'left'
  },
});



const mapState = ({ feed }) => ({
  feed
});

const mapDispatch = dispatch => ({
  initData: () => dispatch(initFeed())
})

export default connect(mapState, mapDispatch)(FeedScreen)
