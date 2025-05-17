import React, { useState } from 'react';

const Register = () => {
  const [formData, setFormData] = useState({ 
    name: '', 
    username: '', 
    email: '', 
    password: '', 
    confirmPassword: '' 
  });
  const [submittedData, setSubmittedData] = useState<any>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    setSubmittedData(formData);
  };

  const handleReset = () => {
    setFormData( { name: '', username: '', email: '', password: '', confirmPassword: '' } );
    setSubmittedData(null);
  };
  
  
  return (
    <div>
      <h1>Register Form</h1>
      <input type="text" placeholder="Name" onChange={handleChange} /><br />
      <input type="text" placeholder="Username" onChange={handleChange} /><br />
      <input type="email"  placeholder="Email" onChange={handleChange} /><br />
      <input type="password" placeholder="Password" onChange={handleChange} /><br />
      <input type="password" placeholder="Confirm Password" onChange={handleChange} /><br />
      
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleSubmit}>Register</button>
      
      {submittedData && <p>{JSON.stringify(submittedData)}</p>}
    </div>
  );
};

export default Register;
