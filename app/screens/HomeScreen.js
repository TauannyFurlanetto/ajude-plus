import React from 'react';
import {
  Image,
  Text,
  Pressable,
  View,
} from 'react-native';
import styles from '../styles/homeScreenStyles';
import { SafeAreaView } from 'react-native-safe-area-context';
import ConfigureContactButton from '../components/ConfigureContactButton';
import configurePersonalContact from '../utils/configurePersonalContact';

// TODO: add the images
// TODO: MAYBE refactor the components to other files

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
    <Image style={styles.callButtonImage}/>
    <Text style={styles.callButtonText}>{`${title}`}</Text>
  </Pressable>
}

const CallPersonalContactButton = ({navigation}) => {
  var number = 111

  return number ?
    <Pressable style={styles.callPersonalContact} onPress={() => {contactEmergency(number, navigation)}}>
      <Image style={styles.personalContactButton}/>
      <Text style={styles.personalContactText}>Contato</Text>
    </Pressable>
  :
    <Pressable style={styles.addPersonalContact} onPress={() => {configurePersonalContact(navigation)}}>
      <Image style={styles.personalContactButton}/>
      <Text style={styles.personalContactText}>Adicionar</Text>
    </Pressable>
    
}

const HomeScreen  = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
        <View style={styles.homeScreenView}>
          <CallPersonalContactButton navigation={navigation}/>
          <CallEmergencyButton title="Emergencia" number="190" navigation={navigation} />
          <CallEmergencyButton title="Policia" number="191" navigation={navigation} />
          <CallEmergencyButton title="Bombeiros" number="192" navigation={navigation} />
          <ConfigureContactButton navigation={navigation} />
        </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
