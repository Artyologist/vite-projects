// import { useState } from 'react'
//  import reactLogo from './assets/react.svg'
//  import viteLogo from '/vite.svg'
//  import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
      
//       { <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button> }
       
     

//     </>
//   )
// }

// export default App

// import React from 'react';
// import AuthForms from './authform';

// const App: React.FC = () => {
//   return <AuthForms />;
// };

// export default App;
// src/App.tsx
// src/App.tsx
import React from 'react';
import Login from './login';  
import Register from './register'; 

const App = () => {
  return (
    <div >
      <Login />  
      
      <Register />  
    </div>
  );
};

export default App;

