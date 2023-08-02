import {Pressable, StyleSheet, Text, View} from 'react-native';
import Colors from '../constants/Colors';

function PrimaryButton({children, onPress}) {
 
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={styles.buttonInnerContainer}
        android_ripple={{color: 'black'}}
        onPress={onPress}>
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden',
  },

  buttonInnerContainer: {
    backgroundColor: Colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 5,
  },

  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});
