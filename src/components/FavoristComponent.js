import React, { Component } from 'react'
import { Text, View } from 'react-native'
import{FavorHearder} from '../route/Header'

export default class FavoristComponent extends Component {
  onClick_User = () => {
    this.props.navigation.navigate('DrawerOpen');
  };
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#f9f8fd"  }}>
        <FavorHearder open={() => this.onClick_User()}/>
        <Text>Hi</Text>
      </View>
    )
  }
}