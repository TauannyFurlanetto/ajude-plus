import React from 'react';
import {
    Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

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

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default MessageSentScreen;
