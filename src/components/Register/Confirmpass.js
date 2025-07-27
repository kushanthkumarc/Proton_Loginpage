import React from 'react';

const ConfirmPassword = ({ confirmPassword, setConfirmPassword }) => {
  return (
    <div className="form-group">
      <label htmlFor="confirmPassword">Confirm Password</label>
      <input
        type="password"
        id="confirmPassword"
        name="confirmPassword"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        placeholder="Re-enter your password"
        required
      />
    </div>
  );
};

export default ConfirmPassword;
