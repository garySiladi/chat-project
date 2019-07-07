import { LOG_IN, LOG_OUT, IUserState, UserActionTypes } from "./types";

const initialState: IUserState = {
  isLoggedIn: false
};

export function userReducer(
  state = initialState,
  action: UserActionTypes
): IUserState {
  switch (action.type) {
    case LOG_IN:
      return {
        isLoggedIn: true
      };
    case LOG_OUT:
      return {
        isLoggedIn: false
      };
    default:
      return state;
  }
}
