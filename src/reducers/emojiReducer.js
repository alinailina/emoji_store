const emojiReducer = (state = [], action) => {
  switch (action.type) {
    case "INIT_EMOJIS":
      console.log(action.emojis);
      return action.emojis;

    default:
      return state;
  }
};

export const initializeEmojis = (emojis) => {
  console.log(emojis);
  return {
    type: "INIT_EMOJIS",
    emojis,
  };
};

export default emojiReducer;
