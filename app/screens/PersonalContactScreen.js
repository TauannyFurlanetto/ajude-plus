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

const addNewContact = () => {
  console.log("TODO: add a new contact logic")
  console.log("adiciona se o usuario nao tiver um contato, altera se tiver")
}

const removeContact = () => {
  console.log("TODO: add remove contact logic")
}

const PersonalContactScreen  = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <ScrollView>
        <View>
          <Text>Contato de emergencia</Text>
          <Button title="Alterar contato pessoal" onPress={addNewContact}/>
          <Button title="Remover contato pessoal" onPress={removeContact}/>
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

export default PersonalContactScreen;
