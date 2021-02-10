import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
// import emojiService from "./services/emojis";
import { initializeEmojis } from "./reducers/emojiReducer";

import Navbar from "./components/Navbar";
import Details from "./components/Details";
import Emojis from "./components/Emojis";
import Cart from "./components/Cart";

function App() {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   emojiService.getAll().then((emojis) => dispatch(initializeEmojis(emojis)));
  // }, [dispatch]);

  useEffect(() => {
    dispatch(initializeEmojis());
  }, [dispatch]);

  return (
    <div className="App">
      <Navbar />

      <Switch>
        <Route exact path="/" component={Emojis} />
        <Route path="/details" component={Details} />
        <Route path="/cart" component={Cart} />
      </Switch>
    </div>
  );
}

export default App;
