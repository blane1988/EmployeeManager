import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyDiH47wjPcP4VofMww0k_Yraa8lnUiPxGc',
      authDomain: 'manager-55ff5.firebaseapp.com',
      databaseURL: 'https://manager-55ff5.firebaseio.com',
      projectId: 'manager-55ff5',
      storageBucket: 'manager-55ff5.appspot.com',
      messagingSenderId: '781062160689'
    };

    // Initialize firebase application with config specified above
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return(
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;