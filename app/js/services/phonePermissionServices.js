import { Alert, BackHandler, PermissionsAndroid } from 'react-native';

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

const canAccessPhone = async () => {
  const phonePermission = await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.CALL_PHONE
  )

  return (phonePermission === PermissionsAndroid.RESULTS.GRANTED)
}

export { canAccessPhone, alertPhoneNotAllowed }