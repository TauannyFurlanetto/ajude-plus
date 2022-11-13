export default configurePersonalContact = (navigation, replace) => {
    console.log("Ir para a tela de configuracao de contato")
    if(replace){
        navigation.replace("personalContact")
    }
    
    navigation.navigate("personalContact")
}