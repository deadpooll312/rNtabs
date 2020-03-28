import * as React from 'react';
import { Provider } from 'react-redux';
// local files
import Navigation from './navigation';
import store from './store';

export default function App() {
  // have to init user from storage
  return (
    <Provider store={store}>
      <Navigation isUser={false} />
    </Provider>
  );
}
