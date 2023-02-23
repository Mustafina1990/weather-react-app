import React from "react";

export default function CurrentCityWeather() {
  return (
    <div class="card mt-4">
      <div class="row">
        <div class="col-6">
          <div class="mt-4 ps-4 nameCity" id="nameCity">
            Kyiv, Ukraine
          </div>
          <div class="ps-4" id="weekDay">
            <span id="time">16:20</span>
            <div id="typeWeather"></div>
          </div>
          <div class="mt-4 ps-4">
            <span id="precipitation"></span>%
          </div>
          <div class="ps-4">
            <span id="speedWind"></span>m/h
          </div>
        </div>
        <div class="col-6">
          <div class="ps-4 mb-4">
            <img src="#" class="icon" id="icon" alt="" />
            <div class="temperature">
              <strong id="currentTemp">24</strong>
              <a href="/" id="celsius-link" class="activeLink">
                °C
              </a>{" "}
              |
              <a href="/" id="farenheit-link">
                °F
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
