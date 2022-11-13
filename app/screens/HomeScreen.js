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
import truncateText from '../js/truncateTextService';
import { alertPhoneNotAllowed, askPhonePermission } from '../js/phonePermissionServices';

const emergencyButtonImage = {
  "190": require( "../assets/police_icon.png"),
  "192": require("../assets/ambulance_icon.png"),
  "193": require("../assets/fireman_icon.png")
}

const CallEmergencyButton = ({title, navigation, number, personalContactNumber}) => {
  return <Pressable style={styles.callEmergencyButton} onPress={() => {contactEmergency(number, personalContactNumber, navigation)}}>
    <Image style={styles.callEmergencyImage} source={emergencyButtonImage[number]}/>
    <Text style={styles.callButtonText}>{`${title}`}</Text>
  </Pressable>
}

const CallPersonalContactButton = ({navigation, personalContact, personalContactNumber}) => {
  return personalContact ?
    <Pressable style={styles.callPersonalContact} onPress={() => {contactEmergency(personalContact.number, personalContactNumber, navigation)}}>
      <Image style={styles.callPersonalContactImage} source={require('../assets/phone_icon.png')}/>
      <Text style={styles.personalContactText}>{truncateText(personalContact.name, 9)}</Text>
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
    navigation.addListener(
      'focus',
      () => {
        getPersonalContact()
        .then((contact)=> {
          setPersonalContact(contact)
        })
        .catch((e) => {
          console.log("Failure getting the personal contact: ", e)
        })
      }
    )

    askPhonePermission()
    .then((allowed) => {
      if(!allowed){
        alertPhoneNotAllowed();
      }
    })

  }, [])

  return (
    <SafeAreaView style={{flex: 1}}>
        <View style={styles.homeScreenView}>
          <CallPersonalContactButton navigation={navigation} personalContact={personalContact} personalContactNumber={personalContact?.number}/>
          <CallEmergencyButton title="Policia" number="190" navigation={navigation} personalContactNumber={personalContact?.number}/>
          <CallEmergencyButton title="Ambulancia" number="192" navigation={navigation} personalContactNumber={personalContact?.number}/>
          <CallEmergencyButton title="Bombeiro" number="193" navigation={navigation} personalContactNumber={personalContact?.number}/>
          <ConfigureContactButton navigation={navigation} />
        </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
