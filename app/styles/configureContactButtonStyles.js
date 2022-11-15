import { StyleSheet } from 'react-native';
import colors from './colors';

export default StyleSheet.create({
    configureContactButton: {
        alignSelf: 'flex-end',
        backgroundColor: colors.light,
        padding: 15,
        borderColor: colors.light,
        borderWidth: 1,
        borderRadius: 100,
    },
    configureImage: {
        width: 33,
        height: 33
    }
});
