import React, { Component } from 'react';
import {
  View,ScrollView,
  StyleSheet,Text,Dimensions,TouchableWithoutFeedback
} from 'react-native';
import { Icon, } from 'native-base';
import PersonalDetails from './personalDetails.js';
import AcademicDetails from './academicDetails.js'
import FeePayment from './feePayment.js'
import CommentsRemarks from './commentsRemarks.js'


export default class List extends React.Component {
constructor() {
  super();
  this.widthScreen= Dimensions.get('window').width;
  this.heightScreen= Dimensions.get('window').height;
  this.state={
    isopen1:false,
    isopen2:false,
    isopen3:false,
    isopen4:false,
    isopen5:false,
  }
}
handlePress1=()=>{
  this.setState({isopen1:!this.state.isopen1,isopen2:false,
  isopen3:false,isopen4:false,isopen5:false,})
}
handlePress2=()=>{
  this.setState({isopen2:!this.state.isopen2,isopen1:false,
  isopen3:false,isopen4:false,isopen5:false,})
}
handlePress3=()=>{
  this.setState({isopen3:!this.state.isopen3,isopen2:false,
  isopen1:false,isopen4:false,isopen5:false,})
}
handlePress4=()=>{
  this.setState({isopen4:!this.state.isopen4,isopen2:false,
  isopen3:false,isopen1:false,isopen5:false,})
}
handlePress5=()=>{
  this.setState({isopen5:!this.state.isopen5,isopen2:false,
  isopen3:false,isopen4:false,isopen1:false,})
  this.refs.scroll.scrollToEnd()
   //this.handleScroll()
}
handleScroll=()=>{
  this.refs.scroll.scrollTo({y:5})
}

