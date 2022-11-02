import React from 'react';
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import styles from '../styles/styles';
import { SafeAreaView } from 'react-native-safe-area-context';

const updateContact = () => {
  console.log("TODO: update the personal contact logic")
}

const removeContact = () => {
  console.log("TODO: add remove contact logic")
}

const PersonalContactScreen  = () => {

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text>Contato de emergencia</Text>
          <Button title="Alterar contato pessoal" onPress={updateContact}/>
          <Button title="Remover contato pessoal" onPress={removeContact}/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PersonalContactScreen;
