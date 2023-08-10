import React, { useState } from 'react';
import './Login.css';

interface LoginProps {
  onLogin: (username: string, fullName: string, password: string) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => { // Quando for clicado o botão de login
    onLogin(username, fullName, password); // Chamar função `onLogin` passando os dados do formulário
  };

  return (
    <div>
      <h2>Login</h2>
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label>Full name:</label>
        <input
          type="text"
          value={fullName}
          onChange={e => setFullName(e.target.value)}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleLogin}>Login</button>
      <p>Don't have an account? Register</p>
    </div>
  );
};

export default Login;