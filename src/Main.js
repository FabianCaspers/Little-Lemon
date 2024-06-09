import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import BookingPage from './BookingPage';
import Specials from './Specials'

function Main() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/specials" element={<Specials />} />
      <Route path="/booking" element={<BookingPage />} />
      {/* Add more routes as needed */}
    </Routes>
  );
}

export default Main;
