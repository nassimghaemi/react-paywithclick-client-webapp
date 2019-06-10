import React from 'react'
import logo from '../images/puzzle.svg'
import Home from './Home'
import axios from 'axios'
import validate from '../validation/validateFunction'
import {withRouter} from 'react-router'


class Login extends React.Component {

    constructor () {
      super()
      this.state= {
        username:'',
        password:'',
        clicked:false,
        error:{
          username:null,
          password:null
        }
      }
    }
    onchange(e){
      var entry= e.target.name
      console.log(e.target.name,e.target.value)
      this.setState(
        {
          [entry]:e.target.value
        }
      )
    }
    onclick(){
      let data= {
        email: this.state.username,
        password: this.state.password
      }
      var usernameError= validate('username',this.state.username)
      var passwordError= validate('password',this.state.password)
      var error={}
      error.username=usernameError
      error.password=passwordError
      this.setState({error})
      this.setState({...this.state, error: {...this.state.error, username:usernameError, password: passwordError}})
      var headers={
        'Content-Type': "application/json",
        dataType:'jsonp',
      }
      axios.post('https://api.paywith.click/auth/signin/', data,  { crossdomain: true })
      .then((response)=> {
        console.log('response:::',response);
        window.localStorage.setItem('token',response.data.data.token);
        window.localStorage.setItem('id',response.data.data.profile.id);
        this.props.history.push('./chat')

      })
      .catch((error)=> {
        console.log('error::::',error.response);
      });
    }
  render () {
    console.log('props',this.props)
    return (
      <div className='Welcome'>
        <Home />
          <div className= 'Login'>
            <div className= 'Logincontainer'>
              <h1>
                    Login To Your Account
              </h1>
              <img src={logo} className='accountImage' alt='logo' />
              <div className='LoginInput'>
                <input
                  placeholder='Enter Your UserName'
                  className='loginButton'
                  name='username'
                  onChange={(e)=> this.onchange(e)}
                />
                { this.state.error.username !== null &&
                  <p style={{color: 'red'}}>{this.state.error.username}</p>
                  
                }
                <input
                  placeholder='Enter Your PassWord'
                  className='loginButton'
                  type='password'
                  name='password'
                  onChange={(e) => this.onchange(e)}
                />
                { this.state.error.password !== null &&
                  <p style={{color: 'red'}}>{this.state.error.password}</p>
                }
                <button className='loginButton' onClick={(e) => this.onclick(e)}>Enter</button>
                <a href='#'>Forget Your PassWord?</a>
              </div>
            </div>
          </div>
      </div>
    )
  }
}

export default withRouter(Login)
