import { Alert, BackHandler } from 'react-native';
import { setFirstLaunch } from './data/localStorageService';

export default goToMainScreen = (navigation) => {
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