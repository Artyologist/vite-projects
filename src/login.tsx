import React, { useState } from 'react';

const Login = () => {
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
    
  });
  const [submittedData, setSubmittedData] = useState<any>(null);

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });

  };

  

  const handleLoginSubmit = () => {
   setSubmittedData(loginData)
  };

  const handleReset = () => {
    setLoginData({ username: '', password: '' });
    setSubmittedData(null);
  };

  return (
    
    <div>
        <p>{loginData.username}</p>
            <p>{loginData.password} </p>
      <h1>Login Form</h1>
      <input type="text" placeholder="Username" value={loginData.username} onChange={handleLoginChange}/><br /><br />
      <input type="password" placeholder="Password"  value={loginData.password} onChange={handleLoginChange}/><br /><br />
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleLoginSubmit}>Login</button>

      {submittedData && <p>{JSON.stringify(submittedData)}</p>}
    </div>
  );
};

export default Login;  
