import React from 'react';
import './WeatherApp.css';

import search_icon from '../asset/search.png';
import clear_icon from '../asset/clear.png';
import cloud_icon from '../asset/cloud.png';
import drizzle_icon from '../asset/drizzle.png';
import humidity_icon from '../asset/humidity.png';
import rain_icon from '../asset/rain.png';
import snow_icon from '../asset/snow.png';
import wind_icon from '../asset/wind.png';


const WeatherApp = () => {
  const api_key=process.env.REACT_APP_WEATHER_API_KEY;
  const search = async() => {
    const element = document.getElementsByClassName("cityInput")
    if(element[0].value ==="")
    {
      return 0;
    };
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;
    let response = await fetch(url);
    let data = await response.json();

    const humidity = document.getElementsByClassName('humidity-percentage');
    const wind = document.getElementsByClassName('wind-rate');
    const tempreature = document.getElementsByClassName('weather-temp');
    const location = document.getElementsByClassName('weather-location');

    humidity[0].innerHTML = data.main.humidity;
    wind[0].innerHTML = data.wind.speed;
    tempreature[0].innerHTML = data.main.temp;
    location[0].innerHTML = data.name;
  };
  return (
    <div className='container'>
      <div className="top-bar">
        <input type="text" className='cityInput' placeholder='Search'/>
        <div className="search-icon">
          <img src={search_icon} alt="" onClick={()=>{search()}}/>
        </div>
      </div>
        <div className='weather-image'>
          <img src={cloud_icon} alt="" />
        </div>
        <div className="weather-temp">
          24°C
        </div>
        <div className="weather-location">
          London
        </div>
        <div className="data-container">
          <div className="element">
            <img src={humidity_icon} alt="" className="icon" />
            <div className="data">
              <div className="humidity-percentage">
                64%
              </div>
              <div className="text">
                Humidity
              </div>
            </div>
          </div>
          <div className="element">
            <img src={wind_icon} alt="" className="icon" />
            <div className="data">
              <div className="wind-rate">
                18 km/h
              </div>
              <div className="text">
                wind-speed
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default WeatherApp
