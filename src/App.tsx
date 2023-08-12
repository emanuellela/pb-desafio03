import Login from './components/Login/Login';
import Register from './components/Register/Register';

function App() {
  const handleLogin = (username: string, fullName: string, password: string) => {
    // Lógica autenticação/manipulação dos dados do login
    console.log('Username:', username);
    console.log('Full name:', fullName); 
    console.log('Password:', password);
  };

  function handleRegister(fullName: string, username: string, email: string, password: string): void {
    throw new Error('Function not implemented.');
  }

  return (
    <div className="App">
      {/* <Posts></Posts> */}
      {/* <Login onLogin={handleLogin} /> */}
      <Register onRegister={handleRegister} />{/* Renderizando register*/}
    </div>
  );
}

export default App;