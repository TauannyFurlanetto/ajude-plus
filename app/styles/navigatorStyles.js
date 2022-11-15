import { StyleSheet } from 'react-native';
import colors from './colors';
import { mediumTextSize } from './styles';

export default StyleSheet.create({
    personalContactHeader: {
        color: colors.dark,
        fontSize: mediumTextSize,
        fontWeight: 'bold'
    },
    messageSentHeader: {
      color: colors.dark,
      fontSize: mediumTextSize,
      fontWeight: 'bold',
      textTransform: 'uppercase'
    }

});
