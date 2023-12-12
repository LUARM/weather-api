import React, { useState } from "react";
import "./App.css";
import { GrassIndicator } from "./components/grassIndicator";
import sun from "./assets/sun.svg";

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
    </div>
  );
}

export default App;