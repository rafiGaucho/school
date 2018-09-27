import React ,{Component} from 'react';
import {connect} from 'react-redux';
import {View,Text} from 'react-native'
import Auth from './Auth'
import Home from './Components/Home/container.js'




class Start extends Component{
render(){

    if(this.props.logged == true)
      {  return(<Home />)       }
    else {
      return(<Auth /> ) }

    }
   }




mapStateToProps=(state)=>({
  logged:state.session.logged,
})

export default connect(mapStateToProps)(Start)
