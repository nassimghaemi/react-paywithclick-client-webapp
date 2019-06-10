import React, { Component } from 'react'
import {Icon} from 'antd'
import validate from '../validation/validateFunction'
import logo from'../images/puzzle.svg'
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
// import { faRubleSign } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios'



class Signup extends Component {
  constructor (){
    super()
    this.state= {
      username :'',
      email:'',
      password : '',
      repassword :'',
      number:'',
      clicked:false,
      error:{
        username :null,
        email:null,
        password : null,
        repassword :null,
        number:null,
      }
    }
  }
  onchange(e){
    var entry= e.target.name
    console.log(entry,e.target.value)
    this.setState(
      {
        [entry]:e.target.value
      }
    )

  }
  onclick(){
      let data= {
        email: this.state.email,
        password: this.state.password
      }
      axios.post('https://api.paywith.click/auth/signup/', data,  { crossdomain: true })
      .then(function (response) {
        console.log('response:::',response);
        window.localStorage.setItem('token',response.data.token);
        window.localStorage.setItem('id',response.data.id);
      })
      .catch(function (error) {
        console.log('error::::',error.response);
      })
  }
    
  
  render () {
    return (
      <div className='Register'>
        <div className='HomeButtonContainer'>
          {/* <ReactCSSTransitionGroup transitionName = "example"
               transitionAppear = {true} transitionAppearTimeout = {500}
               transitionEnter = {false} transitionLeave = {false}> */}
					
            <img src={logo} alt='puzzle messenger' className='accountImage'/>
          {/* </ReactCSSTransitionGroup> */}
         
          <button className='loginButton'>Sign Up Via Google+<Icon type='google-plus'/></button>
        </div>
        <div className='RightRegister'>
          <label>User Name</label>
          <input
            type='text'
            placeholder='Choose Your UserName'
            className='loginButton'
            name='username'
            onChange={(e) => this.onchange(e)}
          />
          {
            this.state.error.username !== null &&
            <p style={{color:'yellow'}}>{this.state.error.username}</p>
          }
          <label>Enter Your Email</label>
          <input
            type='email'
            placeholder='Email '
            className='loginButton'
            name='email'
            onChange={(e) => this.onchange(e)}
          />
           {
            this.state.error.email !== null &&
            <p style={{color:'yellow'}}>{this.state.error.email}</p>
          }
          <label>Enter Password</label>
          <input
            type='password'
            placeholder='Choose passWord'
            className='loginButton'
            name='password'
            onChange={(e) => this.onchange(e)}
          />
           {
            this.state.error.password !== null &&
            <p style={{color:'yellow'}}>{this.state.error.password}</p>
          }
          <label>Re-enter Your Password</label>
          <input
            type='password'
            placeholder='Re-enter your Password'
            className='loginButton'
            name='repassword'
            onChange={(e) => this.onchange(e)}
          />
           {
            this.state.error.username !== this.state.error.repassword &&
            <p style={{color:'yellow'}}>Enter Password correctly</p>
          }
          <label>Enter Your Number</label>
          <input
            type='tel'
            placeholder='Telephone'
            className='loginButton'
            name='number'
            onChange={(e) => this.onchange(e)}
          />
           {
            this.state.error.number !== null &&
            <p style={{color:'yellow'}}>{this.state.error.number}</p>
          }

          <label>sure?</label>
          <input
            type='submit'
            className='loginButton'
            value='Create Your Account'
            onClick={()=>this.onclick()}
          />
        </div>
      </div>
    )
  }
}

export default Signup
