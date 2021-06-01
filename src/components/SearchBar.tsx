import React, { FC, useState, FormEvent } from "react";

import { useDispatch } from "react-redux";
import { setAlert, resetAlert } from "../stores//actions/AlertAction";
import {
  getWeather,
  setLoading,
  resetError,
} from "../stores/actions/WeatherAction";

interface SearchProps {
  title: string;
  error: string;
  alertMsg: string;
}

const SearchBar: FC<SearchProps> = ({ title, error, alertMsg }) => {
  const [city, setCity] = useState("");
  const dispatch = useDispatch();

  // on change input field
  const changeHandler = (e: FormEvent<HTMLInputElement>) => {
    setCity(e.currentTarget.value);
  };

  // after querying the city
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (city.trim() === "") {
      dispatch(setAlert("City is required!!"));
      dispatch(resetError());
    } else {
      dispatch(resetAlert());
      dispatch(setLoading());
      dispatch(getWeather(city)); // get weather details
      setCity("");
    }
  };

  return (
    <div>
      <h2 className="text-center fs-1 mb-4 ">{title}</h2>
      <form className="w-100  d-flex text-center" onSubmit={submitHandler}>
        <input
          className="rounded form-control me-sm-2 fs-5 rounded"
          type="text"
          placeholder="City Name ..."
          onChange={changeHandler}
          value={city}
        />
        <button
          className="btn btn-primary w-25 fs-5 my-2 my-sm-0"
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
