import { Alert, NativeModules } from 'react-native';
import SendIntentAndroid from 'react-native-send-intent';

var DirectSms = NativeModules.DirectSms

const DEBUG_CALLS=true;
const DEFAULT_NUMBER="+55 11 111";

const sendMessageToPersonalContact = (personalContactNumber) => {
    if (DEBUG_CALLS){
        console.log("The debug mode is active, calling a default number")
        personalContactNumber = DEFAULT_NUMBER
    }

    DirectSms.sendDirectSms(personalContactNumber, "Uma ligacao a emergencia foi efetuada");
}

const callEmergencyNumber = (number) => {
    if (DEBUG_CALLS){
        number = DEFAULT_NUMBER
    }
    console.log(`Calling ${number}`)

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