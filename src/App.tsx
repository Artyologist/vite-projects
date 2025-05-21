import React   from 'react';
import Login from './login';  
import Register from './register'; 
import{ BrowserRouter as Router, Route, Routes } from 'react-router-dom';




const App = () => {
  return (
   <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        </Routes>
   </Router>
  );
};

export default App;

