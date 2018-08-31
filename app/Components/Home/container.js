import React, {Component} from 'react';
import {View,StyleSheet,Image,TextInput,Dimensions} from 'react-native';
import { Body, Content,Item,Input, Text, Icon,Button} from 'native-base';
import MessageScreen from './../MessageScreen';
import Notification from './../Notification';
import Profile from './../Profile';
import Settings from './../Settings';
import Menu from './../Menu';
import Main from './../Menu/index0.js';
import Contact from './../Contact'
import {DrawerNavigator,DrawerItems} from 'react-navigation'

export default class Home extends Component {
render() {
  return (<HomeDrawer /> );
}
}


const CustomDrawer=(props)=>{
  heightScreen= Dimensions.get('window').height;
  return(
  <View style={{backgroundColor:'#00a8ff',flex:1,flexDirection:'column'}}>


    <View style={[{backgroundColor:'#00a8ff',alignItems:'center',justifyContent:'center',
      borderBottomWidth:0.5,borderBottomColor:'grey'},{height:heightScreen/2.5}]}>
          <View style={{width:'90%',height:'20%',borderRadius:30,backgroundColor:'#2980b9',position:'absolute',
            top:'10%',bottom:0,left:20,right:0,
            marginBottom:'5%',flexDirection:'row',alignItems:'center'}}>
            <Icon name='search' type='EvilIcons' style={{color:'white',marginLeft:'5%',marginBottom:'3%'}}/>
            <TextInput style={{marginBottom:'3%',width:'80%'}} placeholder='search' placeholderTextColor='white'/>
          </View>
          <View style={{height:'60%',marginTop:'40%'}}  >
           <Image style={{height:80,width:80,borderRadius:40,borderColor:'white',borderWidth:1}} source={require("./photo.png")} />
           <Text style={{fontSize:16,fontWeight:'bold',textAlign:'center',color:'white',marginTop:10}}>principal</Text>
           <Text style={{fontSize:10,textAlign:'center',color:'white',marginBottom:10}}>school Name</Text>
         </View>
    </View>


    <View style={[{textColor:'white',borderBottomWidth:0.5,borderBottomColor:'grey',},{height:heightScreen/2}]}>
      <DrawerItems activeTintColor='white'
        activeBackgroundColor='rgba(223, 230, 233,0.3)'
        inactiveTintColor='white'
         {...props} />
    </View>


    <View style={[{alignItems:'flex-start',justifyContent:'center',marginBottom:'3%'},{height:heightScreen/14.25}]}>
        <Button iconLeft transparent primary style={{marginLeft:5}}>
          <Icon name='wine' style={{color:'#636e72'}}/>
          <Text style={{color:'white',marginLeft:10}}>Log Out</Text>
        </Button>
    </View>


  </View>
)
}

const HomeDrawer=DrawerNavigator({
  menu:{
    screen:Main,
  },
  profile:{
    screen:Profile
  },
  Message:{
    screen:MessageScreen
  },
  Notification:{screen:Notification
  },
  Contacts:{
    screen:Contact
  },
  Settings:{
    screen:Settings
  }
},{
  initialRouteName:'menu',
  contentComponent:CustomDrawer,
  drawerOpenRoute:'DraweOpen',
  drawerCloseRoute:'DraweClose',
  drawerToggleRoute:'DraweToggle',
})
