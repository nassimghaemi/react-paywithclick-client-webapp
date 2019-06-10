import React from 'react'
import userpic from '../images/accountlogin-icon.png'
import {Icon} from 'antd'
import pic1 from '../images/daniil-silantev-318853-unsplash.jpg'
import pic2 from '../images/pawel-czerwinski-1574309-unsplash.jpg'
import pic3 from '../images/levi-guzman-268866-unsplash.jpg'


export default class Contactprofile extends React.Component{
  constructor(props){
    super(props)
    this.state={
      isHidden: false
    }
  }
  render(){
    return(
      <div className='ProfileDetails'>
        <Icon type='close-circle' style={{float:'left',margin:'10px'}} onClick={this.close}/>
        <div className='profileDetailpic'>
            <img src={userpic} alt='user' className='informationImage'/>
            <span>Nasim Ghaemi</span>
        </div>
        <span className='profileDetailpic'>
          Bio
        </span>
        <div className='profilesecondpart'>
          <div className='Notification'>
            <span>Notification</span>
            <Icon type=''/>
          </div>
          <div>
            <span>
              Shared Media
            </span>
            <div className='imageContainer'>
              <img src={pic1} alt='shared media' className='sharedmediasize' />
              <img src={pic2} alt='shared media' className='sharedmediasize' />
              <img src={pic3} alt='shared media' className='sharedmediasize' />
              <div className='more'>
                <Icon type="snippets" />
                <Icon type="file-pdf" />
                <Icon type="link" />
                <Icon type="picture" />
                <Icon type="audio" />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

}