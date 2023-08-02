import { View, Text, StyleSheet, Alert, FlatList } from 'react-native';
import Title from '../components/Title';
import { useEffect, useState } from 'react';
import NumberContainer from '../components/NumberContainer';
import PrimaryButton from '../components/PrimaryButton';
import Card from '../components/Card';
import Colors from '../constants/Colors';

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber, onGameOver }) {
  initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([guessRounds]);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessRounds.length);
    }
  }, [currentGuess, userNumber, onGameOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  function nextGuesshandler(direction) {
    if (
      (direction === 'lower' && currentGuess < userNumber) ||
      (direction === 'greater' && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!!", 'You know this is wrong...', [
        { text: 'Try Again', style: 'destructive' },
      ]);
      return;
    }

    if (direction === 'lower') {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRndNum = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess,
    );
    setCurentGuess(newRndNum);
    setGuessRounds(prevGuessRounds => [newRndNum, ...prevGuessRounds])

  }

  return (
    <View style={styles.screen}>
      <Title>OPPONENT'S GUESS</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <Text style={styles.instructionText}>Higher or Lower?</Text>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuesshandler.bind(this, 'lower')}>
              -
            </PrimaryButton>
          </View>

          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuesshandler.bind(this, 'greater')}>
              +
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View>
        {/* {guessRounds.map(guessRound => <Text key={guessRound}>{guessRound}</Text>)} */}
        <FlatList data={guessRounds} renderItem={(itemData)=><Text>{itemData.item}</Text>}
        keyExtractor={(item)=>item}/>
      </View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  instructionText: {
    color: Colors.accent500,
    fontSize: 24,
    marginBottom: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  },
});
