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

export default (state = initialState, action: WeatherAction) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, loading: true };
      break;

    case GET_WEATHER:
      return { loading: false, data: action.payload, error: null };
      break;

    case SET_ERROR:
      return { ...state, error: action.payload };
      break;

    default:
      return state;
  }
};
