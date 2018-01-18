import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Dimensions,StyleSheet, Image } from 'react-native';
const {height} = Dimensions.get('window')

export default class ProfileComponent extends Component {
  render() {
    return (
      <View style={user.container}>
        <View style={user.top}>
          <View style={user.head}>
            <Image style={user.avatar} source={require('../../images/people.png')}/>
            <Text style={user.nameText}>ComeBackKing</Text>
          </View>
          <View style={user.infor}>
            <View style={user.list}>
              <Image style={user.icon} source={require('../../icons/cake.png')}/>
              <Text style={user.text}>19/12/1995</Text>
            </View>
            <View style={user.list}>
              <Image style={user.icon} source={require('../../icons/email-variant.png')}/>
              <Text style={user.text}>patrick@enclave.vn</Text>
            </View>
            <View style={user.list}>
              <Image style={user.icon} source={require('../../icons/account-outline.png')}/>
              <Text style={user.text}>Male</Text>
            </View>
          </View>
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
  list: {
    flex: 1,
    flexDirection: 'row',
    height: "33%",
    alignItems: 'flex-end',
    padding: 15,
  },
  icon:{
    height: 30,
    width: 30,
  },
  text: {
    paddingLeft: 10,
    fontSize: 18,
    
  },
  avatar: {
    borderRadius: 50,
    height: 90,
    width: 90,
  },
  nameText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  infor: {
    flex: 1,
    height: "50%",
  },
  head: {
    height: "50%",
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  top:{
    flex: 1,
    height: height*0.60,
    backgroundColor: '#98d2c1'
  },
  center:{
    height: height*0.31,
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