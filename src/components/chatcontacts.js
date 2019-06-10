import React from 'react'
import axios from 'axios'
import { saveConversationList ,saveMessages } from '../action/conversation'


class Chatcontacts extends React.Component{
  constructor (props) {
    super(props)
    this.state = {
      conversationList : [],
      token: window.localStorage.getItem('token'),
      MyId :window.localStorage.getItem('id')
    }
    this.handleRequest = this.handleRequest.bind(this)
  }
  componentDidMount(){
    this.handleRequest()
  }
  handleRequest(){
    const token = window.localStorage.getItem('token')
    axios.get('https://api.paywith.click/conversation/', {
      params: {
        token: token
      }
    })
    .then(response => {
      this.props.dispatch(saveConversationList(response.data.data.conversation_details))
    })
    .catch(error => {
      console.log('error',error);
    })
  }
  returnConversation(contacts){
    let data=new FormData()
    const token = window.localStorage.getItem('token')
    data.append('token',token)
    data.append('conversation_id',contacts.id)
    data.append('size',10)
    data.append('date',Math.round(new Date().getTime()/1000))
    axios.post('https://api.paywith.click/conversation/details/',data )
    .then( (response)=> {
      console.log('response',response)
      console.log('messages',response.data.data.messages)
      this.props.dispatch(saveMessages (
        response.data.data.messages,
        this.props.userName,
        this.props.avatar,
        this.props.conversationId)
      )
    })
    .catch(error => {
      console.log('error',error);
    })
  }
  
  render(){
    return(
      <div>
        {this.props.conversationList.map((contacts,index)=>{
          return(
            <div className='ContactRow'  onClick={()=>this.returnConversation(contacts)}>
              {contacts.users.map((user,index)=>{
                if(user.id != this.state.MyId){
                return(
                  <div>
                    <div><img src={user.avatar_url} className='ContactImage' alt='user'/></div>
                    <span className='ContactName'>{user.email}</span>
                  </div>
                )
              }
            }
          )
        }
      </div>
    )
        })}
    </div>
    )
  }
}

export default Chatcontacts