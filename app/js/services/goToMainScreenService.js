import { Alert, BackHandler } from 'react-native';

import { setStoredFirstLaunch } from '../data/localStorageService';

export default goToMainScreen = (navigation) => {
    try{
      navigation.replace("home")
      setStoredFirstLaunch("false")
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