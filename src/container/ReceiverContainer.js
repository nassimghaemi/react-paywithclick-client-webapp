import {connect} from 'react-redux'
import Receiver from '../components/receiver'

const mapDispatchToProps =dispatch =>({
  dispatch : dispatch
})
const mapStateToProps = state =>{
  return {
    messages: state.messages
  }
  }

const ReceiverContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Receiver)

export default ReceiverContainer