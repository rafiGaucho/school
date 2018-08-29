import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import {
  View,
  StyleSheet,
} from 'react-native';
import { Body, Content,Card,Item,Input, Icon,Button} from 'native-base';
import Menu from './index.js';
import Profile from './../Profile/index.js';
import Reports from './Reports';

const RootStack = createStackNavigator(
  {
    Menu: Menu,
  //  Profile: Profile,
    Reports:Reports
    },
  {
    initialRouteName: 'Menu',
  }
);
export default class Main extends React.Component {
  static navigationOptions={
    drawerLabel:'Menu',
    drawerIcon:(<Icon name='menu'  style={{color:'#636e72'}}/>),

  }

  render() {
    return <RootStack />;
  }
}
