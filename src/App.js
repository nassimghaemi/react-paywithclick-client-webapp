import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import Login from './components/login'
import Signup from './components/signup'
import Chatscreen from './components/chatscreen'
import { Provider } from 'react-redux'
import {createStore} from 'redux'
import conversation from './reducer/conversation'

const store= createStore(conversation)


class App extends Component {
  render () {
    return (
        <Provider store={store}>
          <Router>
            <Route path='/login' component={Login} />
            <Route path='/signup' component={Signup}/>
            <Route path='/chat' component={Chatscreen}/>
          </Router>
        </Provider>
    )
  }
}
export default App