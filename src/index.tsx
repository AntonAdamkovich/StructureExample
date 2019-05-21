import React, { Component } from 'react';
import { AppState } from 'react-native';
import { Provider } from 'react-redux';

import store from './store';

import Navigator from './navigator';
import ModalsPortal from './components/connected/ModalsPortal';

export default class App extends Component {

  componentDidMount(): void {
    AppState.addEventListener('change', () => {});
  }

  componentWillUnmount(): void {
    AppState.removeEventListener('change', () => {});
  }

  render() {
    return (
      <Provider store={store}>
        <Navigator/>
        <ModalsPortal/>
      </Provider>
    );
  }
}
