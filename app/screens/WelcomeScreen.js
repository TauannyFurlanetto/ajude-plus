import React, { useEffect } from 'react';

import {
  Pressable,
  View
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from '../styles/welcomeScreenStyles';
import {default as Text} from '../components/UnscalableText';
import goToMainScreen from '../js/goToMainScreenService';
import updateContact from '../js/updateContactService';
import {alertAndCleanState, askPhonePermission} from '../js/welcomeServices'

const addContactButtonStyle = (pressed) => {
  // console.log("setting button style")
  return pressed ? styles.addContactButtonPressed : styles.addContactButton
}

const AddContactButton = ({navigation}) => <Pressable onPress={() => {updateContact(navigation)}} style={ ({pressed}) => addContactButtonStyle(pressed)}>
      <Text style={styles.addContactText}>Adicionar contato de emergencia</Text>
    </Pressable>

const AddContactLaterButton = ({navigation}) =>  <Pressable onPress={() => {goToMainScreen(navigation)}} style={styles.addLatterButton}>
<Text style={styles.addLaterText}>Adicionar depois</Text>
</Pressable>

const WelcomeScreen = ({navigation}) => {
  useEffect(() => {
    askPhonePermission()
      .then((allowed) => {
        if(!allowed){
          alertAndCleanState()
        }
      })
  }, [])

  return (
    <SafeAreaView style={{flex: 1}}>
        <View style={styles.welcomeView}>
          <Text style={styles.welcomeText}>
            Fique bem.{"\n"}Busque ajuda de forma 
              <Text style={styles.welcomeTextHighlight}> rapida</Text>, <Text style={styles.welcomeTextHighlight}>simples</Text>, 
              e com <Text style={styles.welcomeTextHighlight}>seguranca</Text>
          </Text>
          <View style={styles.addContactButtonsView}>
            <AddContactButton navigation={navigation} />
            <AddContactLaterButton navigation={navigation}/>
          </View>
        </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
