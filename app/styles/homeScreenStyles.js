import {StyleSheet} from 'react-native';
import colors from './colors';
import {defaultMargin, largeTextSize} from './styles';

export default StyleSheet.create({
  homeScreenView: {
    margin: defaultMargin,
    flex: 1,
    justifyContent: 'space-between',
    alignContent: 'center',
  },
  callEmergencyButton: {
    padding: 10,
    borderColor: colors.yellow,
    borderWidth: 5,
    borderRadius: 30,
    backgroundColor: colors.yellow,
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
  },
  callPersonalContact: {
    paddingHorizontal: 40,
    paddingVertical: 13,
    borderColor: colors.yellow,
    borderWidth: 5,
    borderRadius: 100,
    backgroundColor: colors.blac,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  addPersonalContact: {
    paddingHorizontal: 30,
    paddingVertical: 13,
    borderColor: colors.yellow,
    borderWidth: 5,
    borderRadius: 100,
    borderStyle: 'dotted',
    backgroundColor: colors.black,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  personalContactText: {
    position: 'relative',
    top: 0,
    left: 0,
    color: colors.light,
    fontSize: largeTextSize + 5,
    fontWeight: 'bold',
    textTransform: 'uppercase'
  },
  callButtonText: {
    position: 'relative',
    top: 0,
    left: 0,
    color: colors.dark,
    fontSize: largeTextSize,
    fontWeight: 'bold',
    textTransform: 'uppercase'
  },
  callEmergencyImage: {
    width: 95,
    height: 95,
    marginBottom: 10,
    resizeMode:'contain'
  },
  callPersonalContactImage: {
    width: 40,
    height: 40,
    marginRight: 20
  },
  addpersonalContactImage: {
    width: 48,
    height: 48,
    marginRight: 12
  }
});
