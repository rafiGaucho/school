import React, { Component } from 'react';
import {
  View,
  StyleSheet,Text
} from 'react-native';

export default class PersonalDetails extends React.Component {
  render() {
    return (
        <View style={{flex:1,height:'100%',width:'90%',borderRadius:10,marginHorizontal:'5%',backgroundColor:'#ecf0f1'}}>


          <View style={{flex:1,flexDirection:'row',marginTop:'3%',justifyContent:'space-around'}}>
            <View style={{flex:1,marginLeft:'3%'}}><Text style={{fontSize:10,fontWeight:'600',}}>BLOOD</Text></View>
            <View style={{flex:1}}><Text style={{fontSize:10,fontWeight:'600',}}>B +ve</Text></View>
            <View style={{flex:1}}></View><View style={{flex:1}}></View>
          </View>


          <View style={{flex:1,flexDirection:'row',}}>
            <View style={{flex:1,paddingLeft:'3%'}}><Text style={{fontSize:10,fontWeight:'600',}}>FATHER</Text></View>
            <View style={{flex:1}}>
              <Text style={{fontSize:8,fontWeight:'600'}}>Dr.Jayan Joseph</Text>
              <Text style={{fontSize:8}}>vetenary surgeon</Text>
            </View>
            <View style={{flex:2,paddingLeft:'3%',flexDirection:'row',justifyContent:'space-around'}}>
              <View style={{}}><Text style={{fontSize:8,fontWeight:'600',}}>MOTHER</Text></View>
              <View style={{}}>
                <Text style={{fontSize:10,fontWeight:'600'}}>Adv.Sony Francis </Text>
                <Text style={{fontSize:8}}>Advocate</Text>
              </View>
            </View>
          </View>


          <View style={{flex:1,flexDirection:'row',}}>
            <View style={{flex:1,paddingLeft:'3%'}}><Text style={{fontSize:10,fontWeight:'600',}}>Mobile</Text></View>
            <View style={{flex:1}}><Text style={{fontSize:10,fontWeight:'600'}}>1234567890</Text></View>
            <View style={{flex:1}}></View>
            <View style={{flex:1}}><Text style={{fontSize:10,fontWeight:'600',}}>0987654321</Text></View>
          </View>


          <View style={{flex:1.8,flexDirection:'row'}}>
            <View style={{flex:1,paddingLeft:'3%'}}><Text style={{fontSize:10,fontWeight:'600'}}>Address</Text></View>
            <View style={{flex:3}}>
              <Text style={{fontSize:10,fontWeight:'600'}}>
                Chittilappilly House,Sithara nagar,Near Chowka,P.O.Elinjipra,chalakudy Thrissur 680721
              </Text>
            </View>
            {/* <View style={{flex:1}}></View>
            <View style={{flex:1}}></View> */}
          </View>


        </View>
    );
  }
}
