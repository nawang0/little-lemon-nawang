// BookingForm.js
import React, { useState } from 'react';

const BookingForm = ({ availableTimes, dispatch, submitForm }) => {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: 1,
    occasion: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });

    if (id === 'date') {
      dispatch({ type: 'UPDATE_TIMES', payload: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm(formData);  // Call submitForm with the form data
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="date"
        value={formData.date}
        onChange={handleChange}
      />

      <label htmlFor="res-time">Choose time</label>
      <select id="time" value={formData.time} onChange={handleChange}>
        {availableTimes.map((time, index) => (
          <option key={index} value={time}>
            {time}
          </option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        value={formData.guests}
        onChange={handleChange}
        min="1"
        max="10"
        placeholder="1"
      />

      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" value={formData.occasion} onChange={handleChange}>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <input type="submit" value="Make Your reservation" />
    </form>
  );
};

export default BookingForm;
