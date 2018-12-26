import React, { Component } from 'react'
import {
    TouchableOpacity,
    View,
    Text,
    StyleSheet
} from 'react-native'
import { TabBarBottomProps, NavigationRoute } from 'react-navigation';


const TabBarButton = ({
            onPress,
            key,
            icon,
            label
}) => (
        <TouchableOpacity
            onPress = {() => onPress()}
            key={key}
            style={styles.tab_btn}
        >
            <View style={styles.tab_icon} >
                    {icon}
            </View>
            <Text >
                {label}
            </Text>
        </TouchableOpacity>
    );
export default TabBarButton;
const styles = StyleSheet.create({
    tab_btn: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    tab_icon: {

    },

});
