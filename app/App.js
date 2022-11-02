import React from 'react';

import WelcomeScreen from  './screens/WelcomeScreen';
import HomeScreen from  './screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PersonalContactScreen from './screens/PersonalContactScreen';
import MessageSentScreen from './screens/MessageSentScreen';

const Stack = createNativeStackNavigator();

const App  = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
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
          options={{ title: 'Contato de emergencia' }}
        />
        <Stack.Screen 
          name="messageSent"
          component={MessageSentScreen}
          options={{ title: 'Emergencia' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
