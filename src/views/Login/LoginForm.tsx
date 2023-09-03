import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Logo } from '../../components/Logo/Logo';
import Footer from '../../components/Footer/Footer';
import './LoginForm.css';

interface LoginFormProps {}

const LoginForm: React.FC<LoginFormProps> = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  // Novo estado para rastrear campos vazios
  const [isEmptyFields, setIsEmptyFields] = useState(false); 
  const navigate = useNavigate(); 

  const handleLogin = async () => {
    if (!username || !password) {
      setIsEmptyFields(true); // Renderiza alerta se isEmptyFields for verdadeiro
      // Se o usuário não preencher todos os campos obrigatórios ou se as senhas não corresponder
      setError('Please fill out all fields and ensure passwords match.');  
      return;
    }

    const loginMutation = `
      mutation LogIn($username: String!, $password: String!) {
        logIn(input: {
          username: $username
          password: $password
        }) {
          viewer {
            user {
              id
              username
            }
            sessionToken
          }
        }
      }
    `;

    try {
      const response = await axios.post(
        'https://parseapi.back4app.com/graphql',
        JSON.stringify({
          query: loginMutation,
          variables: {
            username,
            password,
          },
        }),
        {
          headers: {
            'X-Parse-Application-Id': 'e72hRs77YPSbKFKeSK9dcSdcrQ4vvC8BP0wo16QX',
            'X-Parse-Master-Key': 'n6D5NcxV7AzwD4vm5PKA1Z1zJ6xv8psksrzTdYjv',
            'X-Parse-Client-Key': '4OOLjFx0JnPySdAPfpPv4zbku4IKrgUTFToCdeSm',
            'X-Parse-Revocable-Session': '1',
            'Content-Type': 'application/json',
          },
        }
      );

      console.log('Logged in successfully');
      navigate('/homepage');
      // Redirect to the home page or perform other actions
    } catch (error) {
      console.error('Login failed', error);
      setError('Login failed. Please try again.');
    }
  };

  return (
    <div>
      <header className="login-header">
        <Logo />
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
        
        <button className="login-button" onClick={handleLogin}>
          Get Started
        </button>

        {isEmptyFields && <div className="error"></div>}
        {error && <div className="error">{error}</div>}
        <div className="register-link">
          <p>Don't have an account?</p>
          <a href="/register">Register</a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LoginForm;