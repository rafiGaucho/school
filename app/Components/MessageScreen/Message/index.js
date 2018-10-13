import React, { Component } from 'react';
import {
  View,TouchableWithoutFeedback,TouchableOpacity,
  StyleSheet,TextInput ,Text,Dimensions
} from 'react-native';
import { Body, Content,Card,Item,Input, Icon,Button,Radio} from 'native-base';
import PopupDialog,{slideAnimation} from 'react-native-popup-dialog';
import DropMenu from './dropMenu.js';
import Hr from "react-native-hr-component";


export default class MessageContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      divisions:[],departments:[],standards:[],
      dropMenu:false,
      value:'',
      isSmsApp:false,isApp:false,isAll:false
    }
    this.handleTextChange=(value)=>{this.setState({value})}
    this.handleDropMenu=()=>{this.setState({dropMenu:!this.state.dropMenu })}
}
  handlePopUP=()=>{ this.popupDialog.show();}
  handleSmsApp=()=>{this.setState({isSmsApp:!this.state.isSmsApp,isApp:false})}
  handleApp=()=>{this.setState({isApp:!this.state.isApp,isSmsApp:false})}
  selectAll=()=>{this.setState({isAll:!this.state.isAll})}

   loadDivisions=()=>{
     var data = { "schoolId":9 };
     fetch('http://test.ssdiary.com/ssdiary/adminapp/loadDivisions.html', {
       method: "POST",
       body: JSON.stringify(data),
       headers: {
         "Content-Type": "application/json"
       }
     })
       .then(response => {
         return response.json();
       })
       .then(value => {
         this.setState({ divisions: value });
       })
   }
   loadDepartments=()=>{
     var data = { "schoolId":9 };
     fetch('http://test.ssdiary.com/ssdiary/adminapp/loadDepartments.html', {
       method: "POST",
       body: JSON.stringify(data),
       headers: {
         "Content-Type": "application/json"
       }
     })
       .then(response => {
         return response.json();
       })
       .then(value => {
         this.setState({ departments: value });
       })
   }
   loadStandards=()=>{
     var data = { "schoolId":9 };
     fetch('http://test.ssdiary.com/ssdiary/adminapp/loadStandards.html', {
       method: "POST",
       body: JSON.stringify(data),
       headers: {
         "Content-Type": "application/json"
       }
     })
       .then(response => {
         return response.json();
       })
       .then(value => {
         this.setState({ standards: value });
       })
   }
   componentDidMount() {
     this.loadDivisions();
     this.loadDepartments();
     this.loadStandards();
    }
    handleSendSmsApp=()=>{
      this.handleSendApp();
      var data={
        	"schoolId" :9,
        	"userAccountId" : 8960,
        	"mobNumbers" :"8907518767,9048778789",
        	"messageLanguageCode" :"en",
        	"message" :this.state.value
        }
        fetch('http://test.ssdiary.com/ssdiary/adminapp/sendTestMessage.html', {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json"
          }
        })
          .then(response => {
            return response.json();
          })
          .then(value => {
            alert(value.message);
            this.setState({value:''})
          })

    }
    handleSendApp=()=>{
          var divisionListData=[];
          this.state.divisions.map((x,index)=>{
          divisionListData[index]={name:x.division , id:x.id}
        })
        var standardListData=[];
        this.state.standards.map((x,index)=>{
          standardListData[index]={name:x.standard , id:x.id , divisionList:divisionListData}
        })
        var departmentListData=[];
        this.state.departments.map((x,index)=>{
          departmentListData[index]={name:x.department , id:x.id}
        })
       var data={
        "schoolId": 9,
	       "userAccountId" : 8960,
         "message" : this.state.value,
         "messageLanguageCode": "en",
         "checkList":
           [{
          	"standard":standardListData,
          	"department":departmentListData
          }]
        }
      this.popupDialog.dismiss();
      fetch('http://test.ssdiary.com/ssdiary/adminapp/sendSMS.html', {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
        "Content-Type": "application/json"
          }
        })
        .then(response => {
        return response.json();
        })
        .then(value => {
        alert(value.message);
        this.setState({value:''})
        });

     }
  render() {
    heightScreen= Dimensions.get('window').height;

    return (
      <View style={{backgroundColor:'#d2dae2',flex:1,}}>


        <PopupDialog
            ref={(popupDialog) => { this.popupDialog = popupDialog; }}
           dialogAnimation={slideAnimation}
           height={0.4} width={0.6} containerStyle={{paddingBottom:'40%'}} dialogStyle={{}} >
           <View style={{flex:1,borderRadius:7}}>
             <MessagePopUp isSmsApp={this.state.isSmsApp} isApp={this.state.isApp} selectSmsApp={this.handleSmsApp}
               selectApp={this.handleApp} handleSend={this.state.isApp ? this.handleSendApp : this.handleSendSmsApp}/>
           </View>
        </PopupDialog>


        <View style={{flex:0.75}}>
          <Item style={{backgroundColor:'#a5b1c2'}}>
            <Radio style={{margin:'3%'}} color={"#ecf0f1"} selectedColor={"black"} selected={this.state.isAll} onPress={this.selectAll}/>
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
          <View style={{height:'60%',marginLeft:20,marginRight:20,marginTop:50,borderRadius:5,backgroundColor:'white'}}>
            <TextInput placeholder='Type your message' maxLength={148} value={this.state.value}
              onChangeText={this.handleTextChange}
              multiline={true} style={{fontSize:18}} editable={!this.state.dropMenu}/>
          </View>

          <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>
            <Text style={{marginTop:'5%'}}>Message Character {148-this.state.value.length}/SMS 001</Text>
            <TouchableOpacity onPress={this.handlePopUP}
              disabled={this.state.dropMenu} style={{marginTop:'5%'}}>
             <View style={[{alignItems:'center',justifyContent:'space-around',flexDirection:'row',backgroundColor:'#3498db'},
               {height:heightScreen*(1.5/26),width:heightScreen*(3.5/26),borderRadius:heightScreen*(1.5/52)}]}>
               <Text style={{fontSize:14,color:'white'}}>send</Text>
               <Icon name='send' style={{color:'white',fontSize:16}}/>
             </View>
           </TouchableOpacity>
          </View>
        </View>
        {this.state.dropMenu && <DropMenu isAll={this.state.isAll}/>}

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
        <TouchableOpacity onPress={props.handleSend} disabled={!props.isApp&&!props.isSmsApp}>
          <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            <Text style={[{fontWeight:'bold'},props.isApp||props.isSmsApp?{color:'black'}:{color:'grey'}]}>DONE</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  ) ;
}
