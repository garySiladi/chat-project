import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userReducer } from "./user/reducers";
import { categoriesReducer } from "./therapyCategories/reducers";
import { articlesReducer } from "./articles/reducers";
import { therapiesReducer } from "./therapies/reducers";
import { scheduleReducer } from "./schedule/reducers";

const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
  articles: articlesReducer,
  therapies: therapiesReducer,
  schedule: scheduleReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export function configureStore() {
  const middlewares = [thunkMiddleware];
  const middleWareEnhancer = applyMiddleware(...middlewares);

  const store = createStore(
    rootReducer,
    composeWithDevTools(middleWareEnhancer)
  );

  return store;
}
