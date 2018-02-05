import React, { Component } from 'react';
import { Text, View,Image, TouchableOpacity,TextInput, WebView,TouchableWithoutFeedback,StyleSheet, Slider } from 'react-native';
import {SettingHearder} from '../route/Header'

export default class SettingComponent extends Component {
  constructor(props){
    super(props);
    this.state={
      value: 0,
    }
  }
  onClick_User = () => {
    this.props.navigation.navigate('DrawerOpen');
  };

  change(value) {
    this.setState(() => {
      return {
        value: Math.round(parseFloat(value)*10)/10,
      };
    });
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#f9f8fd" }}>
        <SettingHearder open={() => this.onClick_User()}/>
        <View style={setting.container}>
          <View style={setting.top}>
            <View style={setting.titleView}>
              <Text style={setting.title}>Filter</Text>
            </View>
            <View style={setting.ratescore}> 
              <View style={setting.ratetitle}>
                <Text style={setting.textfirst}>Movie with rate from:</Text>
                <Text style={setting.text}>{this.state.value}</Text>
              </View>
              <View style={setting.pull}>
              <View style={setting.soView}>
              <Text style={setting.so}>0</Text>
              </View>
              
              <Slider
                  style={setting.slide}
                  step={0.1}
                  maximumValue={10}
                  onValueChange={this.change.bind(this)}
                  value={this.state.value}
              />
              <View style={setting.soView}>
              <Text style={setting.so}>10</Text>
                </View>
              
              </View>
            </View>
            <TouchableOpacity
              style={setting.years}
            >
              <Text style={setting.textfirst}>From Realese Year:</Text>
              <Text style={setting.textyear}>2007</Text>
            </TouchableOpacity>
          </View>
          <View style={setting.bottom}>
          <View style={setting.titleView}>
              <Text style={setting.title}>Sort By</Text>
            </View>
            <TouchableOpacity
              style={setting.date}
            >
              <Text style={setting.textfirst}>Realese Date</Text>
               <Image style={setting.check} source={require('../../icons/check.png')}/>
            </TouchableOpacity>
            <TouchableOpacity
              style={setting.rating}
            >
              <Text style={setting.textfirst}>Rating</Text>
              <Image style={setting.check} source={require('../../icons/check.png')}/>
            </TouchableOpacity>
          </View>
          </View>
      </View>
    )
  }
}

const setting =StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  top:{
    width: '100%',
    height: '40%',
  },
  bottom:{
    height: '60%',
    width: '100%',
  },
  slide:{
    width: '81%',
  },
  titleView:{
    height: '13%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F1F1F1',
  },
  title:{
    paddingLeft: 10,
    width: '100%',
    fontWeight: 'bold',
    fontSize: 18,
    color: '#000'
  },
  ratescore:{
    paddingLeft: 10,
    height: '67%',
  },
  ratetitle:{
    height: '20%',
    flexDirection:'row',
    alignItems:'center',
  },
  pull:{
    width: '100%',
    height: '70%',
    borderBottomWidth: 1.5,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    borderColor:'#F1F1F1',
  },
  date:{
    height: '15%',
    flexDirection:'row',
    marginLeft: 10,
    alignItems:'center',
    borderBottomWidth: 1.5,
    borderColor:'#F1F1F1',
  },
  soView:{
    width: '6%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  so:{
    fontSize: 18,
    color: '#000',
  },
  textyear:{
    width: '20%',
    fontSize: 18,
    color: '#000',
    textAlign: 'center'
  },
  text:{
    width: '20%',
    fontSize: 18,
    height: '100%',
    color: '#000',
    textAlign: 'center'
  },
  textfirst:{
    width: '80%',
    fontSize: 18,
    color: '#000',
  },
  years:{
    height: '20%',
    flexDirection:'row',
    borderBottomWidth: 1.5,
    borderColor:'#F1F1F1',
    marginLeft: 10,
  },
  check:{
    height: 30,
    width: 30,
    tintColor: '#3F485B',
  },
  rating:{
    height: '15%',
    flexDirection:'row',
    alignItems:'center',
    marginLeft: 10,
    borderBottomWidth: 1.5,
    borderColor:'#F1F1F1',
  },
})