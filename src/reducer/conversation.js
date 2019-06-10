const INIT ={
  newMessage:'',
  messages:[],
  conversationList:[],
  Contactlist: [],
  conversationId:''
}
var myId = window.localStorage.getItem('id')
function conversation(state = INIT, action) {
  switch(action.type) {
    case 'SAVE_NEW_MESSAGE':
      return {...state,
        newMessage: action.payload,
        messages: [...state.messages, {id:1, message: action.payload}]
      }
    case 'SAVE_CONVERSATION_LIST':
        return {
          ...state,
          conversationList: action.payload
          }
    case 'SAVE_MESSAGES':
      return {
        ...state,
        messages: action.payload,
        user: action.user,
        avatar: action.avatar,
        conversationId: action.conversationId
      }
    default:
      return state
  }

}
export default conversation