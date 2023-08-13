import Login from './components/Login/LoginForm';
import LoginForm from './components/Login/LoginForm';
import Register from './components/Register/Register';

function App() {
  const handleLogin = (username: string, password: string) => {
    // Lógica autenticação/manipulação dos dados do login
    console.log('Username:', username);
    console.log('Password:', password);
  };

  function handleRegister(fullName: string, username: string, email: string, password: string): void {
    throw new Error('Function not implemented.');
  }

  return (
    <div className="App">
      {/* <Posts></Posts> */}
      <LoginForm onLogin={handleLogin} /> 
      {/* <Register onRegister={handleRegister} */}
    </div>
  );
}

export default App;