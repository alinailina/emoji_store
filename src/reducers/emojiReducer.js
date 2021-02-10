import emojiService from "../services/emojis";

const emojiReducer = (state = [], action) => {
  switch (action.type) {
    case "INIT_EMOJIS":
      return action.emojis;

    case "SEE_DETAILS":
      return action.emoji;

    default:
      return state;
  }
};

export const initializeEmojis = () => {
  return async (dispatch) => {
    const emojis = await emojiService.getAll();
    dispatch({
      type: "INIT_EMOJIS",
      emojis,
    });
  };
};

export const seeDetails = (slug) => {
  // console.log(slug);
  return async (dispatch) => {
    const emoji = await emojiService.getEmoji(slug);
    dispatch({
      type: "SEE_DETAILS",
      emoji,
    });
  };
};

export default emojiReducer;
