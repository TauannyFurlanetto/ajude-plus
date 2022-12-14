import { Alert, BackHandler } from 'react-native';
import { setStoredFirstLaunch } from '../data/localStorageService';

export default goToMainScreen = (navigation, setState = true) => {
    try{
      navigation.replace("home")
      if(setState) setStoredFirstLaunch("false")
    }
    catch(e){
      console.log("Error in navigate to mainScreen: ", e)
      Alert.alert(
        "Erro ao ir até a tela inicial do aplicativo",
        "Não foi possível ir até o menu inicial",
        [
          {
            "text": "Sair",
            onPress: () => BackHandler.exitApp()
          }
        ]
      )
    }
}