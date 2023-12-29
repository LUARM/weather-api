const express = require('express');
const axios = require('axios');
require('dotenv').config();
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());

// Use the imported API key
const openWeatherMapApiKey = process.env.OPENWEATHERMAP_API_KEY;


app.get('/weather', async (req, res) => {
  try {
    const { city } = req.query; // Get the city from the query parameter
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${openWeatherMapApiKey}`;

    const response = await axios.get(apiUrl);
    const weatherData = response.data;
    res.json(weatherData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
