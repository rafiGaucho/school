// import React, { Component } from 'react';
// import {
//   View,
//   StyleSheet,Text
// } from 'react-native';
//
//
// export default class VoiceContainer extends React.Component {
//   render() {
//     return (
//       <View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'white'}}><Text>Voice</Text></View>
//     );
//   }
// }
import React, {Component} from 'react';
import {Modal, Text, TouchableHighlight, View,Picker} from 'react-native';

export default class Voice extends Component {
  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <View style={{marginTop: 22,height:'50%',width:'50%'}}>
        <Picker
  //selectedValue={this.state.language}
  style={{ height: 50, width: 100 }}
//  onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}
>
  <Picker.Item label="Java" value="java" />
  <Picker.Item label="JavaScript" value="js" />
</Picker>
      </View>
    );
  }
}
