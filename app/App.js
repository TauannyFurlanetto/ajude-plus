import React from 'react';

import WelcomeScreen from  './screens/WelcomeScreen';
import HomeScreen from  './screens/HomeScreen';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PersonalContactScreen from './screens/PersonalContactScreen';
import MessageSentScreen from './screens/MessageSentScreen';
import colors from './styles/colors';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { mediumTextSize } from './styles/styles';
import styles from './styles/navigatorStyles';

const Stack = createNativeStackNavigator();

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
        <Stack.Navigator cardShadowEnabled={false} screenOptions={{headerTitleStyle: styles.navigatorHeader }}>
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
            options={{ title: 'Contato de emergencia'}}
          />
          <Stack.Screen 
            name="messageSent"
            component={MessageSentScreen}
            options={{ title: 'Emergencia' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
