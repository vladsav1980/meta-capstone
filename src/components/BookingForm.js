import React, { useState, useEffect } from "react";

function BookingForm({ availableTimes, updateTimes, submitForm }) {
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

  const handleSubmit = (e) => {
    e.preventDefault(); // Зупиняємо стандартну дію відправки форми

    // Перевіряємо на коректність введених даних
    if (date === "" || time === "" || numGuests <= 0 || occasion === "") {
      alert("Please fill in all fields correctly.");
      return;
    }

    // Викликаємо функцію для відправки форми
    submitForm({
      date: date,
      time: time,
      numGuests: numGuests,
      occasion: occasion,
    });

    // Очищаємо поля форми після відправки
    setDate("");
    setTime("17:00");
    setNumGuests("");
    setOccasion("");
  };

  return (
    <form
      style={{ display: "grid", maxWidth: "200px", gap: "20px" }}
      onSubmit={handleSubmit}
      aria-label="Booking Form"
    >
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={handleDateChange}
        required
        aria-label="Select a date"
      />

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
        aria-label="Select a time"
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
        min="1"
        required
        aria-label="Enter the number of guests"
      />

      <label htmlFor="occasion">Occasion</label>
      <input
        type="text"
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
        required
        aria-label="Enter the occasion"
      />

      <button type="submit" aria-label="Submit reservation">
        Submit reservation
      </button>
    </form>
  );
}

export default BookingForm;
