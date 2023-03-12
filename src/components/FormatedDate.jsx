import React from "react";

export default function FormatedDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  if (props.weekDay) {
    const day = days[props.weekDay.getDay()];
    return <div>{day}</div>;
  } else {
    let day = days[props.data.getDay()];
    let hours = props.data.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }
    let minutes = props.data.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    return (
      <div>
        {day} {hours}:{minutes}
      </div>
    );
  }
}
