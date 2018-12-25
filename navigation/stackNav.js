import React, { Component }  from 'react';

import { createStackNavigator, createAppContainer } from  'react-navigation';

import MainScreen from "../components/MainScreen";
import DetailScreen from "../components/DetailScreen";

const stackNav = createStackNavigator({
    Main : {
        screen: MainScreen,
    },
    Detail: {
        screen: DetailScreen,
    }
},{
    initialRouteName:'Main',
    defaultNavigationOptions:{
        headerStyle: {
            backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    }
});


const AppNav = createAppContainer(stackNav)

export default AppNav;