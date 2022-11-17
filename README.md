# SOBRE
O aplicativo **AjudePlus** foi desenvolvido para disciplina de Desenvolvimento de Sistemas Orientado a Dispositivos Móveis e Baseados na Web do quarto período de Análise e Desenvolvimento de Sistemas do SENAC.

Ele visa aumentar a acessibilidade dos serviços de emergência para o idosos, pessoas com doenças crônicas, físicas ou cognitivas.

O aplicativo foi desenvolvido usando React Native para a plataforma **Android**.

# INTEGRANTES

**Grupo 4**

- Nathan de Sousa Pires
- Sergio Gabriel Junior
- Larissa Martins de Souza
- Marina Silva de Oliveira
- Sidney Vieira da Silva Junior
- Tauanny Virgínio Furlanetto da Silva

# COMO RODAR

Você vai precisar ter o `npm` e o `Android Studio` instalados, siga o tutorial oficial do [ReactNative](https://reactnative.dev/docs/environment-setup) pra fazer a configuração completa.

1. Instale todas as dependências
```
npm install
```

2. Configure o ambiente Android. No Windows, defina as variáveis:
```
ANDROID_HOME=C:\Users\<usuario>\AppData\Local\Android\Sdk
ANDROID_SDK_ROOT=C:\Users\<usuario>\AppData\Local\Android\Sdk
```
Em outras plataformas siga as instruções do [tutorial de configuração](https://reactnative.dev/docs/environment-setup).

A partir daí você pode iniciar o app manualmente. Não utilize o **Expo** porque:
- o expo não consegue nem pedir permissões nem acessar os aplicativos nativos (telefone, sms etc) do celular
- o aplicativo fica com as cores quebradas no modo noturno em certas versões da interface do sistema (notavelmente Xiaomi e POCO)

1. [Crie](https://developer.android.com/studio/run/managing-avds) e inicie o dispositivo virtual no Android Studio
![Interface do android Studio indicando onde abrir o dispositivo virtual](./tutorial/assets/abrir_emulador.png)

É recomendado criar um aplicativo com a versão 11 do Android (`R`) e com aproximadamente 5 polegadas de tela (ex: `Pixel 2`). Aparelhos com outras versões do Android e com telas menores podem ser instáveis.

2. Adicione um contato com nome e telefone no aparelho;

3. Numa aba do terminal, inicie o servidor
```
npx react-native start
```
4. Em outra aba, faça um build na aplicação
```
npx react-native run-android
```

# COMO TESTAR
Considerando as limitações do Expo, é necessario emular o aplicativo rodando manualmente como especificado na [secção](#COMO RODAR).

Algumas observações importantes:

- O aplicativo trabalha com três permissões (SMS, Contatos e Telefone);
- Se as permissões forem negadas em *runtime* você vai precisar permiti-las manualmente pelas configurações do aparelho, porque o aplicativo as define como `never_ask_again`, não sendo possível pedir as permissões novamente em *runtime*;
- É importante destacar que o comportamento do app é diferente se as permissões forem negadas pelas configurações, porque, nesse caso, podemos pedi-las novamente;
- Como o aplicativo liga automaticamente ao clicar no botão de chamada, os números de emergência foram substituídos por `111`, você pode alterar esse comportamento trocando a variável `DEVELOPMENT_CALLS` para `false` no arquivo `app/js/config.js`;
    - Recomenda-se **não** contatar os números de emergência (emergência, bombeiros e polícia) caso essa variável seja desabilitada;
    - Como o aplicativo manda SMS você pode ser cobrado se trocar o valor desse número.
- Como o aplicativo guarda estado, caso queira limpar os dados armazenados, defina `CLEAR_DATABASE` para `true` em `app/js/config.js`. Isso vai fazer que a cada build o banco de dados seja limpo.

Assim, vamos inicialmente testar o aplicativo concendendo todas as permissões e depois remove-las, atá que todas sejam negadas (pelas configurações) e eventualmente em *runtime*.

1. Abra o aplicativo;
2. Conceda acesso ao Telefone;
3. Clique em **Adicionar contato de emergência**;
4. Conceda permissão aos Contatos;
5. Selecione um contato;
6. De permissão para mandar SMS;
7. O aplicativo deve abrir a Tela Principal;

A Tela Principal deve ter essa aparência, com o seu contato selecionado no topo da tela:
<img src="./tutorial/assets/tela_inicial.jpg" alt="Interface da tela inicial" width="70%">

8. Feche e abra o aplicativo, ele deve ir diretamente para a Tela Principal.
9. Clique no botão de Configuracao de Contato (o com a engrenagem na base da tela).
10. Remova o Contato selecionado.
11. Observe se o card branco esta com essa aparência.
<img src="./tutorial/assets/tela_configurar_contato_vazia.jpg" alt="Interface da tela de configuração de contato vazia" width="70%">

12.  Clique em voltar, você deve retornar a Tela Principal.
13.  Verifique o se o botão de ligar pro contato pessoal foi substituído pelo botão de Adicionar.
14.  Clique no botão de Configuração de Contato.
15.  Selecione Atualizar Contato.
16.  Adicione um contato.
17.  Verifique se os dados do contato estao aparencendo no card branco.
18.  Volte a Tela Principal.
19.  Verifique se o nome do contato esta aparecendo no botão no topo da tela.
<img src="./tutorial/assets/tela_inicial.jpg" alt="Interface da tela de inicial com contato preenchido" width="70%">

20.  Clique no botão de Configuração de Contato.
21.  Remova o contato.
22.  Volte a Tela Principal, verifique se o botão de chamar o contato pessoal foi substituído pelo botão de "Adicionar"
<img src="./tutorial/assets/tela_inicial_sem_contato.jpg" alt="Interface da tela de inicial sem contato" width="70%">

23.  Adicione um contato pelo botão no topo da tela.
24.  Verifique se os dados do contato estao sendo exibidos no card branco na tela de Configuração de Contato e na Tela Principal.
25.  Volte na tela de Configuração de Contato e clique em Alterar Contato, troque o contato e verifique se ele está sendo exibido nas duas telas.
26.  Clique para ligar ao Contato Pessoal -- se desejado crie um contato separado com um número inválido (ex: `111`) pra evitar pagar pelas mensagens.
27.  Verifique se o discador abre **já executando a ligação**.
28.  Ao fechar o discador, você deve voltar para tela de Ligação de Emergência
<img src="./tutorial/assets/tela_chamada_emergencia.jpg" alt="Interface da tela de chamada de emergência" width="70%">

30.  Ao fechar a tela de ligação de emergência você deve voltar para a Tela Principal.
31.  Abra seu aplicativo de mensagens, um SMS para o número do contato pessoal deve ter sido
mandado.

### ADICIONANDO O CONTATO DEPOIS
Defina a variável `CLEAR_DATABASE` em `app/js/config.js` como `true`, recarregue o app e depois defina como `false`. Negue todas a permissões no aparelho.

1. Abra o aplicativo;
2. Conceda acesso ao Telefone;
3. Clique em **Adicionar depois**;
4. Você deve ser redirecionado a Tela Principal;
5. O botão "Adicionar" deve ser exibido no topo da tela.

### NEGANDO AS PERMISSÕES PELAS CONFIGURAÇÕES
1. Nas configurações do aparelho, negue a permissão para mandar SMS.
2. As funcionalidades de ligação e adicionar contato devem estar funcionando normalmente, ao ligar, os SMSs não devem estar sendo mandados.
3. Ao atualizar um contato o aplicativo deve pedir permissão novamente, aceite. Faça uma chamada. O aplicativo deve voltar mandar mensagens.
4. Nas configurações do aparelho, negue a permissão para acessar os contatos.
5. Vá nas Configurações de Contato e tente atualizar o contato.
6. O aplicativo deve pedir permissão, negue. O aplicativo deve emitir o alerta de "Proibido de acessar os Contatos". Clique em Ok.
7. Tente atualizar o contato novamente, o aplicativo deve exibir o mesmo alerta.
8. Permita os contatos nas configurações do aparelho, você deve conseguir inserir um contato no aplicativo.
9. Nas configurações do aparelho, negue a permissão para acessar o telefone.
10. Abra o aplicativo novamente, ele deve exibir a Tela Principal e pedir a permissão de acesso ao telefone, negue. O alerta de "Proibido de acessar o telefone" deve ser exibido, clique em Sair.
11. Abra o aplicativo de novo, o mesmo alerta deve ser exibido.
12. Permita acesso ao Telefone nas configurações, abra o aplicativo e ele deve funcionar normalmente.

### NEGANDO AS PERMISSÕES EM RUNTIME
Para cada passo a baixo siga essas instruções: defina a variável `CLEAR_DATABASE` em `app/js/config.js` como `true`, recarregue o app e depois defina como `false`. Negue todas a permissões no aparelho. Abra o app de novo.

1. Siga os passos 1-5, e **negue** o acesso as mensagens. Faca uma ligação, o aplicativo não deve mandar um SMS, ele tambem deve emitir um alerta a cada vez que o contato é atualizado. Permitir o acesso as mensagens deve reverter esse comportamento.
2. Siga os passos 1-3, e **negue** o acesso aos contatos. O aplicativo deve emitir um alerta todas as vezes que o o botao "Atualizar contato" é clicado. Permitir o acesso aos contatos deve reverter esse comportamento.
3. Abra o aplicativo, e **negue** o acesso aos contatos, o alerta de "Proibido de acessar o telefone" deve ser exibido, clique em Sair. Abra o app novamente, sob a Tela de Boas Vindas o mesmo alerta deve ser exibido. Permita o acesso pelas configurações e abra o aplicativo, o alerta não deve aparecer e você deve ser capaz de adicionar um contato.

-----

# SOLUÇÃO DE PROBLEMAS

**Não consigo configurar meu ambiente Android**
 Dentro da pasta Android crie o arquivo `local.properties` e cole o trecho a baixo (para Windows):
 ``` 
sdk.dir=C\:\\Users\\<usuario>\\AppData\\Local\\Android\\Sdk
 ``` 

**Eu não consigo rodar manualmente, preciso usar o Expo**
1. Execute o comando `npx expo start` no terminal.
2. Ou:
    - Inicie o emulador no AndroidStudio, espere o projeto iniciar e digite `a` para iniciar o app no emulador.
    - Instale o app `Expo Go` no seu celular e escaneie o QRCode no terminal do expo
3. No emulador, clique em `expo go`.

Caso você nao consiga se conectar pelo app, desligue temporariamente o firewall privado no seu computador e tente de novo.

**O meu aplicativo fica instável no emulador**
Se seu aplicativo não responde corretamente tente rodar com:
- O aparelho virtual `Pixel 2 API 30` com versão Android 11.
- Com o seu aparelho físico conectado em modo de debug, use o [guia do React Native](https://reactnative.dev/docs/running-on-device) como material de apoio. De modo geral, siga os passos a baixo:
1. Habilite o modo desenvolvedor no seu aparelho;
2. Habilite a instalação de aplicativos por USB;
3. Conecte seu aparelho via USB no seu computador;
4. Rode o comando `npx react-native start && npx react-native run-android`.