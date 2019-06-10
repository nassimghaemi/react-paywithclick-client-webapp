import React from 'react' 
import {Icon} from 'antd'

export default class Header extends React.Component{
  
  render(){
    {console.log(this.props)}
    return(
      <header className='Contactheader'>
      <div className='contactInfo'>
        <div><img src={this.props.avatar} className='ContactImage' alt='user'/></div>
        <span>{this.props.user}</span>
      </div>
      <div className='Chattype'>
        <Icon type='phone'/>
        <Icon type='video-camera'/>
        <Icon type='more'/>
      </div>
    </header>
    )
  }
}



