import React, {PropTypes} from 'react';
import {
  View,
  StyleSheet,Text
} from 'react-native';
import {Icon,Button} from 'native-base'


export default class Notification extends React.Component {
  static navigationOptions={
    drawerLabel:'Notification',

    drawerIcon:(<Icon name='alarm'  style={{color:'#636e72'}}/>),

  }
  handleButton=()=>{
    this.props.navigation.navigate('Settings')
  }
  render() {
    return( <View style={{flex:1,alignItems:'center',justifyContent:'center'}}><Text>Notification</Text>
    <Button transparent  onPress={this.handleButton} style={{marginTop:10,}}><Icon name='menu' style={{color:'white'}}/></Button>

  </View>);
  }
}
