import React, { useState } from 'react';
import './RegisterForm.css';
import Logo from '../../components/Logo/Logo';
import Footer from '../../components/Footer/Footer';
import axios from 'axios';

interface RegisterFormProps {}

const RegisterForm: React.FC<RegisterFormProps> = () => {
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  // Novo estado para rastrear campos vazios
  const [isEmptyFields, setIsEmptyFields] = useState(false); 

  const handleRegister = async () => {
    if (!fullName || !username || !email || !password || password !== confirmPassword) {
      setIsEmptyFields(true); // Renderiza alerta se isEmptyFields for verdadeiro
      // Se o usuário não preencher todos os campos obrigatórios ou se as senhas não corresponder
      setError('Please fill out all fields and ensure passwords match.'); 
      return;
    }

    const createUserMutation = `
      mutation SignUp($username: String!, $password: String!) {
        signUp(input: {
          fields: {
            username: $username
            password: $password
          }
        }) {
          viewer {
            user {
              id
              createdAt
            }
            sessionToken
          }
        }
      }
    `;

    const requestBody = {
      query: createUserMutation,
      variables: {
        username: username,
        password: password,
      },
    };

    const headers = {
      'X-Parse-Application-Id': 'DSiIkHz2MVbCZutKS7abtgrRVsiLNNGcs0L7VsNL',
      'X-Parse-Master-Key': '0cpnqkSUKVkIDlQrNxameA6OmjxmrA72tsUMqVG9',
      'X-Parse-Client-Key': 'zXOqJ2k44R6xQqqlpPuizAr3rs58RhHXfU7Aj20V',
      'X-Parse-Revocable-Session': '1',
      'Content-Type': 'application/json',
    };

    try {
      const response = await axios.post('https://parseapi.back4app.com/graphql', JSON.stringify(requestBody), { headers });
      const userData = response.data.data.signUp.viewer.user;
      const sessionToken = response.data.data.signUp.viewer.sessionToken;
      console.log('User data:', userData);
      console.log('Session token:', sessionToken);
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  return (
    <div>
      <header className="register-header">
        <Logo></Logo>
        <div className={`register-text align-bottom space-vertical`}>
          <p>Register</p>
        </div>
      </header>

      <div className='alert-text'>
        <p><b>Please Fill out form to Register!</b></p>
      </div>

      <div className="register-container">
        <div className="form-group-register">
          <label>Full Name</label>
          <input
            type="text"
            value={fullName}
            onChange={e => setFullName(e.target.value)}
          />
        </div>
        <div className="form-group-register">
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group-register">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group-register">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group-register">
          <label>Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
          />
        </div>
        <button className="register-button" onClick={handleRegister}>Register</button>
        {error && <div className="error">{error}</div>}
        <div className="register-link">
          <p>Yes, I have an account?</p>
          <a href="#">Login</a>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default RegisterForm;