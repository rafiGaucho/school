import React, { Component } from 'react';
import {
  View,
  StyleSheet,Text,Image
} from 'react-native';
import { Body, Content,Card,Item,Input, Icon,Button} from 'native-base';
import {createMaterialTopTabNavigator} from 'react-navigation'
import MessageContainer from './Message'
import VoiceContainer from './Voice'
import ChatContainer from './Chat'

export default class MessageScreenContainer extends React.Component {



  render() {
    return (
      <View style={{flex:1}}>


        <View style={{flex:1.5,backgroundColor:'#3B3B98',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
          <View style={{flexDirection:'row',alignItems:'center'}}>
            <View>
              <Button transparent onPress={this.props.func} style={{marginTop:10,}}><Icon name='arrow-round-back' style={{color:'white'}}/></Button>
            </View>
            <Text style={{color:'white',fontSize:20,fontWeight:'600',paddingTop:7}}>MESSAGE</Text>
          </View>
          <View>
            <Button transparent  style={{marginTop:10,}}><Icon name='search' style={{color:'white',fontSize:32}}/></Button>
          </View>
        </View>


        <View style={{flex:12.25,backgroundColor:'#575fcf'}}>
          <Tabs />
        </View>


        <View style={{flex:0.75,backgroundColor:'#575fcf'}}></View>


      </View>
    );
  }
}

const Tabs=createMaterialTopTabNavigator({
  Message:MessageContainer,
  Voice:VoiceContainer,
  Chat:ChatContainer
})
