import React, {useEffect, useState} from 'react';
import { Image, Pressable, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from '../styles/personalContactScreenStyles';
import {default as Text} from '../components/UnscalableText';
import { getPersonalContact } from '../js/data/localStorageService';
import removeContact from '../js/services/removeContactService';
import updateContact from '../js/services/updateContactService'
import truncateText from '../js/services/truncateTextService';

const UpdateContactButton = ({setState}) => <Pressable style={styles.updateContactButton} onPress={() => {updateContact({setState})}}>
  <Text style={styles.updateContactText}>
    Alterar contato
  </Text>
</Pressable>

const RemoveContactButton = ({setPersonalContact}) =>  <Pressable style={styles.removeContactButton} onPress={() => {removeContact(setPersonalContact)}}>
<Image style={styles.removeContactImage} source={require('../assets/delete_icon.png')}/>
</Pressable>

const ContactCardText = ({personalContact}) => {
  return(
  <View style={styles.contactCardTextView}>
    <Text style={styles.contactCardText}>Nome: 
      <Text style={styles.contactCardTextHighlight}>{truncateText(personalContact.name, 13)}</Text>
    </Text>
    <Text style={styles.contactCardText}>Numero: 
      <Text style={styles.contactCardTextHighlight}>{truncateText(personalContact.number, 13)}</Text>
    </Text>
  </View>
  )
}

const PersonalContactScreen  = () => {
  const [personalContact, setPersonalContact] = useState({
    "name": '...',
    "number": '...'
  })

  useEffect(()=>{
    getPersonalContact()
      .then((contact)=> {
        if (contact){
          setPersonalContact(contact)
        }
      })
      .catch((e) => {
        console.log("Failure getting the personal contact: ", e)
      })
  }, [])

  return (
    <SafeAreaView style={{flex:1}}>
        <View style={styles.personalContactView}>
          <View style={styles.contactCardView}>
            <ContactCardText personalContact={personalContact}/>
            <RemoveContactButton setPersonalContact={setPersonalContact}/>
          </View>
          <UpdateContactButton setState={setPersonalContact}/>
        </View>
    </SafeAreaView>
  );
};

export default PersonalContactScreen;
