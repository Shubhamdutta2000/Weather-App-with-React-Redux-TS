import { SET_ALERT, RESET_ALERT, AlertState, AlertAction } from "../types";

const initialState: AlertState = {
  message: "",
};

const alertReducer = (
  state = initialState,
  action: AlertAction
): AlertState => {
  switch (action.type) {
    case SET_ALERT:
      return { message: action.payload };

    case RESET_ALERT:
      return { message: "" };

    default:
      return state;
  }
};

export default alertReducer;
