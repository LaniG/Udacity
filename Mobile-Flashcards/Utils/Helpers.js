import { AsyncStorage } from 'react-native'
import { Permissions, Notifications } from 'expo'

const STORAGE_KEY = 'FLASHCARDS:STORAGE_KEY'
const NOTIFICATION_KEY = 'FLASHCARDS:NOTIFICATION_KEY'

export const initialAppState = {
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
    },
  ]
  },
  Redux: {
    title: 'Redux',
    count: 1,
    questions: [
      {
        question: 'What is Redux?',
        answer: 'A predictable state container for JavaScript apps.'
      },
    ]
  },
  ReactNative: {
    title: 'React-Native',
    count: 1,
    questions: [
      {
        question: 'Why do we use React Native?',
        answer: 'React Native allows us to build native android and iOS apps using the principles of React'
      },
    ]
  },
  Flexbox: {
    title: 'Flexbox',
    count: 1,
    questions: [
      {
        question: 'How do we position elements on the main axis?',
        answer: 'By using justifyContent and the relevant props.'
      },
    ]
  }

} /* Our App's initial state*/

export function getDecks() {
  return AsyncStorage.getItem(STORAGE_KEY)
      .then( result => {
          if(result === null) {
              AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(initialAppState));
              return initialAppState
              console.log('Initial state rendered')
          } else {
              return JSON.parse(result)
              console.log('Locally saved data returned');
          }
      })
}

export function getDeck(id) {
  return AsyncStorage.getItem(STORAGE_KEY)
      .then(result => {
          const card = JSON.parse(result)
          return card[id];
      })
}

export function saveNewDeck(title) {
    return AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify({
      title: {
        title,
        questions:[]
      }
    }))
    console.log('New Deck saved');
}

export function addCardToDeck(title, card) {
    return AsyncStorage.getItem(STORAGE_KEY)
        .then(result => {
            return JSON.parse(result)[title]
        })
        .then(data => {
            const {question, answer} = card;
            const questions = data.questions.concat({
                question,
                answer
            });
            AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify({
                [title]: {
                    title,
                    questions
                }
            }));
        })
        console.log('New questions saved to the deck');
}

export function clearLocalNotification() {
    return AsyncStorage.removeItem(NOTIFICATION_KEY)
        .then(Notifications.cancelAllScheduledNotificationsAsync)
}

export function setLocalNotification() {
    AsyncStorage.getItem(NOTIFICATION_KEY)
        .then(JSON.parse)
        .then((data) => {
            if (data === null) {
                Permissions.askAsync(Permissions.NOTIFICATIONS)
                    .then(({ status }) => {
                        if (status === 'granted') {
                            Notifications.cancelAllScheduledNotificationsAsync();

                            let tomorrow = new Date();
                            tomorrow.setDate(tomorrow.getDate() + 1);
                            tomorrow.setHours(19);
                            tomorrow.setMinutes(30);

                            Notifications.scheduleLocalNotificationAsync(
                                createNotification(), {
                                    time: tomorrow,
                                    repeat: 'day',
                                }
                            );
                            AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
                        }
                    })
            }
        })
}

function createNotification() {
    return {
        title: 'Master React!',
        body: "Quiz yourself and master React in no time.",
        ios: {
            sound: true,
        },
        android: {
            sound: true,
            priority: 'high',
            sticky: false,
            vibrate: true,
        }
    }
}
