import React, {PropTypes} from 'react';
import {
  View,
  StyleSheet,Text
} from 'react-native';
import {Icon} from 'native-base'


export default class Profile extends React.Component {
  static navigationOptions={
    drawerLabel:'Profile',

    drawerIcon:(<Icon name='person'  style={{color:'#636e72'}}/>),

  }
  render() {
    return( <View style={{flex:1,alignItems:'center',justifyContent:'center'}}><Text>Profile</Text></View>);
  }
}
