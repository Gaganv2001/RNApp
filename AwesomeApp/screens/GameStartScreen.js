import {Alert, StyleSheet, TextInput, View, Text} from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import {useState} from 'react';
import Colors from '../constants/Colors';
import Title from '../components/Title';
import Card from '../components/Card';
import Icon from 'react-native-vector-icons/FontAwesome';

function GameStartScreen({onPickNumber}) {
  const [enteredNumber, setEnteredNumber] = useState('');

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert('Invalid Number!!', 'Choose number between 1 and 99', [
        {text: 'Okay', style: 'destructive', onPress: resetInputHandler},
      ]);
      return;
    }

    onPickNumber(chosenNumber);
  }

  function resetInputHandler() {
    setEnteredNumber('');
  }

  function numberInputHandler(enteredtext) {
    setEnteredNumber(enteredtext);
  }
  return (
    <View style={styles.rootScreen}>
      <Title>Guess the Number</Title>
      <Card>
      <Text style={styles.enterInstruction}>Enter a number !</Text>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          value={enteredNumber}
          onChangeText={numberInputHandler}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
      {/* <Icon name="rocket" size={30} color="#900" />; */}
    </View>
  );
}

export default GameStartScreen;

const styles = StyleSheet.create({
  rootScreen: {
    flex:1,
    marginTop: 100,
    alignItems:'center',
  },
  enterInstruction:{
    color:Colors.accent500,
    fontSize:24,
  },
  numberInput: {
    height: 55,
    width: 55,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  },
});
