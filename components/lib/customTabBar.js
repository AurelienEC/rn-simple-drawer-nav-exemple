import React, { Component } from 'react'
import {
    SafeAreaView,
    TouchableOpacity,
    View,
    Text,
    Image, StyleSheet
} from 'react-native'
import { TabBarBottomProps, NavigationRoute } from 'react-navigation';
import  TabBarButton  from './tabBarButton'
import HomeButton from './homeButton'


export default class CustomTabBar extends Component {
    navigationStateIndex = null;

    buttonPress = (route, idx, currentIndex, navigation, label) => {
        if (currentIndex != idx) {
            if (this.isNavigateAvaliable(label)) {
                navigation.navigate(route.routeName);
            } else {
                this._onNavigationRefused(label);
            }
        }
    };
    // call when each time user click different tab
    navigationAvaliableFuncs: {
        [key: string]: () => boolean
    } = {
        //Account: this._needSignIn.bind(this),
        //Progress: this._needSignIn.bind(this),
    }

    // call when clicking tab got refused
    navigationRefusedFuncs: {
        [key]: () => void
    } = {
        Account: this._refusedByNeedSignIn.bind(this),
        Progress: this._refusedByNeedSignIn.bind(this)
    }

    constructor(props) {
        super(props);
    }

      _needSignIn() {
        return !!this.props.authToken;
    }

    _refusedByNeedSignIn() {
        const { navigation } = this.props;
        navigation.navigate('...');
    }

    // Main function to render tabbar
    renderTabBarButton(route, idx) {
        const {
            activeTintColor,
            inactiveTintColor,
            navigation,
            getLabelText,
            renderIcon,
        } = this.props;
        const currentIndex = navigation.state.index;
        const color = currentIndex === idx ? activeTintColor : inactiveTintColor;
        const label = getLabelText({ route, focused: currentIndex === idx, index: idx });
        let style;
        let icon_style;
        if(route.routeName === 'Home'){
            return(
                <HomeButton
                    onPress={() => this.buttonPress(route, idx, currentIndex, navigation, label) }
                    key={route.routeName}
                    route={route}
                    idx={idx}
                    label={label}
                    tintColor={'white'}
                    icon={renderIcon({ route, tintColor: 'white', focused: currentIndex === idx, index: idx })}
                    style={styles.tab_btn}
                />
            )
        }
        return (
            <TabBarButton
                onPress={() => this.buttonPress(route, idx, currentIndex, navigation, label) }
                key={route.routeName}
                route={route}
                idx={idx}
                label={label}
                icon={renderIcon({ route, tintColor: color, focused: currentIndex === idx, index: idx })}
                style={styles.tab_btn}
            />
        );
    }

    isNavigateAvaliable(label: string) {
        const func: any = this.navigationAvaliableFuncs[label];
        if (func) {
            return func();
        }
        return true;
    }

    _onNavigationRefused(label: string) {
        const func = this.navigationRefusedFuncs[label];
        if (func) {
            func();
        }
    }

    render() {

        const { navigation, style } = this.props;
        const tabBarButtons = navigation.state.routes.map(this.renderTabBarButton.bind(this));
        return (
            <View style={styles.tab_container}>
                {tabBarButtons}
            </View>
        );
    }
}
const styles = StyleSheet.create({
    tab_container: {
        flexDirection : 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
});
    /*
    <TouchableOpacity
                onPress={() => { this.buttonPress(route, idx)}}
                key={route.routeName}
                style={style}
            >
                <View style={icon_style} >
                    {renderIcon({ route, tintColor: color, focused: currentIndex === idx, index: idx })}
                </View>
                { <Text >
                    {label}
                </Text>  }
            </TouchableOpacity>
     */