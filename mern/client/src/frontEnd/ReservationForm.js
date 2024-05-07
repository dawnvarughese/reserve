import React, { useState } from 'react';

function ReservationForm() {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send reservation data to backend)
    console.log('Name:', name);
    console.log('Date:', date);
    console.log('Time:', time);
  };

  return (
    <div>
      <h2>Make a Reservation</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <label>Date:</label>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        <label>Time:</label>
        <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ReservationForm;
