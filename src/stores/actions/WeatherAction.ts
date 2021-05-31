import { ThunkAction } from "redux-thunk";
import {
  GET_WEATHER,
  SET_LOADING,
  SET_ERROR,
  WeatherData,
  WeatherError,
  WeatherAction,
} from "../types";

import { RootState } from "../index";

/*
    Thunk Action:  Thunk has a built in ThunkAction type 
    It has 4 arguements:
        1. TReturnType
            - return type of thunk
            - assign void signature as we're not waiting for the result of the thunk anyway
        2. TState 
            - this is the whole store state type
        3. TExtraThunkARg 
            - add your own custom extra argument that gets passed into the thunk after dispatch and getState
            - defaults to unknown
        4. TBasicAction
            - Action type
            - provide your own more specific types
*/

// get weather details from api actionCreator
export const getWeather =
  (city: string): ThunkAction<void, RootState, null, WeatherAction> =>
  async (dispatch) => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}`
      );

      if (!res.ok) {
        const resData: WeatherError = await res.json();
        throw new Error(resData.message);
      }

      const resData: WeatherData = await res.json();
      console.log(resData);

      // dispatch weather action
      dispatch({
        type: GET_WEATHER,
        payload: resData,
      });
    } catch (error) {
      dispatch({
        type: SET_ERROR,
        payload: error.message,
      });
    }
  };

// loading action
export const setLoading = (): WeatherAction => {
  return {
    type: SET_LOADING,
  };
};

// Reset Error action
export const resetError = (): WeatherAction => {
  return {
    type: SET_ERROR,
    payload: "",
  };
};
