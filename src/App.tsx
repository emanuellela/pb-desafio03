import React from 'react';
import logo from './logo.svg';
import './App.css';
import Posts from './components/Posts';
import Login from './components/Login/Login';

function App() {
  const handleLogin = (username: string, fullName: string, password: string) => {
    console.log('Username:', username);
    console.log('Full name:', fullName); 
    console.log('Password:', password);
  };

  return (
    <div className="App">
      {/* <Posts></Posts> */}

      <Login onLogin={handleLogin} /> {/* Renderizando login*/}

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
