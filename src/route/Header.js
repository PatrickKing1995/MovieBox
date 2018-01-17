import React, { Component } from 'react';
import { View, Text, StatusBar, StyleSheet, Image, TouchableOpacity, BackHandler } from 'react-native';

export  class MoviesHearder extends Component {
  render() {
    return (
        <View style={header.wrapp} elevation={20}>
            <View style={[header.container, {backgroundColor: '#311e3e'}]}>
            <View style={header.statusbar}>
            </View>
              <View style={header.rap}>
                <TouchableOpacity
                onPress={this.props.open}
                  >
                    <Image style={header.image2} source={require('../../icons/menu.png')}/>
                </TouchableOpacity>
                <Text style={header.title}>Popular</Text>
                <TouchableOpacity
                  >
                    <Image style={header.image2} source={require('../../icons/view-module.png')}/>
                </TouchableOpacity>
              </View>
            </View>
        </View>
    )
  }
}

export  class FavorHearder extends Component {
  render() {
    return (
        <View style={header.wrapp} elevation={20}>
            <StatusBar translucent={true} backgroundColor={'transparent'}/>
            <View style={[header.container, {backgroundColor: "#311e3e"}]}>
            <View style={header.statusbar}>
            </View>
              <View style={header.rap}>
                <TouchableOpacity
                  >
                    <Image style={header.image2} source={require('../../icons/menu.png')}/>
                </TouchableOpacity>
                <Text style={header.title}>Favorists</Text>
                <TouchableOpacity
                  >
                </TouchableOpacity>
              </View>
            </View>
        </View>
    )
  }
}

const header = StyleSheet.create({
  statusbar: {
    height: "30%"
  },
  wrapp: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 0,
    shadowOpacity: 1,
  },
  container: {
    height: 80,
  },
  rap:  {
    flex: 1, 
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', 
    padding: 10,
  },
  title:  {
    color: '#FFFFFF',
    fontSize: 22,
    fontFamily: 'Relish Pro Medium',
  },
  image1: {
    height: 26,
    width: 26,
    marginLeft: 100
  },
  image2: {
    height: 30,
    width: 30,
  }
});