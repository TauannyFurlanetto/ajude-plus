import React, { useEffect } from 'react';

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
    const contacts_permission = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
    )

    if (contacts_permission === PermissionsAndroid.RESULTS.GRANTED) {
        const contact = await selectContact();
        await setPersonalContact(contact)

        const sms_permission = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.SEND_SMS,
        )

          if (sms_permission !== PermissionsAndroid.RESULTS.GRANTED){
              Alert.alert(
                "Proibido de mandar SMS",
                "O aplicativo nao ira mandar mensagens em caso de emergencia, habilite a permissao manualmente nas configuracoes do aparelho",
                [
                  {
                    "text": "Ok",
                    onPress: () => {}
                  }
                ]
              )
          }
    
        goToMainScreen(navigation)
    }
    else{
      Alert.alert(
        "Proibido de acessar os Contatos",
        "O aplicativo nao consegue acessar os contatos, habilite a permissao manualmente nas configuracoes do aparelho",
        [
          {
            "text": "Continuar",
            onPress: () => {goToMainScreen(navigation)}
          },
          {
            "text": "Sair",
            onPress: () => BackHandler.exitApp()
          }
        ]
      )
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
  useEffect(() => {
    PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CALL_PHONE,
    )
      .then((permission) => {
        if (permission !== PermissionsAndroid.RESULTS.GRANTED){
          setFirstLaunch("true")
            .then(() => {
              Alert.alert(
                "Proibido de acessar o telefone",
                "O aplicativo nao pode funcionar sem permissao ao telefone, habilite a permissao manualmente nas configuracoes do aparelho",
                [
                  {
                    "text": "Sair",
                    onPress: () => BackHandler.exitApp()
                  }
                ]
              )
            })
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
