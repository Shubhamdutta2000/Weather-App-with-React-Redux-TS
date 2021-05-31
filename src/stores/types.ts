export const GET_WEATHER = "GET_WEATHER";
export const SET_LOADING = "SET_LOADING";
export const SET_ERROR = "SET_ERROR";
export const SET_ALERT = "SET_ALERT";

export interface Weather {
  id: number;
  main: String;
  description: String;
  icon: String;
}

export interface WeatherData {
  id: Number;
  base: string;
  clouds: {
    all: Number;
  };
  coord: {
    lon: Number;
    lat: Number;
  };
  cod: Number;
  dt: Number;
  main: {
    feels_like: number;
    humidity: number;
    pressure: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  name: String;
  sys: {
    type: Number;
    id: Number;
    message: Number;
    country: String;
    sunrise: Number;
    sunset: Number;
  };
  timezone: Number;
  visibility: Number;
  wind: {
    speed: Number;
    deg: Number;
  };
  weather: Weather[];
}

export interface WeatherError {
  cod: String;
  message: String;
}

// STATE
export interface WeatherState {
  data: WeatherData | null;
  loading: boolean;
  error: String;
}

// ACTION
interface GetWeatherAction {
  type: typeof GET_WEATHER;
  payload: WeatherData;
}

interface SetLoadingAction {
  type: typeof SET_LOADING;
}

interface SetErrorAction {
  type: typeof SET_ERROR;
  payload: String;
}

// ACTION type
export type WeatherAction =
  | GetWeatherAction
  | SetLoadingAction
  | SetErrorAction;

export interface AlertAction {
  type: typeof SET_ALERT;
  payload: string;
}

export interface AlertState {
  message: string;
}
