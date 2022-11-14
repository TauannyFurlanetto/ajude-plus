export default configurePersonalContact = (navigation, replace) => {
    if(replace){
        navigation.replace("personalContact")
    }
    
    navigation.navigate("personalContact")
}