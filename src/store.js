import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import emojis from "./reducers/emojis";
import search from "./reducers/search";
import filter from "./reducers/filter";

const reducers = combineReducers({
  emojis: emojis,
  search: search,
  filter: filter,
});

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

store.subscribe(() => {
  const storeNow = store.getState();
  console.log(storeNow);
});

export default store;
