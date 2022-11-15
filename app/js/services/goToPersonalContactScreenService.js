export default goToPersonalContactScreen = (navigation, replace) => {
    if(replace){
        navigation.replace("personalContact")
    }
    
    navigation.navigate("personalContact")
}