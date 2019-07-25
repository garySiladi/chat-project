import {
  FETCH_THERAPIES_BEGIN,
  FETCH_THERAPIES_SUCCESS,
  FETCH_THERAPIES_FAILURE,
  TherapiesActionTypes
} from "./types";
import { ITherapy } from "../../utils/therapy";

export interface ITherapiesStateType {
  items: ITherapy[] | [];
  loading: boolean;
  error: Error | null;
}

const initialState = {
  items: [],
  loading: false,
  error: null
};

export function therapiesReducer(
  state = initialState,
  action: TherapiesActionTypes
): any {
  switch (action.type) {
    case FETCH_THERAPIES_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_THERAPIES_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload.therapies
      };
    case FETCH_THERAPIES_FAILURE:
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
