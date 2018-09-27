import React, { Component } from 'react';
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import Home from './Components/Home/container.js'
import Login from './Auth'
import Start from './start.js'
import reducer from './reducer.js'


const middleware = [thunk]
export const store=createStore(reducer,applyMiddleware(...middleware))


export default class App extends Component {

  render() {
    return (
     <Provider store={store}>
       {/* <Home /> */}
       <Start />
     </Provider>

    );
  }
}
