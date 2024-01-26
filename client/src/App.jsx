import React from 'react';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './Signup'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './login'
import Home from './Home'
import Dashboard from './dashboard';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

   useEffect(() => {
  
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const PrivateRoute = ({ element }) => {
  
    if (isLoggedIn) {
      return element;
    } else {
  
      return <Navigate to="/login" />;
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />

        <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
