import {
  FETCH_CATEGORIES_BEGIN,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILURE,
  CategoriesActionTypes,
  ITherapyCategory
} from "./types";

export interface ITherapyCategoriesStateType {
  items: ITherapyCategory[] | [];
  loading: boolean;
  error: Error | null;
}

const initialState = {
  items: [],
  loading: false,
  error: null
};

export function categoriesReducer(
  state = initialState,
  action: CategoriesActionTypes
): any {
  switch (action.type) {
    case FETCH_CATEGORIES_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload.categories
      };
    case FETCH_CATEGORIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: []
      };
    default:
      return state;
  }
}
