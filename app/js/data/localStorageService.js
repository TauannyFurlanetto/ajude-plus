import AsyncStorage from '@react-native-async-storage/async-storage';

const getPersonalContact = async () => {
    const contact =  await AsyncStorage.getItem('personalContact');

    return JSON.parse(contact)
}

const hasPersonalContact =  async () => {
    const contact = await getPersonalContact();

    if (contact == null){
        return false;
    }
    
    return true
}

const setPersonalContact = async (contact) => {
    await AsyncStorage.setItem('personalContact', JSON.stringify(contact));
}

const setStoredFirstLaunch  = async (value) => {
    await AsyncStorage.setItem('firstLaunch', JSON.stringify({"value": value}));
}

const getIsFirstLaunch  = async () => {
    const isFirstLaunch = await AsyncStorage.getItem('firstLaunch');

    return JSON.parse(isFirstLaunch)
}

const removePersonalContact = async () => {
    return await AsyncStorage.removeItem('personalContact');
}

const clearDatabase = async () => {
    await AsyncStorage.clear();
}

export { getPersonalContact, setPersonalContact, removePersonalContact, hasPersonalContact, getIsFirstLaunch, setStoredFirstLaunch, clearDatabase };