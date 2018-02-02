import React, { Component } from 'react'
import { Text, View,WebView,StyleSheet } from 'react-native'
import{AboutHearder} from '../route/Header'
import {queryAllFavor } from '../localdatabase/allSchemas';
import realm from '../localdatabase/allSchemas';

export default class Count extends Component {
constructor(props){
    super(props);
    this.state={
      favor: [],
    }
    this.reloadData();
    realm.addListener('change', () => {
        this.reloadData();
    });
  }

  reloadData = () => {
    queryAllFavor().then((favor) => {
        this.setState({ favor });
    }).catch((error) => {
        this.setState({ favor: [] });
    });
    console.log(`reloadData`);
  }
  render() {
    return (
        <View style={[tab.favor, {height: this.state.favor.length==0?0:20,width: this.state.favor.length==0?0:20 }]}>
            <Text style={tab.textI}>{this.state.favor.length}</Text>
        </View>
    )
  }
}

const tab=StyleSheet.create({
    text: {
        fontSize: 12,
        color: '#F6F7F8',
    },
    icon: {
        top: 5,
        height: 25,
        width: 25,
    },
    favor: {
      position: 'absolute',
      borderRadius: 50,
      backgroundColor: 'red',
      justifyContent: 'center',
      alignItems: 'center',
      left: 20,
      top: 0,
    },
    textI: {
      backgroundColor: 'transparent',
      color: 'white',
    fontSize: 13,
    }
})