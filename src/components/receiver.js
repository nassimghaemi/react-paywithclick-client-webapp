import React from 'react' 


export default class Receiver extends React.Component{
  render(){
    
    return(
      <div>
        {this.props.reciveMessage}
      </div>
    )
  }
}

