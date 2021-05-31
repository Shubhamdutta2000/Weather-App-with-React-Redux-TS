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
export default (state = initialState, action: WeatherAction): WeatherState => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, loading: true };
      break;

    case GET_WEATHER:
      return { loading: false, data: action.payload, error: "" };
      break;

    case SET_ERROR:
      return { ...state, error: action.payload };
      break;

    default:
      return state;
  }
};
