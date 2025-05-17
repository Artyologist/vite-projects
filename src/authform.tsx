import React, { useState } from 'react';

const AuthForms: React.FC = () => {
  const [registerData, setRegisterData] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });

  const handleRegisterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Register Data:', registerData);
  };

  const handleReset = () => {
    setRegisterData({
      name: '',
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login Data:', loginData);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Register Form</h1>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={registerData.name}
          onChange={handleRegisterChange}
        /><br /><br />
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={registerData.username}
          onChange={handleRegisterChange}
        /><br /><br />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={registerData.email}
          onChange={handleRegisterChange}
        /><br /><br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={registerData.password}
          onChange={handleRegisterChange}
        /><br /><br />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={registerData.confirmPassword}
          onChange={handleRegisterChange}
        /><br /><br />
        <button type="submit">Register</button>
        <button type="button" onClick={handleReset} style={{ marginLeft: '1rem' }}>Reset</button>
      </form>

      <hr style={{ margin: '2rem 0' }} />

      <h1>Login Form</h1>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={loginData.username}
          onChange={handleLoginChange}
        /><br /><br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={loginData.password}
          onChange={handleLoginChange}
        /><br /><br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default AuthForms;
