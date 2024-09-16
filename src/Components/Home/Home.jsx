import React, { useEffect, useState } from "react";
import "./Home.css";
const Home = () => {
  const [weatherData, setWeatherData] = useState([]);
  useEffect(() => {
    //const url = `http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid=${3c935693278ee3ca2e3f1715b605efbb}`;
  }, []);
  return (
    <div className="main-cont">
      <h1>Weather Info</h1>
      <h2>We update you with the weather forecast!</h2>
      <input type="search" placeholder="Search location" className="search" />
      <div className="forecastCont"></div>
    </div>
  );
};

export default Home;
