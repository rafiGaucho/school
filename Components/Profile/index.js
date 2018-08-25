import React, {PropTypes} from 'react';
import {
  View,ScrollView,
  StyleSheet,Text,Image,ImageBackground
} from 'react-native';
import {Icon,Button,} from 'native-base'
import {CircleCall,CircleMessage} from './circle.js'
import List from './list.js'

export default class Profile extends React.Component {
  static navigationOptions={
    drawerLabel:'Profile',

    drawerIcon:(<Icon name='person'  style={{color:'#636e72'}}/>),

  }
  render() {
    return(
      <View style={{flex:1}}>
        <View style={{flex:1.5,backgroundColor:'#3B3B98',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
          <View style={{flexDirection:'row',alignItems:'center'}}>
            <View>
              <Button transparent  style={{marginTop:10,}}><Icon name='arrow-round-back' style={{color:'white'}}/></Button>
            </View>
            <Text style={{color:'white',fontSize:20,fontWeight:'400',paddingTop:7}}>STUDENT PROFILE</Text>
          </View>
          <View>
            <Button transparent  style={{marginTop:10,}}><Icon name='search' style={{color:'white',fontSize:32}}/></Button>
          </View>
        </View>
        <View style={{flex:5,backgroundColor:'#dfe6e9',}}>
          <ImageBackground source={require('./school.jpg')} style={{flex:1,height:'50%',width:'100%',
            alignItems:'center',justifyContent:'center'}} >
            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
              <View style={{marginRight:'10%',margin:'1%'}}><CircleCall /></View>
              <View style={{alignItems:'center'}}>
                <Image style={{height:100,width:100,borderRadius:50,
                    marginTop:'40%',borderColor:'white',borderWidth:3}}
                   source={require("./studen5.jpg")} />
                <View >
                  <Text style={{fontSize:18,fontWeight:'600',color:'black',}}>Neha Rose Jayan</Text>
                  <Text syle={{fontSize:10,fontWeight:'400',}}>Class IV - Division</Text>
                </View>
              </View>
              <View style={{marginLeft:'10%',margin:'1%'}}><CircleMessage /></View>
            </View>
        </ImageBackground>
        </View>
        <View style={{flex:7,backgroundColor:'white'}}>
          <List />
        </View>
        <View style={{flex:0.75,backgroundColor:'#575fcf'}}>
        </View>
      </View>
    );
  }
}
