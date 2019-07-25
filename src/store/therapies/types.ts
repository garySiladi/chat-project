import { ITherapy } from "../../utils/therapy";

export const FETCH_THERAPIES_BEGIN = "FETCH_THERAPIES_BEGIN";
export const FETCH_THERAPIES_SUCCESS = "FETCH_THERAPIES_SUCCESS";
export const FETCH_THERAPIES_FAILURE = "FETCH_THERAPIES_FAILURE";

export interface IFetchTherapiesBegin {
  type: typeof FETCH_THERAPIES_BEGIN;
}

export interface IFetchTherapiesSuccess {
  type: typeof FETCH_THERAPIES_SUCCESS;
  payload: { therapies: ITherapy[] };
}

export interface IFetchTherapiesFailure {
  type: typeof FETCH_THERAPIES_FAILURE;
  payload: { error: Error };
}

export type TherapiesActionTypes =
  | IFetchTherapiesBegin
  | IFetchTherapiesSuccess
  | IFetchTherapiesFailure;
