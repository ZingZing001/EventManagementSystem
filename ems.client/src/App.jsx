import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import Events from './pages/Events.jsx';
import EventDetail from './pages/EventDetail.jsx';
import CreateEvent from './pages/CreateEvent.jsx';
import UserProfile from './pages/UserProfile.jsx';
import Bookings from './pages/Bookings.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import './App.css'; // Importing the CSS file

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:id" element={<EventDetail />} />
        <Route path="/create-event" element={<CreateEvent />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default App;
