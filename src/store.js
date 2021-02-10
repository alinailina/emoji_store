import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import emojiReducer from "./reducers/emojiReducer";
import searchReducer from "./reducers/searchReducer";
import cartReducer from "./reducers/cartReducer";
import filterReducer from "./reducers/filterReducer";

const reducers = combineReducers({
  emojis: emojiReducer,
  search: searchReducer,
  cart: cartReducer,
  filter: filterReducer,
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
