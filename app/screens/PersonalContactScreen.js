import React from 'react';
import {
  Image,
  Pressable,
  Text,
  View,
} from 'react-native';
import styles from '../styles/personalContactScreenStyles';
import { SafeAreaView } from 'react-native-safe-area-context';

const updateContact = () => {
  console.log("TODO: update the personal contact logic")
}

const removeContact = () => {
  console.log("TODO: add remove contact logic")
}

const PersonalContactScreen  = () => {

  return (
    <SafeAreaView style={{flex:1}}>
        <View style={styles.personalContactView}>
          <View style={styles.contactCardView}>
            <View style={styles.contactCardTextView}>
              <Text style={styles.contactCardText}>Nome: <Text style={styles.contactCardTextHighlight}>Contato</Text></Text>
              <Text style={styles.contactCardText}>Numero: <Text style={styles.contactCardTextHighlight}>55 11 111</Text></Text>
            </View>
            <Pressable style={styles.removeContactButton} onPress={removeContact}>
              <Image style={styles.removeContactImage} source={require('../assets/delete_icon.png')}/>
            </Pressable>
          </View>
          <Pressable style={styles.updateContactButton} onPress={updateContact}>
            <Text style={styles.updateContactText}>
              Alterar contato
            </Text>
          </Pressable>
        </View>
    </SafeAreaView>
  );
};

export default PersonalContactScreen;
