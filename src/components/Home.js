import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import{Icon} from 'antd'

class Home extends Component {
  render () {
    return (
      <div className='Home'>

        <div className= 'HomeButtonContainer'>
          <h1>Welcome To Puzzle Messenger</h1>
          <label>Don't have account?</label>
          <Link className= 'HomeButton' to='/signup'>Sign Up </Link>
        </div>
        <span className='DownloadPath'>Download Mobile Application From  <Icon type='android'/><Icon type='apple'/></span>
      </div>
    )
  }
}

export default Home
