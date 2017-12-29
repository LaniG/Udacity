import { RECEIVE_DECKS, ADD_TITLE, ADD_QUESTIONS } from '../actions'
import { initialAppState } from '../Utils/Helpers'

function decks(state = initialAppState, action) {
  switch (action.type) {
    case RECEIVE_DECKS: {
      return action.decks
      }
    case ADD_TITLE:
      const { title } = action;
      return {
        ...state,
        [title]: {
          title,
          questions: []
        }
      }
    case ADD_QUESTIONS:
      const copyOfState = {...state}
      copyOfState[action.title].questions.push(action.card);
      {
        return copyOfState;
      }
    default:
      return state
  }
}

export default decks
