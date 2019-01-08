import React, { Component } from 'react'
import {
    SafeAreaView,
    StyleSheet
} from 'react-native'
import { TabBarBottomProps, NavigationRoute } from 'react-navigation';
import  TabBarButton  from './tabBarButton'



export default class CustomTabBar extends Component {
    buttonPress = (route, key, currentIndex, navigation) => {
        if (currentIndex != key) {
                navigation.navigate(route.routeName);
        }
    };
    constructor(props) {
        super(props);
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
        return (
            <TabBarButton
                onPress={() => this.buttonPress(route, idx, currentIndex, navigation, label) }
                referenceForKey={route.routeName}
                route={route}
                selected={currentIndex === idx}
                idx={idx}
                key={idx}
                label={label}
                icon={renderIcon({ route, tintColor: color, focused: currentIndex === idx, index: idx })}
                style={styles.tab_btn}
            />
        );
    }
    render() {

        const { navigation } = this.props;
        const tabBarButtons = navigation.state.routes.map(this.renderTabBarButton.bind(this));
        return (
            <SafeAreaView style={styles.tab_container}>
                {tabBarButtons}
            </SafeAreaView>
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
