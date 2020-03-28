import * as React from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';
import { initFeed } from '../actions/feed.action';

function FeedScreen(props) {
  const {feed, initData} = props;

  React.useEffect(() => {
    initData();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {feed.data.map(item => <Text key={item.id}>TITLE: {item.title}</Text>)}
    </View>
  );
}

const mapState = ({feed}) => ({
  feed
});

const mapDispatch = dispatch => ({
  initData: () => dispatch(initFeed())
})

export default connect(mapState, mapDispatch)(FeedScreen)
