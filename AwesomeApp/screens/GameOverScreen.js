import { View, Text, StyleSheet, Image } from 'react-native';
import Title from '../components/Title';
import Colors from '../constants/Colors';
import PrimaryButton from '../components/PrimaryButton';
function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {
  return (
    <View style={styles.rootContainer}>
      <Title>GAME OVER !</Title>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require('../assets/success.png')} />
      </View>
      <Text>Your Phone Needed <Text>{roundsNumber}</Text> rounds to guess the number <Text>{userNumber}</Text></Text>
      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  );
}
export default GameOverScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    padding: 24,
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: 'hidden',
    margin: 36,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
