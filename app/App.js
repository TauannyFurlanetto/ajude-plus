import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';

import WelcomeScreen from  './screens/WelcomeScreen';
import HomeScreen from  './screens/HomeScreen';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PersonalContactScreen from './screens/PersonalContactScreen';
import MessageSentScreen from './screens/MessageSentScreen';
import colors from './styles/colors';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import styles from './styles/navigatorStyles';
import {  StatusBar } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
  const [isFirstLauch, setIsFirstLaunch] = useState(true);

  

  useEffect(()=>{
    AsyncStorage.getItem('firstLaunch', (err, result) => {
      if (err) {
      } else {
        if (result == null) {
          console.log("null value received", result);
          setIsFirstLaunch(true);
        } else if (result === JSON.stringify({"value": "false"})){
          console.log("the result is false, the welcome screen wont be enabled")
          setIsFirstLaunch(false)
        }
      }
    });
  }, [])

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={CustomTheme}>
        <Stack.Navigator cardShadowEnabled={false} screenOptions={{
          headerTitleAllowFontScaling:false
        }}>
          {
            isFirstLauch ? <Stack.Screen 
             name="welcome"
             component={WelcomeScreen}
             options={{headerShown: false}}
           /> : null
          }
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
                headerStyle: {height: StatusBar.currentHeight + 72},
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
                headerStyle: {height: StatusBar.currentHeight + 72},
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
