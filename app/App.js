import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import { StatusBar } from 'react-native';

import WelcomeScreen from  './screens/WelcomeScreen';
import HomeScreen from  './screens/HomeScreen';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PersonalContactScreen from './screens/PersonalContactScreen';
import MessageSentScreen from './screens/MessageSentScreen';
import colors from './styles/colors';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import styles from './styles/navigatorStyles';
import { clearDatabase, getIsFirstLaunch } from './js/data/localStorageService';
import { CLEAR_DATABASE } from './js/config';

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
  const [isFirstLaunch, setIsFirstLaunch] = useState(true);

  useEffect(()=>{

    if (CLEAR_DATABASE) clearDatabase();

    getIsFirstLaunch()
      .then((result) => {
        result?.value === "false" ? setIsFirstLaunch(false) : setIsFirstLaunch(true)
      })
      .catch ((e) => (
        console.log("Failed to fetch from storage: ", e)
      ))
  }, [])

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={CustomTheme}>
        <Stack.Navigator cardShadowEnabled={false} screenOptions={{
          headerTitleAllowFontScaling:false
        }}>
          {
            isFirstLaunch ? <Stack.Screen
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
                title: "Contato de emerg??ncia",
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
                title: "Ambul??ncia",
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
