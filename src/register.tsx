import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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
   setFormData({ name: '', username: '', email: '', password: '', confirmPassword: '' });
    setSubmittedData(null);
  };
  
  
  return (
    <div>
      <h1>Register Form</h1>
      <input type="text" name="name" placeholder="Name" onChange={handleChange} /><br />
      <input type="text" name="username" placeholder="Username" onChange={handleChange} /><br />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} /><br />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} /><br />
      <input type="password" name ="confirmPassword" placeholder="Confirm Password" onChange={handleChange} /><br />
      
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleSubmit}>Register</button>
      
      <Link to="/">
      <button>Login</button></Link>

      {submittedData && <p>{JSON.stringify(submittedData)}</p>}
       {/* <button onClick={}>Login</button> */}
    </div>
  );
};

export default Register;




 // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  //     const data = await response.json();
  //     console.log(data);
  //   };
  //   fetchData();
  // })