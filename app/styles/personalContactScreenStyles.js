import { StyleSheet } from 'react-native';
import colors from './colors';
import {
    defaultMargin,
    mediumTextSize,
    optionalHorizontalMargin
} from './sizes';

export default StyleSheet.create({
    personalContactView: {
        flex:1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginHorizontal: optionalHorizontalMargin,
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
        marginBottom: 10,
        textOverflow: 'ellipsis',
        overflow:'hidden'
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
        width: mediumTextSize > 18 ? 45 : 35,
        height: mediumTextSize > 18 ? 45 : 35
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
