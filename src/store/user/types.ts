export interface IUserState {
  isLoggedIn: boolean;
}

export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";

export interface IActionLogin {
  type: typeof LOG_IN;
}

export interface IActionLogout {
  type: typeof LOG_OUT;
}

export type UserActionTypes = IActionLogin | IActionLogout;
