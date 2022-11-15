import { StyleSheet } from 'react-native';
import colors from './colors';
import { defaultMargin, mediumTextSize, largeTextSize } from './styles';

export default StyleSheet.create({
    messageSentView: {
        flex:1,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: defaultMargin,
        marginVertical: defaultMargin + 10
    },
    messageSentMessageView: {
        width: '100%'
    },
    messageCardView: {
        width: '100%',
        marginBottom: defaultMargin * 8
    },
    messageCardHeroView: {
        backgroundColor: colors.light,
        padding: 30,
        borderColor: colors.light,
        borderRadius: 20,
        borderWidth: 1,
        marginBottom: 30,
    },
    messageCardHeroText: {
        fontSize: largeTextSize + 15,
        color: colors.dark,
        textTransform: 'uppercase',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    messageText: {
        fontSize: mediumTextSize + 5,
        color: colors.light,
        textAlign: 'center',
        textTransform: 'uppercase',
        textAlign: 'center'
    }
});
