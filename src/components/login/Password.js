import React from 'react';

function PasswordInput({ password, setPassword }) {
  return (
    <div>
      <label>Password:</label><br />
      <input 
        type="password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        required 
      />
    </div>
  );
}

export default PasswordInput;
