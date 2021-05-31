import React, { FC } from "react";
import SearchBar from "./components/SearchBar";
import Alert from "./components/Alert";
import Weather from "./components/Weather";
import { setAlert } from "./stores/actions/AlertAction";
import { RootState } from "./stores/index";
import { useSelector, useDispatch } from "react-redux";

const App: FC = () => {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector(
    (state: RootState) => state.weather
  );
  const { message: alertMsg } = useSelector((state: RootState) => state.alert);
  console.log(alertMsg);

  return (
    <>
      <h2 className="w-100 p-3 shadow fs-2">Weather App</h2>
      <div className="container mt-5 pt-2">
        <SearchBar
          error={error}
          alertMsg={alertMsg}
          title="Enter city name for Weather Forecast"
        />
        {loading ? (
          <h2 className="text-center mt-5">Loading...</h2>
        ) : (
          data && <Weather weatherData={data} />
        )}
        {alertMsg && <Alert message={alertMsg} />}
        {error && <Alert message={error} />}
      </div>
    </>
  );
};

export default App;
