import React from 'react';
import {
  Image,
  Pressable,
  View,
} from 'react-native';
import styles from '../styles/personalContactScreenStyles';
import { SafeAreaView } from 'react-native-safe-area-context';
import {default as Text} from '../components/UnscalableText';

const updateContact = () => {
  console.log("TODO: update the personal contact logic")
}

const removeContact = () => {
  console.log("TODO: add remove contact logic")
}

const UpdateContactButton = () => <Pressable style={styles.updateContactButton} onPress={updateContact}>
  <Text style={styles.updateContactText}>
    Alterar contato
  </Text>
</Pressable>

const RemoveContactButton = () =>  <Pressable style={styles.removeContactButton} onPress={removeContact}>
<Image style={styles.removeContactImage} source={require('../assets/delete_icon.png')}/>
</Pressable>

const ContactCardText = () => <View style={styles.contactCardTextView}>
<Text style={styles.contactCardText}>Nome: <Text style={styles.contactCardTextHighlight}>Contato</Text></Text>
<Text style={styles.contactCardText}>Numero: <Text style={styles.contactCardTextHighlight}>55 11 111</Text></Text>
</View>

const PersonalContactScreen  = () => {

  return (
    <SafeAreaView style={{flex:1}}>
        <View style={styles.personalContactView}>
          <View style={styles.contactCardView}>
            <ContactCardText />
            <RemoveContactButton />
          </View>
          <UpdateContactButton />
        </View>
    </SafeAreaView>
  );
};

export default PersonalContactScreen;
