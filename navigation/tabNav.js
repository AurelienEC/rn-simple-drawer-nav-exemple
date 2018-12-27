import React, { Component }  from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator, createAppContainer } from  'react-navigation';
import CustomTabBar from '../components/lib/customTabBar'

import stackNav from './stackNav';
import DetailScreen from '../components/DetailScreen'

const tabNav = createBottomTabNavigator(
    {
        Settings : DetailScreen,
        Other : DetailScreen,
        Home: stackNav,
        Place : DetailScreen,
        Another : DetailScreen,
    },
    {
        initialRouteName : 'Home',
        //tabBarComponent : props => <CustomTabBar {...props} />,
        tabBarComponent : CustomTabBar,
         defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'Home') {
                    iconName = `ios-home`;
                } else if (routeName === 'Detail') {
                    iconName = `ios-bookmarks`;
                } else if (routeName === 'Settings') {
                    iconName = `ios-settings`;
                } else {
                    iconName = `ios-bookmarks`;
                }

                // You can return any component that you like here! We usually use an
                // icon component from react-native-vector-icons
                return <Ionicons name={iconName} size={routeName === 'Home' ? 20 : 18} color={tintColor} />;
            },
        }),
        tabBarOptions: {

            activeTintColor: 'green',
            inactiveTintColor: 'gray',
        },
    }
);


const AppNav = createAppContainer(tabNav)

export default AppNav;