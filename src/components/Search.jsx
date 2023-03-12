import React, { useState } from "react";
import axios from "axios";
import CurrentCityWeather from "./CurrentCityWeather";
import WeatherForecast from "./WeatherForecast";

export default function Search(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response);
    setWeatherData({
      ready: true,
      coordinates: response.data.coordinates,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      icon: response.data.condition.icon_url,
      iconDecription: response.data.condition.icon,
      wind: response.data.wind.speed,
      city: response.data.city,
      latitude: response.data.coordinates.latitude,
      longitude: response.data.coordinates.longitude,
    });
  }

  function search() {
    const apiKey = "9fdt7feb4b41f44b0b4b93f346o9ae0a";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    console.log(weatherData);
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                className="form-control"
                placeholder="Enter a city..."
                autoFocus="on"
                aria-label="City"
                id="cityName"
                onChange={handleChange}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                className="btn btn-primary w-100"
                id="search"
              />
            </div>
          </div>
        </form>
        <CurrentCityWeather data={weatherData} />
        <WeatherForecast
          latitude={weatherData.latitude}
          longitude={weatherData.longitude}
        />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
