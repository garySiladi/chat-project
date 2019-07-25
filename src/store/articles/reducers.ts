import {
  FETCH_ARTICLES_BEGIN,
  FETCH_ARTICLES_SUCCESS,
  FETCH_ARTICLES_FAILURE,
  ArticlesActionTypes
} from "./types";
import { IArticle } from "src/utils/article";

export interface IArticlesStateType {
  items: IArticle[] | [];
  loading: boolean;
  error: Error | null;
}

const initialState: IArticlesStateType = {
  items: [],
  loading: false,
  error: null
};

export function articlesReducer(
  state = initialState,
  action: ArticlesActionTypes
): any {
  switch (action.type) {
    case FETCH_ARTICLES_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_ARTICLES_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload.articles
      };
    case FETCH_ARTICLES_FAILURE:
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
