import React, { FC } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";

const App: FC = () => {
  return (
    <div className="container mt-5">
      <SearchBar title="Enter city name for Weather Forecast" />
    </div>
  );
};

export default App;
