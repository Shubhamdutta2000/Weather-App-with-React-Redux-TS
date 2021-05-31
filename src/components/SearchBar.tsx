import React, { FC, useState, FormEvent } from "react";

import { useDispatch } from "react-redux";
import { setAlert } from "../stores//actions/AlertAction";
import { getWeather, setLoading } from "../stores/actions/WeatherAction";

interface SearchProps {
  title: string;
}

const SearchBar: FC<SearchProps> = ({ title }) => {
  const [city, setCity] = useState("");
  const dispatch = useDispatch();

  // on change input field
  const changeHandler = (e: FormEvent<HTMLInputElement>) => {
    setCity(e.currentTarget.value);
  };

  // after querying the city
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (city.trim() == "") {
      dispatch(setAlert("City is required!!"));
    }
    dispatch(setLoading());
    dispatch(getWeather(city)); // get weather details
    setCity("");
  };

  return (
    <div>
      <h2>{title}</h2>
      <form
        className="w-75  d-flex text-center justify-content-center"
        onSubmit={submitHandler}
      >
        <input
          className="rounded form-control me-sm-2"
          type="text"
          placeholder="Search"
          onChange={changeHandler}
          value={city}
        />
        <button className="btn btn-secondary my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
