import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {MoviesHearder} from '../route/Header'

export default class MovieComponent extends Component {
  onClick_User = () => {
    this.props.navigation.navigate('DrawerOpen');
  };
  render() {
    return (
      <View style={{ flex: 1,  backgroundColor: "#f9f8fd"  }}>
        <MoviesHearder open={() => this.onClick_User()}/>
        <View>

        </View>
      </View>
    )
  }
}