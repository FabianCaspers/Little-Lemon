import React, { useState } from 'react';

function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('');
  const [formValid, setFormValid] = useState(false);

  const handleDateChange = (event) => {
    setDate(event.target.value);
    dispatch({ type: 'UPDATE_TIMES', date: event.target.value });
  };

  const handleFormChange = () => {
    setFormValid(date !== '' && time !== '' && guests > 0);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formValid) {
      submitForm({ date, time, guests, occasion });
    }
  };

  return (
    <form style={{display: 'grid', maxWidth: '200px', gap: '20px'}} onChange={handleFormChange} onSubmit={handleSubmit}>
      <label htmlFor="res-date">Choose date</label>
      <input type="date" id="res-date" value={date} onChange={handleDateChange} aria-label="Choose date" required />
      <label htmlFor="res-time">Choose time</label>
      <select id="res-time" value={time} onChange={e => setTime(e.target.value)} required>
        {availableTimes.map((time, index) => (
          <option key={index}>{time}</option>
        ))}
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input type="number" id="guests" value={guests} onChange={e => setGuests(e.target.value)} min="1" required />
      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" value={occasion} onChange={e => setOccasion(e.target.value)} required>
        <option value="">--Please choose an occasion--</option>
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      <input type="submit" value="Make Your reservation" disabled={!formValid} />
    </form>
  );
}

export default BookingForm;
