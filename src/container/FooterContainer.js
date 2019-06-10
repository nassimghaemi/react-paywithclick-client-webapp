import {connect} from 'react-redux'
import Footer from '../components/Footer'

const mapDispatchToProps =dispatch =>({
  dispatch : dispatch
})
const mapStateToProps = state => ({
  conversationId: state.conversationId
})


const FooterContainer = connect(
  mapDispatchToProps,
  mapStateToProps
)(Footer)
export default FooterContainer