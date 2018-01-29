import React, { Component } from 'react';
import { View,
    Text,
    ScrollView,
    StyleSheet,
    Image,
    Dimensions,
    KeyboardAvoidingView
 } from 'react-native';
import { StackNavigator, TabNavigator, DrawerNavigator, DrawerItems } from 'react-navigation';
import {Tab} from './Tab';
import ProfileComponent from '../components/ProfileComponent'
const {width} = Dimensions.get('window')

this.state= {
    width: width*0.87,
}


export const Drawer = DrawerNavigator({
    Home: {
        screen: Tab
    }
},

    {   
        useNativeAnimations: false,
        drawerWidth: this.state.width,
        drawerPosition:'left',
        contentComponent: props =><ProfileComponent {...props}/>
});

