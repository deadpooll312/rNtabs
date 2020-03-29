import * as React from 'react';
import { Provider } from 'react-redux';
import { SafeAreaView } from 'react-native';
// local files
import Navigation from './navigation';
import store from './store';

export default function App() {
  // have to init user from storage
  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1 }}>
        <Navigation isUser={true} />
      </SafeAreaView>
    </Provider>
  );
}
