export interface ITherapyCategory {
  id: number;
  categoryName: string;
}

export const FETCH_CATEGORIES_BEGIN = "FETCH_CATEGORIES_BEGIN";
export const FETCH_CATEGORIES_SUCCESS = "FETCH_CATEGORIES_SUCCESS";
export const FETCH_CATEGORIES_FAILURE = "FETCH_CATEGORIES_FAILURE";

export interface IFetchCategoriesBegin {
  type: typeof FETCH_CATEGORIES_BEGIN;
}

export interface IFetchCategoriesSuccess {
  type: typeof FETCH_CATEGORIES_SUCCESS;
  payload: { categories: ITherapyCategory[] };
}

export interface IFetchCategoriesFailure {
  type: typeof FETCH_CATEGORIES_FAILURE;
  payload: { error: Error };
}

export type CategoriesActionTypes =
  | IFetchCategoriesBegin
  | IFetchCategoriesSuccess
  | IFetchCategoriesFailure;
