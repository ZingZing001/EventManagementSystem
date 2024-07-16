import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './pages/Home';
import Events from './pages/Events';
import EventDetail from './pages/EventDetail';
import CreateEvent from './pages/CreateEvent';
import UserProfile from './pages/UserProfile';
import Bookings from './pages/Bookings';

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
      </Routes>
    </Router>
  );
};

export default App;
