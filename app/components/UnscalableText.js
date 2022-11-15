import { Text } from 'react-native';

//the text size is already large, scalling further breaks the layout
const UnscalableText = (props) => {
    return(
        <Text {...props} allowFontScaling={false}/>
    )
}

export default UnscalableText