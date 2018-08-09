import React, {PropTypes} from 'react';
import {
  View,
  StyleSheet,Text
} from 'react-native';
import {Icon} from 'native-base'

export default class Settings extends React.Component {
  static navigationOptions={
    drawerLabel:'Settings',

    drawerIcon:(<Icon name='settings'  style={{color:'#636e72'}}/>),

  }
  render() {
    return( <View style={{flex:1,alignItems:'center',justifyContent:'center'}}><Text>Settings</Text></View>);
  }
}
