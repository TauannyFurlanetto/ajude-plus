# SOBRE
O aplicativo **AjudePlus** foi desenvolvido para disciplina de desenvolvimento de sistemas orientado a dispositivos móveis e baseados na web do quarto periodo de analise e desenvolvimento de sistemas do SENAC.

Ele visa desenvolver aumentar a acessibilidade dos serviços de emergencia para o idosos, pessoas com doenças crônicas, físicas ou cognitivas.

# INTEGRANTES

**Grupo 4**

- Nathan de Sousa Pires
- Sergio Gabriel Junior
- Larissa Martins de Souza
- Marina Silva de Oliveira
- Sidney Vieira da Silva Junior
- Tauanny Virginio Furlanetto da Silva

# COMO RODAR

## ANDROID
Voce vai precisar ter o `npm` e o `Android Studio` instalados, siga o tutorial oficial do [ReactNative](https://reactnative.dev/docs/0.60/enviroment-setup) pra fazer a configuracao completa.

1. Instale todas as dependencias
```
npm install
```

A partir dai voce pode ou iniciar o app com o `Expo`  ou fazendo um build manual.

**manual**

1. Inicie o emulador no Android Studio

2. Adicione um contato no aparelho;

3. Numa aba do terminal, inicie o servidor
```
npx react-native start
```
4. Em outra aba, faca um build na aplicacao
```
npx react-native run-android
```

**expo**

> AVISO: ao usar o expo o aplicativo e perder funcoes essenciais, sendo impossivel selecionar um contato pra ser adicionar no aplicativo

1. Execute o comando `npx expo start` no terminal.
2. Ou:
    - Inicie o emulador no AndroidStudio e espere o projeto iniciar e digite `a` para iniciar o app no emulador.
    - Instale o app `Expo Go` no seu celular e escanei o QRCode no terminal do expo
3. No emulador, clique em `expo go`.

Caso voce decida usar o ExpoGo e nao consiga se conectar pelo app, desligue temporariamente o firewall privado no seu computador e tente de novo.

## IOS
WIP

# COMO TESTAR
Considerando as limitacoes do Expo, e necessario emular o aplicativo rodando manualmente como especificado na secao **Como rodar Android**.

O aplicativo trabalha com tres permissoes (SMS, Contatos e Telefone). 
Se as permissoes forem negadas em *runtime* voce vai precisar permiti-las manualmente pelas configuracoes do aparelho, porque o aplicativo define-as como `never_ask_again`, nao sendo possivel pedir as permissoes novamente pelo aplicativo.
E importante destacar que o comportamente do app e diferente se as permissoes forem negadas pelas configuracoes, 
porque, nesse caso, podemos pedi-las novamente.
Assim, vamos inicialmente testar o aplicativo concendendo todas as permissoes e manualmente remove-las, ate que todas sejam negadas (pelas configuracoes) e eventualmente em *runtime*.

Ademais, como o aplicativo tem uma tela de boas vindas que so e exibida uma vez, cada uma das tres variacoes deve ser testadas duas vezes.

Como o aplicativo liga automaticamente ao clicar no botao de chamadas, os numeros de emergencia foram substituidos por `001`, voce pode alterar esse comportamento trocando a variavel `DEBUG_CALLS` no arquivo `HomeScreen.js`

Ademais, como o aplicativo guarda estado, caso queira limpar os dados armazenados, defina `CLEAR_DATABASE` para `true` em `App.js`

1. Abra o aplicativo;
2. Conceda acesso ao Telefone;
3. Clique em **Adicionar contato agora**;
4. Conceda permissao aos Contatos;
5. Selecione um contato;
6. De permissao para mandar SMS;
7. O aplicativo deve abrir a Tela Principal;

A Tela Principal deve ter essa aparencia, com o seu contato selecionado no topo da tela:
#TODO: inserir um imagem da tela inicial

8. Feche e abra o aplicativo, ele deve ir diretamente para a Tela Principal.
9. Clique em algum botao de chamada (SAMU, POLICIA e BOMBEIROS), encerre, e depois clique no botao de chamada do contato configurado.
10. Clique no botao de Configuracao de Contato (o com a engrenagem na base da tela).
11. Remova o Contato selecionado.
12. Observe se o card branco esta com essa aparencia.
#TODO: inserir um imagem do card branco.

13. Retorne a Tela Principal.
14. Verifique o se o botao de ligar pro contato pessoal foi substituido pelo botao de Adicionar.
15. Clique no botao de Configuracao de Contato.
16. Selecione Atualizar Contato.
17. Adicione um contato.
18. Verifique se os dados do contato estao aparenco no card branco.
19. Volte a tela inicial.
18. Verifique se o nome do contato esta aparecendo no botao superior.
#TODO: inserir um imagem do botao com um contato.
20. Clique no botao de Configuracao de Contato.
21. Remova o contato.
22. Volte a Tela Principal.
23. Adicione um contato pelo botao no topo da tela.
24. Volte na tela de Configuracao de Contato e verifique se os dados do contato estao sendo Exibidos no Card Branco.

(WIP)
#TODO: testar as mensagens

Defina a variavel `CLEAR_DATABASE` em `App.js` como `true`

Negue todas as permissoes nas configuracoes do aparelho.
Repita os passos 1 - 5, porem **negue** a permissao para mandar SMS, de Ok no alerta.
O aplicativo deve ter ido para a Tela Principal.

Negue todas as permissoes nas configuracoes do aparelho.
Repita os passos 1 - 3, porem **negue** a permissao para os Contatos.
Clique em Ok, voce deve ter ido para a Tela Principal.
Clique em Adicionar, no topo da tela.
Clique em Sair, o aplicativo deve fechar.

Negue todas as permissoes nas configuracoes do aparelho.
Repita o passo 1, porem **negue** o acesso ao Telefone. O aplicativo deve exibir um alerta.
Clique em Sair, o aplicativo deve fechar
Abra o aplicativo novamente, ele deve exibir a tela de boas vindas e o mesmo alerta anterior, clique em Sair novamente.
Permita acesso ao Telefone nas configuracoes, abra o aplicativo, e repita os passos 1-7.

-----

1. Abra o aplicativo;
2. Conceda acesso ao Telefone;
3. Clique em **Adicionar depois** (WIP)
4. Clique em algum botao de chamada - encerre a chamada.
5. Clique em adicionar
4. Conceda permissao aos contatos;
5. Selecione um contato;
6. De permissao para mandar SMS;
 
WIP
