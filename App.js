import React, { Component } from 'react'
import { Text, View,StatusBar } from 'react-native';
import {createStore } from 'redux';
import { Provider } from 'react-redux';
import allReducers from './src/reducers/index';
import {Drawer} from './src/route/Drawer'

let store = createStore(allReducers);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Drawer/>
      </Provider>
    )
  }
}