import React, { useState } from 'react';
import RegHeading from '../Register/RegHeading';
import NameInput from '../Register/NameInput';
import EmailInput from '../Register/EmailInput';
import PasswordInput from '../Register/PasswordInput';
import ConfirmPassword from '../Register/Confirmpass';
import TermsCheckbox from '../Register/TermscheckBox';
import SubmitButton from '../Register/Submitbutton';

const NewUserRegister = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
    } else {
      setError('');
      alert("Registration successful!");
      // Proceed with submission logic
    }
  };

  return (
    <div className="register-container">
      <RegHeading />
      <form className="register-form" onSubmit={handleSubmit}>
        <NameInput />
        <EmailInput />
        <PasswordInput password={password} setPassword={setPassword} />
        <ConfirmPassword
          confirmPassword={confirmPassword}
          setConfirmPassword={setConfirmPassword}
        />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <TermsCheckbox />
        <div className="register-button">
        <SubmitButton /> 
        </div>
      </form>
    </div>
  );
};

export default NewUserRegister;
