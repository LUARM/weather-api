import React, { useState } from "react";
import "./App.css";
import { GrassIndicator } from "./components/grassIndicator";
import sun from "./assets/sun.svg";
import cityInfoBlock from "./assets/cityInfoBlock.svg";
import newsViewport from "./assets/newsViewport.svg";
import sunrise from "./assets/sunrise.svg";
import sunset from "./assets/sunset.svg";
import NewsSection from './components/newsSection';

function App() {
  const [city, setCity] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [weatherData, setWeatherData] = useState(null);
  const [grassColors, setGrassColors] = useState({ grass1: "#888F36", grass2: "#6C7323" , grass3: "#969C48"});

  const kelvinToFahrenheit = (kelvin) => (kelvin - 273.15) * (9 / 5) + 32;

  function unixToLocal(unixTimestamp) {
    // Create a Date object from the Unix timestamp (in milliseconds)
    var date = new Date(unixTimestamp * 1000);

    // Format the time in "h:mm am|pm" format
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;

    return strTime;
}


  const changeGradientColors = (color1, color2) => {
    const linearGradient = document.getElementById("paint0_linear_25_1012");
    if (linearGradient) {
      linearGradient.innerHTML = `
        <stop stop-color="${color1}" />
        <stop offset="0.947917" stop-color="${color2}" stop-opacity="1"/>
      `;
    } else {
      console.error("Linear gradient element not found");
    }
  };


  //make gradient change based on temp and make it hover the colors 
  //maybey a formula to make make the ehx code change 
  const handleSubmit = async (e) => {
    e.preventDefault();
    setCity(inputValue);
    setIsSubmitted(true);

    try {
      const response = await fetch(
        `http://localhost:3000/weather?city=${inputValue}`
      );
      const data = await response.json();
      setWeatherData(data);

      if ((kelvinToFahrenheit(data.main.temp) < 60)) {
        console.log(kelvinToFahrenheit(data.main.temp));
        changeGradientColors("#FF0000", "#FFFF00");
        setGrassColors({ grass1: "#A0CEA7", grass2: "#94E6E4" , grass3: "#5DAFAD"});
      } else {
        changeGradientColors("#0000FF", "#00FFF");
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
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
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
          {weatherData &&
          weatherData.weather 
          
          ? (
            <div className="temp-bar-text">
              <text>{weatherData.weather[0].description}</text>
              <text>
                {kelvinToFahrenheit(weatherData.main.temp).toFixed(0)} °F
              </text>
            </div>
          ) : (
            <div className="temp-bar-noCity-text">
              {isSubmitted
                ? "Sorry we couldn't find that city..."
                : "Search a city to see the weather data"}
            </div>
          )}
        </div>
        <div className="grass-indicator-wrapper">
          <GrassIndicator width={1200} height={700} colors={grassColors} />
        </div>
      </div>
      <div className="city-info-wrapper">
        <img src={cityInfoBlock} className="city-info-block" />
        {(weatherData &&
          weatherData.weather)
          
          && (
        <div className="city-block-container">
          <div className="city-weather-block">
            <div className="city-weather-left">
              <text className="city-weather-label">Temperature:</text>
              <div className="city-temp-box">
                <text className="city-temp-low">{kelvinToFahrenheit(weatherData.main.temp_min).toFixed(0)} °F</text>
                <div class="vlTemp" />
                <text className="city-temp-high">{kelvinToFahrenheit(weatherData.main.temp_max).toFixed(0)} °F</text>
              </div>
              <text className="city-weather-label">Humidity:</text>
              <text className="city-humidity">{weatherData.main.humidity}%</text>
              <div class="sunrise-box">
                <img src={sunrise} className="sunrise-image" />
                <text className="sun-time">{unixToLocal(weatherData.sys.sunrise)}</text>
              </div>
            </div>
            <div className="city-weather-right">
              <text className="city-weather-label">Wind Speed:</text>
              <text className="city-wind-speed">{weatherData.wind.speed} mph</text>
              <text className="city-weather-label">Cloudiness:</text>
              <text className="city-cloudiness">{weatherData.clouds.all}%</text>
              <div class="sunrise-box">
                <img src={sunset} className="sunrise-image" />
                <text className="sun-time">{unixToLocal(weatherData.sys.sunset)}</text>
              </div>
            </div>
          </div>
          <div class="vl" />
          <div className="city-news-block">
            {/* <img src={newsViewport} className="city-news-border" /> */}
            {/* <text className="city-news-text">
              The Calm after the storm: seattle...
            </text> */}
            <NewsSection city={city} />
          </div>
        </div>
          ) 
}
      </div>
    </div>
  );
}

export default App;
