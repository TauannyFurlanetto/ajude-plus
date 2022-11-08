import React from 'react';
import {
  Image,
  Pressable
} from 'react-native';

import styles from "../styles/configureContactButtonStyles"
import configurePersonalContact from "../js/configurePersonalContactService"

const ConfigureContactButton = ({navigation}) => {
    return <Pressable style={styles.configureContactButton} onPress={() => {configurePersonalContact(navigation)}}>
      <Image style={styles.configureImage} source={require('../assets/configurations_icon.png')}/>
    </Pressable>
}

export default ConfigureContactButton