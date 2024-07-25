import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/login';
import SignUp from './pages/signup';
import Home from './pages/home';
import './App.css';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Toaster position='bottom-right' toastOptions={{duration: 2000}}/>
        <Routes>
          <Route path='/' element={<Navigate to="/login" />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
