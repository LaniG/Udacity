import { getDecks, saveDeckTitle, addCardToDeck } from '../Utils/Helpers'
export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const ADD_TITLE = 'ADD_TITLE'
export const ADD_QUESTIONS = 'ADD_QUESTIONS'

export const receiveDecks = () => dispatch => (
  getDecks()
  .then(decks => dispatch({
    type: RECEIVE_DECKS,
    decks,
  }))
)

export const addTitle = (title) => dispatch => (
  saveDeckTitle(title)
    .then(() => dispatch({
      type: ADD_TITLE,
      title,
    }))
)

export const addQuestions = (title, card) => dispatch => (
  addCardToDeck(title, card)
    .then(() => dispatch({
      type: ADD_QUESTIONS,
      title,
      card
    }))
)
