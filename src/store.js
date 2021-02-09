import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import emojiReducer from "./reducers/emojiReducer";
import filterReducer from "./reducers/filterReducer";

const reducers = combineReducers({
  emojis: emojiReducer,
  filter: filterReducer,
});

const store = createStore(reducers, composeWithDevTools());

store.subscribe(() => {
  const storeNow = store.getState();
  console.log(storeNow);
});

export default store;
