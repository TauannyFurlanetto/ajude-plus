import { StyleSheet } from 'react-native';
import colors from './colors';
import { defaultMargin } from './styles'

export default StyleSheet.create({
    welcomeView: {
      flex: 1,
      justifyContent: 'space-between',
      alignItems: 'center',
      marginVertical: 90,
      marginHorizontal: defaultMargin
    },
    welcomeText: {
      color: colors.light,
      fontSize: 45,
      alignSelf: 'flex-start',
      fontWeight: 'bold',
      flex: 2
    },
    welcomeButtonView: {
      flex: 1,
      margin: 0,
      padding: 0,
      justifyContent: 'space-around',
      gap: 10,
    },
    addContactButton: {
      padding: 20,
      borderColor: colors.yellow,
      borderWidth: 5,
      borderRadius: 30,
      backgroundColor: colors.dark,
      alignItems: 'center'
    },
    addContactButtonPressed: {
      padding: 20,
      borderColor: colors.yellow,
      borderWidth: 5,
      borderRadius: 30,
      backgroundColor: colors.yellow,
      alignItems: 'center'
    },
    addContactText: {
      position: 'relative',
      top:0,
      left:0,
      color: colors.light,
      fontWeight: 'bold',
      fontSize: 18
    },
    addLatterButton: {
      padding: 20,
      backgroundColor: colors.dark,
      alignItems: 'center'
    },
    addLaterText: {
      position: 'relative',
      top:0,
      left:0,
      color: colors.light,
      fontWeight: 'bold',
      fontSize: 18,
      textDecorationLine: 'underline'
    },
    welcomeTextHighlight : {
      color: colors.yellow,
      fontWeight: 'bold'
    }
});