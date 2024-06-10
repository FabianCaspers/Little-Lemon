import React, { useState } from 'react';

function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('');

  const handleDateChange = (event) => {
    setDate(event.target.value);
    dispatch({ type: 'UPDATE_TIMES', date: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    submitForm({ date, time, guests, occasion });
  };

  return (
    <form style={{display: 'grid', maxWidth: '200px', gap: '20px'}} onSubmit={handleSubmit}>
      <label htmlFor="res-date">Choose date</label>
      <input type="date" id="res-date" value={date} onChange={handleDateChange} />
    </form>
  );
}

export default BookingForm;
