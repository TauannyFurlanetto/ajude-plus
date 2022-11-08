import React, { useEffect, useState } from 'react';
import {
  Image,
  Pressable,
  View
} from 'react-native';
import styles from '../styles/homeScreenStyles';
import { SafeAreaView } from 'react-native-safe-area-context';
import ConfigureContactButton from '../components/ConfigureContactButton';
import configurePersonalContact from '../js/configurePersonalContactService';
import {default as Text} from '../components/UnscalableText';
import { getPersonalContact } from '../js/data/localStorageService';
import contactEmergency from '../js/contactEmergencyService';

const emergencyButtonImage = {
  "190": require( "../assets/police_icon.png"),
  "192": require("../assets/ambulance_icon.png"),
  "193": require("../assets/fireman_icon.png")
}

const CallEmergencyButton = ({title, navigation, number}) => {
  return <Pressable style={styles.callEmergencyButton} onPress={() => {contactEmergency(number, navigation)}}>
    <Image style={styles.callEmergencyImage} source={emergencyButtonImage[number]}/>
    <Text style={styles.callButtonText}>{`${title}`}</Text>
  </Pressable>
}

const CallPersonalContactButton = ({navigation, personalContact}) => {
  return personalContact ?
    <Pressable style={styles.callPersonalContact} onPress={() => {contactEmergency(personalContact.number, navigation)}}>
      <Image style={styles.callPersonalContactImage} source={require('../assets/phone_icon.png')}/>
      <Text style={styles.personalContactText}>{personalContact.name}</Text>
    </Pressable>
  :
    <Pressable style={styles.addPersonalContact} onPress={() => {configurePersonalContact(navigation)}}>
      <Image style={styles.addpersonalContactImage} source={require('../assets/add_contact_icon.png')}/>
      <Text style={styles.personalContactText}>Adicionar</Text>
    </Pressable>
}

const HomeScreen  = ({navigation}) => {
  const [personalContact, setPersonalContact] = useState(null)

  useEffect(()=>{
    getPersonalContact()
      .then((contact)=> {
        contact ? setPersonalContact(contact) : null
      })
      .catch((e) => {
        console.log("Failure getting the personal contact: ", e)
      })
  }, [])

  return (
    <SafeAreaView style={{flex: 1}}>
        <View style={styles.homeScreenView}>
          <CallPersonalContactButton navigation={navigation} personalContact={personalContact}/>
          <CallEmergencyButton title="Policia" number="190" navigation={navigation} />
          <CallEmergencyButton title="Ambulancia" number="192" navigation={navigation} />
          <CallEmergencyButton title="Bombeiro" number="193" navigation={navigation} />
          <ConfigureContactButton navigation={navigation} />
        </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
