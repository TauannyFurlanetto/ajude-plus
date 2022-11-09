import { Alert } from 'react-native';
import { removePersonalContact } from '../js/data/localStorageService';

export default removeContact = async(setPersonalContact) => {
    removePersonalContact()
      .then(() => {
        setPersonalContact({
          "name": '...',
          "number": '...'
        })
      })
      .catch((e) => {
        Alert.alert(
          "Erro ao remover o contato",
          "Nao foi possivel remover o seu contato",
          [
            {
              "text": "Ok",
              onPress: () => {}
            }
          ]
        )
    })
}