  render() {

    return (

      <ScrollView contentContainerStyle={{flexGrow:1}} ref="scroll" >


        <TouchableWithoutFeedback onPress={this.handlePress1}>
          <View style={[{height:this.heightScreen/10.5},{backgroundColor:'white',}]} >
            <View  style={{flexDirection:'row',alignItems:'center',padding:'1%',paddingLeft:'5%',justifyContent:'space-between'}}>
              <View style={{flexDirection:'row',alignItems:'center'}}>
                <View style={{marginLeft:'3%',height:45,width:45,borderRadius:22.5,backgroundColor:'#5352ed',alignItems:'center',justifyContent:'center'}}>
                  <Icon name='id-card-o' type='FontAwesome' size={20} style={{color:'white'}}/>
                </View>
                <Text style={{marginLeft:'5%',color:'grey',fontSize:16,fontWeight:'600',}}>Personnel Details</Text>
              </View>
                <Icon name={this.state.isopen1 ? 'chevron-up':'chevron-down'} type='EvilIcons' size={12} style={{color:'grey',marginRight:'3%'}}/>
            </View>
            {!this.state.isopen1 && <View style={{  borderBottomWidth:0.26,borderBottomColor:'#bdc3c7',width:'90%',marginLeft:'6%',marginTop:5}}></View>}
          </View>
        </TouchableWithoutFeedback>
        {this.state.isopen1 && <View style={{backgroundColor:'white',height:this.heightScreen/4}}>
      <PersonalDetails />
        </View>}


        <TouchableWithoutFeedback onPress={this.handlePress2}>
          <View style={[{height:this.heightScreen/10.5},{backgroundColor:'white',}]} >
            <View  style={{flexDirection:'row',paddingLeft:'5%',alignItems:'center',padding:'1%',justifyContent:'space-between'}}>
              <View style={{flexDirection:'row',alignItems:'center'}}>
                <View style={{marginLeft:'3%',height:45,width:45,borderRadius:22.5,backgroundColor:'#2ecc71',alignItems:'center',justifyContent:'center'}}>
                  <Icon name='graduation-cap' type='FontAwesome' size={20} style={{color:'white'}}/>
                </View>
                <Text style={{marginLeft:'5%',color:'grey',fontSize:16,fontWeight:'600',}}>Academic Details</Text>
              </View>
                <Icon name={this.state.isopen2 ? 'chevron-up':'chevron-down'} type='EvilIcons' size={12} style={{color:'grey',marginRight:'3%'}}/>
            </View>
            {!this.state.isopen2 &&<View style={{borderBottomWidth:0.3,borderBottomColor:'#bdc3c7',width:'90%',marginLeft:'6%',marginTop:5}}></View>}
          </View>
        </TouchableWithoutFeedback>
        {this.state.isopen2 && <View style={{backgroundColor:'white',height:2.7*this.heightScreen/10}}>
          <AcademicDetails />
        </View>}


        <TouchableWithoutFeedback onPress={this.handlePress3}>
          <View style={[{height:this.heightScreen/10.5},{backgroundColor:'white',}]} >
            <View  style={{flexDirection:'row',paddingLeft:'5%',alignItems:'center',padding:'1%',justifyContent:'space-between'}}>
              <View style={{flexDirection:'row',alignItems:'center'}}>
                <View style={{marginLeft:'3%',height:45,width:45,borderRadius:22.5,backgroundColor:'#e74c3c',alignItems:'center',justifyContent:'center'}}>
                  <Icon name='cash-multiple' type='MaterialCommunityIcons' size={20} style={{color:'white'}}/>
                </View>
                <Text style={{marginLeft:'5%',color:'grey',fontSize:16,fontWeight:'600',}}>Fee Payments</Text>
              </View>
                <Icon name={this.state.isopen3 ? 'chevron-up':'chevron-down'} type='EvilIcons' size={12} style={{color:'grey',marginRight:'3%'}}/>
            </View>
            {!this.state.isopen3 && <View style={{  borderBottomWidth:0.3,borderBottomColor:'#bdc3c7',width:'90%',marginLeft:'6%',marginTop:5}}></View>}
          </View>
        </TouchableWithoutFeedback>
        {this.state.isopen3 && <View style={{backgroundColor:'white',height:this.heightScreen/4}}>
          <FeePayment />
        </View>}


        <TouchableWithoutFeedback onPress={this.handlePress4}>
          <View style={[{height:this.heightScreen/10.5},{backgroundColor:'white',}]} >
            <View  style={{flexDirection:'row',paddingLeft:'5%',alignItems:'center',padding:'1%',justifyContent:'space-between'}}>
              <View style={{flexDirection:'row',alignItems:'center'}}>
                <View style={{marginLeft:'3%',height:45,width:45,borderRadius:22.5,backgroundColor:'#f1c40f',alignItems:'center',justifyContent:'center'}}>
                  <Icon name='project' type='Octicons' size={20} style={{color:'white'}}/>
                </View>
                <Text style={{marginLeft:'5%',color:'grey',fontSize:16,fontWeight:'600',}}>Comments & Remarks</Text>
              </View>
                <Icon name={this.state.isopen4 ? 'chevron-up':'chevron-down'} type='EvilIcons' size={12} style={{color:'grey',marginRight:'3%'}}/>
            </View>
            {!this.state.isopen4 && <View style={{  borderBottomWidth:0.3,borderBottomColor:'#bdc3c7',width:'90%',marginLeft:'6%',marginTop:5}}></View>}
          </View>
        </TouchableWithoutFeedback>
        {this.state.isopen4 && <View style={{backgroundColor:'white',height:this.heightScreen/4}}>
          <CommentsRemarks />
        </View>}


        <TouchableWithoutFeedback onPress={this.handlePress5}>
          <View style={[{height:this.heightScreen/10.5},{backgroundColor:'white',}]} >
            <View  style={{flexDirection:'row',paddingLeft:'5%',alignItems:'center',padding:'1%',justifyContent:'space-between'}}>
              <View style={{flexDirection:'row',alignItems:'center'}}>
                <View style={{marginLeft:'3%',height:45,width:45,borderRadius:22.5,backgroundColor:'#9b59b6',alignItems:'center',justifyContent:'center'}}>
                  <Icon name='badge' type='SimpleLineIcons' size={20} style={{color:'white'}}/>
                </View>
                <Text style={{marginLeft:'5%',color:'grey',fontSize:16,fontWeight:'600',}}>Achievements</Text>
              </View>
                <Icon name={this.state.isopen5 ? 'chevron-up':'chevron-down'} type='EvilIcons' size={12} style={{color:'grey',marginRight:'3%'}}/>
            </View>
            <View style={{  borderBottomWidth:0.3,borderBottomColor:'#bdc3c7',width:'90%',marginLeft:'6%',marginTop:5}}></View>
          </View>
        </TouchableWithoutFeedback>
        {this.state.isopen5 && <View style={{backgroundColor:'white',height:this.heightScreen/4}}></View>}
      </ScrollView>


        // <ScrollView
        //   showsVerticalScrollIndicator={true}
        //   contentContainerStyle={{}}>
        //   {  <View style={[{backgroundColor:'green'},this.state.isopen1 ? {height:'60%'}:{height:'20%'}]}>
        //     <Text onPress={this.handlePress1}>1.personal details</Text>
        //   </View>}
        //
        //   {<View style={[{backgroundColor:'yellow'},this.state.isopen2 ? {height:'80%'}:{height:'20%'}]}>
        //     <Text onPress={this.handlePress2}>2.academic details</Text>
        //   </View>}
        //   { <View style={[{backgroundColor:'green'},this.state.isopen3 ? {height:'70%'}:{height:'20%'}]}>
        //     <Text onPress={this.handlePress3}>3.fee payment</Text>
        //   </View>}
        //   {<View style={[{backgroundColor:'yellow'},this.state.isopen4 ? {height:'60%'}:{height:'20%'}]}>
        //     <Text onPress={this.handlePress4}>4.comments and remarks</Text>
        //   </View>}
        //   {<View style={[{backgroundColor:'green'},this.state.isopen5 ? {height:'60%'}:{height:'20%'}]}>
        //     <Text onPress={this.handlePress5}>5.achievements</Text>
        //   </View>}
        // </ScrollView>


                // <ScrollView
                //   showsVerticalScrollIndicator={true}
                //   contentContainerStyle={{flex:1}}>
                //   {  <View style={[{backgroundColor:'green',}]}>
                //     <Text style={{fontSize:24}} onPress={this.handlePress1}>1.personal details</Text>
                //     <Expand
                //       value={this.state.isopen1}
                //       minHeight={} maxHeight={80}
                //       >
                //      <Text>
                //       Some very very very very very very very very very very very very very very very very very very very very great content
                //      </Text>
                //    </Expand>
                //   </View>}
                //
                //   {<View style={[{backgroundColor:'yellow'}]}>
                //     <Text onPress={this.handlePress2}>2.academic details</Text>
                //     <Expand
                //       value={this.state.isopen2}
                //       minHeight={5} maxHeight={80}
                //       >
                //      <Text>
                //       Some very very very very very very very very very very very very very very very very very very very very great content
                //      </Text>
                //    </Expand>
                //   </View>}
                //   { <View style={[{backgroundColor:'green'}]}>
                //     <Text onPress={this.handlePress3}>3.fee payment</Text>
                //     <Expand
                //       value={this.state.isopen3}
                //       minHeight={5} maxHeight={80}
                //       >
                //      <Text>
                //       Some very very very very very very very very very very very very very very very very very very very very great content
                //      </Text>
                //    </Expand>
                //   </View>}
                //   {<View style={[{backgroundColor:'yellow'}]}>
                //     <Text onPress={this.handlePress4}>4.comments and remarks</Text>
                //     <Expand
                //       value={this.state.isopen4}
                //       minHeight={5} maxHeight={80}
                //       >
                //      <Text>
                //       Some very very very very very very very very very very very very very very very very very very very very great content
                //      </Text>
                //    </Expand>
                //   </View>}
                //   {<View style={[{backgroundColor:'green'}]}>
                //     <Text onPress={this.handlePress5}>5.achievements</Text>
                //     <Expand
                //       value={this.state.isopen5}
                //       minHeight={5} maxHeight={80}
                //       >
                //      <Text>
                //       Some very very very very very very very very very very very very very very very very very very very very great content
                //      </Text>
                //    </Expand>
                //   </View>}
                // </ScrollView>


    );
  }
}
