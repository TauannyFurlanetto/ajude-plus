import 'react-native-gesture-handler';
import React from 'react';

import WelcomeScreen from  './screens/WelcomeScreen';
import HomeScreen from  './screens/HomeScreen';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PersonalContactScreen from './screens/PersonalContactScreen';
import MessageSentScreen from './screens/MessageSentScreen';
import colors from './styles/colors';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import styles from './styles/navigatorStyles';

const Stack = createStackNavigator();

const CustomTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.yellow,
    background: colors.dark,
    card: colors.yellow,
    text: colors.dark
  },
}

const App  = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer theme={CustomTheme}>
        <Stack.Navigator cardShadowEnabled={false}>
          <Stack.Screen 
            name="welcome"
            component={WelcomeScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen 
            name="home"
            component={HomeScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen 
            name="personalContact"
            component={PersonalContactScreen}
            options={
              {
                title: 'Contato de emergencia',
                headerStyle: {height: 72},
                headerTitleStyle:styles.personalContactHeader
              }
            }
          />
          <Stack.Screen 
            name="messageSent"
            component={MessageSentScreen}
            options={
              {
                title: 'Ambulancia',
                headerStyle: {height: 72},
                headerTitleStyle:styles.messageSentHeader
              }
            }
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
