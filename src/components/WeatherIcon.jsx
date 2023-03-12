import React from "react";

export default function WeatherIcon({ icon, description, size }) {
  return (
    <div>
      <img src={icon} alt={description} style={{width: size}} />
    </div>
  );
}
