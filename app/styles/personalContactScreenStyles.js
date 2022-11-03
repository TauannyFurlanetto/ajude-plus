import {StyleSheet} from 'react-native';
import colors from './colors';
import {defaultMargin, mediumTextSize} from './styles';

export default StyleSheet.create({
    personalContactView: {
        flex:1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginHorizontal: defaultMargin,
        marginVertical: defaultMargin + 10
    },
    contactCardView: {
        width: '100%',
        marginBottom: defaultMargin * 8
    },
    contactCardTextView: {
        backgroundColor: colors.light,
        padding: 30,
        borderColor: colors.light,
        borderRadius: 20,
        borderWidth: 1,
        marginBottom: 10
    },
    contactCardText: {
        fontSize: mediumTextSize,
        color: colors.dark,
        lineHeight: 35
    },
    contactCardTextHighlight: {
        fontSize: mediumTextSize,
        color: colors.dark,
        fontWeight: 'bold'
    },
    removeContactButton: {
        alignSelf: 'flex-end'
    },
    removeContactImage: {
        width: 45,
        height: 45
    },
    updateContactButton: {
        backgroundColor: colors.yellow,
        padding: 15,
        borderColor: colors.yellow,
        borderRadius: 100,
        borderWidth: 1,
        width: '100%'
    },
    updateContactText: {
        fontSize: mediumTextSize,
        color: colors.dark,
        fontWeight: 'bold',
        textAlign: 'center'
    }
});
