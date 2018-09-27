import React, { Component } from 'react';
import {
  View,Dimensions,BackHandler,
  StyleSheet,Text,TouchableOpacity
} from 'react-native';
import SoundRecorder from 'react-native-sound-recorder';
import Sound from 'react-native-sound';
import {AudioRecorder, AudioUtils} from 'react-native-audio';
import {Icon} from 'native-base';
import DropMenuVoice from './dropMenu.js'
import {connect} from 'react-redux'
screenHeight= Dimensions.get('window').height/28;
screenWidth= Dimensions.get('window').width/18;
import {recording,recorded,recordeStart,recordeStop} from './../../../store/voice/actions.js'

class VoiceContainer extends React.Component {
  static navigationOptions=({screenProps})=>({
  swipeEnabled:screenProps.islock,tabBarVisible: screenProps.islock,
})
state={startRecord:false,isRecorded:false,isPlaying:false,
      audioPath: AudioUtils.DocumentDirectoryPath + '/test.aac',
      hasPermission: true,}

componentDidMount(){this.prepareRecordingPath(this.state.audioPath);this.setState({voice:new Sound(this.state.audioPath)})}


componentWillMount() {
  BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
}

componentWillUnmount() {
  BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
}

handleBackButton() {
  return true;
}
prepareRecordingPath(audioPath){
  AudioRecorder.prepareRecordingAtPath(audioPath, {
    SampleRate: 22050,
    Channels: 1,
    AudioQuality: "medium",
    AudioEncoding: "aac",
    AudioEncodingBitRate: 32000
    });
   }

   async handleStart() {
    this.prepareRecordingPath(this.state.audioPath);
    this.props.recordeStart();
    try {
      const filePath = await AudioRecorder.startRecording();
    } catch (error) {
      console.error(error);
    }
   }

  async handleStop () {
    this.props.recording()
    this.props.recordeStop();
   try {
    const filePath = await AudioRecorder.stopRecording();
    return filePath;
   } catch (error) {
    console.error(error);
   }
    // this.setState({isRecorded:true,})
   }


  _play=()=> {
    this.setState({isPlaying:true})
    this.play();
 }
 play=()=>{
   setTimeout(() => {
   var sound = new Sound(this.state.audioPath);
   this.setState({voice:sound})
   setTimeout(() => {
    this.state.voice.play((success) => {
  if (success) {
    this.setState({isPlaying:false})
  } else {
    console.log('playback failed due to audio decoding errors')}})}, 100);}, 100)

  }
stop=()=>{
  this.setState({isPlaying:false})
}
  handleDelete=()=>{this.state.voice.stop();this.props.recorded();this.setState({isPlaying:false}) }
  handllePause=()=>{this.state.voice.pause();this.setState({isPlaying:false})}

  render() {
    backgroundColor= !this.props.startRecord? '#54a0ff' : '#ff6b6b' ;
    return (
      <View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'white'}}>

      {!this.state.isRecorded && <TouchableOpacity onPress={!this.props.startRecord? ()=>this.handleStart() : ()=>this.handleStop()}>
        <View style={[{height:screenHeight*7,width:screenHeight*7,borderRadius:screenHeight*3.5,backgroundColor:backgroundColor,
          alignItems:'center',justifyContent:'center'}]}>
        { !this.props.startRecord && <View style={{alignItems:'center',justifyContent:'center'}}>
          <Text style={[{color:'white',fontSize:14,fontWeight:'600',marginBottom:screenHeight*0.3}]}>Record</Text>
           <Text style={{color:'white',fontSize:14,fontWeight:'600'}}>Start</Text>
        </View>}
          {this.props.startRecord && <Text style={[{color:'white',fontSize:14,fontWeight:'600'}]}> Stop</Text>}
        </View>
      </TouchableOpacity>}
      {this.props.startRecord && <View style={{}}>
        <Text style={{fontSize:14,color:'black'}}>Recording...</Text>
      </View>}

    {this.props.isRecord && <View style={{flexDirection:'row',position:'absolute',top:'75%',}}>
      <Icons name={!this.state.isPlaying ?'play':'pause'} type='MaterialCommunityIcons' backgroundColor='#824FD2'
        onPress={!this.state.isPlaying ? this._play:this.handllePause} />
      <Icons name='upload' type='MaterialCommunityIcons' backgroundColor='#CCBF56' onPress={this.handleSend}/>
      <Icons name='delete' type='MaterialCommunityIcons' backgroundColor='#e74c3c' onPress={this.handleDelete}/>
    </View>}

    {this.props.isRecord &&
      <DropMenuVoice />}
      </View>
    );
  }
}
Icons=(props)=>{
  return (
    <TouchableOpacity onPress={props.onPress} disabled={props.disabled}
      style={[{height:screenHeight*2,width:screenHeight*2,borderRadius:screenHeight*1,alignItems:'center',justifyContent:'center',
      backgroundColor:props.backgroundColor,marginHorizontal:screenWidth}]}>
      <Icon name={props.name} type={props.type} style={{color:'white'}}/>
    </TouchableOpacity>
  );
}
mapStateToProps=(state)=>({
  isRecord:state.voice.isRecord,startRecord:state.voice.startRecord
})
mapDispatchToProps={
recording:recording,recorded:recorded,recordeStart:recordeStart,recordeStop:recordeStop
}
export default connect(mapStateToProps,mapDispatchToProps)(VoiceContainer)
