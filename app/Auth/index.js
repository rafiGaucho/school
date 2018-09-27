import React, {PropTypes} from 'react';
import {
  View,Text,Dimensions,TouchableOpacity,
  StyleSheet,ImageBackground,TextInput
} from 'react-native';
import {connect} from 'react-redux';
import {Icon} from 'native-base';
import Hr from "react-native-hr-component";
import {userLogin} from './../store/session/actions.js'

const widthScreen= Dimensions.get('window').width/18;
const heightScreen= Dimensions.get('window').height/26;

class Login extends React.Component {
handleLogin=()=>{
  logoutUser();

}
  render() {
    return (
      <View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'grey'}}>
        <ImageBackground source={require('./login.jpg')} style={{width: '100%', height: '100%',justifyContent:'flex-end'}} >
          <View style={{width:widthScreen*16,marginHorizontal:widthScreen,height:heightScreen*13,borderRadius:5,
            backgroundColor:'white',marginBottom:heightScreen,alignItems:'center',justifyContent:'center'}}>

          <View style={{flex:1,justifyContent:'flex-end'}}>
            <View style={{flexDirection:'row',alignItems:'center',marginLeft:widthScreen}}>
              <Icon name='user-o' type='FontAwesome' style={{color:'#0984e3'}}/>
              <TextInput placeholder='Username' placeholderTextColor='#7f8c8d'/>
            </View>
            <Hr lineColor="#636e72" textPadding={0.001} hrStyles={{width:'90%',marginHorizontal:'5%',marginTop:-10}}/>
          </View>
          <View style={{flex:1,justifyContent:'center'}}>
            <View style={{flexDirection:'row',alignItems:'center',marginLeft:widthScreen}}>
              <Icon name='lock' type='SimpleLineIcons' style={{color:'#0984e3'}}/>
              <TextInput placeholder='Password' placeholderTextColor='#7f8c8d'/>
            </View>
            <Hr lineColor="#636e72" textPadding={0.001} hrStyles={{width:'90%',marginHorizontal:'5%',marginTop:-10}}/>
          </View>
          <View style={{flex:1,}}>
            <TouchableOpacity style={{width:widthScreen*12,height:heightScreen*2.5,borderRadius:heightScreen*1.25,
              backgroundColor:'#f1c40f',justifyContent:'center',alignItems:'center'}}
              onPress={this.props.userLogin} >
              <Text style={{color:'white',fontWeight:'bold',fontSize:22,}}>Login</Text>
            </TouchableOpacity>
          </View>

          </View>
        </ImageBackground>
      </View>
    );
  }
}
mapDispatchToProps={
userLogin:userLogin,
}
mapStateToProps=(state)=>({
initialWindow:state.session.initialWindow
})
export default connect(mapStateToProps,mapDispatchToProps)(Login)
