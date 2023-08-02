import React from 'react';
import { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import GameStartScreen from './screens/GameStartScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

function App(): JSX.Element {
  const [userNumber, setUserNumber] = useState(0);
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);

  function pickedNumberHandler(pickedNumber: React.SetStateAction<number>) {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }
  let screen = <GameStartScreen onPickNumber={pickedNumberHandler} />;

  function gameOverHandler(numberOfRounds: any) {
    setGameIsOver(true);
    setGuessRounds(numberOfRounds);
  }

  function startNewGameHandler() {
    setUserNumber(0);
    setGuessRounds(0);

  }

  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    );
  }

  if (gameIsOver && userNumber) {
    screen = <GameOverScreen userNumber={userNumber} roundsNumber={guessRounds} onStartNewGame={startNewGameHandler} />;
  }

  return (
    <LinearGradient colors={['#4e0329', '#dbb25f']} style={styles.rootScreen}>
      <ImageBackground
        source={require('./assets/background.png')}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.imageBackground}>
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

export default App;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  imageBackground: {
    opacity: 0.15,
  },
});
