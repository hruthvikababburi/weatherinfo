import React, { useEffect, useState } from "react";
import "./Home.css";
const Home = () => {
  const [input, setInput] = useState("");
  const [weatherData, setWeatherData] = useState([]);
  const updateInput = (e) => {
    setInput(e.target.value);
  };
  useEffect(() => {
    const API_KEY = "3c935693278ee3ca2e3f1715b605efbb";
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${input}&limit={limit}&appid=${API_KEY}`;
  }, []);
  return (
    <div className="main-cont">
      <h1>Weather Info</h1>
      <h2>We update you with the weather forecast!</h2>
      <input
        type="search"
        placeholder="Search location"
        className="search"
        onChange={updateInput}
        value={input}
      />
      <div className="forecastCont"></div>
    </div>
  );
};

export default Home;
