import { Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');
const smallHeight = 690;
const extraSmallHeight = 540;
const smallWidth = 420;

const defaultMargin = height < extraSmallHeight ? 3 : height < smallHeight ? 17 : 20;
const mediumTextSize = height < extraSmallHeight ? 18 : height < smallHeight ? 23 : 25;
const largeTextSize = height < extraSmallHeight ? 20 : height < smallHeight ? 28 : 30;
const optionalHorizontalMargin = width < smallWidth ? 25 : defaultMargin;

export { defaultMargin, mediumTextSize, largeTextSize, optionalHorizontalMargin }