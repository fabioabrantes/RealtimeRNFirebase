# Aplicação real time com Firebase e React Native

A comunicação em real-time está presente em todas as partes. Se faz obrigatório falar em aplicação mobile, com suporte a real time, cada vez mais os usuários estão adotando o uso de aplicações mobile e buscam agilidade e rapidez em suas respostas.

Neste vídeo iremos fazer a implementação de uma aplicação real-time com react native e firebase, onde faremos um exemplo prático de como criar uma aplicação real time, onde caso haja alguma alteração de status daquele daquele dado, todos os clientes conectados a eles recebam em tempo real a resposta em seu dispositivo móvel.

# bibliotecas abordadas
### NativeBase (https://nativebase.io/)
- npx react-native init MyApp --template react-native-template-native-base-typescript
### Firebase (https://console.firebase.google.com/)
- criamos o projeto, depois adicionamos um app e por fim baixamos google-services.json
### rnFirebase (https://rnfirebase.io/)
- yarn add @react-native-firebase/app
- yarn add @react-native-firebase/auth
- yarn add @react-native-firebase/firestore
### configuração no projeto para acesso ao firebase
1. Na pasta android -> app -> build.gradle
2. dentro de build.gradle: adiciona o plugin=> apply plugin: "com.google.gms.google-services"
3. Na pasta android -> build.gradle. Adiciona uma classpath("com.google.gms:google-services:4.3.10")
4. adiciona o arquivo que baixamos do firebase na pasta app que fica dentro da pasta android do projeto

