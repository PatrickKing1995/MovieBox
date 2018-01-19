import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Dimensions,StyleSheet, Image, TouchableNativeFeedback } from 'react-native';
const {height} = Dimensions.get('window')

export default class ProfileComponent extends Component {
  render() {
    return (
      <View style={user.container}>
        <View style={user.top}>
          <View style={user.head}>
          <TouchableOpacity
           style={user.edit}
          >
          <Image style={user.bttedit} source={require('../../icons/account-edit.png')}/>
          </TouchableOpacity>
          <View elevation={10} style={sha.containerin}>
          <Image style={user.avatar} source={require('../../images/people.png')}/>
          </View>
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
          <View style={user.reminder}>
            <Text style={user.textreminder}>Reminder List:</Text>
            <TouchableOpacity
              style={user.press}
            >
               <Text style={user.textshow}>Show All</Text>
               <Image style={user.iconReminder} source={require('../../icons/right.png')}/>
            </TouchableOpacity>
          </View>
          <View style={user.listreminder}>
            <View style={user.detail} elevation={10} >
              <Text style={user.textDetail}>The Dark Tower - 2017 - 5.6/10</Text>
              <Text style={user.textDetail}>2017-09-02 10:12</Text>
            </View>
            <View style={user.detail} elevation={10}>
              <Text style={user.textDetail}>The Dark Tower - 2017 - 5.6/10</Text>
              <Text style={user.textDetail}>2017-09-02 10:12</Text>
            </View>
          </View>
        </View>
        <View style={user.bottom}>
          <Text style={user.copy}>Copyright@Enc 2018</Text>
        </View>
      </View>
    )
  }
}

const sha=StyleSheet.create({
  containerin: {
    justifyContent: "center",
    borderRadius: 50,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 0,
    shadowOpacity: 1,
    backgroundColor: "white",
    alignItems: "center",
    padding: 2
  },
})

const user = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#3F485B",
  },
  copy: {
    color: "#fff"
  },
  detail:{
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowRadius: 0,
    shadowOpacity: 0.6,
    flex:1,
    margin: 10,
    paddingLeft: 25,
    width: "100%",
    alignItems: "flex-start",
    justifyContent: "center",
    backgroundColor: "#2E7866"
  },
  textDetail: {
     
    fontSize: 16,
    color: "#fff"
  },
  edit:{
    alignItems: "center",
    justifyContent: "center",
    left: 120,
    height: 40,
    width: 40,
    borderRadius: 50,
    backgroundColor: "#F2C640"
  },
  textshow:{
    padding: 5,
    fontSize: 15,
    color: "#F2C640"
  },
  bttedit:{
    height: 30,
    width: 30,
    
  },
  iconReminder: {
    height: 25,
    width: 25,
    tintColor: "#F2C640"
  },
  press: {
    flex: 1,
    opacity: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "flex-end",
    padding: 5,
  },
  list: {
    // borderBottomWidth: 1,
    flex: 1,
    flexDirection: 'row',
    height: "33%",
    alignItems: 'flex-end',
    padding: 15,
  },
  textreminder:{
    padding: 15,
    alignItems: "center", 
    fontWeight: "bold",
    fontSize: 18,
    color: "#F2C640"
  },
  reminder: {
    flex: 1,
    height: "15%",
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: "space-between",
  },
  icon:{
    height: 30,
    width: 30,
    tintColor: "#fff"
  },
  listreminder:{
    justifyContent: "center",
    alignItems: 'flex-end',
    width: "100%",
    height: "85%",
  },
  text: {
    alignItems: "center", 
    paddingLeft: 10,
    fontSize: 18,
    color: "#fff"
  },
  avatar: {
    borderRadius: 50,
    borderWidth: 10,
    height: 90,
    width: 90,
  },
  nameText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff"
  },
  infor: {
    flex: 1,
    height: "40%",
  },
  head: {
    paddingBottom: 15,
    height: "60%",
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  top:{
    flex: 1,
    height: '60%',
    // backgroundColor: '#98d2c1'
  },
  center:{
    height: '31%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottom: {
    height: '9%',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#f06966'
  }
})