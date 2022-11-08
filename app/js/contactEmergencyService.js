const DEBUG_CALLS=true;
const DEFAULT_NUMBER=100;

const sendMessageToPersonalContact = () => {
    var number = 100 //this will be the contacts number

    if (DEBUG_CALLS){
        number = DEFAULT_NUMBER
    }

    console.log("Do I even have a personal contact set?")
    console.log("Sending message to personal contact")
}
const callEmergencyNumber = (number) => {
    if (DEBUG_CALLS){
        number = DEFAULT_NUMBER
    }
    console.log(`Calling ${number}`)
}

export default contactEmergency = (number, navigation) => {
    console.log(`Contacting emergency ${number}`)
    callEmergencyNumber(number)
    sendMessageToPersonalContact()
    navigation.navigate("messageSent")
}