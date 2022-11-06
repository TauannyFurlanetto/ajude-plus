import React from 'react';

import {
  Pressable,
  View,
} from 'react-native';

import styles from '../styles/welcomeScreenStyles';
import { SafeAreaView } from 'react-native-safe-area-context';
import {default as Text} from '../components/UnscalableText';
import { setFirstLaunch } from '../data/LocalStorage';

const addNewContact = (navigation) => {
  console.log("TODO: add a new contact logic")
  navigation.replace("home")

  setFirstLaunch("false")
    .catch((e) => {
      console.log("Failure defining isFirstLaunch with error: ", e)
    })

}

const goToMainScreen = (navigation) => {
  console.log("Going to the Main Screen")
  navigation.replace("home")

  setFirstLaunch("false")
    .catch((e) => {
      console.log("Failure defining isFirstLaunch with error: ", e)
  })
}
const addContactButtonStyle = (pressed) => {
  console.log("setting button style")
  return pressed ? styles.addContactButtonPressed : styles.addContactButton
}

const AddContactButton = ({navigation}) => <Pressable onPress={() => {addNewContact(navigation)}} style={ ({pressed}) => addContactButtonStyle(pressed)}>
      <Text style={styles.addContactText}>Adicionar contato de emergencia</Text>
    </Pressable>

const AddContactLaterButton = ({navigation}) =>  <Pressable onPress={() => {goToMainScreen(navigation)}} style={styles.addLatterButton}>
<Text style={styles.addLaterText}>Adicionar depois</Text>
</Pressable>

const WelcomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
        <View style={styles.welcomeView}>
          <Text style={styles.welcomeText}>
            Fique bem.{"\n"}Busque ajuda de forma 
              <Text style={styles.welcomeTextHighlight}> rapida</Text>, <Text style={styles.welcomeTextHighlight}>simples</Text>, 
              e com <Text style={styles.welcomeTextHighlight}>seguranca</Text>
          </Text>
          <View style={styles.addContactButtonsView}>
            <AddContactButton navigation={navigation}/>
            <AddContactLaterButton navigation={navigation}/>
          </View>
        </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
