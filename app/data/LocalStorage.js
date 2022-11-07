import AsyncStorage from '@react-native-async-storage/async-storage';

// TODO: if we use a database, we will need to connect to it on startup, and disconnect to it
// when shutting down

async function getPersonalContact () {
    // TODO: go in the database to get it the first time
    // after that you just cache the value (idk), ideally shouldn't be requesting
    // the contact every time
    return await AsyncStorage.getItem('personalContact');
}

async function hasPersonalContact () {
    const contact = await getPersonalContact();

    if (contact == null){
        return false;
    }
    
    return true
}

async function setPersonalContact (contact) {
    // TODO: this will be the method to update and add the contact, by thus it must always overwrite
    // the current contact in the dataStore
    // msg = this.personalContact == {} ?`adding contact: ${contact}` : `updating contact`
    await AsyncStorage.setItem('personalContact', JSON.stringify(contact));
}

async function setFirstLaunch (value) {
    await AsyncStorage.setItem('firstLaunch', JSON.stringify({"value": value}));
}

async function getIsFirstLaunch () {
    const result = await AsyncStorage.getItem('firstLaunch');

    // TODO: verify how to store the item in a way that you dont need to treat it in
    // a switch statement

    switch (result) {
        case JSON.stringify({"value": "false"}):
            return false
        case JSON.stringify({"value": "true"}):
            return true
        default:
            return null

    }
}

async function removePersonalContact () {
    console.log("removing contact from the database")
    // this.personalContact = {};
    return await AsyncStorage.removeItem('personalContact');
}

async function clearDatabase () {
    await AsyncStorage.clear();
}

export {getPersonalContact, setPersonalContact, removePersonalContact, hasPersonalContact, getIsFirstLaunch, setFirstLaunch, clearDatabase};