import React, {PropTypes} from 'react';
import {
  View,Dimensions,
  StyleSheet,Text
} from 'react-native';
import App from './App.js'
import Dash from 'react-native-dash';
import { Body, Content,Card,Item,Input, Icon,Button} from 'native-base';

export default class Students extends React.Component {
  render() {
    heightScreen= Dimensions.get('window').height;
    return (
      <View style={{flex:1,backgroundColor:'white',}}>
      <View style={{flex:7,backgroundColor:'#0097e6'}}>
        <View style={{flex:1.1,backgroundColor:'#0097e6',borderBottomColor:'#ecf0f1',borderBottomWidth:0.2}}></View>
        <View style={{flex:1.1,backgroundColor:'#00a8ff',borderBottomColor:'#ecf0f1',borderBottomWidth:0.2}}></View>
        <View style={{flex:1.1,backgroundColor:'#0097e6',borderBottomColor:'#ecf0f1',borderBottomWidth:0.2}}></View>
        <View style={{flex:1.1,backgroundColor:'#00a8ff',borderBottomColor:'#ecf0f1',borderBottomWidth:0.2}}></View>
        <View style={{flex:1.1,backgroundColor:'#0097e6',borderBottomColor:'#ecf0f1',borderBottomWidth:0.2}}></View>
        <View style={{flex:1.1,backgroundColor:'#00a8ff',borderBottomColor:'#ecf0f1',borderBottomWidth:0.2}}></View>
        <View style={{flex:1.1,backgroundColor:'#0097e6',flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>
          <Text style={{color:'white'}}>Mon</Text>
          <Text style={{color:'white'}}>Tue</Text>
          <Text style={{color:'white'}}>Wed</Text>
          <Text style={{color:'white'}}>Thu</Text>
          <Text style={{color:'white'}}>Fri</Text>
          <Text style={{color:'white'}}>Sat</Text>
        </View>
      </View>

      <View style={{position:'absolute',right:'10%',left:'10%',top:'5.5%'}}>
        <App />
      </View>

      <View style={{position:'absolute',top:0,bottom:10,left:'41.5%'}}>
        <Dash dashGap={0} dashColor='rgba(245, 246, 250,0.5)' style={{width:1, height:'60%', flexDirection:'column'}}/>
      </View>

      <View style={{height:30,width:90,borderRadius:30,backgroundColor:'#f5f6fa',position:'absolute',
      top:'7%',left:'30%',alignItems:'center',flexDirection:'row',justifyContent:'space-between'}}>
        <Icon name='checkbox-marked-circle' type='MaterialCommunityIcons' style={{color:'#4cd137'}}/>
        <View style={{flex:1}}>
          <Text style={{fontSize:8}}>Total Students</Text>
          <Text style={{fontSize:12,fontWeight:'bold',color:'#0097e6',marginLeft:'7%'}}>2456</Text>
        </View>
      </View>

      <View style={{height:30,width:95,borderRadius:30,backgroundColor:'#f5f6fa',position:'absolute',
      top:'40%',left:'30%',alignItems:'center',flexDirection:'row',justifyContent:'space-between'}}>
        <Icon name='circle-with-cross' type='Entypo' style={{color:'#e84118'}}/>
        <View style={{flex:1}}>
          <Text style={{fontSize:8}}>Absent Students</Text>
          <Text style={{fontSize:12,fontWeight:'bold',color:'#0097e6',marginLeft:'7%'}}>2456</Text>
        </View>
      </View>

      <View style={{flex:3}}></View>
          </View>

    );
  }
}
