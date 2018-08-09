import React, {Component} from 'react';
import {View,StyleSheet,Image} from 'react-native';
import { Body, Content,Item,Input, Text, Icon,Button} from 'native-base';
import MessageScreen from './../MessageScreen';
import Notification from './../Notification';
import Profile from './../Profile';
import Settings from './../Settings';
import Menu from './../Menu';
import Contact from './../Contact'
import {DrawerNavigator,DrawerItems} from 'react-navigation'

export default class Home extends Component {
render() {
  return (<HomeDrawer /> );
}
}


const CustomDrawer=(props)=>(
  <View style={{backgroundColor:'#00a8ff',flex:1,flexDirection:'column'}}>
    <View style={{flex:2,height:200,backgroundColor:'#00a8ff',alignItems:'center',justifyContent:'center',borderBottomWidth:0.5,borderBottomColor:'grey'}}>
          <Item searchBar rounded style={{height:45,width:'90%',marginBottom:15,
            marginLeft:10,marginRight:10,marginTop:20,backgroundColor:'#0984e3',
            borderColor:'#0984e3'}}>
            <Icon active name='search' style={{marginLeft:3,color:'white'}} />
            <Input placeholder='search' placeholderTextColor="white" />
          </Item>
          <View style={{}}  >
           <Image style={{height:80,width:80,borderRadius:40,borderColor:'white',borderWidth:1}} source={require("./photo.png")} />
           <Text style={{fontSize:16,fontWeight:'bold',textAlign:'center',color:'white',marginTop:10}}>principal</Text>
           <Text style={{fontSize:10,textAlign:'center',color:'white',marginBottom:10}}>school Name</Text>
         </View>
    </View>

    <View style={{flex:3,textColor:'white',borderBottomWidth:0.5,borderBottomColor:'grey',}}>
      <DrawerItems activeTintColor='white'
        activeBackgroundColor='rgba(223, 230, 233,0.3)'
        inactiveTintColor='white'
         {...props} />
    </View>
    <View style={{alignItems:'flex-start',justifyContent:'center',height:70}}>
        <Button iconLeft transparent primary style={{marginLeft:5}}>
          <Icon name='wine' style={{color:'#636e72'}}/>
          <Text style={{color:'white',marginLeft:10}}>Log Out</Text>
        </Button>
    </View>

  </View>
)


const HomeDrawer=DrawerNavigator({
  menu:{
    screen:Menu,
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
