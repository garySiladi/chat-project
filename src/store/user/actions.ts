import { LOG_IN, LOG_OUT, IActionLogin, IActionLogout } from "./types";

export const logInAction = (): IActionLogin => ({
  type: LOG_IN
});

export const logOutAction = (): IActionLogout => ({
  type: LOG_OUT
});
