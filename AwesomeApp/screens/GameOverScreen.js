import {View, Text, StyleSheet, Image} from 'react-native';
import Title from '../components/Title';
import Colors from '../constants/Colors';
function GameOverScreen() {
  return (
    <View style={styles.rootContainer}>
    <Title>GAME OVER !</Title>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require('../assets/success.png')}/>
      </View>
    </View>
  );
}
export default GameOverScreen;

const styles=StyleSheet.create({
    rootContainer:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        flex:1,
        padding:24,
    },
    imageContainer:{
        width:300,
        height:300,
        borderRadius:150,
        borderWidth:3,
        borderColor:Colors.primary800,
        overflow:'hidden',
        margin:36,
    },
    image:{
        width:'100%',
        height:'100%',
    },
});