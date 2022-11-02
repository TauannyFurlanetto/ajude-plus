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
}

const goToMainScreen = (navigation) => {
  console.log("Going to the Main Screen")
  navigation.navigate("home")
}

const WelcomeScreen = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <ScrollView>
        <View>
          <Text>Bem vindo</Text>
          <Button title="Adicionar agora" onPress={addNewContact}/>
          <Button title="Adicionar depois" onPress={() => {goToMainScreen(navigation)}}/>
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

export default WelcomeScreen;
