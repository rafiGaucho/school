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
  <View style={[{backgroundColor:'#00a8ff'},{height:heightScreen*(25/26)}]}>


    <View style={[{flex:5.5,backgroundColor:'#00a8ff',alignItems:'center',justifyContent:'center',
      borderBottomWidth:0.5,borderBottomColor:'grey'}]}>

          <View style={[{backgroundColor:'#2980b9',position:'absolute',
            marginBottom:'5%',flexDirection:'row',alignItems:'center'},
          {height:heightScreen*(1.7/26),width:heightScreen*(10/26),borderRadius:heightScreen*(5/26),top:heightScreen*(0.8/26),
          left:'8%'}]}>
            <Icon name='search' type='EvilIcons' style={{color:'white',marginLeft:'5%',marginBottom:'3%'}}/>
            <TextInput style={{marginBottom:'3%',width:'80%'}} placeholder='search' placeholderTextColor='white'/>
          </View>

          <View style={[{height:'60%'},{marginTop:heightScreen*(3.2/26)}]}  >
           <Image style={[{borderColor:'white',borderWidth:1},
           {height:heightScreen*(3.1/26),width:heightScreen*(3.1/26),borderRadius:heightScreen*(3.1/52)}]} source={require("./photo.png")} />
           <Text style={{fontSize:16,fontWeight:'bold',textAlign:'center',color:'white',marginTop:10}}>principal</Text>
           <Text style={{fontSize:10,textAlign:'center',color:'white',marginBottom:10}}>school Name</Text>
         </View>
    </View>


    <View style={[{flex:8,textColor:'white',borderBottomWidth:0.5,borderBottomColor:'grey',}]}>
      <DrawerItems activeTintColor='white'
        activeBackgroundColor='rgba(223, 230, 233,0.3)'
        inactiveTintColor='white'
        // itemsContainerStyle={{flex:1}}
        itemStyle={[{height:heightScreen*(2.2/26)}]}
         {...props} />
    </View>


    <View style={[{flex:1,alignItems:'flex-start',justifyContent:'center',marginBottom:'2%',marginTop:'2%'}]}>
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
