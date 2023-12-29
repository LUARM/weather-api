import React, { useState } from "react";
import "./App.css";
import { GrassIndicator } from "./components/grassIndicator";
import sun from "./assets/sun.svg";
import cityInfoBlock from "./assets/cityInfoBlock.svg";
import newsViewport from "./assets/newsViewport.svg";
import sunrise from "./assets/sunrise.svg";
import sunset from "./assets/sunset.svg";

function App() {
  const [city, setCity] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [weatherData, setWeatherData] = useState(null);

  const kelvinToFahrenheit = (kelvin) => (kelvin - 273.15) * (9 / 5) + 32;

  const changeGradientColors = (color1, color2) => {
    const linearGradient = document.getElementById("paint0_linear_25_1012");
    if (linearGradient) {
      linearGradient.innerHTML = `
        <stop stop-color="${color1}" />
        <stop offset="0.947917" stop-color="${color2}" stop-opacity="0.85"/>
      `;
    } else {
      console.error("Linear gradient element not found");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    try {
      const response = await fetch(`http://localhost:3000/weather?city=${city}`);
      const data = await response.json();
      setWeatherData(data);

      if (data && data.main && data.main.temp < 60) {
        changeGradientColors("#FF0000", "#FFFF00");
      } else {
        changeGradientColors("#0000FF", "#00FFFF");
      }
    } catch (err) {
      console.error(err);
      setWeatherData(null);
    }
  };

  return (
    <div className="App">
      <div className="search-container">
        <div className="search-bar-wrapper">
          <form onSubmit={handleSubmit}>
            <div className="search-bar">
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
                placeholder="Enter City..."
                className="city-input"
              />
              <button className="search-button"></button>
            </div>
          </form>
        </div>
      </div>
      <div className="weather-info-container">
        <img src={sun} className="sun-image" />
        <div className="temp-bar-wrapper">
          {weatherData && weatherData.weather && weatherData.weather[0] && weatherData.main.temp ? (
            <div className="temp-bar-text">
              <text>{weatherData.weather[0].description}</text>
              <text>{kelvinToFahrenheit(weatherData.main.temp).toFixed(0)} °F</text>
            </div>
          ) : (
            <div className="temp-bar-noCity-text">
              {isSubmitted ? "Sorry we couldn't find that city..." : "Search a city to see the weather data"}
            </div>
          )}
        </div>
        <div className="grass-indicator-wrapper">
          <GrassIndicator width={1200} height={700} />
        </div>
      </div>
      <div className="city-info-wrapper">
   
      <img src={cityInfoBlock} className="city-info-block" />

      <div className="city-block-container">
      <div className="city-weather-block">
        <div className="city-weather-left">
          <text className="city-weather-label">Temperature:</text>
          <div className="city-temp-box">
            <text className="city-temp-low">67°</text>
            <div class="vlTemp" />
            <text className="city-temp-high">82°</text>
           </div>
          <text className="city-weather-label">Humidity:</text>
          <text className="city-humidity">64%</text>
          <div class="sunrise-box" >
          <img src={sunrise} className="sunrise-image" />

          </div>
        </div>
        <div className="city-weather-right">
          <text className="city-weather-label">Wind Speed:</text>
          <text className="city-wind-speed">6 mph</text>
          <text className="city-weather-label">Cloudiness:</text>
          <text className="city-cloudiness">32%</text>
          <div class="sunrise-box" >
          <img src={sunrise} className="sunrise-image" />

          </div>
        </div>
      </div>
      <div class="vl" />
      <div className="city-news-block">
      <img src={newsViewport} className="city-news-border" />
      <text className="city-news-text">The Calm after the storm: seattle...</text>
      </div>
      </div>
      </div>
    </div>
  );
}

export default App;