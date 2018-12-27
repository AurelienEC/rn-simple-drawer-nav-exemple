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
                        selected,
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

            <Text style={(selected) ? styles.selected_tab_label : styles.tab_label} >
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
        left: 0,
        zIndex:4,
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',


    },
    mainCircle:{
        position: 'absolute',
        height: 50,
        width:50,
        backgroundColor: 'white',
        borderRadius: 40,
        zIndex:3,
        top: -25,

    },
    tab_icon: {
        zIndex:4,
        top: 5,
        left: 10,
        width: 30,
        height:30,
        borderRadius: 15,
        backgroundColor: 'green',
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',

    },
    leftRounded:{
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: 'white',
        position: 'absolute',
        left: -1,
        top: 9,
    },
    leftRounded2:{
        width: 400,
        height: 10,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius:10,
        borderTopLeftRadius: 0,
        borderTopRightRadius:0,
        backgroundColor: 'gray',
        position: 'absolute',
        left:-396,
        top: 5
        ,
    },
    rightRounded:{
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: 'white',
        position: 'absolute',
        right:-1,
        top: 9,

    },
    rightRounded2:{
        width: 400,
        height: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 0,
        borderTopLeftRadius: 0,
        borderTopRightRadius:0,
        backgroundColor: 'gray',
        position: 'absolute',
        right:-396,
        top: 5
    },
    backbar:{
        zIndex: 2,
        width: 1000,
        backgroundColor: 'grey',
        height: 10,
        position: 'absolute',
        top: -20,
    },
    tab_label: {
        top: 12,
        zIndex: 5
    },
    selected_tab_label: {
        top: 12,
        zIndex: 5,
        color: 'green',
    }

});