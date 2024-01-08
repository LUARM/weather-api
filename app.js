const express = require('express');
const axios = require('axios');
require('dotenv').config();
const cors = require('cors');

const NewsAPI = require('newsapi');

const app = express();
const port = 3000;

app.use(cors());

// Use the imported API key
const openWeatherMapApiKey = process.env.OPENWEATHERMAP_API_KEY;
const newsApiKey = process.env.NEWS_API_KEY;

// Initialize News API
const newsapi = new NewsAPI(newsApiKey);


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

app.get('/news', async (req, res) => {
  try {
    const { city } = req.query; 
    const newsResponse = await newsapi.v2.everything({
      q: city, // Search for news related to the city
      language: 'en', // Specify the language
      pageSize: 5, // Number of articles to fetch
    }); 

    res.json(newsResponse);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
