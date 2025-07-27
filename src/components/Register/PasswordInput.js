import React from 'react';

const PasswordInput = ({ password, setPassword }) => {
  return (
    <div className="form-group">
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter a password"
        required
      />
    </div>
  );
};

export default PasswordInput;
