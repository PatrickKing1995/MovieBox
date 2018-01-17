import React, { Component } from 'react'
import { Text, View } from 'react-native'
import{FavorHearder} from '../route/Header'

export default class FavoristComponent extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <FavorHearder />
        <Text>Hi</Text>
      </View>
    )
  }
}