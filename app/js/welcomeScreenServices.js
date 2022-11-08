import { Alert, BackHandler, PermissionsAndroid } from 'react-native';
import { setFirstLaunch } from './data/localStorageService';

const alertAndCleanState = async () => {
    await setFirstLaunch("true")
  
    Alert.alert(
      "Proibido de acessar o telefone",
      "O aplicativo nao pode funcionar sem permissao ao telefone " +
      "habilite a permissao manualmente nas configuracoes do aparelho",
      [
        {
          "text": "Sair",
          onPress: () => BackHandler.exitApp()
        }
      ]
    )
  }

const askPhonePermission = async () => {
  const phonePermission = await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.CALL_PHONE
  )

  return (phonePermission === PermissionsAndroid.RESULTS.GRANTED)
}

export default {askPhonePermission, alertAndCleanState}