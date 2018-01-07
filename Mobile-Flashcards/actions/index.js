export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const ADD_DECK = 'ADD_DECK'
export const ADD_QUESTIONS = 'ADD_QUESTIONS'

export function receiveDecks(decks) {
return {
    type: RECEIVE_DECKS,
    decks,
  };
}

export function addDeck(title) {
  return {
    type: ADD_DECK,
    title,
  };
}

export function addQuestions(params){
  return {
    type: ADD_QUESTIONS,
    params,
  };
}
