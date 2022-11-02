import React from 'react';
import {
  Button,
  ScrollView,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';

const configurePersonalContact = (navigation) => {
console.log("Ir para a tela de configuracao de contato")
navigation.navigate("personalContact")
}

const MessageSentScreen  = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <ScrollView>
        <View>
          <Text>Mensagem enviada</Text>
          <Text>Sua mensagem foi enviada para o seu contato de emergencia</Text>
          <Button title="Configurar o contato pessoal" onPress={() => {configurePersonalContact(navigation)}}/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MessageSentScreen;
