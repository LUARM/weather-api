import React, { useState } from 'react';
import './App.css';

function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:3000/weather?city=${city}`);
      const data = await response.json();
      setWeatherData(data);
      setError(null);
    } catch (err) {
      console.error(err);
      setWeatherData(null);
      setError('An error occurred while fetching weather data.');
    }
  };

  return (

    <div className="App">
      <h1>Weather App</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Enter City:
          <input type="text" value={city} onChange={(e) => setCity(e.target.value)} required />
        </label>
        <button type="submit">Get Weather</button>
      </form>

      {weatherData && (
      <div>
        <h2>
          {weatherData.name}
          ,
          {weatherData.sys && weatherData.sys.country ? weatherData.sys.country : 'N/A'}
        </h2>
        <p>
          Temperature:
          {weatherData.main && weatherData.main.temp ? `${weatherData.main.temp} °C` : 'N/A'}
        </p>
        <p>
          Weather:
          {' '}
          {weatherData.weather && weatherData.weather[0] && weatherData.weather[0].description
            ? weatherData.weather[0].description
            : 'N/A'}
        </p>
      </div>
      )}

      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default App;
