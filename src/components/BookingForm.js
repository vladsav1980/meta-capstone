import React, { useState, useEffect } from "react";

function BookingForm({ availableTimes, updateTimes }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("17:00");
  const [numGuests, setNumGuests] = useState("");
  const [occasion, setOccasion] = useState("");
  
  useEffect(() => {
    // Оновлюємо часи доступних бронювань на основі поточної дати
    updateTimes(date);
  }, [date, updateTimes]);

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  return (
    <form style={{ display: "grid", maxWidth: "200px", gap: "20px" }}>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={handleDateChange}
      />

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      >
        {availableTimes.map((time) => (
          <option key={time} value={time}>
            {time}
          </option>
        ))}
      </select>

      <label htmlFor="num-guests">Number of guests</label>
      <input
        type="number"
        id="num-guests"
        value={numGuests}
        onChange={(e) => setNumGuests(e.target.value)}
      />

      <label htmlFor="occasion">Occasion</label>
      <input
        type="text"
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
      />

      <button type="submit">Submit reservation</button>
    </form>
  );
}

export default BookingForm;
