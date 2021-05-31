import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

// reducers
import WeatherReducer from "./reducers/WeatherReducer";
import AlertReducer from "./reducers/AlertReducer";

const reducers = combineReducers({
  weather: WeatherReducer,
  alert: AlertReducer,
});

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

// get the return type of reducers
export type RootState = ReturnType<typeof reducers>;

export default store;
