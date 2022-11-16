import { StyleSheet } from 'react-native';
import colors from './colors';
import {
    defaultMargin,
    largeTextSize,
    mediumTextSize,
    optionalHorizontalMargin
} from './sizes';

export default StyleSheet.create({
  homeScreenView: {
    marginVertical: defaultMargin,
    marginHorizontal: optionalHorizontalMargin,
    flex: 1,
    justifyContent: 'space-between',
    alignContent: 'center',
  },
  callEmergencyButton: {
    padding: defaultMargin - defaultMargin / 2,
    borderColor: colors.yellow,
    borderWidth: 2,
    borderRadius: 30,
    backgroundColor: colors.yellow,
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
  },
  callPersonalContact: {
    padding: defaultMargin > 3 ? defaultMargin - defaultMargin / 2 : 5,
    borderColor: colors.yellow,
    borderWidth: 5,
    borderRadius: 100,
    backgroundColor: colors.black,
    alignItems: 'center',
    flexDirection: 'row',
    textOverflow: 'ellipsis',
    overflow: 'hidden'
  },
  addPersonalContact: {
    padding: defaultMargin > 3 ? defaultMargin - defaultMargin / 2 : 5,
    borderColor: colors.yellow,
    borderWidth: 5,
    borderRadius: 100,
    borderStyle: 'dotted',
    backgroundColor: colors.black,
    alignItems: 'center',
    flexDirection: 'row',
  },
  personalContactText: {
    position: 'relative',
    top: 0,
    left: 0,
    color: colors.light,
    fontSize: largeTextSize + 5,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginRight: 'auto',
    overflow: 'hidden'
  },
  callEmergencyButtonText: {
    position: 'relative',
    top: 0,
    left: 0,
    color: colors.dark,
    fontSize: largeTextSize,
    fontWeight: 'bold',
    textTransform: 'uppercase'
  },
  callEmergencyImage: {
    width: mediumTextSize + 50,
    height: mediumTextSize + 50,
    marginBottom: 10,
    resizeMode:'contain'
  },
  callPersonalContactImage: {
    width: mediumTextSize > 18 ? mediumTextSize + 17 : mediumTextSize + 5,
    height: mediumTextSize > 18 ? mediumTextSize + 17 : mediumTextSize + 5,
    marginRight: 35,
    marginLeft: 20
  },
  addPersonalContactImage: {
    width: mediumTextSize + 15,
    height: mediumTextSize + 15,
    marginRight: 25,
    marginLeft: 20
  }
});
