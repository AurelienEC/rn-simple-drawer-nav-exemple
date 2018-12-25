/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import AppDrawerNav from './navigation/drawerNav'
import AppNav from './navigation/stackNav'
import React, { Component } from "react"
import {StyleSheet} from 'react-native'
export default class App extends Component {
  render() {
    return (
        <AppDrawerNav />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
