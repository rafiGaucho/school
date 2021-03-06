import React, { Component } from 'react';
import {
  Text,Image,View,TouchableOpacity
} from 'react-native';
import { Body, Content,Card,Item,Input, Icon,Button} from 'native-base';
import {Circle} from './circle.js';
import { DrawerActions } from 'react-navigation';

export default class Menu extends Component {
  static navigationOptions={
    drawerLabel:'Menu',
    header: null,
    drawerIcon:(<Icon name='menu'  style={{color:'#636e72'}}/>),

  }
  openDrawer=()=>{
this.props.navigation.dispatch(DrawerActions.openDrawer());  }
handleStudentProfile=()=>{this.props.navigation.navigate('StudentProfile')}
handleMessage=()=>{this.props.navigation.navigate('Message')}
handleReports=()=>{this.props.navigation.navigate('Reports')}
handleAbsent=()=>{this.props.navigation.navigate('Absent')}
handleTimeTable=()=>{this.props.navigation.navigate('TimeTable')}
handleStaff=()=>{this.props.navigation.navigate('Staff')}
handleLibrary=()=>{this.props.navigation.navigate('Library')}
handleBus=()=>{this.props.navigation.navigate('Bus')}
handleProfile=()=>{this.props.navigation.navigate('profile')}


  render() {
    return (
          <View style={{flex:1,}}>


            <View style={{flex:1.5,backgroundColor:'#3B3B98',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
              <View style={{flexDirection:'row',alignItems:'center'}}>
                <View>
                  <Button transparent onPress={this.openDrawer} style={{marginTop:10,}}><Icon name='menu' style={{color:'white'}}/></Button>
                </View>
                <Text style={{color:'white',fontSize:20,fontWeight:'600',paddingTop:7}}>MY SCHOOL</Text>
              </View>
              <View>
                <Button transparent  style={{marginTop:10,}}><Icon name='search' style={{color:'white',fontSize:32}}/></Button>
              </View>
            </View>


            <View style={{flex:4}}>
              <Image source={require('./schoolPic.jpg')} style={{height:'100%',width:'100%'}} />
            </View>


            <View style={{flex:8,backgroundColor:'#3B3B98'}}>
              <View style={{flex:1,justifyContent:'space-around',flexDirection:'row',paddingTop:20}}>
                <View style={{paddingLeft:15}}><Circle name='md-grid' type='ionicon' func={this.handleTimeTable}/><Text style={{textAlign:'center',color:'white'}}>Time Table</Text></View>
                <View><Circle name='ios-people' type='ionicon' func={this.handleStaff}/><Text style={{textAlign:'center',color:'white'}}>Staff</Text></View>
                <View style={{paddingRight:15}}><Circle name='library' type='material-community' func={this.handleLibrary}/><Text style={{textAlign:'center',color:'white'}}>Library</Text></View>
              </View>
              <View style={{flex:1,justifyContent:'space-around',flexDirection:'row',padding:10}}>
                <View style={{paddingLeft:15}}><Circle name='human-child' type='material-community' func={this.handleStudentProfile}/><Text style={{textAlign:'center',color:'white'}}>student profile</Text></View>
                <View><Circle name='user-unfollow' type='simple-line-icon' func={this.handleAbsent}/><Text style={{textAlign:'center',color:'white'}}>Absent</Text></View>
                <View style={{paddingRight:15}}><Circle name='ios-paper' type='ionicon' func={this.handleReports}/><Text style={{textAlign:'center',color:'white'}}>Reports</Text></View>
              </View>
              <View style={{flex:1,justifyContent:'space-around',flexDirection:'row',padding:10}}>
                <View style={{paddingLeft:15}}><Circle name='message' type='material' func={this.handleMessage}/><Text style={{textAlign:'center',color:'white'}}>Message</Text></View>
                <View><Circle name='bus' type='font-awesome' func={this.handleBus}/><Text style={{textAlign:'center',color:'white'}}>Bus</Text></View>
                <View style={{paddingRight:15}}><Circle name='user' type='font-awesome' func={this.handleProfile}/><Text style={{textAlign:'center',color:'white'}}>Profile</Text></View>
              </View>
            </View>


            <View style={{flex:0.75,backgroundColor:'#575fcf'}}>
            </View>


          </View>
    );
  }
}
