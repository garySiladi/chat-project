import { IArticle } from "../../utils/article";

export const FETCH_ARTICLES_BEGIN = "FETCH_ARTICLES_BEGIN";
export const FETCH_ARTICLES_SUCCESS = "FETCH_ARTICLES_SUCCESS";
export const FETCH_ARTICLES_FAILURE = "FETCH_ARTICLES_FAILURE";

export interface IFetchArticlesBegin {
  type: typeof FETCH_ARTICLES_BEGIN;
}

export interface IFetchArticlesSuccess {
  type: typeof FETCH_ARTICLES_SUCCESS;
  payload: { articles: IArticle[] };
}

export interface IFetchArticlesFailure {
  type: typeof FETCH_ARTICLES_FAILURE;
  payload: { error: Error };
}

export type ArticlesActionTypes =
  | IFetchArticlesBegin
  | IFetchArticlesSuccess
  | IFetchArticlesFailure;
