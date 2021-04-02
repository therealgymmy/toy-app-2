import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import Card from '../components/Card'

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <Card style={styles.gameoverContainer}>
        <Text>{'Game is over!'}</Text>
        <Text>{'Number of rounds: '}{props.roundsNumber}</Text>
        <Text>{'User number: '}{props.userNumber}</Text>
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
