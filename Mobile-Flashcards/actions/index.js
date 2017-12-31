export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const ADD_TITLE = 'ADD_TITLE'
export const ADD_QUESTIONS = 'ADD_QUESTIONS'

export function receiveDecks(decks) {
return {
    type: RECEIVE_DECKS,
    decks,
  }
}

export function addTitle(title) {
  return {
    type: ADD_TITLE,
    title,
  }
}

export function addQuestions(title, card){
  return {
    type: ADD_QUESTIONS,
    params,
  }
}
