import { Alert, BackHandler, PermissionsAndroid } from 'react-native';
import { setFirstLaunch } from './data/localStorageService';

const alertPhoneNotAllowed = () => {
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

const clearIsFirstLaunch = async (cleanState) => {
  if(cleanState){
    await setFirstLaunch("true")
  }
}

const askPhonePermission = async () => {
  const phonePermission = await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.CALL_PHONE
  )

  return (phonePermission === PermissionsAndroid.RESULTS.GRANTED)
}

export {askPhonePermission, alertPhoneNotAllowed, clearIsFirstLaunch}