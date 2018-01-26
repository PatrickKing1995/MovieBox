import React, { Component } from 'react'
import { Text, View, FlatList,StyleSheet,Image,Alert, TouchableOpacity  } from 'react-native';
import {Detail} from '../route/Header';

export default class DetailComponent extends Component {
  constructor(props){
    super(props);
  }
  onClick_User = () => {
    this.props.navigation.goBack();
  };

  render() {
    return (
      <View style={{ flex: 1,  backgroundColor: "#f9f8fd"  }}>
        <Detail open={() => this.onClick_User()} />
        <FlatList
          refreshing={true}
          data={reminders}
          renderItem={({item, index}) => {
            return <Items item={item} index={index}/>;
          }}
        />
      </View>
    )
  }
}

const details = StyleSheet.create({
 
})