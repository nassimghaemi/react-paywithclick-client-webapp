import {connect} from 'react-redux'
import Sender from '../components/sender'

const mapDispatchToProps =dispatch =>({
  dispatch : dispatch
})
const mapStateToProps = state =>{
  return {
    newMessage: state.newMessage,
    messages: state.messages
  }
  }

const SenderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Sender)

export default SenderContainer






