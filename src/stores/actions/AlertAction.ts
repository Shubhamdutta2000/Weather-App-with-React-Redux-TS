import { SET_ALERT, AlertAction, RESET_ALERT } from "../types";

// set alert action
export const setAlert = (message: string): AlertAction => {
  return {
    type: SET_ALERT,
    payload: message,
  };
};

// reset alert action
export const resetAlert = (): AlertAction => {
  return {
    type: RESET_ALERT,
  };
};
