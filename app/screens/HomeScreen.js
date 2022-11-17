import React, { useEffect, useState } from 'react';
import { Image,  Pressable, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from '../styles/homeScreenStyles';
import ConfigureContactButton from '../components/ConfigureContactButton';
import { default as Text } from '../components/UnscalableText';
import { getPersonalContact } from '../js/data/localStorageService';
import goToPersonalContactScreen from '../js/services/goToPersonalContactScreenService';
import { contactEmergency, contactPersonalContact } from '../js/services/contactEmergencyService';
import truncateText from '../js/services/truncateTextService';
import { alertPhoneNotAllowed, canAccessPhone } from '../js/services/phonePermissionServices';

const EMERGENCY_BUTTON_IMAGE = {
  "190": require( "../assets/police_icon.png"),
  "192": require("../assets/ambulance_icon.png"),
  "193": require("../assets/fireman_icon.png")
}

const CallEmergencyButton = ({title, navigation, number, personalContactNumber}) => {
  return <Pressable style={styles.callEmergencyButton} onPress={() => {contactEmergency(number, personalContactNumber, navigation)}}>
    <Image style={styles.callEmergencyImage} source={EMERGENCY_BUTTON_IMAGE[number]}/>
    <Text style={styles.callEmergencyButtonText}>{`${title}`}</Text>
  </Pressable>
}

const CallPersonalContactButton = ({navigation, personalContact}) => {
  return personalContact ?
    <Pressable style={styles.callPersonalContact} onPress={
      () => {
        contactPersonalContact(
          personalContact.number,
          navigation
        )
      }
    }>
      <Image style={styles.callPersonalContactImage} source={require('../assets/phone_icon.png')}/>
      <Text style={styles.personalContactText}>{truncateText(personalContact.name, 8)}</Text>
    </Pressable>
  :
    <Pressable style={styles.addPersonalContact} onPress={() => {goToPersonalContactScreen(navigation)}}>
      <Image style={styles.addPersonalContactImage} source={require('../assets/add_contact_icon.png')}/>
      <Text style={styles.personalContactText}>Adicionar</Text>
    </Pressable>
}

const HomeScreen  = ({navigation}) => {
  const [personalContact, setPersonalContact] = useState(null)

  useEffect(()=>{
    navigation.addListener(
      'focus', // this updates the state every time the page is navigated to
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

    canAccessPhone()
    .then((allowed) => {
      if(!allowed){
        alertPhoneNotAllowed();
      }
    })

  }, [])

  return (
    <SafeAreaView style={{flex: 1}}>
        <View style={styles.homeScreenView}>
          <CallPersonalContactButton navigation={navigation} personalContact={personalContact}/>
          <CallEmergencyButton 
            title="Polícia"
            number="190"
            navigation={navigation}
            personalContactNumber={personalContact?.number}
          />
          <CallEmergencyButton
            title="Ambulância"
            number="192"
            navigation={navigation}
            personalContactNumber={personalContact?.number}
          />
          <CallEmergencyButton
            title="Bombeiro"
            number="193"
            navigation={navigation}
            personalContactNumber={personalContact?.number}
          />
          <ConfigureContactButton navigation={navigation} />
        </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
