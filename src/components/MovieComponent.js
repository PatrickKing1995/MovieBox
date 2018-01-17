import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {MoviesHearder} from '../route/Header'

export default class MovieComponent extends Component {
  onClick_User = () => {
    this.props.navigation.navigate('DrawerOpen');
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <MoviesHearder open={() => this.onClick_User()}/>
        <Text>Hi</Text>
      </View>
    )
  }
}