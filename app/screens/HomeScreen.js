import React from 'react';
import {
  Button,
  ScrollView,
  View,
} from 'react-native';
import styles from '../styles/styles';
import { SafeAreaView } from 'react-native-safe-area-context';

const configurePersonalContact = (navigation) => {
  console.log("Ir para a tela de configuracao de contato")
  navigation.navigate("personalContact")
  // TODO: quando a outra tela for chamada, imediatamente checar se ter permissao, se nao pedir,
  // se sim continuar
  // se negado, voltar pra essa tela
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

const HomeScreen  = ({navigation}) => {
  return (
    <SafeAreaView >
      <ScrollView>
        <View>
          <Button title="Call emergency number" onPress={() => {contactEmergency(190, navigation)}}/>
          <Button title="Call emergency number" onPress={() => {contactEmergency(190, navigation)}}/>
          <Button title="Call emergency number" onPress={() => {contactEmergency(190, navigation)}}/>
          <Button title="Call personal contact" onPress={() => {contactEmergency(190, navigation)}}/>
          <Button title="Configurar o contato pessoal" onPress={() => {configurePersonalContact(navigation)}}/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
