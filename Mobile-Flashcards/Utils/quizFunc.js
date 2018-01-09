quizValidation ? ( /*A test to see if we should display quiz questions*/
  {showAnswer ? (/*Test to decide if we show the question or the answer*/

    <View style={[styles.TopSection, {flex: 4}]}>
      <Text style={styles.quizText}>{questions[currentQuestion].answer}</Text>
      <View style={[styles.scoreButtons, {flex: 1}]}>
        <Button buttonText='Question' onPress={this.showAnswer}/>
      </View>
    </View>

  ):(/*If we are not showing the question, then we want to show the answer below*/

    <View style={[styles.TopSection, {flex: 4}]}>
      <Text style={styles.quizText}>{questions[currentQuestion].question}</Text>
      <View style={[styles.scoreButtons, {flex: 1}]}>
        <Button buttonText='Answer' onPress={this.showAnswer}/>
      </View>
    </View>

  )}/*End of test to decide if to show the question or answer*/

  <View style={[styles.TopSection, {flex: 2}]}>
    <View style={[styles.scoreButtons, {flex: 2}]}>
      <Button buttonText='Correct' onPress={this.isCorrect}/>
      <Button buttonText='inCorrect' onPress={this.isWrong}/>
    </View>
    <Text style={{flex: 1}}>Correct: {this.state.score}/{quizLength} | Progress: {RemainingQuestions} of {quizLength}</Text>
  </View>

):( /*If we are not displaying the quiz question then we want to display the results below*/


)}/*End of test to decide if to show the quiz or results screen*/
