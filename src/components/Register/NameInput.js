import React from 'react';

const NameInput = () => {
  return (
    <div className="form-group">
      <label htmlFor="name">Full Name</label>
      <input type="text" id="name" name="name" placeholder="Enter your full name" required />
    </div>
  );
};

export default NameInput;
