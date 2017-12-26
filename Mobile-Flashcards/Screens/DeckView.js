/*PURPOSE: this component is responsible for showing a card title with options to add new questions or start a quiz

TODO: After I create the list of Decks to be added to the Store,
I need to return here to:
- used mapStateToProps to access the title in the store and the number of questions (aka. cards) associated with it.
*/

import React from 'react'
import { View, StyleSheet } from 'react-native'
import { StackNavigator } from 'react-navigation'
import CardView from '../Components/CardView'
import Button from '../Components/Button'
import DeckQuestions from './DeckQuestions'
import DeckQuiz from './DeckQuiz'

class DeckView extends React.Component {

static navigationOptions = ({ navigation }) => ({
  title: `${navigation.state.params.title} Card`,
})
/*this is the text shown at the top of this screen, specific to each card
*/
render() {

const { navigate } = this.props.navigation;

const { params } = this.props.navigation.state;

    return (
      <View style={{flex: 1}}>
        <CardView
          name={params.name}
          cards={params.cards} /*these are not pulling over...*/
        />

        <View style={styles.container}>
          <Button buttonText='Add'
            onPress={() => navigate('DeckQuestions', { title: `${params.name}`} )}
          />
          <Button buttonText='Start'
            onPress={() => navigate('DeckQuiz', { title: `${params.name} Quiz`} )}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container :{
    flex: 1,
    justifyContent: 'center'
  },
})


export default DeckView;
