// App.js
import React, { Profiler } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import Continue from './pages/continue/Continue';
import Contact from './pages/contact/Contact';
import Password from './pages/password/Password';
import Favourite from './pages/favourites/Fav';
import Profile from './pages/profile/Profile'
import AppDetails from './pages/appDetails/AppDetails'
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
        <Route path="/favourite" element={<Favourite />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/appDetails" element={<AppDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
