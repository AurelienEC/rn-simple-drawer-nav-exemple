import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet,
    Button, TouchableOpacity,
    SafeAreaView
} from 'react-native'
import IOSIcon from "react-native-vector-icons/Ionicons"

class MainScreen extends Component {

   static navigationOptions =  ({navigation}) => ({
        title: "Main",
        headerLeft:(
            <TouchableOpacity style={styles.menu_btn}
                onPress={() => {navigation.openDrawer()}}

            >
                <IOSIcon name="ios-menu" size={30} />
                </TouchableOpacity>),
    headerStyle: {  }
})
    render () {
        return (
            <SafeAreaView style={styles.container}>
                <Text>Main</Text>
                <Button onPress={() => this.props.navigation.navigate("Detail")} title="Detail Page" />
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'grey',
    },
    menu_btn: {
        marginLeft: 20,
    }
});

export default MainScreen;