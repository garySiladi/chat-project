import { Dispatch } from "redux";
import { backendHostname } from "../../RoutesConfig";
import { IArticle, normalizeArticleData } from "../../utils/article";
import {
  FETCH_ARTICLES_BEGIN,
  FETCH_ARTICLES_SUCCESS,
  FETCH_ARTICLES_FAILURE
} from "./types";

export const fetchArticlesBegin = () => ({
  type: FETCH_ARTICLES_BEGIN
});

export const fetchArticlesSuccess = (articles: IArticle[]) => ({
  type: FETCH_ARTICLES_SUCCESS,
  payload: { articles }
});

export const fetchArticlesFailure = (error: Error) => ({
  type: FETCH_ARTICLES_FAILURE,
  payload: { error }
});

export const fetchArticles = (page = "1", limit = "10") => (
  dispatch: Dispatch
) => {
  dispatch(fetchArticlesBegin());
  return fetch(`${backendHostname.dev}/articles?_page=${page}&_limit=${limit}`)
    .then(response => response.json())
    .then(response =>
      dispatch(fetchArticlesSuccess(response.map(normalizeArticleData)))
    )
    .catch(error => dispatch(fetchArticlesFailure(error)));
};
