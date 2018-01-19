import React, { Component } from 'react';
import { Text, View } from 'react-native';
import {SettingHearder} from '../route/Header'

export default class SettingComponent extends Component {
  onClick_User = () => {
    this.props.navigation.navigate('DrawerOpen');
  };
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#f9f8fd" }}>
        <SettingHearder open={() => this.onClick_User()}/>
        <Text>Hi</Text>
      </View>
    )
  }
}