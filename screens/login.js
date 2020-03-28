import * as React from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';

function LoginScreen(props) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>LOGIN PAGE</Text>
    </View>
  );
}

const mapState = ({feed}) => ({
  feed
});

const mapDispatch = dispatch => ({
  // init login page 
})

export default connect(mapState, mapDispatch)(LoginScreen)
