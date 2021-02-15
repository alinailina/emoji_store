import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
// import emojiService from "./services/emojis";
import { initEmojis } from "./reducers/emojis";

import Navbar from "./components/Navbar";

import ScrollToTop from "./components/ScrollToTop";
import BackToTop from "./components/BackToTop";
import DetailView from "./components/DetailView";
import Emojis from "./components/Emojis";
import Cart from "./components/Cart";

import ThemeProvider from "./contexts/ThemeContext";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initEmojis());
  }, [dispatch]);

  return (
    <ThemeProvider>
      <div className="App">
        <ScrollToTop />
        <Navbar />
        <Switch>
          <Route exact path="/" component={Emojis} />{" "}
          <Route path="/cart" component={Cart} />{" "}
          <Route path="/:name" component={DetailView} />
        </Switch>
        <BackToTop />
      </div>
    </ThemeProvider>
  );
}

export default App;
