import React, { useState, useEffect } from "react";
import BookingForm from "./BookingForm";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook

function BookingPage() {
  const [availableTimes, setAvailableTimes] = useState([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
  ]);

  const fetchAPI = async (date) => {
    // Ваша реалізація запиту до API для отримання доступних часів бронювань
    // Повертає масив доступних часів
    // Наприклад:
    const response = await fetch(
      `https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js?date=${date}`
    );
    const data = await response.json();
    return data.availableTimes;
  };

  const updateTimes = async (selectedDate) => {
    const times = await fetchAPI(selectedDate);
    setAvailableTimes(times);
  };

  const navigate = useNavigate(); // Initialize the useNavigate hook

  const submitForm = async (formData) => {
    // Ваша реалізація відправки даних до API та перевірки успішності
    const success = await submitAPI(formData); // Ваша реалізація submitAPI
    if (success) {
      navigate("/confirmed"); // Navigate to the confirmed booking page
    }
  };

  return (
    <div>
      <h2>Table Booking</h2>
      <BookingForm
        availableTimes={availableTimes}
        updateTimes={updateTimes}
        submitForm={submitForm} // Pass the submitForm function to BookingForm
      />
    </div>
  );
}

export default BookingPage;
