import React from 'react';

function ReservationList() {
  // Dummy reservation data for demonstration
  const reservations = [
    { id: 1, name: 'John Doe', date: '2024-05-07', time: '19:00' },
    { id: 2, name: 'Jane Smith', date: '2024-05-08', time: '18:30' },
    { id: 3, name: 'Bob Johnson', date: '2024-05-09', time: '20:00' },
  ];

  return (
    <div>
      <h2>Reservations</h2>
      <ul>
        {reservations.map((reservation) => (
          <li key={reservation.id}>
            {reservation.name} - {reservation.date} at {reservation.time}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ReservationList;
