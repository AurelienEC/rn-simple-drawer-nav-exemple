import React, { Component } from 'react'
import {
    TouchableWithoutFeedback,
    SafeAreaView,
    TouchableOpacity,
    View,
    Text,
    Image, StyleSheet
} from 'react-native'
import { TabBarBottomProps, NavigationRoute } from 'react-navigation';
import Ionicons from "react-native-vector-icons/Ionicons"

const HomeButton = ({
                        onPress,
                        idx,
                        icon,
                        label
                      }) => (
    <TouchableWithoutFeedback
        onPress = {() => onPress()}
        key={idx}
        style={styles.tab_container}
    >
        <View style={styles.tab_btn}>

            <View style={styles.mainCircle}>
                <View style={styles.leftRounded}></View>
                <View style={styles.leftRounded2}></View>
                <View style={styles.rightRounded}></View>
                <View style={styles.rightRounded2}></View>
                <View style={styles.tab_icon} >
                    {icon}
                </View>
            </View>
            <View style={styles.backbar}></View>

            <Text style={styles.tab_label} >
                {label}
            </Text>
        </View>
    </TouchableWithoutFeedback>

);
export default HomeButton;

const styles = StyleSheet.create({
    tab_container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        zIndex:4,
    },
    tab_btn: {
        top: -30,
        left: 0,
        zIndex:4,
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    mainCircle:{
        height: 80,
        width:80,
        backgroundColor: 'white',
        borderRadius: 40,
        zIndex:3,

    },
    tab_icon: {
        zIndex:4,
        top: 10,
        left: 10,
        width: 60,
        height:60,
        borderRadius: 80,
        backgroundColor: 'green',
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',

    },
    leftRounded:{
        width: 50,
        height: 30,
        borderRadius: 15,
        backgroundColor: 'white',
        position: 'absolute',
        left:-8,
        top: 27,
    },
    leftRounded2:{
        width: 410,
        height: 20,
        borderRadius: 20,
        backgroundColor: 'grey',
        position: 'absolute',
        left:-409,
        top: 18
        ,
    },
    rightRounded:{
        width: 50,
        height: 30,
        borderRadius: 15,
        backgroundColor: 'white',
        position: 'absolute',
        right:-8,
        top: 27,

    },
    rightRounded2:{
        width: 410,
        height: 20,
        borderRadius: 20,
        backgroundColor: 'grey',
        position: 'absolute',
        right:-409,
        top: 18
    },
    backbar:{
        width: 1000,
        backgroundColor: 'grey',
        height: 15,
        position: 'absolute',
        top: 17,
    },
    tab_label: {
        top: 5,
    }

});