export * from './actions'

const initialState={
  loading:false,
  logged:false,
  messages:{},
  user:null,initialWindow:'123'
}


 const session=(state=initialState,action)=>{
switch (action.type) {
 case 'loadingEnable':return {...state, loading:true}
 break;
 case 'loadingDisable':return {...state, loading:false}
 break;
 case 'loggingEnable':return { ...state,logged:true,}
 break;
 case 'loggingDisable':return {...state, logged:false}
 break;
 case 'messageLoaded':return {...state, initialWindow:'456'}
 break;
 case 'logoutUser':return initialState
 break;
 default: return state;

}
}

export default session
