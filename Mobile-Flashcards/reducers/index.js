import { RECEIVE_DECKS, ADD_TITLE, ADD_QUESTIONS } from '../actions'
import { initialAppState } from '../Utils/Helpers'

function decks(state = initialAppState, action) {
  switch (action.type) {
    case RECEIVE_DECKS: {
      return {
        ...state,
        ...action.decks
      }
    }
    case ADD_TITLE:
      return {
        ...state,
        ...action.title
      }
    case ADD_QUESTIONS:
      const {title, questions, question, answer} = action.params;
      const newQuestion = JSON.parse(JSON.stringify(questions)).concat([ { question, answer } ]);
      return {
        ...state,
        [title]: {...state[title], questions: newQuestion},
      }
    default:
      return state
  }
}

export default decks
