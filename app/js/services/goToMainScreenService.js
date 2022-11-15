import { Alert, BackHandler } from 'react-native';

export default goToMainScreen = (navigation) => {
    try{
      navigation.replace("home")
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