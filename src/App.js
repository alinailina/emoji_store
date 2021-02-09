import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import emojiService from "./services/emojis";
import { initializeEmojis } from "./reducers/emojiReducer";

import Navbar from "./components/Navbar";
import Emojis from "./components/Emojis";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    emojiService.getAll().then((emojis) => dispatch(initializeEmojis(emojis)));
  }, [dispatch]);

  return (
    <div className="App">
      <Navbar />
      <Emojis />
    </div>
  );
}

export default App;
