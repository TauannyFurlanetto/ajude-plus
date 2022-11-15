import { Alert, NativeModules } from 'react-native';
import SendIntentAndroid from 'react-native-send-intent';

import { DEVELOPMENT_NUMBER, DEVELOPMENT_CALLS } from '../config';

var DirectSms = NativeModules.DirectSms

const sendMessageToPersonalContact = (personalContactNumber) => {
    if (DEVELOPMENT_CALLS){
        personalContactNumber = DEVELOPMENT_NUMBER
    }

    DirectSms.sendDirectSms(personalContactNumber, "Uma ligacao a emergencia foi efetuada");
}

const callEmergencyNumber = (number) => {
    if (DEVELOPMENT_CALLS){
        console.log("The debug mode is active, calling a default number")
        number = DEVELOPMENT_NUMBER
    }
    SendIntentAndroid.sendPhoneCall(number, true)
}

const sideEffects = (navigation, personalContactNumber) => {
    try{
        navigation.navigate("messageSent")
        sendMessageToPersonalContact(personalContactNumber)
    }
    catch(e){
        console.log("Error while executing the contact emergency side effects: ", e)
    }
}

export default contactEmergency = (number, personalContactNumber, navigation) => {
    try{
        callEmergencyNumber(number)
        sideEffects(navigation, personalContactNumber)
    }
    catch(e){
        console.log("Error in contact emergency: ", e)

        Alert.alert(
            "Erro ao contatar o servico de emergencia",
            "O aplicativo nao conseguiu contatar a emergencia",
            [
              {
                "text": "Ok",
                onPress: () => {}
              }
            ]
        )
    }
    
}