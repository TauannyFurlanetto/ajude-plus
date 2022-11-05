import React from 'react';
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

// TODO: add the images
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
  console.log("Do I even have a personal contact set?")
  console.log("Sending message to personal contact")
}

const callEmergencyNumber = (number) => {
  console.log(`Calling ${number}`)
}

const CallEmergencyButton = ({title, navigation, number}) => {
  console.log(title)
 
  return <Pressable style={styles.callEmergencyButton} onPress={() => {contactEmergency(number, navigation)}}>
    <Image style={styles.callEmergencyImage} source={emergencyButtonImage[number]}/>
    <Text style={styles.callButtonText}>{`${title}`}</Text>
  </Pressable>
}

const CallPersonalContactButton = ({navigation}) => {
  // TODO: where this number will be passed
  var number = 111

  return number ?
    <Pressable style={styles.callPersonalContact} onPress={() => {contactEmergency(number, navigation)}}>
      <Image style={styles.callPersonalContactImage} source={require('../assets/phone_icon.png')}/>
      <Text style={styles.personalContactText}>Contato</Text>
    </Pressable>
  :
    <Pressable style={styles.addPersonalContact} onPress={() => {configurePersonalContact(navigation)}}>
      <Image style={styles.addpersonalContactImage} source={require('../assets/add_contact_icon.png')}/>
      <Text style={styles.personalContactText}>Adicionar</Text>
    </Pressable>
    
}

const HomeScreen  = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
        <View style={styles.homeScreenView}>
          <CallPersonalContactButton navigation={navigation}/>
          <CallEmergencyButton title="Policia" number="190" navigation={navigation} />
          <CallEmergencyButton title="Ambulancia" number="192" navigation={navigation} />
          <CallEmergencyButton title="Bombeiro" number="193" navigation={navigation} />
          <ConfigureContactButton navigation={navigation} />
        </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
