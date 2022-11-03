import {StyleSheet} from 'react-native';
import colors from './colors';
import {defaultMargin} from './styles';

export default StyleSheet.create({
    personalContactView: {
        flex:1,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: defaultMargin,
        marginVertical: defaultMargin + 10,
        backgroundColor: 'red'
    },
    contactCardView: {
        backgroundColor: colors.light,
        padding: 30,
        borderColor: colors.light,
        borderRadius: 20,
        borderWidth: 1
    },
    contactCardText: {
        fontSize: 20,
        color: colors.dark
    },
    contactCardTextHighlight: {
        fontSize: 20,
        color: colors.dark,
        fontWeight: 'bold'
    },
    removeContactButton: {
        alignSelf: 'flex-end'
    },
    removeContactImage: {
        width: 30,
        height: 30,
        backgroundColor: colors.yellow,
    },
    updateContactButton: {
        backgroundColor: colors.yellow,
        padding: 15,
        borderColor: colors.yellow,
        borderRadius: 20,
        borderWidth: 1
    },
    updateContactText: {
        fontSize: 20,
        color: colors.dark,
        fontWeight: 'bold'
    }
});
