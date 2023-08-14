import ReactDOM from 'react-dom';
import LoginForm from './components/Login/LoginForm';
import RegisterForm from './components/Register/RegisterForm';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

// Criar o cliente Apollo fora da função App
const client = new ApolloClient({
  uri: 'YOUR_GRAPHQL_API_URL', // Substitua pela URL da sua API GraphQL
  cache: new InMemoryCache(),
});

function App() {
  function handleRegister(fullName: string, username: string, email: string, password: string, confirmPassword: string): void {
    // Implemente a lógica de registro aqui
  }

  return (
    <ApolloProvider client={client}>
      <div className="App">
        {/* <Posts></Posts> */}
        {/* <LoginForm onLogin={handleLogin} />*/}
        <RegisterForm onRegister={handleRegister} /> 
      </div>
    </ApolloProvider>
  );
}

// Usar ReactDOM.render apenas uma vez no arquivo de entrada (ex: index.js ou index.tsx)
ReactDOM.render(<App />, document.getElementById('root'));

export default App;