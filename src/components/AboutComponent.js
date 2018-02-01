import React, { Component } from 'react'
import { Text, View,WebView } from 'react-native'
import{AboutHearder} from '../route/Header'

export default class AboutComponent extends Component {
  onClick_User = () => {
    this.props.navigation.navigate('DrawerOpen');
  };
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#f9f8fd"  }}>
        <AboutHearder open={() => this.onClick_User()}/>
        <WebView
          source={{uri: 'https://www.themoviedb.org/about/our-history'}}
          />
      </View>
    )
  }
}
