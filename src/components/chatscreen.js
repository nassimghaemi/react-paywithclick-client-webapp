import React from 'react'
import {Icon} from 'antd'
import Contactprofile from './contactprofile'
import axios from 'axios'
import FooterContainer from '../container/FooterContainer'
import SenderContainer from '../container/SenderContainer'
import ReceiverContainer from '../container/ReceiverContainer'
import Receiver from './receiver'
import ChatcontactsContainer from '../container/ChatcontactsContainer'
import HeaderContainer from '../container/HeaderContainer'
import { saveConversationList } from '../action/conversation'
class Chatscreen extends React.Component{
  constructor() {
    super()
    this.state = {
      newMessage : '',
      token:window.localStorage.getItem('token'),
      suggestedUsers: []
    }
  }
  
  getNewMessage(newMessage) {
    this.setState({newMessage})
  }
  handlechange(e){

    let data = new FormData()
    data.append('token',this.state.token)
    data.append('query', e.target.value)
    data.append('size',4)
    axios.post('https://api.paywith.click/explore/search/contacts/', data)
      .then((response) =>{
        console.log('responseforsearch:::',response.data.data.users)
        this.setState({suggestedUsers:response.data.data.users})
      })
      .catch(function (error) {
        console.log('error::::',error)
      })
  }
  setConversation(user){
    let data = new FormData()
    data.append('token',this.state.token)
    data.append('user_id',user.id)
    axios.post('https://api.paywith.click/conversation/', data)
      .then((response) =>{
        this.props.dispatch(saveConversationList(response.data.data.conversation_id))
        console.log('setconversation:::',response.data.data.conversation_id)
      })
      .catch(function (error) {
        console.log('error::::',error)
      })
  }
  
  render(){
  
    return(
      <div className='chatpage'>
        <aside className='chatleftaside'>
          <header className='secondheader'>
            <Icon type='user' style={{backgroundColor:'yellow'}} className='size'/>
            <Icon type='team'  style={{backgroundColor:'blueviolet'}} className='size'/>
            <Icon type='sound'  style={{backgroundColor:'lightgreen'}} className='size'/>
            <Icon type='reddit'  style={{backgroundColor:'red'}} className='size'/>
          </header>
          <header className='firstheader'>
            <input 
              type='search' 
              placeholder='Search... '
              onChange={(e)=>this.handlechange(e)}
            />
            {
              this.state.suggestedUsers.map((user,index)=>{
                return(
                  <span className='suggestion' onClick={()=>this.setConversation(user)} >
                    <img src={user.avatar_url} className='ContactImage'/>
                    {user.email}
                  </span>
                )
              })
            }
          </header>
          <label style={{marginTop:'3px'}}>Recent</label>
          <section>
            <ChatcontactsContainer/>
          </section>
        </aside>
        <main className='pagemainside'>
          <HeaderContainer/> 
          <main className="chatcontent">
            {/* { this.props.messages.map((item, index) => {
              if (item.sender.id == this.state.myId) {
                return (
                  <SenderContainer sendMessage={item.text} newMessage = {this.props.newMessage}/>
                )
            } else {
              return (
                <ReceiverContainer reciveMessage={item.text}/>
              )
            }
          })
        } */}
          </main>
            <FooterContainer getNewMessage={(newMessage) => this.getNewMessage(newMessage)}/>
        </main>
        <aside>
          <Contactprofile/> 
        </aside>
      </div>
    )
  }
}

export default Chatscreen