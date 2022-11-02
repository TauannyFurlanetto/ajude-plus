import React from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';

const configurePersonalContact = (navigation) => {
  console.log("Ir para a tela de configuracao de contato")
  navigation.navigate("personalContact")
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
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
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

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default HomeScreen;
