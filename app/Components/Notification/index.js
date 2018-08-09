import React, {PropTypes} from 'react';
import {
  View,
  StyleSheet,Text
} from 'react-native';
import {Icon} from 'native-base'


export default class Notification extends React.Component {
  static navigationOptions={
    drawerLabel:'Notification',

    drawerIcon:(<Icon name='alarm'  style={{color:'#636e72'}}/>),

  }
  render() {
    return( <View style={{flex:1,alignItems:'center',justifyContent:'center'}}><Text>Notification</Text></View>);
  }
}
