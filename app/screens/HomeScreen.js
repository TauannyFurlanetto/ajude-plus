import React, { useEffect, useState } from 'react';
import {
  Image,
  Pressable,
  View
} from 'react-native';
import styles from '../styles/homeScreenStyles';
import { SafeAreaView } from 'react-native-safe-area-context';
import ConfigureContactButton from '../components/ConfigureContactButton';
import configurePersonalContact from '../js/configurePersonalContact';
import {default as Text} from '../components/UnscalableText';
import { getPersonalContact } from '../data/LocalStorage';

const DEBUG_CALLS=true;
const DEFAULT_NUMBER=100;

// TODO: MAYBE refactor the components to other files

const emergencyButtonImage = {
  "190": require( "../assets/police_icon.png"),
  "192": require("../assets/ambulance_icon.png"),
  "193": require("../assets/fireman_icon.png")
}

const contactEmergency = (number, navigation) => {
  console.log(`Contacting emergency ${number}`)
  callEmergencyNumber(number)
  sendMessageToPersonalContact()
  navigation.navigate("messageSent")

}

const sendMessageToPersonalContact = () => {
  var number = 100 //this will be the contacts number
  
  if (DEBUG_CALLS){
    number = DEFAULT_NUMBER
  }

  console.log("Do I even have a personal contact set?")
  console.log("Sending message to personal contact")
}

const callEmergencyNumber = (number) => {
  if (DEBUG_CALLS){
    number = DEFAULT_NUMBER
  }
  console.log(`Calling ${number}`)
}

const CallEmergencyButton = ({title, navigation, number}) => {
  console.log(title)
 
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

// TODO: adicionar os alertas na classe de local storage?
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
