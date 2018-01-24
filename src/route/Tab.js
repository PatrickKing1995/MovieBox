import React, { Component } from 'react';
import { View,
    Text,
    ScrollView,
    StyleSheet,
    Image,
    Dimensions
 } from 'react-native';
import { StackNavigator, TabNavigator, DrawerNavigator, DrawerItems } from 'react-navigation';
import AboutComponent from '../components/AboutComponent';
import FavoristComponent from '../components/FavoristComponent';
import MovieContainer from '../containers/MovieContainer'
import SettingComponent from '../components/SettingComponent';
import AllReminders from '../components/AllReminders'
const {height} = Dimensions.get('window')

export const Detail = StackNavigator({
    Screen_Set: {
        screen: SettingComponent,
        navigationOptions: {
            header: null,
        }
    },
    Screen_All: {
        screen: AllReminders,
        navigationOptions: {
            header: null,
        }
    }
})

export const Tab = TabNavigator(
  {
    Screen_Movie: {
        screen: MovieContainer,
        navigationOptions: {
          tabBarLabel: ()=>
          <Text style={tab.text}>Movies</Text>
      ,
      tabBarIcon: ()=>
          <Image
            source={require('../../icons/home.png')}
            style={tab.icon}
          />
            
        }
    },
    Screen_Favor: {
        screen: FavoristComponent,
        navigationOptions: {
          tabBarLabel: ()=>
          <Text style={tab.text}>Favoristes</Text>
      ,
      tabBarIcon: ()=>
          <View >
            <Image
            source={require('../../icons/favor.png')}
            style={tab.icon}
          />
          <View style={tab.favor}>
            <Text style={tab.textI}>18</Text>
          </View>
          </View>
            
        }
    },

    Screen_Setting: {
        screen: Detail,
        navigationOptions: {
          tabBarLabel: ()=>
          <Text style={tab.text}>Settings</Text>
      ,
      tabBarIcon: ()=>
          <Image
            source={require('../../icons/settings.png')}
            style={tab.icon}
          />
        }
    },

    Screen_About: {
        screen: AboutComponent,
        navigationOptions: {
            tabBarLabel: ()=>
                <Text style={tab.text}>About</Text>
            ,
            tabBarIcon: ()=>
                <Image
                  source={require('../../icons/about.png')}
                  style={[tab.icon]}
                />
        }
    },
  },
  {
    
      tabBarPosition: 'bottom',
      swipeEnabled: false,
      animationEnabled: true,
      tabBarOptions: {
        // activeTintColor: '#2c3e50',
          style: {
              backgroundColor: '#1F2B40',
              opacity: 1,
          },
          tabStyle: {
            height: height*0.09,    
           },
           iconStyle: {
             alignItems:'flex-end',
             justifyContent: 'center',
              width: 60,
              height: 32,
           },
            upperCaseLabel: false,
            renderIndicator: ()=> null,
            showLabel: true,
            showIcon: true
      },
  }
)

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
      width: 20,
      height:20,
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
