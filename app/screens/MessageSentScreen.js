import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from '../styles/messageSentScreenStyles';
import ConfigureContactButton from '../components/ConfigureContactButton';
import { default as Text } from '../components/UnscalableText';

const MessageSentScreen  = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
        <View style={styles.messageSentView}>
          <View style={styles.messageSentMessageView}>
            <View style={styles.messageCardHeroView}>
              <Text style={styles.messageCardHeroText}>Fique em seguranca</Text>
            </View>
            <Text style={styles.messageText}>Mensagem foi enviada para contato de emergencia</Text>
          </View>
          <ConfigureContactButton navigation={navigation} replace={true}/>
        </View>
    </SafeAreaView>
  );
};

export default MessageSentScreen;
