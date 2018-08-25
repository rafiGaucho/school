import React, { Component } from 'react';
import {
  View,
  StyleSheet,TextInput ,Text,
} from 'react-native';
import { Body, Content,Card,Item,Input, Icon,Button} from 'native-base';
import DropMenu from './dropMenu.js'

export default class MessageContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      dropMenu:false,
      value:''
    }
    this.handleTextChange=(value)=>{this.setState({value})}
    this.handleDropMenu=()=>{
      this.setState({
        dropMenu:!this.state.dropMenu
      })
    }
  }

  render() {
    return (
      <View style={{backgroundColor:'#d2dae2',flex:1,}}>

        <View style={{flex:0.75}}>
          <Item style={{backgroundColor:'#a5b1c2'}}>
            <Icon disable name='radio-button-off' style={{marginLeft:6}}/>
            <View style={{height:'60%',width:'95%',flexDirection:'row'}}>
              <Item style={{backgroundColor:'#d2dae2',width:'65%'}}>
                <Input disabled placeholder='To All'/>
              </Item>

              <Button iconRight
                onPress={this.handleDropMenu}
                 style={{width:'25%',height:'100%',backgroundColor:'#f7b731'}} >
                <Text style={{fontSize:14,fontWeight:'bold',marginBottom:3,paddingLeft:10,color:'black'}}>Type</Text>
                <Icon name={this.state.dropMenu==false ?'arrow-dropdown':'arrow-dropup'} style={{color:'black',paddingLeft:3}} />
              </Button>
            </View>
          </Item>
        </View>

        <View style={{flex:10,}}>
          <Card style={{height:'60%',marginLeft:20,marginRight:20,marginTop:50,borderRadius:5}}>
            <TextInput placeholder='Type your message' maxLength={148} value={this.state.value}
              onChangeText={this.handleTextChange}
              multiline={true} style={{fontSize:18}} editable={!this.state.dropMenu}/>
          </Card>
          <View style={{flexDirection:'row',}}>
            <Text style={{marginLeft:10,marginTop:25,}}>Message Character {148-this.state.value.length}/SMS 001</Text>
            <Button iconRight rounded
              disabled={this.state.dropMenu}
               style={{width:'30%',marginLeft:10,marginRight:10,marginTop:10}}>
              <Text style={{marginLeft:25,fontSize:18,color:'white'}}>send</Text>
              <Icon name='send' style={{color:'white',paddingRight:10}}/>
            </Button>
          </View>
        </View>
        {this.state.dropMenu && <DropMenu />}

      </View>
    );
  }
}
