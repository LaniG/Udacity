import { RECEIVE_DECKS, ADD_TITLE, ADD_QUESTIONS } from '../actions'

const initialAppState = {
  React: {
  title: 'React',
  count: 2,
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
    count: 1,
    questions: [
      {
        question: 'What is Redux?',
        answer: 'A predictable state container for JavaScript apps.'
      }
    ]
  },
  ReactNative: {
    title: 'React-Native',
    count: 1,
    questions: [
      {
        question: 'Why do we use React Native?',
        answer: 'React Native allows us to build native android and iOS apps using the principles of React'
      }
    ]
  },
  Flexbox: {
    title: 'Flexbox',
    count: 1,
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
        ...state
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
        ...[count] + 1,
        [questions]: action.questions,
      }
    default :
      return state
  }
}

export default decks
