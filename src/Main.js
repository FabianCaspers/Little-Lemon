import React, { useReducer, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import HomePage from './HomePage';
import BookingPage from './BookingPage';
import Specials from './Specials';
import ConfirmedBooking from './ConfirmedBooking';

async function updateTimes(state, action) {
  const response = await fetch(`https://api.example.com/available-times?date=${action.date}`);
  const availableTimes = await response.json();
  return availableTimes;
}

async function initializeTimes() {
  const today = new Date();
  const response = await fetch(`https://api.example.com/available-times?date=${today.toISOString()}`);
  const availableTimes = await response.json();
  return availableTimes;
}

function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
  const navigate = useNavigate();

  const submitForm = async (formData) => {
    const response = await fetch('https://api.example.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });
    const success = await response.json();
    if (success) {
      navigate('/confirmed');
    }
  };

  useEffect(() => {
    initializeTimes();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/specials" element={<Specials />} />
      <Route path="/booking" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />} />
      <Route path="/confirmed" element={<ConfirmedBooking />} />
      {/* Add more routes as needed */}
    </Routes>
  );
}

export default Main;
