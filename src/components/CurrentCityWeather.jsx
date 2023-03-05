import React from "react";
import FormatedDate from "./FormatedDate";
import CurrentTemperature from "./CurrentTemperature";
import "./CurrentCityWeather.css";

export default function CurrentCityWeather(props) {
  return (
    <div className="current-weather">
      <h1 id="nameCity">{props.data.city}</h1>
      <ul>
        <li>
          <FormatedDate id="time" data={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="d-flex">
            <div>
              <img src={props.data.icon} alt="weather-icon" />
            </div>
            <div>
              <CurrentTemperature celsius={props.data.temperature} />
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
