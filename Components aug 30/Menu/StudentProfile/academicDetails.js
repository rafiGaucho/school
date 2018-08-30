import React, {PropTypes} from 'react';
import {
  View,
  StyleSheet,Text
} from 'react-native';

export default class AcademicDetails extends React.Component {
  render() {
    return (
      <View style={{flex:1,backgroundColor:'#ecf0f1',width:'90%',marginHorizontal:'5%',borderTopWidth:0.3,borderTopColor:'#bdc3c7'}}>


        <View style={{flex:0.5,justifyContent:'space-around',flexDirection:'row',alignItems:'center'}}>
          <Text style={{fontSize:10,fontWeight:'600'}}>Attendence:   91/96</Text>
          <Text style={{fontSize:10,fontWeight:'600'}}>absent:  5</Text>
        </View>


        <View style={{flex:0.7,backgroundColor:'#3498db',flexDirection:'row'}}>
          <View style={{flex:1,alignItems:'center',justifyContent:'center',borderRightWidth:0.3,}}><Text style={{color:'white'}}>Subject</Text></View>
          <View style={{flex:1,alignItems:'center',justifyContent:'center',borderRightWidth:0.3}}><Text style={{color:'white'}}>Marks</Text></View>
          <View style={{flex:1,alignItems:'center',justifyContent:'center',borderRightWidth:0.3}}><Text style={{color:'white'}}>Class Avg</Text></View>
          <View style={{flex:1,alignItems:'center',justifyContent:'center'}}><Text style={{color:'white'}}>School Avg</Text></View>
        </View>


        <View style={{flex:2.5,flexDirection:'row'}}>
          <View style={{flex:1,}}>
            <View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'#f5f6fa',borderRightWidth:0.3}}><Text>Eng</Text></View>
            <View style={{flex:1,alignItems:'center',justifyContent:'center',borderRightWidth:0.3}}><Text>Mal</Text></View>
            <View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'#f5f6fa',borderRightWidth:0.3}}><Text>S.S</Text></View>
            <View style={{flex:1,alignItems:'center',justifyContent:'center',borderRightWidth:0.3}}><Text>G.s</Text></View>
            <View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'#f5f6fa',borderRightWidth:0.3}}><Text>Maths</Text></View>
          </View>
          <View style={{flex:1,}}>
            <View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'#f5f6fa',borderRightWidth:0.3}}><Text>77</Text></View>
            <View style={{flex:1,alignItems:'center',justifyContent:'center',borderRightWidth:0.3}}><Text>76</Text></View>
            <View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'#f5f6fa',borderRightWidth:0.3}}><Text>77</Text></View>
            <View style={{flex:1,alignItems:'center',justifyContent:'center',borderRightWidth:0.3}}><Text>78</Text></View>
            <View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'#f5f6fa',borderRightWidth:0.3}}><Text>79</Text></View>
          </View>
          <View style={{flex:1,}}>
            <View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'#f5f6fa',borderRightWidth:0.3}}><Text>77</Text></View>
            <View style={{flex:1,alignItems:'center',justifyContent:'center',borderRightWidth:0.3}}><Text>76</Text></View>
            <View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'#f5f6fa',borderRightWidth:0.3}}><Text>77</Text></View>
            <View style={{flex:1,alignItems:'center',justifyContent:'center',borderRightWidth:0.3}}><Text>78</Text></View>
            <View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'#f5f6fa',borderRightWidth:0.3}}><Text>79</Text></View>
          </View>
          <View style={{flex:1,}}>
            <View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'#f5f6fa'}}><Text>77</Text></View>
            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}><Text>76</Text></View>
            <View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'#f5f6fa'}}><Text>77</Text></View>
            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}><Text>78</Text></View>
            <View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'#f5f6fa'}}><Text>79</Text></View>
          </View>


        </View>
      </View>
    );
  }
}
