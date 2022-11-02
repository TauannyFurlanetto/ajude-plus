import React from 'react';

import {
  Pressable,
  Text,
  View,
} from 'react-native';

import styles from '../styles/welcomeStyles';
import { SafeAreaView } from 'react-native-safe-area-context';

const addNewContact = () => {
  console.log("TODO: add a new contact logic")
}

const goToMainScreen = (navigation) => {
  console.log("Going to the Main Screen")
  navigation.navigate("home")
}

const addContactButtonStyle = (pressed) => {
  console.log("setting button style")
  return pressed ? styles.addContactButtonPressed : styles.addContactButton
}

//TODO: MAYBE add the pressed style to the text

const WelcomeScreen = ({navigation}) => {
  return (
  <SafeAreaView style={{flex: 1}}>
      <View style={styles.welcomeView}>
        <Text style={styles.welcomeText}>
          Fique bem.{"\n"}Busque ajuda de forma 
            <Text style={styles.welcomeTextHighlight}> rapida</Text>, <Text style={styles.welcomeTextHighlight}>simples</Text>, 
            e com <Text style={styles.welcomeTextHighlight}>seguranca</Text>
        </Text>
        <View style={styles.welcomeButtonView}>
          <Pressable onPress={addNewContact} style={ ({pressed}) => addContactButtonStyle(pressed)}>
            <Text style={styles.addContactText}>Adicionar contato de emergencia</Text>
          </Pressable>
          <Pressable onPress={() => {goToMainScreen(navigation)}} style={styles.addLatterButton}>
            <Text style={styles.addLaterText}>Adicionar depois</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
