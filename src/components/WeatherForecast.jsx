import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import OneDayForecast from "./OneDayForecast";

export default function WeatherForecast({ latitude, longitude }) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [latitude, longitude]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecast.map((el, index) => (
            <OneDayForecast key={index} data={el} />
          ))}
        </div>
      </div>
    );
  } else {
    const apiKey = "9fdt7feb4b41f44b0b4b93f346o9ae0a";
    let api = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;

    axios.get(api).then(handleResponse);
    return null;
  }
}
