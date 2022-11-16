import { StyleSheet } from 'react-native';

import colors from './colors';
import { largeTextSize } from './sizes';

export default StyleSheet.create({
    configureContactButton: {
        alignSelf: 'flex-end',
        backgroundColor: colors.light,
        padding: largeTextSize > 20 ? 15 : 10,
        borderColor: colors.light,
        borderWidth: 1,
        borderRadius: 100,
    },
    configureImage: {
        width: largeTextSize > 20 ? largeTextSize : 25,
        height: largeTextSize > 20 ? largeTextSize : 25
    }
});
