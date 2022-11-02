const configurePersonalContact = (navigation) => {
    console.log("Ir para a tela de configuracao de contato")
    navigation.navigate("personalContact")
    // TODO: quando a outra tela for chamada, imediatamente checar se ter permissao, se nao pedir,
    // se sim continuar
    // se negado, voltar pra essa tela
}

export default configurePersonalContact