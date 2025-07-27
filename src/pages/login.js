import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Heading from '../components/login/Heading';
import ForgotPassword from '../components/login/Forgotpassword';
import EmailInput from '../components/login/EmailInput';
import PasswordInput from '../components/login/Password';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Basic check (no real auth)
    if (email && password) {
      navigate('/home');
    } else {
      alert('Please enter both email and password.');
    }
  };

  return (
    <div className="login-background">
      <div className="login-container">
        <Heading />
        <form onSubmit={handleLogin} className="login-form">
          <EmailInput email={email} setEmail={setEmail} />
          <PasswordInput password={password} setPassword={setPassword} />
          <ForgotPassword />
          <button type="submit" className="login-button">Login</button>
        </form>
      </div>
    </div>
  );
  
};

export default Login;
