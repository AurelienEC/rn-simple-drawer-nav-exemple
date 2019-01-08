import React, { Component } from 'react'
import {
    TouchableOpacity,
    View,
    Text,
    StyleSheet
} from 'react-native'
const TabBarButton = ({
            selected,
            onPress,
            icon,
            idx,
            label
}) => (
        <TouchableOpacity
            onPress = {() => onPress()}
            key={idx}
            style={idx < 4 ? styles.tab_btn : styles.tab_hidden}
        >
            <View style={styles.tab_icon} >
                    {icon}
            </View>
            <Text style={(selected) ? styles.selected_tab_label : styles.tab_label}>
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
        marginTop: 4
    },
    selected_tab_label: {
        color: 'green',
    },
    tab_hidden : {
        display: 'none',
    }

});
