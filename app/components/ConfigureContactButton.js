import React from 'react';
import {
  Image,
  Pressable
} from 'react-native';

import styles from "../styles/configureContactButtonStyles"
import configurePersonalContact from "../utils/configurePersonalContact"

const ConfigureContactButton = ({navigation}) => {
    return <Pressable style={styles.configureContactButton} onPress={() => {configurePersonalContact(navigation)}}>
      <Image style={styles.configureImage}/>
    </Pressable>
}

export default ConfigureContactButton