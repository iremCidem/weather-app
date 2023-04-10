import React from "react";
import axios from "axios";
import Weather from "./components/weather";
import "./app.css";
export default function App() {
  async function getData(cityName) {
    const key = "c1a3d86b8c430b91556bafd04c421277";
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
