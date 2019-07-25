import { Dispatch } from "redux";
import { backendHostname } from "../../RoutesConfig";
import { normalizeTherapyCategoryData } from "../../utils/therapy";
import {
  ITherapyCategory,
  FETCH_CATEGORIES_BEGIN,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILURE
} from "./types";

export const initialTherapyCategory = { id: 999, categoryName: "Všetko" };

export const fetchCategoriesBegin = () => ({
  type: FETCH_CATEGORIES_BEGIN
});

export const fetchCategoriesSuccess = (categories: ITherapyCategory[]) => ({
  type: FETCH_CATEGORIES_SUCCESS,
  payload: { categories }
});

export const fetchCategoriesFailure = (error: Error) => ({
  type: FETCH_CATEGORIES_FAILURE,
  payload: { error }
});

export const fetchCategories = () => (dispatch: Dispatch) => {
  dispatch(fetchCategoriesBegin());
  return fetch(`${backendHostname.dev}/therapy_categories`)
    .then(response => response.json())
    .then(response =>
      dispatch(
        fetchCategoriesSuccess([
          initialTherapyCategory,
          ...response.map(normalizeTherapyCategoryData)
        ])
      )
    )
    .catch(error => dispatch(fetchCategoriesFailure(error)));
};
