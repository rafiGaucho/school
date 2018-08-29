import React, { Component } from 'react';
import {
  View,TouchableWithoutFeedback,TouchableOpacity,
  StyleSheet,TextInput ,Text,
} from 'react-native';
import { Body, Content,Card,Item,Input, Icon,Button,Radio} from 'native-base';
import PopupDialog,{slideAnimation} from 'react-native-popup-dialog';
import DropMenu from './dropMenu.js';
import Hr from "react-native-hr-component";


export default class MessageContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      dropMenu:false,
      value:'',
      isSmsApp:false,isApp:false
    }
    this.handleTextChange=(value)=>{this.setState({value})}
    this.handleDropMenu=()=>{this.setState({dropMenu:!this.state.dropMenu })}
}
  handlePopUP=()=>{ this.popupDialog.show();}
  handleSmsApp=()=>{this.setState({isSmsApp:!this.state.isSmsApp,isApp:false})}
  handleApp=()=>{this.setState({isApp:!this.state.isApp,isSmsApp:false})}

  render() {
    return (
      <View style={{backgroundColor:'#d2dae2',flex:1,}}>
                  <PopupDialog
                      ref={(popupDialog) => { this.popupDialog = popupDialog; }}
                  //   dialogAnimation={slideAnimation}
                     height={0.4} width={0.6} containerStyle={{paddingBottom:'40%'}} dialogStyle={{}} >
                     <View style={{flex:1,borderRadius:7}}>
                       <MessagePopUp isSmsApp={this.state.isSmsApp} isApp={this.state.isApp} selectSmsApp={this.handleSmsApp} selectApp={this.handleApp}/>
                     </View>
                  </PopupDialog>
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
            <Button iconRight rounded onPress={this.handlePopUP}
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

const MessagePopUp=(props)=>{
  return(
    <View style={{flex:1}}>
      <View style={{flex:1,backgroundColor:'#ecf0f1',alignItems:'center',justifyContent:'center',borderRadius:5}}>
        <Text>MESSAGE SERVICE</Text>
      </View>

      <View style={{flex:2.5,backgroundColor:'white'}}>
        <View style={{flex:1,flexDirection:'row',alignItems:'center',}}>
          <Radio style={{marginLeft:'12%'}} color={"#ecf0f1"} selectedColor={"#95a5a6"} selected={props.isSmsApp} onPress={props.selectSmsApp}/>
          <TouchableWithoutFeedback onPress={props.selectSmsApp}>
            <View style={{marginLeft:'5%'}}><Text>SMS & App</Text></View>
          </TouchableWithoutFeedback>
        </View>
        <Hr lineColor="#eee" textPadding={0.001} hrStyles={{width:'88%',marginHorizontal:'6%'}}/>
        <View style={{flex:1,flexDirection:'row',alignItems:'center',}}>
          <Radio style={{marginLeft:'12%'}} color={"#ecf0f1"} selectedColor={"#95a5a6"} selected={props.isApp} onPress={props.selectApp}/>
          <TouchableWithoutFeedback onPress={props.selectApp}>
            <View style={{marginLeft:'5%'}}><Text>App Only</Text></View>
          </TouchableWithoutFeedback>
        </View>
      </View>

      <View style={{flex:1,backgroundColor:'#f1c40f',borderRadius:5,alignItems:'center',justifyContent:'center'}}>
        <TouchableOpacity>
          <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            <Text style={{fontWeight:'bold',color:'black',}}>DONE</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  ) ;
}
