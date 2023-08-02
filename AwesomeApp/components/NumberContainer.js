import {StyleSheet, Text, View} from 'react-native';
import Colors from '../constants/Colors' ;
function NumberContainer({children}) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}
export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: Colors.accent500,
    borderRadius: 8,
    padding: 24,
    margin: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberText:{
    fontSize:32,
    fontWeight:'bold',
    color:Colors.accent500,
  }
});
