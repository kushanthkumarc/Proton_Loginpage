import React from 'react';

function EmailInput({ email, setEmail }) {
  return (
    <div>
      <label>Email:</label><br />
      <input 
        type="email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        required 
      />
    </div>
  );
}

export default EmailInput;
