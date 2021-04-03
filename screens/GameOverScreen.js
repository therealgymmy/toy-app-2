import React from 'react'
import { View, StyleSheet, Button } from 'react-native'
import Card from '../components/Card'
import BodyText from '../components/BodyText'
import TitleText from '../components/TitleText'

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <Card style={styles.gameoverContainer}>
        <TitleText>{'Game is over!'}</TitleText>
        <BodyText>{'Number of rounds: '}{props.roundsNumber}</BodyText>
        <BodyText>{'User number: '}{props.userNumber}</BodyText>
        <Button title={'New Game'} onPress={() => props.onNewGame()} />
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center'
  },
  gameoverContainer: {
    justifyContent: 'space-around',
    marginTop: 20,
    width: 300,
    maxWidth: '80%'
  }
})

export default GameOverScreen
