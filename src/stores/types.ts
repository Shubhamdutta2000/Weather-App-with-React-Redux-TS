export const GET_WEATHER = "GET_WEATHER";
export const SET_LOADING = "SET_LOADING";
export const SET_ERROR = "SET_ERROR";
export const SET_ALERT = "SET_ALERT";
export const RESET_ALERT = "RESET_ALERT";

export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
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
  name: string;
  sys: {
    type: Number;
    id: Number;
    message: Number;
    country: string;
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
  cod: string;
  message: string;
}

// STATE
export interface WeatherState {
  data: WeatherData | null;
  loading: boolean;
  error: string;
}

// ACTION type for weather
interface GetWeatherAction {
  type: typeof GET_WEATHER;
  payload: WeatherData;
}

interface SetLoadingAction {
  type: typeof SET_LOADING;
}

interface SetErrorAction {
  type: typeof SET_ERROR;
  payload: string;
}

// ACTION type for weather with type alias
export type WeatherAction =
  | GetWeatherAction
  | SetLoadingAction
  | SetErrorAction;

// ACTION type for alert
interface SetAlertAction {
  type: typeof SET_ALERT;
  payload: string;
}

interface ResetAlertAction {
  type: typeof RESET_ALERT;
}

// with type alias
export type AlertAction = SetAlertAction | ResetAlertAction;

export interface AlertState {
  message: string;
}
