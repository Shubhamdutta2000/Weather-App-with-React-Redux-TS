import React, { FC } from "react";
import { WeatherData } from "../stores/types";

interface WeatherProps {
  weatherData: WeatherData;
}

const Weather: FC<WeatherProps> = ({ weatherData }) => {
  const fahrenheit = (weatherData.main.temp * 1.8 - 459.67).toFixed(2);
  const celsius = (weatherData.main.temp - 273.15).toFixed(2);

  const capitalize = (string: string) => {
    const upper = string.charAt(0).toUpperCase();
    const rest = string.slice(1);
    return upper + rest;
  };

  return (
    <>
      <div className="container">
        <h1 className="mt-5 text-center" style={{ marginBottom: 50 }}>
          {weatherData.name} - {weatherData.sys.country}
        </h1>
        <div className="d-flex justify-content-around">
          <div>
            <p className="fs-2">
              {capitalize(weatherData.weather[0].description)}
            </p>
            <img
              src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
              alt=""
              width="60"
            />
          </div>
          <div>
            <p className="fs-2">Temperature</p>
            <div className="title">
              <p className="mb-2 fs-5">{weatherData.main.temp}K</p>
              <p className="mb-2 fs-5">
                {fahrenheit}
                <sup>&#8457;</sup>
              </p>
              <p className="fs-5">
                {celsius}
                <sup>&#8451;</sup>
              </p>
            </div>
          </div>
          <div>
            <p className="fs-2">Humidity</p>
            <p className="fs-5">{weatherData.main.humidity}</p>
          </div>
          <div>
            <p className="fs-2">Pressure</p>
            <p className="fs-5">{weatherData.main.pressure}</p>
          </div>
          <div>
            <p className="fs-2">Wind</p>
            <p className="fs-5">{weatherData.wind.speed} m/s</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Weather;
