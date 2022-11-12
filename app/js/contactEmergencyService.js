import { Alert } from 'react-native';
import SendIntentAndroid from 'react-native-send-intent';

const DEBUG_CALLS=true;
const DEFAULT_NUMBER="+55 11 111";

const sendMessageToPersonalContact = (personalContactNumber) => {
    if (DEBUG_CALLS){
        console.log("The debug mode is active, calling a default number")
        personalContactNumber = DEFAULT_NUMBER
    }

    SendIntentAndroid.sendSms(personalContactNumber, "Uma ligacao a emergencia foi efetuada");
    console.log("Do I even have a personal contact set?")
    console.log("Sending message to personal contact")
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
    console.log(`Contacting emergency ${number}`)
    console.log(`Sendint a message to ${personalContactNumber}`)

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