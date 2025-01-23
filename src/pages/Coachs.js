import React, { useState } from "react";
import './Coachs.css';

const Coachs = () => {
  const [coaches] = useState([
    { id: 1, name: "Coach A", price: 30 },
    { id: 2, name: "Coach B", price: 25 },
    { id: 1, name: "Coach C", price: 50 },
    { id: 2, name: "Coach D", price: 30 },
    { id: 1, name: "Coach E", price: 15 },
    { id: 2, name: "Coach F", price: 60 },
  ]);
  const [form, setForm] = useState({ time: "" });
  const [selectedCoach, setSelectedCoach] = useState(null);

  const handleSelectCoach = (coach) => {
    setSelectedCoach(coach);
    setForm({ time: "" });
  };

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleConfirmBooking = () => {
    if (form.time) {
      alert(
        `You have booked ${selectedCoach.name} at ${form.time} for $${selectedCoach.price}/hr.`
      );
      setSelectedCoach(null);
      setForm({ time: "" });
    } else {
      alert("Please select a time.");
    }
  };

  return (
    <div className="coach-crud">
      <h1>Book a Fitness Coach</h1>

      <div className="coach-list">
        <h2>Available Coaches</h2>
        {coaches.map((coach) => (
          <div key={coach.id} className="coach-item">
            <p>
              {coach.name} - ${coach.price}/hr
            </p>
            <button onClick={() => handleSelectCoach(coach)}>Book</button>
          </div>
        ))}
      </div>

      {selectedCoach && (
        <div className="booking-form">
          <h3>Book {selectedCoach.name}</h3>
          <label>
            Select Time:
            <input
              type="time"
              name="time"
              value={form.time}
              onChange={handleInputChange}
            />
          </label>
          <button onClick={handleConfirmBooking}>Confirm Booking</button>
        </div>
      )}
    </div>
  );
};

export default Coachs;
