import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Dimensions,StyleSheet } from 'react-native';
const {height} = Dimensions.get('window')

export default class ProfileComponent extends Component {
  render() {
    return (
      <View style={user.container}>
        <View style={user.top}>

        </View>
        <View style={user.center}>

        </View>
        <View style={user.bottom}>
          
        </View>
      </View>
    )
  }
}

const user = StyleSheet.create({
  container: {
    flex: 1,
  },
  top:{
    height: height*0.53,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#98d2c1'
  },
  center:{
    height: height*0.38,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  bottom: {
    height: height*0.09,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#98d'
  }
})