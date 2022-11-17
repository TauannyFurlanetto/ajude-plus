import { Alert } from 'react-native';

import { removePersonalContact } from '../data/localStorageService';

export default removeContact = async(setState) => {
    removePersonalContact()
      .then(() => {
        if(setState) setState({
          "name": '...',
          "number": '...'
        })
      })
      .catch((e) => {
        Alert.alert(
          "Erro ao remover o contato",
          "Não foi possível remover o seu contato",
          [
            {
              "text": "Ok",
              onPress: () => {}
            }
          ]
        )
    })
}