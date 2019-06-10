import React from 'react'
import {Icon} from 'antd'
import { addNewMessage } from '../action/conversation'
import axios from 'axios'

export default class Footer extends React.Component{
  constructor(){
    super()
    this.state={
      newMessage:''
    }
  }
  onChangeText(e) {
    console.log('inputmessages',e.target.value)
    this.setState({newMessage: e.target.value})
    // this.props.getNewMessage(e.target.value)
  }
  sendNewMessage() {
    this.props.dispatch(addNewMessage(this.state.newMessage))
    const token=window.localStorage.getItem('token')
    const data= new FormData()
    data.append('token',token)
    data.append('conversation_id',this.props.conversationId)
    data.append('text', this.state.newMessage)
    axios.post('https://api.paywith.click/conversation/create/',data )
    .then( (response)=> {
      console.log('response',response)
      this.setState({newMessage: ''})
  
    })
    .catch(error => {
      console.log('error',error);
    })
  }
  render(){
    return(
          <footer className='chatfooter'>
            <Icon type='smile'/>
            <Icon type='paper-clip'/>
            <input
              type='text'
              value={this.state.newMessage}
              onChange={(e) => this.onChangeText(e)}
            />
            <div className='sendButton'>
              <Icon
                type='caret-right'
                onClick={()=>this.sendNewMessage()}
              />
            </div>
          </footer>
    )
  }
}