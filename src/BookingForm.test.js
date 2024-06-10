import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import BookingForm from './BookingForm';

test('validates HTML5 inputs', () => {
  const { getByLabelText } = render(<BookingForm />);
  
  const dateInput = getByLabelText(/choose date/i);
  expect(dateInput).toHaveAttribute('type', 'date');
  
  const guestsInput = getByLabelText(/number of guests/i);
  expect(guestsInput).toHaveAttribute('type', 'number');
  expect(guestsInput).toHaveAttribute('min', '1');
});

test('validates form submission', () => {
  const submitForm = jest.fn();
  const { getByLabelText, getByText } = render(<BookingForm submitForm={submitForm} />);
  
  const dateInput = getByLabelText(/choose date/i);
  fireEvent.change(dateInput, { target: { value: '2022-12-31' } });
  
  const guestsInput = getByLabelText(/number of guests/i);
  fireEvent.change(guestsInput, { target: { value: '2' } });
  
  const submitButton = getByText(/make your reservation/i);
  fireEvent.click(submitButton);
  
  expect(submitForm).toHaveBeenCalledWith({ date: '2022-12-31', guests: '2' });
});
