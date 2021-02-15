import emojiService from "../services/emojis";

const initialstate = {
  emojis: [],
  detailView: {},
};

const emojis = (state = initialstate, action) => {
  switch (action.type) {
    case "INIT_EMOJIS":
      const emojis = action.emojis.map((e) => ({
        ...e,
        inCart: false,
        count: 0,
      }));
      return {
        ...state,
        emojis: emojis,
      };

    case "SEE_DETAILS":
      const emoji = state.emojis.find((emoji) => emoji.slug === action.slug);
      console.log(emoji);
      return { ...state, detailView: emoji };

    case "ADD_TO_CART":
      const emojiToAdd = state.emojis.find((e) => e.slug === action.slug);
      const addedEmoji = {
        ...emojiToAdd,
        inCart: true,
        count: 1,
      };
      return {
        ...state,
        emojis: state.emojis.map((e) =>
          e.slug !== action.slug ? e : addedEmoji
        ),
      };

    case "REMOVE_FROM_CART":
      const emojiToRemove = state.emojis.find((e) => e.slug === action.slug);
      const removedEmoji = {
        ...emojiToRemove,
        inCart: false,
        count: 0,
      };
      return {
        ...state,
        emojis: state.emojis.map((e) =>
          e.slug !== action.slug ? e : removedEmoji
        ),
      };

    case "INCREMENT_COUNT":
      const emojiToIncrement = state.emojis.find((e) => e.slug === action.slug);
      const incrementedEmoji = {
        ...emojiToIncrement,
        count: ++emojiToIncrement.count,
      };

      return {
        ...state,
        emojis: state.emojis.map((e) =>
          e.slug !== action.slug ? e : incrementedEmoji
        ),
      };

    case "DECREMENT_COUNT":
      const emojiToDecrement = state.emojis.find((e) => e.slug === action.slug);
      const decrementedEmoji = {
        ...emojiToDecrement,
        count: --emojiToDecrement.count,
      };

      return {
        ...state,
        emojis: state.emojis.map((e) =>
          e.slug !== action.slug ? e : decrementedEmoji
        ),
      };

    default:
      return state;
  }
};

export const initEmojis = () => {
  return async (dispatch) => {
    const emojis = await emojiService.getAll();
    dispatch({
      type: "INIT_EMOJIS",
      emojis,
    });
  };
};

export const seeDetails = (slug) => {
  console.log(slug);
  return {
    type: "SEE_DETAILS",
    slug,
  };
};

export const addToCart = (slug) => {
  return {
    type: "ADD_TO_CART",
    slug,
  };
};

export const removeFromCart = (slug) => {
  return {
    type: "REMOVE_FROM_CART",
    slug,
  };
};

export const incrementCount = (slug) => {
  return {
    type: "INCREMENT_COUNT",
    slug,
  };
};

export const decrementCount = (slug) => {
  return {
    type: "DECREMENT_COUNT",
    slug,
  };
};

export default emojis;
