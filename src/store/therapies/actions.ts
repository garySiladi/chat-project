import { Dispatch } from "redux";
import { backendHostname } from "../../RoutesConfig";
import { ITherapy, normalizeTherapyData } from "../../utils/therapy";
import {
  FETCH_THERAPIES_BEGIN,
  FETCH_THERAPIES_SUCCESS,
  FETCH_THERAPIES_FAILURE
} from "./types";

export const fetchTherapiesBegin = () => ({
  type: FETCH_THERAPIES_BEGIN
});

export const fetchTherapiesSuccess = (therapies: ITherapy[]) => ({
  type: FETCH_THERAPIES_SUCCESS,
  payload: { therapies }
});

export const fetchTherapiesFailure = (error: Error) => ({
  type: FETCH_THERAPIES_FAILURE,
  payload: { error }
});

export const fetchTherapies = (page = "1", limit = "12") => (
  dispatch: Dispatch
) => {
  dispatch(fetchTherapiesBegin());
  return fetch(`${backendHostname.dev}/therapies?_page=${page}&_limit=${limit}`)
    .then(response => response.json())
    .then(response =>
      dispatch(fetchTherapiesSuccess(response.map(normalizeTherapyData)))
    )
    .catch(error => dispatch(fetchTherapiesFailure(error)));
};
