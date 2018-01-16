import React, { Component } from 'react';
import { View,
    Text,
    ScrollView,
    StyleSheet,
    Image,
    Dimensions
 } from 'react-native';
import { StackNavigator, TabNavigator, DrawerNavigator, DrawerItems } from 'react-navigation';
import {Tab} from './Tab';
import ProfileComponent from '../components/ProfileComponent'
const {width} = Dimensions.get('window')

export const Drawer = DrawerNavigator({
    Home: {
        screen: Tab
    }
},
    {
        drawerWidth: width,
        drawerPosition:'left',
        contentComponent: props =><ProfileComponent {...props}/>
});

