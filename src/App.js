import React from "react";
import axios from "axios";
import Weather from "./components/weather";
import "./app.css";
export default function App() {
  async function getData(cityName) {
    const key = process.env.REACT_APP_WEATHER_API_KEY;
    try {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}&units=metric`
      );
      return data;
    } catch (error) {
      alert("Incorrect data entry");
    }
  }

  return (
    <div>
      <Weather getData={getData} />
    </div>
  );
}
