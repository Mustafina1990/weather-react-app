import React from "react";
import FormatedDate from "./FormatedDate";
import WeatherIcon from "./WeatherIcon";

export default function OneDayForecast({ data }) {
  const currentDate = new Date(data.time * 1000);
  console.log(data);
  return (
    <div className="col">
      <div className="WeatherForecast-day">
        <FormatedDate weekDay={currentDate} />
      </div>
      <WeatherIcon
        icon={data.condition.icon_url}
        description={data.condition.icon}
        size={64}
      />
      <div className="WeatherForecast-temperatures">
        <span className="WeatherForecast-temperatures-max">
          {Math.round(data.temperature.maximum)}°
        </span>
        <span className="WeatherForecast-temperatures-min">
          {Math.round(data.temperature.minimum)}°
        </span>
      </div>
    </div>
  );
}
