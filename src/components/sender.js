import React from 'react'

export default class Sender extends React.Component{
  render(){
    return(
      
      <div className='chatSender'>
        {this.props.sendMessage}
      </div>
    )
    }
}
