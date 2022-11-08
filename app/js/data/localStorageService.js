import AsyncStorage from '@react-native-async-storage/async-storage';

async function getPersonalContact () {
    // TODO: go in the database to get it the first time
    // after that you just cache the value (idk), ideally shouldn't be requesting
    // the contact every time
    const contact =  await AsyncStorage.getItem('personalContact');

    return JSON.parse(contact)
}

async function hasPersonalContact () {
    const contact = await getPersonalContact();

    if (contact == null){
        return false;
    }
    
    return true
}

async function setPersonalContact (contact) {
    await AsyncStorage.setItem('personalContact', JSON.stringify(contact));
}

async function setFirstLaunch (value) {
    await AsyncStorage.setItem('firstLaunch', JSON.stringify({"value": value}));
}

async function getIsFirstLaunch () {
    const isFirstLaunch = await AsyncStorage.getItem('firstLaunch');

    return JSON.parse(isFirstLaunch)
}

async function removePersonalContact () {
    return await AsyncStorage.removeItem('personalContact');
}

async function clearDatabase () {
    await AsyncStorage.clear();
}

export {getPersonalContact, setPersonalContact, removePersonalContact, hasPersonalContact, getIsFirstLaunch, setFirstLaunch, clearDatabase};