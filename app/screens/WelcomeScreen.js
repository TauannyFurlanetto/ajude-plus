import React from 'react';

import {
  Alert,
  PermissionsAndroid,
  Pressable,
  View,
  BackHandler
} from 'react-native';

import styles from '../styles/welcomeScreenStyles';
import { SafeAreaView } from 'react-native-safe-area-context';
import {default as Text} from '../components/UnscalableText';
import { setFirstLaunch, setPersonalContact } from '../data/LocalStorage';
import { selectContactPhone } from 'react-native-select-contact';

async function selectContact () {
  console.log("lets select the contact my dudes")

  const selection = await selectContactPhone();

  if (!selection) {
    return null;
  }
          
  let { contact, selectedPhone } = selection;
  return {
    "name": contact.name,
    "number": selectedPhone.number
  }
}

const goToMainScreen = (navigation) => {
  try{
    navigation.replace("home")
  
    setFirstLaunch("false")
      .catch((e) => {
        console.log("Failure defining isFirstLaunch with error: ", e)
    })
  }
  catch(e){
    console.log("Error in navigate to mainScreen: ", e)
    Alert.alert(
      "Erro ao ir ate a tela inicial do aplicativo",
      "Nao foi possivel ir ate o menu inicial",
      [
        {
          "text": "Sair",
          onPress: () => BackHandler.exitApp()
        }
      ]
    )
  }
}

const addNewContact = async (navigation)  => {
  try{
    console.log("add new contact")
    const permission = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
    )

    if (permission === PermissionsAndroid.RESULTS.GRANTED) {
        const contact = await selectContact();
        await setPersonalContact(contact)
    
        goToMainScreen(navigation)
    }
    else{
      goToMainScreen(navigation)
    }
  }
  catch (e) {
    console.log("Error in addContact: ", e)
    Alert.alert(
      "Erro ao adicionar o contato",
      "Nao foi possivel adicionar o seu contato",
      [
        {
          "text": "Continuar",
          onPress: () => goToMainScreen(navigation)
        },
        {
          "text": "Sair",
          onPress: () => BackHandler.exitApp()
        }
      ]
    )
  }

}
const addContactButtonStyle = (pressed) => {
  // console.log("setting button style")
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
            <AddContactButton navigation={navigation} />
            <AddContactLaterButton navigation={navigation}/>
          </View>
        </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
