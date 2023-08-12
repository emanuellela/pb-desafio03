declare module 'parse' {
    export = Parse;
}
  
declare namespace Parse {
    // Configuração da biblioteca Parse.js
    Parse.serverURL = "https://parseapi.back4app.com";
    Parse.initialize('Your-App-ID', 'Your-JS-Key');
    
    const user = new Parse.User();
    user.set('username', username);
    user.set('email', ''); // Define o email, se necessário
    user.set('fullName', fullName); // Define o nome completo, se necessário
    user.set('password', password);
}