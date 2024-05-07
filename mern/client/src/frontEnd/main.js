import React from 'react';
import ReservationForm from './ReservationForm';
import ReservationList from './ReservationList';

function App() {
  return (
    <div className="App">
      <h1>Restaurant Reservation System</h1>
      <ReservationForm />
      <ReservationList />
    </div>
  );
}

export default App;
