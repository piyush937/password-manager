// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import Continue from './pages/continue/Continue';
import Contact from './pages/contact/Contact';
import Password from './pages/password/Password';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/continue" element={<Continue />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/password" element={<Password />} />
      </Routes>
    </Router>
  );
}

export default App;
