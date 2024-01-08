import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import './newsSection.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import newsViewport from "../assets/newsViewport.svg";

const NewsSection = ({ city }) => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/news?city=${city}`
        );
        if (response.ok) {
          const data = await response.json();
          if (data.articles) {
            console.log(data.articles);
            setNews(data.articles);
          } else {
            console.error('News articles not found in the API response.');
          }
        } else {
          console.error('Error fetching news:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, [city]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 10,
    slidesToShow: 1, // Adjust as needed
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 9000,

  };

  return (
    <div className="news-section" >
      {/* <h2>News for {city}</h2> */}
      <div className="news-viewport">
      <Slider {...settings}>
        {news.map((article, index) => (
          <div key={index} className="news-item" onClick={() => window.open(article.url, '_blank')}>
            <div className="news-image-wrapper">
            <img src={article.urlToImage} alt={article.title} className='news-item-image' />
            </div>
            <h3 className='news-item-title'>{article.title}</h3>
            {/* <p>{article.description}</p> */}
            {/* <a href={article.url} target="_blank" rel="noopener noreferrer">
              Read more
            </a> */}
          </div>
        ))}
      </Slider>
      </div>
    </div>
  );
};

export default NewsSection;
