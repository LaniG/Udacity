# Udacity Mobile Flashcards project

## Project Overview
This project is my final project in the React Nanodegree course - Mobile Flashcards (also called UdaciCards).
For the UdaciCards project, I've built a mobile applicaiton that works on Android & iOS and it allows users to study using collections of flashcards. The app will allow users to create different categories of flashcards called "decks", add flashcards to those decks, then take quizzes on those decks.

## Starting the app
After cloning or downloading the project .zip file, you can use:
* npm install - in the project folder to install dependencies
* yarn start

## Project Specifics/ Dependencies
* The project was built using create-react-native-app
* Redux is utilized and would need to be installed with npm install --save Redux
* The React-Redux binding is also used and can be installed with npm install --save react-Redux
* AsyncStorage is also used and can be imported from react-native

## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Known Bugs
This Mobile Flashcards React Native App has one known bug that is currently being investigated:
* Whenever a new question is added to a deck, a title-less/ undefined title card is also added.
* This undefined title card has a copy of the question that was just added.
* Upon refresh/ reloading the App, this undefined title card disappears.
