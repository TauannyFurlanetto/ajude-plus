import { StyleSheet } from 'react-native';
import colors from './colors';
import {
    defaultMargin,
    largeTextSize,
    mediumTextSize,
    optionalHorizontalMargin
} from './sizes';

export default StyleSheet.create({
    welcomeView: {
      flex: 1,
      justifyContent: 'space-between',
      alignItems: 'center',
      marginVertical: defaultMargin + 30,
      marginHorizontal: optionalHorizontalMargin
    },
    welcomeText: {
      color: colors.light,
      fontSize: largeTextSize + 15,
      alignSelf: 'flex-start',
      fontWeight: 'bold',
      flex: 2
    },
    welcomeTextHighlight : {
      color: colors.yellow,
      fontWeight: 'bold'
    },
    addContactButtonsView: {
      flex: 1,
      margin: 0,
      padding: 0,
      justifyContent: 'space-around',
      gap: 10,
    },
    addContactButton: {
      padding: defaultMargin === 20 ? defaultMargin : 15,
      borderColor: colors.yellow,
      borderWidth: 5,
      borderRadius: 30,
      backgroundColor: colors.dark,
      alignItems: 'center'
    },
    addContactButtonPressed: {
      padding: defaultMargin === 20 ? defaultMargin : 15,
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
      fontSize: mediumTextSize,
      textAlign: 'center'
    },
    addLatterButton: {
      padding: defaultMargin === 20 ? defaultMargin : 1,
      backgroundColor: colors.dark,
      alignItems: 'center'
    },
    addLaterText: {
      position: 'relative',
      top:0,
      left:0,
      color: colors.light,
      fontWeight: 'bold',
      fontSize: mediumTextSize,
      textDecorationLine: 'underline',
      textAlign: 'center'
    }
});