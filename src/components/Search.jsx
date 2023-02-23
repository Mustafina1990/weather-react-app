import React from "react";

export default function Search() {
  return (
    <div class="row mt-3">
      <div class="col-6">
        <input
          type="text"
          class="form-control"
          placeholder="Enter a city"
          aria-label="City"
          id="cityName"
        />
      </div>
      <div class="col-1 me-5">
        <button type="button" class="btn btn-outline-success" id="search">
          Search
        </button>
      </div>
      <div class="col-1">
        <button type="button" class="btn btn-outline-success" id="current">
          Current
        </button>
      </div>
    </div>
  );
}
