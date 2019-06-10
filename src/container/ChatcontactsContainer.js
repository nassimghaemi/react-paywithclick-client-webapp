import {connect} from 'react-redux'
import Chatcontacts from '../components/chatcontacts'

const mapDispatchToProps =dispatch =>({
  dispatch : dispatch
})
const mapStateToProps = state =>{
  return {
    messages: state.messages,
    conversationList :state.conversationList 
  }
  }

const ChatcontactsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Chatcontacts)

export default ChatcontactsContainer