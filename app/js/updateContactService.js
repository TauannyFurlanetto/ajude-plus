import { Alert, PermissionsAndroid, BackHandler } from 'react-native';
import { setPersonalContact } from './data/localStorageService';
import { selectContactPhone } from 'react-native-select-contact';
import goToMainScreen from './goToMainScreenService';

async function selectContact () {
  try{
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
          "O aplicativo nao ira mandar mensagens em caso de emergencia, " + 
          "habilite a permissao manualmente nas configuracoes do aparelho",
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

export default updateContact = async (navigation)  => {
    try{
      const contacts_permission = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
      )
 
      if (contacts_permission === PermissionsAndroid.RESULTS.GRANTED) {
          const contact = await selectContact();
          await setPersonalContact(contact)
          await askSMSPermission()
          goToMainScreen(navigation)
      }
      else{
        Alert.alert(
          "Proibido de acessar os Contatos",
          "O aplicativo nao consegue acessar os contatos, " + 
          "habilite a permissao manualmente nas configuracoes do aparelho",
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
      console.log("Error in updateContact: ", e)
      Alert.alert(
        "Erro ao adicionar/atualizar o contato",
        "Nao foi possivel adicionar/atualizar o seu contato",
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