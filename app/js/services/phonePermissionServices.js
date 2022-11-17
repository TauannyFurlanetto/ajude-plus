import { Alert, BackHandler, PermissionsAndroid } from 'react-native';

const alertPhoneNotAllowed = () => {
  Alert.alert(
    "Proibido de acessar o telefone",
    "O aplicativo não pode funcionar sem permissão ao telefone " +
    "habilite a permissão manualmente nas configurações do aparelho",
    [
      {
        "text": "Sair",
        onPress: () => BackHandler.exitApp()
      }
    ]
  )
}

const canAccessPhone = async () => {
  const phonePermission = await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.CALL_PHONE
  )

  return (phonePermission === PermissionsAndroid.RESULTS.GRANTED)
}

export { canAccessPhone, alertPhoneNotAllowed }