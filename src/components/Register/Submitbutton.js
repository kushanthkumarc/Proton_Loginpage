import React from 'react';

const SubmitButton = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Registration submitted!');
  };

  return (
    <div className="form-group">
      <button type="submit" onClick={handleSubmit}>
        Register
      </button>
    </div>
  );
};

export default SubmitButton;
