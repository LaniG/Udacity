import { RECEIVE_DECKS, ADD_DECK, ADD_QUESTIONS } from '../actions'
import { initialAppState } from '../Utils/Helpers'

function decks(state = {}, action) {
  switch (action.type) {
    case RECEIVE_DECKS: {
      return {
        ...state,
        ...action.decks
      }
    }
    case ADD_DECK:
      return {
        ...state,
        ...action.deck
      }
    case ADD_QUESTIONS:
      const {title, count, questions, question, answer} = action.params;
      const newQuestion = JSON.parse(JSON.stringify(questions)).concat([ { question, answer } ]);
      return {
        ...state,
        [title]: {
          title: title,
          count: count,
          questions: newQuestion
        }
      }
    default:
      return state
  }
}

export default decks
