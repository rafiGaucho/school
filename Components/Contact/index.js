import React, {PropTypes} from 'react';
import {
  View,
  StyleSheet,Text
} from 'react-native';
import {Icon} from 'native-base'


export default class Contact extends React.Component {
  static navigationOptions={
    drawerLabel:'Contacts',
    headerTitleStyle : { color:'red'},
    drawerIcon:(<Icon name='paper'  style={{color:'#636e72'}}/>),

  }
  render() {
    return( <View style={{flex:1,alignItems:'center',justifyContent:'center'}}><Text>Notification</Text></View>);
  }
}
