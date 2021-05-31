import {
  GET_WEATHER,
  SET_LOADING,
  SET_ERROR,
  WeatherState,
  WeatherAction,
} from "../types";

const initialState: WeatherState = {
  data: null,
  loading: false,
  error: "",
};

// state type, action type and return type of weather state
const WeatherReducer = (
  state = initialState,
  action: WeatherAction
): WeatherState => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, loading: true };

    case GET_WEATHER:
      return { loading: false, data: action.payload, error: "" };

    case SET_ERROR:
      return { loading: false, data: null,  error: action.payload };

    default:
      return state;
  }
};

export default WeatherReducer;
