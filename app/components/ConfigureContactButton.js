import React from 'react';
import { Image, Pressable } from 'react-native';

import styles from "../styles/configureContactButtonStyles"
import goToPersonalContactScreen from "../js/services/goToPersonalContactScreenService"

const ConfigureContactButton = ({navigation, replace}) => {
    return <Pressable style={styles.configureContactButton} onPress={() => {goToPersonalContactScreen(navigation, replace)}}>
      <Image style={styles.configureImage} source={require('../assets/configurations_icon.png')}/>
    </Pressable>
}

export default ConfigureContactButton