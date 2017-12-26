import { RECEIVE_DECKS, ADD_TITLE, ADD_QUESTIONS } from '../actions'

function decks (state = {}, action) {
  switch (action.type) {
    case RECEIVE_DECKS :
      return {
        ...state,
        ...action.decks
      }
    case ADD_TITLE :
      return {
        ...state,
        ...action.title,
      }
    case ADD_QUESTIONS :
      return {
        ...state.title,
        ...action.questions,
      }
    default :
      return state
  }
}

export default decks
