import React, { Component } from 'react';
import { View, Text, StatusBar,Picker,StyleSheet, Image, TouchableOpacity, BackHandler } from 'react-native';


export  class MoviesHearder extends Component {

  constructor(props){
    super(props);
    this.state={
      show: true,
      language: "Popular"
    }
  }



  render() {
    return (
        <View style={header.wrapp} elevation={20}>
            <View style={[header.container, {backgroundColor: '#2E7866'}]}>
            <View style={header.statusbar}>
            </View>
              <View style={header.rap}>
                <TouchableOpacity
                onPress={this.props.open}
                  >
                    <Image style={header.image2} source={require('../../icons/menu.png')}/>
                </TouchableOpacity>
                <Text style={header.title}>{this.state.language}</Text>
                <Picker
                  style={{width: "5%", color: "#FFFFFF"}}
                  onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
                  <Picker.Item label="Popular" value="Popular" />
                  <Picker.Item label="Top Rated" value="Top Rated" />
                  <Picker.Item label="Upcoming" value="Upcoming" />
                  <Picker.Item label="Nowplaying" value="Nowplaying" />
                </Picker>
                <TouchableOpacity
                onPress={()=>this.setState({show: !this.state.show})}
                  >
                  {
                    this.state.show?
                    <Image style={header.image2} source={require('../../icons/view-module.png')}/> :
                    <Image style={header.image2} source={require('../../icons/view-list.png')}/>
                  }
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
            <View style={[header.container, {backgroundColor: "#2E7866"}]}>
            <View style={header.statusbar}>
            </View>
              <View style={header.rap}>
                <TouchableOpacity
                onPress={this.props.open}
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

export  class SettingHearder extends Component {
  render() {
    return (
        <View style={header.wrapp} elevation={20}>
            <StatusBar translucent={true} backgroundColor={'transparent'}/>
            <View style={[header.container, {backgroundColor: "#2E7866"}]}>
            <View style={header.statusbar}>
            </View>
              <View style={header.rap}>
                <TouchableOpacity
                onPress={this.props.open}
                  >
                    <Image style={header.image2} source={require('../../icons/menu.png')}/>
                </TouchableOpacity>
                <Text style={header.title}>Settings</Text>
                <TouchableOpacity
                  >
                </TouchableOpacity>
              </View>
            </View>
        </View>
    )
  }
}

export  class AboutHearder extends Component {
  render() {
    return (
        <View style={header.wrapp} elevation={20}>
            <StatusBar translucent={true} backgroundColor={'transparent'}/>
            <View style={[header.container, {backgroundColor: "#2E7866"}]}>
            <View style={header.statusbar}>
            </View>
              <View style={header.rap}>
                <TouchableOpacity
                onPress={this.props.open}
                  >
                    <Image style={header.image2} source={require('../../icons/menu.png')}/>
                </TouchableOpacity>
                <Text style={header.title}>About</Text>
                <TouchableOpacity
                  >
                </TouchableOpacity>
              </View>
            </View>
        </View>
    )
  }
}

export  class allRemindersHearder extends Component {
  render() {
    return (
        <View style={header.wrapp} elevation={20}>
            <View style={[header.container, {backgroundColor: '#2E7866'}]}>
            <View style={header.statusbar}>
            </View>
              <View style={header.rap}>
                <View style={header.back}>
                <TouchableOpacity
                onPress={this.props.open}
                  >
                    <Image style={header.imageback} source={require('../../icons/left.png')}/>
                </TouchableOpacity>
                <Text style={header.backText}>Settings</Text>
                </View>
                <Text style={header.title}>All Reminders</Text>
                <View></View>
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
  back: {
    flex: 1,
    height: "30%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  backText: {
    color: '#FFFFFF',
    fontSize: 22,
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
    width: "40%",
    fontSize: 22,
  },
  image1: {
    height: 26,
    width: 26,
    marginLeft: 100
  },
  imageback: {
    height: 35,
    width: 35,
    marginLeft: 100
  },
  image2: {
    height: 30,
    width: 30,
  }
});