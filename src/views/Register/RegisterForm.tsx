import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './RegisterForm.css';
import { Logo } from '../../components/Logo/Logo';
import Footer from '../../components/Footer/Footer';
import axios from 'axios';
import bcrypt from 'bcryptjs';

interface RegisterFormProps {
  backUrl?: string;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ backUrl }) => { // Destructure the prop here
  const navigate = useNavigate();
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isEmptyFields, setIsEmptyFields] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = async () => {
    if (!fullName || !username || !email || !password || password !== confirmPassword) {
      setIsEmptyFields(true);
      setError('Please fill out all fields and ensure passwords match.');
      return;
    }

    if (!username || !password || !confirmPassword) {
      setIsEmptyFields(true);
      setError('Please fill out all fields and ensure passwords match.');
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match. Try Again!");
      return;
    }

    try {
      const hashedPassword = await bcrypt.hash(password, 12);

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
          password: hashedPassword,
        },
      };

      const headers = {
        'X-Parse-Application-Id': 'e72hRs77YPSbKFKeSK9dcSdcrQ4vvC8BP0wo16QX',
        'X-Parse-Master-Key': 'n6D5NcxV7AzwD4vm5PKA1Z1zJ6xv8psksrzTdYjv',
        'X-Parse-Client-Key': '4OOLjFx0JnPySdAPfpPv4zbku4IKrgUTFToCdeSm',
        'X-Parse-Revocable-Session': '1',
        'Content-Type': 'application/json',
      };

      const response = await axios.post('https://parseapi.back4app.com/graphql', JSON.stringify(requestBody), { headers });

      const userData = response.data.data.signUp.viewer.user;
      const sessionToken = response.data.data.signUp.viewer.sessionToken;
      console.log('User data:', userData);
      console.log('Session token:', sessionToken);
      // Navegar para a página de login após o registro bem-sucedido
      navigate('/login');
      window.confirm('Registration successful. You can now log in.');
    } catch (error) {
      console.error('Error creating user:', error);
      setError('Registration failed. Please try again.');
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
        <button className="register-button" onClick={handleRegister}>
          Register
        </button>
        {error && <div className="error">{error}</div>}
        <div className="register-link">
          <p>Yes, I have an account?</p>
          {/*<Link to={backUrl ? backUrl : '/login'}>Login</Link>*/}
          <Link to="/login">Login</Link>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default RegisterForm;