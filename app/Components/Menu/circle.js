import React, { Component } from 'react';
import {
  View,
  StyleSheet,TouchableOpacity
} from 'react-native';
import {Icon} from 'react-native-elements';
export const Circle=props=>{
  return(
    <TouchableOpacity style={{flex:1,height:80,width:80,borderRadius:40,borderWidth:2,borderColor:'white',
      backgroundColor:'#3B3B98',alignItems:'center',justifyContent:'center'}}>
     <Icon name={props.name} type={props.type} size={34} color='white'/>
   </TouchableOpacity>
 )
}
