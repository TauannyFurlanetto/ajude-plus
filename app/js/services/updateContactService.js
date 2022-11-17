import { Alert, PermissionsAndroid, BackHandler } from 'react-native';
import { selectContactPhone } from 'react-native-select-contact';

import goToMainScreen from './goToMainScreenService';
import { setPersonalContact } from '../data/localStorageService';

const selectContact = async () => {
  try{
    const selection = await selectContactPhone();

    if (!selection) {
      return null;
    }
            
    let { contact, selectedPhone } = selection;

    if(!contact?.name || !selectedPhone?.number){
      return null
    }

    return {
      "name": contact.name,
      "number": selectedPhone.number.toString()
    }
  }
  catch (e){
    console.log("Error in selectContact: ", e)
    throw e
  }
}

const askSMSPermission = async () => {
  try{
    const sms_permission = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.SEND_SMS,
    )
  
    if (sms_permission !== PermissionsAndroid.RESULTS.GRANTED){
        Alert.alert(
          "Proibido de mandar SMS",
          "O aplicativo não ira mandar mensagens em caso de emergência, " + 
          "habilite a permissão manualmente nas configurações do aparelho",
          [
            {
              "text": "Ok",
              onPress: () => {}
            }
          ]
        )
    }
  }
  catch (e) {
    console.log("Error in askSMSPermission: ", e)
    throw e
  }
}

export default updateContact = async (props)  => {
    var navigation = props.navigation
    var setState = props.setState

    try{
      const contacts_permission = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
      )
 
      if (contacts_permission === PermissionsAndroid.RESULTS.GRANTED) {
          const contact = await selectContact();

          if(contact){
            await setPersonalContact(contact)
            if (setState) setState(contact)
            await askSMSPermission()
            if (navigation) goToMainScreen(navigation, false)
          }
      }
      else{
        Alert.alert(
          "Proibido de acessar os Contatos",
          "O aplicativo não consegue acessar os contatos, " + 
          "habilite a permissão manualmente nas configurações do aparelho",
          [
            {
              "text": "Ok",
              onPress: () => { navigation ? goToMainScreen(navigation, false) : () => {}}
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
      console.log("Error in updateContact: ", e)
      Alert.alert(
        "Erro ao adicionar/atualizar o contato",
        "Não foi possível adicionar/atualizar o seu contato",
        [
          {
            "text": "Continuar",
            onPress: () =>  {navigation ? goToMainScreen(navigation, false): null}
          },
          {
            "text": "Sair",
            onPress: () => BackHandler.exitApp()
          }
        ]
      )
    }
  
  }