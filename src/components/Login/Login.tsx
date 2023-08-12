import React, { useState } from 'react';
import './Login.css';
import Logo from '../Logo/Logo';
import Footer from '../Footer/Footer';

interface LoginProps {
  onLogin: (username: string, fullName: string, password: string) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = () => { // Click login
    onLogin(username, fullName, password); // Chama a função com os dados do form
  };

  return (
    <div>
      <header className="login-header">
        <Logo></Logo>
        <div className={`login-text align-bottom space-vertical`}> 
          <p>Login</p>
        </div>
      </header>

      <div className="login-container">
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group-login">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <button className="login-button" onClick={handleLogin}>Login</button>
        <div className="register-link">
          <p>Don't have an account?</p>
          <a href="#">Register</a>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Login;