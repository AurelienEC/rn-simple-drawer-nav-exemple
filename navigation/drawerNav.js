import {  Dimensions } from 'react-native';
import { createDrawerNavigator, createAppContainer } from 'react-navigation';

import SideMenu from '../components/SideMenu/'

import AppNav from './tabNav';

const drawerNav = createDrawerNavigator({
    Item1: {
        screen: AppNav,
    }
}, {
    contentComponent: SideMenu,
    drawerWidth: Dimensions.get('window').width - 120,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose'
});

const AppDrawerNav = createAppContainer(drawerNav)

export default AppDrawerNav