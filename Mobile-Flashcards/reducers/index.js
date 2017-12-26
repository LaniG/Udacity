import { RECEIVE_DECKS, ADD_TITLE, ADD_QUESTIONS } from '../actions'

const initialAppState = {
  React: {
  title: 'React',
  questions: [
    {
      question: 'What is React?',
      answer: 'A library for managing user interfaces'
    },
    {
      question: 'Where do you make Ajax requests in React?',
      answer: 'The componentDidMount lifecycle event'
    }
  ]
  },
  Redux: {
    title: 'Redux',
    questions: [
      {
        question: 'What is Redux?',
        answer: 'A predictable state container for JavaScript apps.'
      }
    ]
  },
  ReactNative: {
    title: 'React-Native',
    questions: [
      {
        question: 'Why do we use React Native?',
        answer: 'React Native allows us to build native android and iOS apps using the principles of React'
      }
    ]
  },
  Flexbox: {
    title: 'Flexbox',
    questions: [
      {
        question: 'How do we position elements on the main axis?',
        answer: 'By using justifyContent and the relevant props.'
      }
    ]
  }

} /* Our App's initial state*/

function decks (state = initialAppState, action) {
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
        ...state,
        ...state[action.title],
        [questions]: action.questions,
      }
    default :
      return state
  }
}

export default decks
