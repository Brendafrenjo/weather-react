import React from "react";
import axios from "axios";
import { MutatingDots } from "react-loader-spinner";

export default function Weather(props) {
  function displayTemperature(response) {
    alert(
      `The temperature in ${response.data.name} is ${Math.round(
        response.data.main.temp
      )}°C`
    );
  }

  let apiKey = `49b631c45785fe73d2a88477803dea22`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

  axios(apiUrl).then(displayTemperature);
  return (
    <div>
      <p>Hello from {props.city}</p>
      <MutatingDots
        height="80"
        width="80"
        radius="9"
        color="purple"
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
      />
    </div>
  );
}
