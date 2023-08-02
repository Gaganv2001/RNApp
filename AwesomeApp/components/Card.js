import { Children } from 'react';
import { StyleSheet, View } from 'react-native';
import Colors from '../constants/Colors';

function Card({ children }) {
    return <View style={styles.card}>{children}</View>
}
export default Card;

const styles = StyleSheet.create({
    card: {
        alignItems: 'center',
        marginTop: 100,
        padding: 16,
        backgroundColor: Colors.primary800,
        marginHorizontal: 24,
        borderRadius: 8,
        elevation: 10,
        shadowColor: 'black',
        shadowOffset: { width: 9, height: 6 },
        shadowOpacity: '6',
        shadowRadius: 10,
    },
});