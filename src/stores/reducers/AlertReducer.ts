import { SET_ALERT, AlertState, AlertAction } from "../types";

const initialState: AlertState = {
  message: "",
};

export default (state = initialState, action: AlertAction): AlertState => {
  switch (action.type) {
    case SET_ALERT:
      return { message: action.payload };
      break;

    default:
      return state;
  }
};
