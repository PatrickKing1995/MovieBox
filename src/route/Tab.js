import React, {
    Component
} from 'react';
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    Image,
    Dimensions
} from 'react-native';
import {
    StackNavigator,
    TabNavigator,
    DrawerNavigator,
    DrawerItems
} from 'react-navigation';
import AboutComponent from '../components/AboutComponent';
import FavorContainer from '../containers/FavorContainer';
import MovieContainer from '../containers/MovieContainer'
import SettingComponent from '../components/SettingComponent';
import AllReminderContainer from '../containers/AllReminderContainer'
import DetailContainer from '../containers/DetailContainer';
import Count from '../route/Count'
const {
    height
} = Dimensions.get('window')

export const Reminders = StackNavigator({
    Screen_Set: {
        screen: SettingComponent,
        navigationOptions: {
            header: null,
        }
    },
    Screen_All: {
        screen: AllReminderContainer,
        navigationOptions: {
            header: null,
        }
    }
})

export const Details = StackNavigator({
    Screen_Film: {
        screen: MovieContainer,
        navigationOptions: {
            header: null,
        }
    },
    Screen_Detail: {
        screen: DetailContainer,
        navigationOptions: {
            header: null,
        }
    }
})

export const DetailsFavor = StackNavigator({
    Screen_FavorDetail: {
        screen: FavorContainer,
        navigationOptions: {
            header: null,
        }
    },
    Screen_DetailFavor: {
        screen: DetailContainer,
        navigationOptions: {
            header: null,
        }
    }
})

export const Tab = TabNavigator({
    Screen_Movie: {
        screen: Details,
        navigationOptions: {
            tabBarLabel: () => <Text style = {tab.text}>Movies</Text>,
            tabBarIcon: () =><Image source = {require('../../icons/home.png')} style = {tab.icon}/>

        }
    },
    Screen_Favor: {
        screen: DetailsFavor,
        navigationOptions: {
            tabBarLabel: () =>
                <Text style = {tab.text}>Favoristes</Text>,
            tabBarIcon: () =>
                <View>
                    <Image source = {require('../../icons/favor.png')} style = {tab.icon}/> 
                    <Count/>
                </View>

        }
    },

    Screen_Setting: {
        screen: Reminders,
        navigationOptions: {
            tabBarLabel: () =>
                <Text style = {
                    tab.text
                } > Settings </Text>,
            tabBarIcon: () =>
                <Image
            source = {
                require('../../icons/settings.png')
            }
            style = {
                tab.icon
            }
            />
        }
    },

    Screen_About: {
        screen: AboutComponent,
        navigationOptions: {
            tabBarLabel: () =>
                <Text style = {
                    tab.text
                } > About </Text>,
            tabBarIcon: () =>
                <Image
            source = {
                require('../../icons/about.png')
            }
            style = {
                [tab.icon]
            }
            />
        }
    },
}, {

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
            height: height * 0.09,
        },
        iconStyle: {
            alignItems: 'flex-end',
            justifyContent: 'center',
            width: 60,
            height: 32,
        },
        upperCaseLabel: false,
        renderIndicator: () => null,
        showLabel: true,
        showIcon: true
    },
})

const tab = StyleSheet.create({
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
        height: 20,
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